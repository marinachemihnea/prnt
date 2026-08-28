"use client";

import Script from "next/script";
import { FormEvent, useEffect, useRef, useState } from "react";

const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

type ContactState = {
  ok: boolean;
  message: string;
};

type HCaptchaApi = {
  render: (
    container: HTMLElement,
    opts: {
      sitekey: string;
      callback?: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    hcaptcha?: HCaptchaApi;
  }
}

export function ContactForm({ accessKey }: { accessKey: string }) {
  const [pending, setPending] = useState(false);
  const [state, setState] = useState<ContactState>({ ok: false, message: "" });
  const [captchaToken, setCaptchaToken] = useState("");
  const [scriptReady, setScriptReady] = useState(false);
  const captchaHostRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const host = captchaHostRef.current;
    if (!scriptReady || !host || !window.hcaptcha || widgetIdRef.current) return;

    widgetIdRef.current = window.hcaptcha.render(host, {
      sitekey: HCAPTCHA_SITEKEY,
      callback: (token) => setCaptchaToken(token),
      "expired-callback": () => setCaptchaToken(""),
      "error-callback": () => setCaptchaToken(""),
    });

    return () => {
      if (widgetIdRef.current && window.hcaptcha?.remove) {
        window.hcaptcha.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [scriptReady]);

  function resetCaptcha() {
    setCaptchaToken("");
    if (widgetIdRef.current && window.hcaptcha) {
      window.hcaptcha.reset(widgetIdRef.current);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setPending(true);
    setState({ ok: false, message: "" });

    if (!accessKey) {
      setPending(false);
      setState({
        ok: false,
        message: "Formularul nu este configurat. Încearcă mai târziu.",
      });
      return;
    }

    if (!captchaToken) {
      setPending(false);
      setState({
        ok: false,
        message: "Completează verificarea captcha.",
      });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: String(formData.get("name") ?? "").trim(),
          email: String(formData.get("email") ?? "").trim(),
          phone: String(formData.get("phone") ?? "").trim(),
          message: String(formData.get("message") ?? "").trim(),
          subject: `Mesaj nou de pe PRNT — ${String(formData.get("name") ?? "").trim()}`,
          from_name: "PRNT",
          botcheck: Boolean(formData.get("botcheck")),
          "h-captcha-response": captchaToken,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (response.ok && data?.success) {
        form.reset();
        resetCaptcha();
        setState({
          ok: true,
          message: "Mesajul a fost trimis. Te contactăm în curând.",
        });
      } else {
        resetCaptcha();
        setState({
          ok: false,
          message: data?.message || "A apărut o eroare. Încearcă din nou.",
        });
      }
    } catch {
      resetCaptcha();
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
      <Script
        src="https://js.hcaptcha.com/1/api.js?render=explicit"
        strategy="afterInteractive"
        data-cookieconsent="ignore"
        onReady={() => setScriptReady(true)}
      />
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
      <div ref={captchaHostRef} className="min-h-[78px]" />
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
