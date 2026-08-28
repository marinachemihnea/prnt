"use client";

import { FormEvent, useState } from "react";

type ContactState = {
  ok: boolean;
  message: string;
};

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [state, setState] = useState<ContactState>({ ok: false, message: "" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setPending(true);
    setState({ ok: false, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          botcheck: Boolean(formData.get("botcheck")),
        }),
      });

      const data = (await response.json().catch(() => null)) as ContactState | null;
      const nextState = data ?? {
        ok: false,
        message: "A apărut o eroare. Încearcă din nou.",
      };
      setState(nextState);
      if (nextState.ok) {
        form.reset();
      }
    } catch {
      setState({
        ok: false,
        message: "A apărut o eroare. Încearcă din nou.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
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
