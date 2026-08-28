"use client";

import { useActionState } from "react";

import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { ok: false, message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-3">
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          aria-label="Nume"
          name="name"
          placeholder="Nume"
          required
          className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
        />
        <input
          aria-label="Email"
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>
      <input
        aria-label="Telefon"
        name="phone"
        type="tel"
        placeholder="Telefon"
        className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
      />
      <textarea
        aria-label="Mesaj"
        name="message"
        placeholder="Mesaj"
        rows={5}
        required
        className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-sm bg-primary px-6 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {pending ? "Se trimite…" : "Trimite mesaj"}
      </button>
      {state.message ? (
        <p
          role="status"
          className={`text-sm ${state.ok ? "text-primary" : "text-destructive"}`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
