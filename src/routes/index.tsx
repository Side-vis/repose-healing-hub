import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Shield, Heart, Users, Home as HomeIcon, Sparkles, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Section } from "@/components/site/Section";
import { site, waLink } from "@/lib/site";
import hero from "@/assets/hero.jpg";
import counseling from "@/assets/counseling.jpg";
import facility from "@/assets/facility.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Repose Healing Center — Restoring Hope Again | Entebbe, Uganda" },
      { name: "description", content: "Confidential addiction recovery, mental health care, counseling and inpatient rehab in Entebbe. Small-capacity, evidence-based treatment for lasting wellness." },
    ],
  }),
  component: HomePage,
});

const services = [
  { I: HomeIcon, title: "Addiction Recovery", desc: "Treatment for alcohol, drugs, prescription misuse, and behavioral addictions." },
  { I: Heart, title: "Mental Health Care", desc: "Assessment, counseling, psychotherapy and medication support." },
  { I: Shield, title: "Inpatient Rehabilitation", desc: "24/7 residential treatment in a safe, structured recovery environment." },
  { I: Sparkles, title: "Outpatient Services", desc: "Flexible appointments for treatment, counseling and follow-up care." },
  { I: Users, title: "Family Support", desc: "Education, guidance and healing support for families." },
  { I: Heart, title: "Community Wellness", desc: "Mental health trainings for schools, workplaces and organizations." },
];

const whyUs = [
  "Private and confidential care",
  "Professional and ethical treatment approach",
  "Safe, welcoming healing environment",
  "Personalized, evidence-based treatment plans",
  "Small capacity — only 10 clients for focused care",
  "Recovery, reintegration and relapse-prevention focus",
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="Peaceful healing garden" className="absolute inset-0 size-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container mx-auto px-4 py-28 md:py-40 text-primary-foreground">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] bg-white/15 backdrop-blur px-4 py-1.5 rounded-full">
              <span className="size-1.5 rounded-full bg-white animate-pulse" /> Restoring Hope Again
            </div>
            <h1 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
              Reclaim Your Life.<br /><span className="italic opacity-95">Restore Hope Again.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl">
              Professional rehabilitation, addiction recovery, counseling and mental health support in a safe, private and compassionate environment in Entebbe, Uganda.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 font-medium hover:shadow-lift transition-all">
                Book Assessment <ArrowRight className="size-4" />
              </Link>
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors">
                Refer a Loved One
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {["Confidential Care", "Qualified Professionals", "Inpatient & Outpatient", "Family Support"].map((t) => (
                <span key={t} className="flex items-center gap-2"><CheckCircle2 className="size-4" /> {t}</span>
              ))}
            </div>

            <a href={`tel:${site.phone}`} className="mt-8 inline-flex items-center gap-3 bg-emergency text-emergency-foreground px-5 py-3 rounded-lg font-medium">
              <Phone className="size-4" /> Emergency: {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <Section eyebrow="Welcome" title="Compassionate care, rooted in evidence" center
        lead="At Repose Healing Center, we are committed to helping individuals recover from addiction, emotional distress, mental health challenges and behavioral difficulties. Our team provides structured, evidence-based and compassionate care designed to restore stability, wellness, dignity and purpose." />

      {/* Services grid */}
      <Section eyebrow="Our Core Services" title="A full continuum of care" center className="bg-secondary/40">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group bg-card p-7 rounded-2xl border border-border hover:shadow-soft hover:-translate-y-1 transition-all">
              <div className="size-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.I className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl text-primary">{s.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            Explore all services <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* Why us with image */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={facility} alt="Welcoming reception area" className="rounded-3xl shadow-lift w-full" loading="lazy" width={1280} height={960} />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lift max-w-[220px] hidden md:block">
              <div className="text-4xl font-display">10</div>
              <div className="text-sm opacity-90 mt-1">clients at a time — for truly focused, personal care</div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Why Families Choose Us</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary">An international-standard healing environment</h2>
            <ul className="mt-6 space-y-3">
              {whyUs.map((t) => (
                <li key={t} className="flex gap-3"><CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" /><span>{t}</span></li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Link to="/about" className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium">Learn More</Link>
              <Link to="/contact" className="rounded-full border border-border px-6 py-3 font-medium hover:bg-secondary">Speak to a Counselor</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="Voices of Recovery" title="Stories of hope" center className="bg-secondary/40">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "I arrived broken. I'm leaving with purpose. The counselors met me with patience and dignity every single day.",
            "As a family, we finally felt seen and heard. The education and support saved our relationships.",
            "The small community meant I was never just a number. Recovery here feels personal, structured and kind.",
          ].map((q, i) => (
            <figure key={i} className="bg-card p-7 rounded-2xl border border-border">
              <div className="text-primary text-4xl font-display leading-none">"</div>
              <blockquote className="mt-2 text-foreground/90 leading-relaxed">{q}</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— Anonymous client</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA banner */}
      <section className="relative overflow-hidden">
        <img src={counseling} alt="Calm environment" className="absolute inset-0 size-full object-cover" loading="lazy" width={1280} height={960} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container mx-auto px-4 py-20 text-center text-primary-foreground">
          <h2 className="font-display text-3xl md:text-5xl">Recovery can begin today.</h2>
          <p className="mt-4 opacity-90 max-w-xl mx-auto">Reach out confidentially. Our team will guide you through the next step, with care.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${site.phone}`} className="rounded-full bg-white text-primary px-6 py-3 font-medium">Call {site.phoneDisplay}</a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="rounded-full border border-white/40 px-6 py-3 font-medium hover:bg-white/10">WhatsApp Us</a>
            <Link to="/admissions" className="rounded-full border border-white/40 px-6 py-3 font-medium hover:bg-white/10">Start Recovery Today</Link>
          </div>
        </div>
      </section>

      {/* Map */}
      <Section eyebrow="Find Us" title="Located in peaceful Entebbe" center>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 aspect-[16/10] rounded-2xl overflow-hidden border border-border shadow-soft">
            <iframe title="Map" src={site.maps} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="bg-secondary/60 rounded-2xl p-7 border border-border">
            <MapPin className="size-6 text-primary" />
            <h3 className="mt-3 font-display text-xl text-primary">Visit Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">{site.address}</p>
            <div className="mt-5 h-px bg-border" />
            <dl className="mt-5 space-y-3 text-sm">
              <div><dt className="text-muted-foreground">Phone</dt><dd><a href={`tel:${site.phone}`} className="text-primary font-medium">{site.phoneDisplay}</a></dd></div>
              <div><dt className="text-muted-foreground">Email</dt><dd><a href={`mailto:${site.email}`} className="text-primary font-medium break-all">{site.email}</a></dd></div>
              <div><dt className="text-muted-foreground">Office Hours</dt><dd>{site.hours}</dd></div>
            </dl>
          </div>
        </div>
      </Section>
    </>
  );
}
