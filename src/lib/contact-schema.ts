import * as z from "zod/mini";

export const enquiryTopics = [
  "AI automation",
  "Website or store",
  "Internal software",
  "Not sure yet",
] as const;

/** Splits businesses from agencies, so we know how to reply before the call. */
export const audiences = ["Business looking to build", "Agency with a client project"] as const;

export type Audience = (typeof audiences)[number];

/**
 * Shared by the form and the API route, so client and server can never disagree
 * about what a valid submission is.
 *
 * Written against `zod/mini` rather than the full build: this schema is the
 * only reason zod reaches the browser at all, and the contact page is the last
 * place a site arguing that it builds fast software should ship weight it does
 * not need.
 */
export const contactSchema = z.object({
  name: z.string().check(z.minLength(2, "Tell us your name."), z.maxLength(100)),
  email: z.string().check(z.email("That does not look like an email address."), z.maxLength(200)),
  company: z.string().check(z.minLength(1, "Tell us your company name."), z.maxLength(120)),
  country: z.string().check(z.minLength(2, "Tell us where you are based."), z.maxLength(80)),
  audience: z.enum(audiences, "Pick one."),
  topic: z.enum(enquiryTopics, "Pick the closest one."),
  /** Optional; an empty field is allowed, a malformed number is not. */
  phone: z.optional(
    z.union([
      z.literal(""),
      z
        .string()
        .check(
          z.regex(
            /^\+?[0-9\s\-()]{7,20}$/,
            "Enter a phone number we can call, e.g. +1 415 555 0100.",
          ),
        ),
    ]),
  ),
  message: z.optional(
    z
      .string()
      .check(
        z.maxLength(4000, "That is longer than we can accept — send the detail by email instead."),
      ),
  ),
  /** Honeypot. Real people never see this field, so anything in it is a bot. */
  website: z.optional(z.string().check(z.maxLength(0))),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Trimming lives here rather than in the schema so both sides apply it identically. */
export function normalizeContactInput(input: Record<string, unknown>) {
  const trim = (value: unknown) => (typeof value === "string" ? value.trim() : value);
  return {
    ...input,
    name: trim(input.name),
    email: trim(input.email),
    phone: trim(input.phone),
    company: trim(input.company),
    country: trim(input.country),
    message: trim(input.message),
  };
}

export function fieldErrors(error: z.core.$ZodError) {
  return z.flattenError(error).fieldErrors;
}
