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
  Instagram,
  Facebook,
  Landmark,
  Leaf,
  MessageCircle,
  Palette,
  Search,
  Shield,
  ShirtIcon,
  Sparkles,
  Star,
  Tag,
  Truck,
  User,
  Users,
} from "lucide-react";

import hero from "@/assets/hero-textiles.jpg";
import audPersoane from "@/assets/aud-persoane.jpg";
import audCompanii from "@/assets/aud-companii.jpg";
import audInstitutii from "@/assets/aud-institutii.jpg";
import prodTricouri from "@/assets/prod-tricouri.jpg";
import prodHanorace from "@/assets/prod-hanorace.jpg";
import prodPolo from "@/assets/prod-polo.jpg";
import prodSepci from "@/assets/prod-sepci.jpg";
import prodGenti from "@/assets/prod-genti.jpg";
import prodEchipamente from "@/assets/prod-echipamente.jpg";
import dtf from "@/assets/dtf-printing.jpg";
import fabrics from "@/assets/fabric-rolls.jpg";
import contactMockup from "@/assets/contact-mockup.jpg";
import separatorPRNT from "@/assets/separatorPRNT.png";

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

function Logo({ small }: { small?: boolean }) {
  return (
    <div>
      <span
        className={`block font-display font-extrabold tracking-tight text-primary ${
          small ? "text-2xl" : "text-4xl"
        }`}
      >
        PRNT
      </span>
      {!small && (
        <span className="mt-1 block text-[0.6rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Printuri românești
          <br />
          pentru nevoile tuturor
        </span>
      )}
    </div>
  );
}

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
            <Logo />
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
            width={1200}
            height={912}
            priority
            className="w-full rounded-sm object-cover"
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
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
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
                <figcaption className="bg-sand px-2 py-3 text-center text-[0.65rem] font-bold uppercase tracking-[0.1em]">
                  {p.name}
                </figcaption>
              </figure>
            ))}
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
        <div className="flex flex-col justify-center bg-accent px-8 py-14 md:px-16">
          <h2 className="font-display text-2xl font-bold leading-snug md:text-3xl">
            Imprimare DTF
            <br />
            de înaltă calitate
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-accent-foreground/80">
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
            className="mt-7 inline-flex w-fit items-center rounded-sm border border-primary px-5 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
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
        <div className="mx-auto grid max-w-6xl gap-8 px-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo small />
            <p className="mt-2 text-xs text-muted-foreground">
              Materiale textile personalizate
              <br />
              pentru orice nevoie.
            </p>
          </div>
          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.14em]">
              Contact
            </h3>
            <p className="mt-3 text-xs text-muted-foreground">
              +40 123 456 789
              <br />
              contact@prnt.ro
            </p>
          </div>
          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.14em]">
              Urmărește-ne
            </h3>
            <div className="mt-3 flex gap-3">
              <a
                href="#contact"
                aria-label="Facebook"
                className="text-primary transition-opacity hover:opacity-70"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                aria-label="Instagram"
                className="text-primary transition-opacity hover:opacity-70"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.14em]">
              Legal
            </h3>
            <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
              <li>ANPC</li>
              <li>Politică Cookies</li>
              <li>Confidențialitate</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
