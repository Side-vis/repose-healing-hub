import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Rehabilitation, Counseling & Mental Health | Repose" },
      { name: "description", content: "Assessment, detox, inpatient and outpatient rehab, counseling, medication management, addiction recovery, and community mental health in Entebbe." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { t: "Assessment & Diagnosis", items: ["Mental health screening", "Substance use assessment", "Non-substance addiction assessment", "Risk assessment for self-harm, relapse, aggression or compulsive behavior", "Individual treatment planning"] },
  { t: "Detoxification & Brief Intervention", items: ["Safe management of mild to moderate withdrawal symptoms", "Monitoring during the detox process", "Alcohol and drug misuse intervention", "Motivation enhancement for treatment readiness"] },
  { t: "Inpatient Rehabilitation", items: ["24/7 supervision", "Counseling and therapy", "Daily recovery schedules", "Medication monitoring", "Relapse prevention planning"] },
  { t: "Outpatient Care", items: ["Counseling sessions", "Medication follow-up", "Psychiatric review", "Recovery coaching", "Progress monitoring"] },
  { t: "Counseling & Psychotherapy", items: ["Cognitive Behavioral Therapy (CBT)", "Trauma-informed counseling", "Anxiety and depression support", "Grief counseling", "Emotional regulation therapy", "Family counseling"] },
  { t: "Addiction Recovery Services", items: ["Alcohol dependence", "Drug addiction", "Prescription misuse", "Gambling addiction", "Internet / social media addiction", "Gaming addiction", "Pornography / sexual behavior addiction", "Shopping / compulsive spending"] },
  { t: "Medication Management", items: ["First-line psychiatric medicines guided by current standards", "Monitoring of treatment response", "Side-effect management", "Medication adherence support"] },
  { t: "Special Population Care", items: ["Adolescents", "Young adults", "Older adults", "Pregnant or breastfeeding mothers", "Dual diagnosis clients"] },
  { t: "Life Skills & Reintegration", items: ["Daily routine development", "Communication skills", "Emotional resilience", "Vocational readiness", "Community reintegration planning"] },
  { t: "Community Mental Health & Consultancy", items: ["Stress management workshops", "Burnout prevention", "Addiction prevention education", "Leadership resilience training", "Mental health awareness talks"] },
];

const approaches = ["Cognitive Behavioral Therapy (CBT)", "Dialectical Behavior Therapy (DBT)", "Motivational Interviewing", "Trauma-Informed Care", "12-Step Support (optional)", "Holistic Wellness Care"];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Comprehensive, evidence-based care" lead="From first assessment to long-term reintegration, our programs are designed around each person's journey to recovery." />

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article key={s.t} className="bg-card rounded-2xl p-7 border border-border shadow-soft">
              <h3 className="font-display text-xl text-primary">{s.t}</h3>
              <ul className="mt-4 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm"><CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" /><span>{it}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Evidence-Based Approaches" title="Therapies we practice" center className="bg-secondary/40">
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {approaches.map((a) => (
            <span key={a} className="bg-card border border-border rounded-full px-5 py-2.5 text-sm text-primary">{a}</span>
          ))}
        </div>
      </Section>
    </>
  );
}
