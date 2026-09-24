import { NextResponse } from "next/server";
import { contactSchema, fieldErrors, normalizeContactInput } from "@/lib/contact-schema";
import { contact, site } from "@/content/site";

/**
 * In-memory fixed-window limiter. Adequate for a marketing site on a single
 * region; it resets on cold start and does not coordinate across instances, so
 * if this ever needs to be a real guarantee it should move to Upstash or
 * Vercel KV rather than be trusted as-is.
 */
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages from this address. Try again later, or email us directly." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(
    normalizeContactInput((body ?? {}) as Record<string, unknown>),
  );
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Some fields need fixing.", issues: fieldErrors(parsed.error) },
      { status: 400 },
    );
  }

  // Honeypot: accept silently so the bot learns nothing from the response.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, company, topic, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  // Comma-separated, so the whole team can be notified: "a@x.com, b@x.com".
  const to = (process.env.CONTACT_TO_EMAIL ?? contact.email)
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    /**
     * Never pretend a message was delivered. Until email is configured the
     * submission is logged and the sender is told plainly to use email, rather
     * than shown a success screen for a message that went nowhere.
     */
    console.warn(
      `[contact] Email transport not configured — submission not delivered:\n` +
        `  from: ${name} <${email}> ${phone}${company ? ` (${company})` : ""}\n` +
        `  topic: ${topic}\n  message: ${message}`,
    );
    return NextResponse.json(
      {
        error: `Our contact form is not connected yet. Please email ${contact.email} directly — it reaches the same people.`,
      },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `${site.name} enquiry — ${topic} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        company ? `Company: ${company}` : null,
        `Topic: ${topic}`,
        "",
        message || "(No message — call or email them back.)",
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  if (!response.ok) {
    console.error(`[contact] Resend responded ${response.status}: ${await response.text()}`);
    return NextResponse.json(
      { error: `We could not send that. Please email ${contact.email} directly.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
