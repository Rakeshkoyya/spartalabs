import * as z from "zod/mini";

export const enquiryTopics = [
  "Custom platform",
  "Web & digital presence",
  "Mobile application",
  "AI & intelligent systems",
  "Brand & concept development",
  "Support for an existing system",
  "Something else",
] as const;

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
  company: z.optional(z.string().check(z.maxLength(120))),
  topic: z.enum(enquiryTopics, "Pick the closest one."),
  message: z
    .string()
    .check(
      z.minLength(20, "A sentence or two about the problem is enough."),
      z.maxLength(4000, "That is longer than we can accept — send the detail by email instead."),
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
    company: trim(input.company),
    message: trim(input.message),
  };
}

export function fieldErrors(error: z.core.$ZodError) {
  return z.flattenError(error).fieldErrors;
}
