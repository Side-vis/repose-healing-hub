import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { useState } from "react";
import { site } from "@/lib/site";
import { CheckCircle2, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions & Referrals — Start Recovery Today | Repose" },
      { name: "description", content: "Begin your recovery with a confidential assessment. Self, family, employer, medical and community referrals welcome." },
    ],
  }),
  component: AdmissionsPage,
});

const steps = [
  ["1", "Call or email us", "Confidential first contact — we'll listen and explain the next step."],
  ["2", "Initial assessment", "A clinical assessment to understand needs and recommend the right level of care."],
  ["3", "Treatment recommendation", "A personalized treatment plan tailored to the individual."],
  ["4", "Admission or outpatient scheduling", "Begin care — inpatient admission or scheduled outpatient appointments."],
];

function AdmissionsPage() {
  const [tab, setTab] = useState<"self" | "family" | "organization">("self");
  return (
    <>
      <PageHero eyebrow="Admissions" title="Start the Recovery Journey" lead="We welcome self, family, employer, medical and community referrals. All enquiries are strictly confidential." />

      <Section eyebrow="Admission Process" title="Four simple steps" center>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(([n, t, d]) => (
            <div key={n} className="bg-card rounded-2xl p-6 border border-border shadow-soft">
              <div className="size-12 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-xl">{n}</div>
              <div className="mt-4 font-display text-lg text-primary">{t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl text-primary">Who qualifies for treatment?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Adults and adolescents experiencing addiction, mental health challenges, emotional distress, or behavioral difficulties. We provide individualized care regardless of background, with tailored programs for special populations including young people, older adults, pregnant mothers, and clients with dual diagnosis.
            </p>

            <h3 className="mt-10 font-display text-xl text-primary">What to bring</h3>
            <ul className="mt-4 space-y-2">
              {["Identification", "Medical records (if available)", "Personal essentials", "Prescribed medications", "Commitment to healing"].map((t) => (
                <li key={t} className="flex gap-3"><CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" /><span>{t}</span></li>
              ))}
            </ul>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              <a href={`mailto:${site.email}?subject=Fees%20Enquiry`} className="rounded-2xl border border-border bg-card p-5 hover:shadow-soft">
                <Mail className="size-5 text-primary" />
                <div className="mt-2 font-medium text-primary">Fees Enquiry</div>
                <div className="text-xs text-muted-foreground">Email us for a confidential fees breakdown</div>
              </a>
              <a href={`tel:${site.phone}`} className="rounded-2xl border border-border bg-card p-5 hover:shadow-soft">
                <Phone className="size-5 text-primary" />
                <div className="mt-2 font-medium text-primary">Insurance Enquiry</div>
                <div className="text-xs text-muted-foreground">Call to discuss insurance and coverage options</div>
              </a>
            </div>
          </div>

          {/* Referral form */}
          <div className="bg-card rounded-2xl p-7 border border-border shadow-soft">
            <div className="flex gap-1 bg-secondary rounded-full p-1 text-sm">
              {(["self", "family", "organization"] as const).map((v) => (
                <button key={v} onClick={() => setTab(v)} className={`flex-1 py-2 rounded-full capitalize transition-colors ${tab === v ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
                  {v === "self" ? "Self" : v === "family" ? "Family" : "Organization"}
                </button>
              ))}
            </div>

            <form className="mt-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you — our team will contact you confidentially."); }}>
              {tab === "organization" && (
                <Field label="Organization name"><input required className={inputCls} /></Field>
              )}
              <Field label={tab === "family" ? "Your full name" : "Full name"}><input required className={inputCls} /></Field>
              {tab !== "self" && <Field label="Person being referred"><input required className={inputCls} /></Field>}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email"><input required type="email" className={inputCls} /></Field>
                <Field label="Phone"><input required type="tel" className={inputCls} /></Field>
              </div>
              <Field label="Preferred date for assessment"><input type="date" className={inputCls} /></Field>
              <Field label="Brief description (confidential)"><textarea rows={4} className={inputCls} /></Field>
              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-1" />
                <span>I confirm this referral is submitted with consent where required, and I consent to secure, confidential processing of this information (see our Privacy Policy).</span>
              </label>
              {/* <div className="flex items-center justify-between text-xs bg-secondary/70 rounded-lg p-3">
                <span className="text-muted-foreground">🔒 Secure form • Anti-spam (CAPTCHA)</span>
                <span className="text-primary font-medium">I'm not a robot ✓</span>
              </div> */}
              <button className="rounded-full bg-primary text-primary-foreground py-3 font-medium hover:bg-primary-glow">Submit</button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}

const inputCls = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="text-sm font-medium text-foreground/80">{label}</span><div className="mt-1">{children}</div></label>;
}
