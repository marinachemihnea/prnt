import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Briefcase,
  Box,
  FileText,
  Handshake,
  Heart,
  Home,
  Info,
  Instagram,
  Facebook,
  Landmark,
  Leaf,
  MessageCircle,
  Palette,
  Search,
  Shield,
  ShirtIcon,
  ShoppingBag,
  Sparkles,
  Star,
  Tag,
  Truck,
  User,
  Users,
} from "lucide-react";

import imgRiveSoft from "@/assets/rivesoft/logo.png"
import imgLogo from "@/assets/logo.png"

import hero from "@/assets/hero.png";
import audPersoane from "@/assets/aud-persoane.jpg";
import audCompanii from "@/assets/aud-companii.jpg";
import audInstitutii from "@/assets/aud-institutii.jpg";
import prodTricouri from "@/assets/clothes/tshirt.png";
import prodHanorace from "@/assets/clothes/hoodie.png";
import prodPolo from "@/assets/clothes/tshirt-polo.png";
import prodSepci from "@/assets/clothes/cap.png";
import prodGenti from "@/assets/clothes/bag.png";
import prodEchipamente from "@/assets/clothes/jacket.png";
import dtf from "@/assets/dtf-printing.jpg";
import fabrics from "@/assets/fabric-rolls.jpg";
import contactMockup from "@/assets/formular.png";
import separatorPRNT from "@/assets/separatorPRNT.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PRNT — Materiale textile personalizate pentru orice nevoie",
  description:
    "Tricouri, hanorace, polo, șepci, genți și echipamente de lucru personalizate prin imprimare DTF. Pentru persoane fizice, companii și instituții publice.",
  openGraph: {
    title: "PRNT — Materiale textile personalizate",
    description:
      "Printuri românești pentru nevoile tuturor. Cere oferta pentru proiectul tău textil.",
  },
};

const benefits = [
  {
    icon: ShirtIcon,
    title: "Produse de calitate",
    text: "Colaborăm cu producători de încredere pentru materiale premium.",
  },
  {
    icon: Palette,
    title: "Personalizare completă",
    text: "Alegem împreună culorile, materialele și detaliile care reprezintă brandul tău.",
  },
  {
    icon: Tag,
    title: "Prețuri corecte",
    text: "Negociem cele mai bune condiții pentru bugetul și cantitatea ta.",
  },
  {
    icon: Handshake,
    title: "Parteneriat pe termen lung",
    text: "Ne pasă de clienții noștri și construim relații bazate pe încredere.",
  },
  {
    icon: Truck,
    title: "Livrare la timp",
    text: "Respectăm termenele și ne asigurăm că totul ajunge în siguranță.",
  },
  {
    icon: Leaf,
    title: "Soluții sustenabile",
    text: "Promovăm materiale durabile și producție responsabilă față de mediu.",
  },
];

const audiences = [
  {
    img: audPersoane,
    icon: User,
    title: "Persoane fizice",
    text: "Pentru ideile tale, pasiunile tale, evenimentele tale.",
  },
  {
    img: audCompanii,
    icon: Briefcase,
    title: "Companii",
    text: "Pentru echipa ta, brandul tău, clienții tăi și campaniile tale.",
  },
  {
    img: audInstitutii,
    icon: Landmark,
    title: "Instituții publice",
    text: "Pentru proiecte, evenimente, programe și campanii.",
  },
];

const products = [
  { img: prodTricouri, name: "Tricouri" },
  { img: prodHanorace, name: "Hanorace" },
  { img: prodPolo, name: "Polo" },
  { img: prodSepci, name: "Șepci" },
  { img: prodGenti, name: "Genți textile" },
  { img: prodEchipamente, name: "Echipamente de lucru" },
];

const steps = [
  {
    icon: MessageCircle,
    n: "1",
    title: "Ne contactezi",
    text: "Ne spui ce ai nevoie.",
  },
  {
    icon: Search,
    n: "2",
    title: "Discutăm proiectul",
    text: "Stabilim toate detaliile.",
  },
  {
    icon: FileText,
    n: "3",
    title: "Primești oferta",
    text: "Îți trimitem oferta personalizată.",
  },
  {
    icon: ShirtIcon,
    n: "4",
    title: "Imprimăm",
    text: "Realizăm imprimarea la calitate înaltă.",
  },
  { icon: Box, n: "5", title: "Livrăm", text: "Primești comanda la timp." },
];

const values = [
  {
    icon: Star,
    title: "Experiență",
    text: "Cunoaștem piața și știm cum să găsim cele mai bune soluții.",
  },
  {
    icon: Users,
    title: "Dedicare",
    text: "Fiecare proiect este important, indiferent de mărime.",
  },
  {
    icon: Shield,
    title: "Transparență",
    text: "Comunicăm clar și corect la fiecare pas.",
  },
  {
    icon: Heart,
    title: "Pasiune",
    text: "Suntem pasionați de ceea ce facem și se vede în fiecare proiect.",
  },
  {
    icon: Award,
    title: "Producție românească",
    text: "Susținem producția locală și colaborăm cu parteneri din România.",
  },
];

function IconPrintSmall({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 3v3H2M19 3v3h3M2 19h3v3M19 21v-3h3" />
      <rect x="7" y="7" width="10" height="10" rx="0.5" />
    </svg>
  );
}

function IconPrintMedium({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="8" width="16" height="8" rx="0.5" />
      <path d="M8 12H3m0 0 2-2M3 12l2 2M16 12h5m0 0-2-2m2 2-2 2" />
    </svg>
  );
}

function IconPrintStandard({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="3" width="8" height="18" rx="0.5" />
      <path d="M12 8V3m0 0-2 2M12 3l2 2M12 16v5m0 0-2-2m2 2 2-2" />
    </svg>
  );
}

function IconPrintLarge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="7" y="7" width="10" height="10" rx="0.5" />
      <path d="M7 7 3 3m0 0h4M3 3v4M17 7l4-4m0 0h-4m4 0v4M7 17l-4 4m0 0h4M3 21v-4M17 17l4 4m0 0h-4m4 0v-4" />
    </svg>
  );
}

function IconHoodie({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.2 9.4C6.6 4.4 17.4 4.4 16.8 9.4" />
      <path d="M8.4 9.6C9.6 12.6 14.4 12.6 15.6 9.6" />
      <path d="M11.15 12.1v2.6M12.85 12.1v2.6" />
      <path d="M8.2 10.2v9.4c0 .8.6 1.4 1.4 1.4h4.8c.8 0 1.4-.6 1.4-1.4v-9.4" />
      <path d="M8.2 10.4C5.4 10.8 4 12 4 13.4V21h2.4v-7.2" />
      <path d="M15.8 10.4C18.6 10.8 20 12 20 13.4V21h-2.4v-7.2" />
    </svg>
  );
}

function IconCap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <path d="M3 15h18" />
      <path d="M4 15c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  );
}

function IconPolo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 4.5 12 7l3-2.5" />
      <path d="M9 4.5 6 7.5 4 10v5h3v6h10v-6h3v-5l-2-2.5L15 4.5C14 6 13 7 12 7S10 6 9 4.5Z" />
    </svg>
  );
}

function IconVest({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8.6 3.8 5.4 8.2c-.5.7-.6 2.4-.6 4V21h14.4v-8.8c0-1.6-.1-3.3-.6-4L15.4 3.8 12 11.2 8.6 3.8Z" />
      <path d="M12 11.2V21" />
      <path d="M6.6 15.6h10.8M6.6 18h10.8" />
    </svg>
  );
}

type PriceIcon = (props: { className?: string }) => React.ReactNode;

const dtfPrices: {
  icon: PriceIcon;
  title: string;
  hint?: string;
  price: string;
  quote?: boolean;
}[] = [
  {
    icon: IconPrintSmall,
    title: "Mic — până în 12 cm",
    hint: "10 × 10 cm — ideal pentru un logo pe piept",
    price: "10 lei",
  },
  {
    icon: IconPrintMedium,
    title: "Mediu — 13–29 cm",
    price: "15–20 lei",
  },
  {
    icon: IconPrintStandard,
    title: "Standard — 30–40 cm",
    hint: "30 × 40 cm — ideal pentru un print mare pe față sau pe spate",
    price: "25 lei",
  },
  {
    icon: IconPrintLarge,
    title: "Peste 40 cm",
    price: "Cere ofertă",
    quote: true,
  },
];

const supplyPrices: {
  icon: PriceIcon;
  name: string;
  price: string;
  quote?: boolean;
}[] = [
  { icon: ShirtIcon, name: "Tricou", price: "+50 lei/buc." },
  { icon: IconHoodie, name: "Hanorac", price: "+100 lei/buc." },
  { icon: IconCap, name: "Șapcă", price: "+30 lei/buc." },
  { icon: IconPolo, name: "Polo", price: "+60 lei/buc." },
  { icon: ShoppingBag, name: "Tote bag", price: "+30 lei/buc." },
  {
    icon: IconVest,
    name: "Echipamente de lucru",
    price: "Cere ofertă",
    quote: true,
  },
];

const testimonials = [
  {
    quote:
      "PRNT ne-a ajutat să găsim exact ce aveam nevoie pentru echipa noastră. Calitate, comunicare excelentă și livrare la timp!",
    name: "Andrei M.",
    role: "Manager, firmă IT",
  },
  {
    quote:
      "Am comandat tricouri pentru un eveniment și au ieșit impecabil. Vom colabora cu ei și pe viitor.",
    name: "Ioana T.",
    role: "Organizator evenimente",
  },
  {
    quote:
      "Profesionalism și seriozitate. Ne-au oferit cele mai bune soluții pentru proiectul nostru.",
    name: "Maria G.",
    role: "Coordonator proiect, instituție publică",
  },
];
export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative bg-cream">
        <div
          aria-hidden="true"
          className="folk-side absolute inset-y-0 left-0 w-20 md:w-32 xl:w-64"
          style={
            { "--folk-img": `url(${separatorPRNT.src})` } as React.CSSProperties
          }
        >
          <div className="folk-side-col -ml-12 pl-16 md:-ml-14 md:pl-0 xl:ml-0" />
          <div className="folk-side-col folk-side-col-offset hidden xl:block xl:-ml-32" />
          <div className="folk-side-col hidden 2xl:block xl:-ml-32" />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-8 py-14 md:grid-cols-2 md:px-16 md:py-20">
          <div>
          <Image className="w-56 md:w-82" src={imgLogo} width={2486} height={1177} alt="Logo"/>
            <h1 className="mt-8 font-display text-4xl font-extrabold leading-[1.1] md:text-5xl">
              Materiale textile
              <br />
              personalizate
              <br />
              <span className="text-primary">pentru orice nevoie.</span>
            </h1>
            <p className="mt-5 max-w-sm text-muted-foreground">
              Pentru persoane fizice, companii și instituții publice.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Hai să discutăm proiectul tău
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <Image
            src={hero}
            alt="Tricouri personalizate împăturite alături de etichetă și mostre de material"
            width={1754}
            height={897}
            priority
            className="w-full rounded-sm object-cover aspect-4/3"
          />
        </div>
      </section>

      <section className="bg-cream/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-3 lg:grid-cols-6">
          {benefits.map((b) => (
            <div key={b.title} className="text-center">
              <b.icon className="mx-auto h-8 w-8 stroke-[1.25] text-primary" />
              <h3 className="mt-4 text-sm font-bold">{b.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div
        aria-hidden="true"
        className="folk-band"
        style={{ backgroundImage: `url(${separatorPRNT.src})` }}
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title">
            Pentru cine imprimăm
            <span aria-hidden="true" className="title-rule" />
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <article
                key={a.title}
                className="overflow-hidden rounded-sm border border-border bg-card"
              >
                <Image
                  src={a.img}
                  alt={a.title}
                  width={800}
                  height={600}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <a.icon className="h-6 w-6 stroke-[1.25] text-primary" />
                    <h3 className="text-lg font-bold">{a.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title">
            Ce produse putem furniza
            <span aria-hidden="true" className="title-rule" />
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {products.map((p) => (
              <figure
                key={p.name}
                className="overflow-hidden rounded-sm border border-border bg-card"
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover"
                />
                <figcaption className="bg-sand h-full px-2 py-3 text-center text-[0.65rem] font-bold uppercase tracking-[0.1em]">
                  {p.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="preturi" className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden bg-cream">
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4">
              <article className="flex flex-col px-6 py-8 sm:px-10 md:py-10 rounded-2xl border border-primary/50">
                <h2 className="font-display text-lg font-extrabold uppercase tracking-wide text-primary sm:text-xl">
                  Preț imprimare DTF
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-0.5 w-16 bg-primary"
                  />
                </h2>
                <ul className="mt-6 divide-y divide-border">
                  {dtfPrices.map((row) => (
                    <li
                      key={row.title}
                      className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <row.icon className="h-8 w-8 shrink-0 stroke-[1.35] text-primary" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold">{row.title}</p>
                        {row.hint ? (
                          <p className="mt-0.5 text-xs text-primary">{row.hint}</p>
                        ) : null}
                      </div>
                      {row.quote ? (
                        <a
                          href="#contact"
                          className="shrink-0 text-sm font-bold text-primary hover:underline"
                        >
                          {row.price}
                        </a>
                      ) : (
                        <p className="shrink-0 text-sm font-bold text-primary">
                          {row.price}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="flex items-start gap-2 border-t mt-4 border-dashed border-primary/40 pt-5 text-xs leading-relaxed text-muted-foreground">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Prețul se calculează în funcție de dimensiunea maximă a
                  printului.
                </p>
              </article>

              <div
                aria-hidden="true"
                className="folk-side w-10"
                style={
                  { "--folk-img": `url(${separatorPRNT.src})` } as React.CSSProperties
                }
              >
                <div className="folk-side-col -mx-7" />
              </div>

              <article className="flex flex-col px-6 py-8 sm:px-10 md:py-10 rounded-2xl border border-primary/50">
                <h2 className="font-display text-lg font-extrabold uppercase tracking-wide text-primary sm:text-xl">
                  Nu ai produsul? Ne ocupăm noi.
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-0.5 w-16 bg-primary"
                  />
                </h2>
                <p className="mt-3 text-md">
                  Îți putem furniza și produsul pe care îl personalizăm.
                </p>
                <ul className="mt-6 space-y-3.5">
                  {supplyPrices.map((row) => (
                    <li key={row.name} className="flex items-center gap-3">
                      <row.icon className="h-6 w-6 shrink-0 stroke-[1.35] text-primary" />
                      <span className="text-md font-medium">{row.name}</span>
                      <span
                        aria-hidden="true"
                        className="min-w-4 flex-1 border-b border-dotted border-primary/40"
                      />
                      {row.quote ? (
                        <a
                          href="#contact"
                          className="shrink-0 text-sm font-bold text-primary hover:underline"
                        >
                          {row.price}
                        </a>
                      ) : (
                        <span className="shrink-0 text-sm font-bold text-primary">
                          {row.price}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-3 mt-4 border-t border-dashed border-primary/40 pt-5">
                  <Home className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <span className="block font-bold text-foreground">
                      Ai deja produsul?
                    </span>
                    Perfect. Vii cu el de acasă și plătești{" "}
                    <span className="font-bold text-primary">doar imprimarea</span>
                    .
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="section-title">
            Cum lucrăm
            <span aria-hidden="true" className="title-rule" />
          </h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n} className="text-center">
                <s.icon className="mx-auto h-8 w-8 stroke-[1.25] text-foreground/70" />
                <p className="mt-4 font-display text-lg font-bold text-primary">
                  {s.n}
                </p>
                <h3 className="mt-1 text-sm font-bold">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="grid items-stretch md:grid-cols-2">
        <div className="flex flex-col justify-center bg-sand items-end px-8 py-14 md:px-16">
          <h2 className="font-display text-2xl font-bold leading-snug md:text-3xl text-end">
            Imprimare DTF
            <br />
            de înaltă calitate
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-accent-foreground/80 text-end">
            Folosim tehnologia DTF pentru imprimeuri rezistente, detaliate și
            durabile, potrivite pentru o gamă largă de materiale textile.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex w-fit items-center rounded-sm bg-primary px-5 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Află mai multe
          </a>
        </div>
        <Image
          src={dtf}
          alt="Imprimantă DTF care imprimă un design colorat pe film transfer"
          width={1000}
          height={700}
          className="h-full min-h-[18rem] w-full object-cover"
        />
      </section>

      <section className="grid items-stretch md:grid-cols-2">
        <Image
          src={fabrics}
          alt="Suluri de material textil natural în nuanțe de crem și bej"
          width={900}
          height={700}
          className="h-full min-h-[18rem] w-full object-cover"
        />
        <div className="flex flex-col justify-center bg-sand px-8 py-14 md:px-16">
          <h2 className="font-display text-2xl font-bold leading-snug md:text-3xl">
            Materialul potrivit
            <br />
            pentru proiectul tău
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Te ajutăm să găsești cea mai bună variantă de material în funcție de
            nevoile, bugetul și scopul proiectului tău.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex w-fit items-center rounded-sm bg-primary px-5 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Vezi opțiunile de materiale
          </a>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title">
            De ce să lucrezi cu noi
            <span aria-hidden="true" className="title-rule" />
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <v.icon className="mx-auto h-9 w-9 stroke-[1.25] text-primary" />
                <h3 className="mt-4 text-sm font-bold">{v.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="folk-band"
        style={{ backgroundImage: `url(${separatorPRNT.src})` }}
      />

      <section className="bg-sand/70 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title">
            Ce spun clienții noștri
            <span aria-hidden="true" className="title-rule" />
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-sm border border-border bg-card p-6"
              >
                <Sparkles className="h-5 w-5 text-primary" />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-xs">
                  <span className="block font-bold">{t.name}</span>
                  <span className="text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-cream py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr_0.8fr]">
          <div>
            <h2 className="font-display text-2xl font-bold leading-snug md:text-3xl">
              Hai să discutăm
              <br />
              despre proiectul tău
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Completează formularul și te contactăm în cel mai scurt timp.
            </p>
          </div>

          <form className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                aria-label="Nume"
                placeholder="Nume"
                className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
              />
              <input
                aria-label="Email"
                type="email"
                placeholder="Email"
                className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <input
              aria-label="Telefon"
              placeholder="Telefon"
              className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
            <textarea
              aria-label="Mesaj"
              placeholder="Mesaj"
              rows={5}
              className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="rounded-sm bg-primary px-6 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Trimite mesaj
            </button>
          </form>

          <Image
            src={contactMockup}
            alt="Sacoșă textilă și tricouri albe pregătite pentru personalizare"
            width={800}
            height={800}
            className="w-full rounded-sm object-cover"
          />
        </div>
      </section>

      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 text-sm sm:grid-cols-2 lg:grid-cols-5">
        <Image className="w-42 -mt-8" src={imgLogo} width={2486} height={1177} alt="Logo"/>
          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.14em]">
              Contact
            </h3>
            <Link href={"tel:+40774901179"} className="mt-3 text-xs text-muted-foreground">
            +40 774 901 179
              <br />
              contact@prnt.ro
            </Link>
          </div>
          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.14em]">
              Urmărește-ne
            </h3>
            <div className="mt-3 flex gap-3">
              <Link
                href="https://www.facebook.com/people/PRNTro/61593979378668/"
                aria-label="Facebook"
                className="text-primary transition-opacity hover:opacity-70"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              {/* <a
                href="#contact"
                aria-label="Instagram"
                className="text-primary transition-opacity hover:opacity-70"
              >
                <Instagram className="h-5 w-5" />
              </a> */}
            </div>
          </div>
          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.14em]">
              Legal
            </h3>
            <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
              <li><Link href={"https://www.anpc.ro"}>ANPC</Link></li>
              <li>Politică Cookies</li>
              <li>Confidențialitate</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[0.65rem] text-muted-foreground font-bold uppercase tracking-[0.14em]">
              Website realizat de
              <Link href="https://rivesoft.eu"><Image className="h-8 w-fit" src={imgRiveSoft} width={265} height={88} alt="Rive Soft"/></Link>
            </h3>
          </div>
        </div>
      </footer>
    </main>
  );
}
