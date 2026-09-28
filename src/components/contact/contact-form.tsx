"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import {
  audiences,
  contactSchema,
  enquiryTopics,
  normalizeContactInput,
  type Audience,
  type ContactInput,
} from "@/lib/contact-schema";
import { contact } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const controlClass =
  "w-full rounded-[var(--radius-field)] border border-hairline-strong bg-page px-3.5 py-3 text-base text-ink transition-colors duration-200 placeholder:text-muted hover:border-accent-core/60 focus:border-accent-core focus:outline-none";

export function ContactForm({ defaultAudience = audiences[0] }: { defaultAudience?: Audience }) {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: standardSchemaResolver(contactSchema),
    defaultValues: { audience: defaultAudience, topic: "Not sure yet" },
  });

  async function onSubmit(values: ContactInput) {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(normalizeContactInput(values)),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok) {
        setServerError(data.error ?? "Something went wrong. Please email us directly.");
        return;
      }
      setSent(true);
    } catch {
      setServerError(`We could not reach the server. Please email ${contact.email} directly.`);
    }
  }

  if (sent) {
    return (
      <div
        role="status"
        className="border-hairline bg-surface rounded-[var(--radius-card)] border p-8"
      >
        <h2 className="text-h3 font-semibold">Thanks.</h2>
        <p className="text-muted mt-3 max-w-[48ch] text-base">
          We&rsquo;ll be in touch {contact.responseTime}.
        </p>
        {contact.bookingUrl ? (
          <Button href={contact.bookingUrl} variant="secondary" size="sm" className="mt-5">
            Want to skip the wait? Book a call now
          </Button>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <fieldset className="flex flex-col gap-2">
        <legend className="text-label text-muted font-label mb-2 tracking-[0.14em] uppercase">
          I am
        </legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {audiences.map((audience) => (
            <label
              key={audience}
              className="border-hairline-strong has-[:checked]:border-accent-core has-[:checked]:bg-accent-wash flex cursor-pointer items-center gap-3 rounded-[var(--radius-field)] border px-3.5 py-3 text-base transition-colors duration-200"
            >
              <input
                type="radio"
                value={audience}
                className="accent-[var(--accent-core)]"
                {...register("audience")}
              />
              {audience}
            </label>
          ))}
        </div>
        {errors.audience?.message ? (
          <p role="alert" className="text-accent text-sm">
            {errors.audience.message}
          </p>
        ) : null}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name?.message}>
          <input id="name" autoComplete="name" className={controlClass} {...register("name")} />
        </Field>

        <Field label="Work email" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={controlClass}
            {...register("email")}
          />
        </Field>

        <Field label="Company" htmlFor="company" error={errors.company?.message}>
          <input
            id="company"
            autoComplete="organization"
            className={controlClass}
            {...register("company")}
          />
        </Field>

        <Field label="Country" htmlFor="country" error={errors.country?.message}>
          <input
            id="country"
            autoComplete="country-name"
            className={controlClass}
            {...register("country")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="What do you need?" htmlFor="topic" error={errors.topic?.message}>
          <select id="topic" className={controlClass} {...register("topic")}>
            {enquiryTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Phone" htmlFor="phone" optional error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={controlClass}
            {...register("phone")}
          />
        </Field>
      </div>

      <Field
        label="Tell us a bit about it"
        htmlFor="message"
        optional
        error={errors.message?.message}
      >
        <textarea
          id="message"
          rows={5}
          placeholder="How does the work run today, and what's getting in the way?"
          className={cn(controlClass, "resize-y")}
          {...register("message")}
        />
      </Field>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {serverError ? (
        <p
          role="alert"
          className="border-hairline-strong bg-accent-wash rounded-[var(--radius-field)] border px-4 py-3 text-sm"
        >
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send"}
        </Button>
        <p className="text-muted text-sm">We reply {contact.responseTime}.</p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-label text-muted font-label flex items-center gap-2 tracking-[0.14em] uppercase"
      >
        {label}
        {optional ? <span className="normal-case">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-accent text-sm">
          {error}
        </p>
      ) : null}
    </div>
  );
}
