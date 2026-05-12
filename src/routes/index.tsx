import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import clientWarsaw from "@/assets/client-warsaw.png";
import clientBerlin from "@/assets/client-berlin.png";
import {
  Plane,
  Home,
  Briefcase,
  FileCheck,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SafePath Relocation — Safe Relocation from Palestine to Europe" },
      {
        name: "description",
        content:
          "Legal relocation services from Gaza and Palestine to Poland, UK and Germany. Flights, housing, work and paperwork — from $800. Process in about one week.",
      },
      { property: "og:title", content: "SafePath Relocation" },
      {
        property: "og:description",
        content:
          "Legal relocation from Palestine to Europe. Flights, housing, jobs, documents — from $800.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "+48 731 614 432";
const WHATSAPP_LINK = "https://wa.me/48731614432";

const services = [
  {
    icon: Plane,
    title: "Transport & Flight",
    desc: "Safe ground transport to a secure airport and a flight to your chosen country.",
  },
  {
    icon: Home,
    title: "Housing for 2 Months",
    desc: "We rent an apartment or private room for you for the first two months upon arrival.",
  },
  {
    icon: Briefcase,
    title: "Legal Employment",
    desc: "We find legal work matching your skills so you can support your family from day one.",
  },
  {
    icon: FileCheck,
    title: "Documents & Registration",
    desc: "Full paperwork and registration with local authorities — handled for you, end to end.",
  },
  {
    icon: MapPin,
    title: "Local Orientation",
    desc: "A guided tour of your new neighborhood, transport, shops, clinics and key services.",
  },
];

const destinations = [
  { name: "Poland", flag: "🇵🇱", city: "Warsaw" },
  { name: "Germany", flag: "🇩🇪", city: "Berlin" },
  { name: "United Kingdom", flag: "🇬🇧", city: "London" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <img src={logo} alt="SafePath Relocation" className="h-10 md:h-12" />
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-2.5 text-sm font-semibold text-[var(--whatsapp-foreground)] shadow-sm transition hover:opacity-90 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Trusted since 2024 · 100% Legal
            </span>
            <h1
              className="text-4xl font-bold leading-tight md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A safe path out of war.<br />
              <span className="text-white/80">A new life in Europe.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              SafePath Relocation helps families and individuals leave Gaza and Palestine and
              resettle legally in Poland, Germany or the United Kingdom — with flights, housing,
              jobs and paperwork handled from start to finish.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-7 py-3.5 font-semibold text-[var(--whatsapp-foreground)] shadow-lg transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />
                Start on WhatsApp
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                What's Included
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm">
              <Stat value="From $800" label="All-inclusive package" />
              <Stat value="~1 week" label="Application to arrival" />
              <Stat value="100% Legal" label="Documented process" />
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -right-10 top-0 h-72 w-72 rounded-3xl bg-white/5 backdrop-blur-sm" />
            <div
              className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img src={clientWarsaw} alt="Client resettled in Warsaw, Poland" className="h-[480px] w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="font-semibold text-white">Amira — Resettled in Warsaw</p>
                <p className="text-sm text-white/80">From Gaza to Poland · 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Choose Your Destination</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            Three safe countries. One clear path.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {destinations.map((d) => (
            <div
              key={d.name}
              className="group rounded-2xl border border-border bg-card p-8 text-center transition hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="text-5xl">{d.flag}</div>
              <h3 className="mt-4 text-xl font-bold text-card-foreground">{d.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Settle in {d.city} or another major city</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">What's Included</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Your complete relocation package
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              One transparent price. Every step covered — from the moment you leave home to the
              moment you settle into your new life.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-7 transition hover:border-primary/30"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
            <div
              className="rounded-2xl p-7 text-primary-foreground"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-card)" }}
            >
              <p className="text-sm font-medium uppercase tracking-wider opacity-90">Starting at</p>
              <p className="mt-2 text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                $800
              </p>
              <p className="mt-3 text-sm opacity-90">
                All-inclusive. Payment plans available. Contact us for a personal quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              About one week from application to arrival
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every step is fully legal and documented. We've been doing this since 2024 and have
              relocated dozens of families to safety.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Contact us on WhatsApp and submit your application",
                "We prepare your documents, visa and travel plan",
                "Safe transport to the airport and flight to Europe",
                "Move into your apartment, start work, settle in",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-foreground">{step}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-6">
              <Badge icon={Clock} text="~1 week total" />
              <Badge icon={ShieldCheck} text="100% Legal" />
              <Badge icon={CheckCircle2} text="Since 2024" />
            </div>
          </div>
          <div
            className="overflow-hidden rounded-3xl"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <img src={clientBerlin} alt="Client resettled in Berlin, Germany" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Real People · Real Journeys</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Clients who reached safety with us
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Story img={clientWarsaw} name="Amira" route="Palestine → Warsaw, Poland" quote="I arrived with one suitcase. A week later I had a flat, papers and a job. SafePath made it real." />
            <Story img={clientBerlin} name="Yousef" route="Palestine → Berlin, Germany" quote="They guided me through every document. Today I live and work in Berlin — legally and safely." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Ready to start your safe path?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Message us on WhatsApp — we reply quickly, in Arabic or English, and walk you through
            every option.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--whatsapp)] px-8 py-4 text-lg font-semibold text-[var(--whatsapp-foreground)] shadow-2xl transition hover:scale-[1.02]"
          >
            <MessageCircle className="h-6 w-6" />
            {WHATSAPP_NUMBER}
          </a>
          <p className="mt-6 text-sm text-white/70">Available 7 days a week</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <img src={logo} alt="SafePath Relocation" className="h-8" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SafePath Relocation · Operating since 2024
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:underline"
          >
            WhatsApp: {WHATSAPP_NUMBER}
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] shadow-2xl transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{value}</p>
      <p className="text-xs uppercase tracking-wider text-white/70">{label}</p>
    </div>
  );
}

function Badge({ icon: Icon, text }: { icon: typeof Clock; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
      <Icon className="h-4 w-4 text-accent" />
      {text}
    </div>
  );
}

function Story({ img, name, route, quote }: { img: string; name: string; route: string; quote: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
      <img src={img} alt={`${name} — ${route}`} className="h-72 w-full object-cover" />
      <div className="p-6">
        <p className="text-lg italic text-card-foreground">"{quote}"</p>
        <p className="mt-4 font-bold text-card-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{route}</p>
      </div>
    </div>
  );
}
