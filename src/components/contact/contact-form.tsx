"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import {
  contactSchema,
  enquiryTopics,
  normalizeContactInput,
  type ContactInput,
} from "@/lib/contact-schema";
import { contact } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const controlClass =
  "w-full rounded-[var(--radius-control)] border border-hairline-strong bg-page px-3.5 py-3 text-base text-ink transition-colors duration-200 placeholder:text-muted hover:border-accent-core/60 focus:border-accent-core focus:outline-none";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: standardSchemaResolver(contactSchema),
    defaultValues: { topic: "Custom platform" },
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
        <h2 className="text-h3 font-semibold">Message received.</h2>
        <p className="text-muted mt-3 max-w-[48ch] text-base">
          We reply {contact.responseTime}. If it is urgent before then, email{" "}
          <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
            {contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <Field label="Your name" htmlFor="name" error={errors.name?.message}>
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

      <Field label="Company" htmlFor="company" optional error={errors.company?.message}>
        <input
          id="company"
          autoComplete="organization"
          className={controlClass}
          {...register("company")}
        />
      </Field>

      <Field label="What do you need?" htmlFor="topic" error={errors.topic?.message}>
        <select id="topic" className={controlClass} {...register("topic")}>
          {enquiryTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </Field>

      <Field label="The problem" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={6}
          placeholder="What is not working today, and what would good look like?"
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
          className="border-hairline-strong bg-accent-wash rounded-[var(--radius-control)] border px-4 py-3 text-sm"
        >
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send it"}
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
        className="text-label text-muted flex items-center gap-2 font-mono tracking-[0.14em] uppercase"
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
