import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Heart, Shield, Lock, Award, Users, Sparkles, Leaf } from "lucide-react";
import garden from "@/assets/garden.jpg";
import room from "@/assets/room.jpg";
import facility from "@/assets/facility.jpg";
import hands from "@/assets/hands.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Repose Healing Center, Entebbe" },
      { name: "description", content: "Our mission, vision and values. A faith-informed, evidence-based rehabilitation and mental wellness facility in Entebbe, Uganda." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { I: Heart, t: "Compassion", d: "We meet every person with warmth and dignity." },
  { I: Award, t: "Professionalism", d: "Qualified clinicians and evidence-based practice." },
  { I: Lock, t: "Confidentiality", d: "Your story is protected — always." },
  { I: Shield, t: "Integrity", d: "Honest, ethical care at every step." },
  { I: Users, t: "Respect", d: "Every client is valued as a whole person." },
  { I: Sparkles, t: "Excellence", d: "Continuous improvement and quality care." },
  { I: Leaf, t: "Recovery-Focused Care", d: "Treatment that restores purpose and hope." },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Who We Are" lead="Repose Healing Center is a rehabilitation and wellness facility in Entebbe, Uganda, dedicated to restoring lives affected by addiction, mental illness, emotional distress and compulsive behaviors." />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img src={facility} alt="Repose Healing Center facility" className="rounded-3xl shadow-lift w-full" loading="lazy" width={1280} height={960} />
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Our Story</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary">A calm, compassionate place to heal</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Located on Ssese View Road in Manyago, Entebbe, we provide compassionate, professional and evidence-based services that support lasting recovery. Our holistic approach honors each person's story — including those who draw strength from faith — and integrates medical, psychological and community support into one coordinated plan of care.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We deliberately keep capacity small — just 10 clients at a time — so that every individual receives focused, personal attention from our clinical team.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Mission</div>
            <h3 className="mt-2 font-display text-2xl text-primary">Our Mission</h3>
            <p className="mt-4 text-foreground/85 leading-relaxed">To provide safe, ethical and effective rehabilitation and mental health services that restore hope, dignity and long-term wellness.</p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Vision</div>
            <h3 className="mt-2 font-display text-2xl text-primary">Our Vision</h3>
            <p className="mt-4 text-foreground/85 leading-relaxed">To become a trusted leader in rehabilitation and mental wellness services in Uganda and beyond.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="What Guides Us" title="Our Core Values" center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.t} className="bg-card p-6 rounded-2xl border border-border">
              <v.I className="size-6 text-primary" />
              <div className="mt-3 font-display text-lg text-primary">{v.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Our Directors & Clinical Team" center
        lead="Profiles of our directors, clinicians and support staff will be published here, along with licenses and professional memberships.">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Medical Director", "Clinical Lead", "Head of Counseling"].map((role) => (
            <div key={role} className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="aspect-square bg-secondary grid place-items-center text-muted-foreground text-sm">Photo coming soon</div>
              <div className="p-5">
                <div className="font-display text-lg text-primary">{role}</div>
                <div className="text-sm text-muted-foreground">Qualification details to be added</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-sm text-muted-foreground bg-secondary/60 rounded-xl py-4 px-6 max-w-2xl mx-auto">
          <strong className="text-primary">Licensing & Registration:</strong> Repose Healing Center operates in alignment with Uganda's regulatory standards. Licenses and professional memberships will be displayed here.
        </div>
      </Section>

      <Section eyebrow="Facility" title="A peaceful healing environment" center className="bg-secondary/40">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[garden, room, facility, hands].map((src, i) => (
            <img key={i} src={src} alt={`Facility view ${i + 1}`} className="rounded-2xl aspect-square object-cover w-full shadow-soft" loading="lazy" />
          ))}
        </div>
      </Section>
    </>
  );
}
