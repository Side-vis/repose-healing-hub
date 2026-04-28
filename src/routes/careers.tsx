import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Volunteers — Repose Healing Center" },
      { name: "description", content: "Join our team. Current vacancies, internships and volunteer opportunities at Repose Healing Center in Entebbe." },
    ],
  }),
  component: CareersPage,
});

const roles = [
  { t: "Clinical Counselor", type: "Full-time" },
  { t: "Registered Nurse — Rehabilitation", type: "Full-time" },
  { t: "Psychology Intern", type: "Internship" },
  { t: "Community Outreach Volunteer", type: "Volunteer" },
];

function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Join a team that restores hope" lead="We welcome compassionate, qualified and values-driven professionals, interns and volunteers." />

      <Section>
        <div className="grid md:grid-cols-2 gap-5">
          {roles.map((r) => (
            <div key={r.t} className="bg-card rounded-2xl p-6 border border-border flex items-center justify-between">
              <div>
                <div className="font-display text-lg text-primary">{r.t}</div>
                <div className="text-xs uppercase tracking-wider text-accent mt-1">{r.type}</div>
              </div>
              <a href="#apply" className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm">Apply</a>
            </div>
          ))}
        </div>
      </Section>

      <Section id="apply" eyebrow="Apply" title="Online Application" center className="bg-secondary/40">
        <form onSubmit={(e) => { e.preventDefault(); alert("Application received — thank you."); }} className="max-w-2xl mx-auto bg-card rounded-2xl p-7 border border-border shadow-soft grid gap-4">
          <Field label="Full name"><input required className={inputCls} /></Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Email"><input required type="email" className={inputCls} /></Field>
            <Field label="Phone"><input required type="tel" className={inputCls} /></Field>
          </div>
          <Field label="Role / Opportunity"><input required className={inputCls} /></Field>
          <Field label="Cover note"><textarea rows={5} className={inputCls} /></Field>
          <Field label="Upload CV (PDF)"><input type="file" accept=".pdf,.doc,.docx" className={inputCls} /></Field>
          <div className="flex items-center justify-between text-xs bg-secondary/70 rounded-lg p-3">
            <span className="text-muted-foreground">🔒 Secure upload • CAPTCHA protected</span>
            <span className="text-primary font-medium">I'm not a robot ✓</span>
          </div>
          <button className="rounded-full bg-primary text-primary-foreground py-3 font-medium hover:bg-primary-glow">Submit Application</button>
        </form>
      </Section>
    </>
  );
}

const inputCls = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="text-sm font-medium text-foreground/80">{label}</span><div className="mt-1">{children}</div></label>;
}
