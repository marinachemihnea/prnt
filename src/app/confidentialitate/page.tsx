import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { CookieSettingsLink } from "@/components/cookie-settings-link";

export const metadata: Metadata = {
  title: "Politica de confidențialitate — PRNT",
  description:
    "Cum prelucrează PRNT datele personale trimise prin formularul de contact, în conformitate cu GDPR.",
};

const cookiebotId = process.env.COOKIEBOT_ID;

export default function ConfidentialitatePage() {
  return (
    <main className="min-h-screen bg-cream">
      <article className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-[0.12em] text-primary hover:underline"
        >
          Înapoi la pagina principală
        </Link>
        <h1 className="mt-8 font-display text-3xl font-extrabold leading-tight md:text-4xl">
          Politica de confidențialitate
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Ultima actualizare: 29 august 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground">
          <section>
            <h2 className="font-display text-lg font-bold text-primary">
              1. Operatorul de date
            </h2>
            <p className="mt-3">
              Datele personale transmise prin acest site sunt prelucrate de{" "}
              <strong>PRNT</strong> („noi”), în calitate de operator.
            </p>
            <p className="mt-2">
              Contact:{" "}
              <a
                href="mailto:contact@prnt.ro"
                className="font-medium text-primary hover:underline"
              >
                contact@prnt.ro
              </a>
              , telefon{" "}
              <a
                href="tel:+40774901179"
                className="font-medium text-primary hover:underline"
              >
                +40 774 901 179
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-primary">
              2. Ce date prelucrăm
            </h2>
            <p className="mt-3">
              Folosim site-ul pentru prezentarea serviciilor și pentru un
              formular de contact. Prin formular putem primi:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>nume</strong> (obligatoriu);
              </li>
              <li>
                <strong>adresă de e-mail</strong> (obligatorie);
              </li>
              <li>
                <strong>număr de telefon</strong> (opțional);
              </li>
              <li>
                <strong>mesajul</strong> pe care ni-l transmiți (obligatoriu);
              </li>
              <li>
                date tehnice minime legate de trimitere și de verificarea
                anti-spam (hCaptcha), de exemplu tokenul de verificare.
              </li>
            </ul>
            <p className="mt-3">
              Nu cerem date din categorii speciale (sănătate, origine etnică
              etc.). Te rugăm să nu incluzi astfel de informații în mesaj.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-primary">
              3. Scop și temei legal
            </h2>
            <p className="mt-3">
              Prelucrăm datele pentru a-ți răspunde, a discuta proiectul și a
              formula o ofertă, la cererea ta — pași precontractuali. Temeiul
              este art. 6 alin. (1) lit. (b) din Regulamentul (UE) 2016/679
              (GDPR).
            </p>
            <p className="mt-2">
              Nu folosim datele din formular pentru newsletter, publicitate sau
              profilare. Dacă în viitor am dori marketing, ți-am cere un
              consimțământ separat.
            </p>
            <p className="mt-2">
              Cookie-urile care nu sunt strict necesare se bazează pe
              consimțământ (art. 6 alin. (1) lit. (a) GDPR), gestionat prin
              bannerul Cookiebot. Poți modifica opțiunile oricând:{" "}
              <CookieSettingsLink className="font-medium text-primary hover:underline" />
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-primary">
              4. Destinatari
            </h2>
            <p className="mt-3">
              Mesajul este livrat prin <strong>Web3Forms</strong> (procesator
              care transmite solicitarea către noi). Protecția anti-spam folosește{" "}
              <strong>hCaptcha</strong> (Intuition Machines). Consimțământul
              pentru cookie-uri este gestionat de <strong>Cookiebot</strong>{" "}
              (Usercentrics).
            </p>
            <p className="mt-2">
              Acești furnizori acționează doar pentru funcțiile de mai sus, nu
              pentru a-ți vinde datele.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-primary">
              5. Transferuri în afara SEE
            </h2>
            <p className="mt-3">
              Web3Forms și hCaptcha pot prelucra date pe servere din afara
              Spațiului Economic European. În aceste cazuri se bazează pe
              garanții recunoscute de GDPR (de exemplu clauze contractuale
              standard) și pe politicile lor de confidențialitate, disponibile
              public.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-primary">
              6. Durata păstrării
            </h2>
            <p className="mt-3">
              Păstrăm mesajele cât este necesar pentru a răspunde și a gestiona
              cererea (inclusiv o eventuală comandă sau discuție de ofertă).
              După încheierea scopului, datele sunt șterse sau arhivate doar
              dacă legea ne obligă (de exemplu evidențe contabile, dacă apare un
              contract).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-primary">
              7. Drepturile tale
            </h2>
            <p className="mt-3">
              Ai dreptul de acces, rectificare, ștergere, restricționare a
              prelucrării, opoziție și portabilitate, în condițiile GDPR. Pentru
              exercitare, scrie-ne la{" "}
              <a
                href="mailto:contact@prnt.ro"
                className="font-medium text-primary hover:underline"
              >
                contact@prnt.ro
              </a>
              .
            </p>
            <p className="mt-2">
              Ai și dreptul de a depune o plângere la Autoritatea Națională de
              Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP):{" "}
              <a
                href="https://www.dataprotection.ro"
                className="font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.dataprotection.ro
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-primary">
              8. Cookie-uri
            </h2>
            <p className="mt-3">
              Site-ul folosește Cookiebot pentru a-ți cere acordul înainte de
              cookie-uri care nu sunt necesare funcționării. Detaliile (tipuri,
              durată, furnizori) apar în declarația de mai jos, când
              configurația Cookiebot este activă.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
