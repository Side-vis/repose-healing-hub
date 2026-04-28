import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Frequently Asked Questions | Repose Healing Center" },
      { name: "description", content: "Answers about confidentiality, treatment length, substances treated, behavioral addictions, family involvement and admissions." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  ["Is treatment confidential?", "Yes. All client information is handled with strict confidentiality in line with our Confidentiality and Data Privacy policies."],
  ["How long does treatment take?", "Duration depends on individual needs and progress. Programs can range from short-term stabilization to extended rehabilitation."],
  ["Do you treat alcohol addiction?", "Yes. We provide treatment for alcohol dependence and related conditions."],
  ["Do you treat behavioral addictions?", "Yes. We support recovery from gambling, gaming, internet, pornography and compulsive behaviors."],
  ["Can families participate?", "Yes. Family involvement is encouraged where clinically appropriate, with the client's consent."],
  ["Do you offer counseling only?", "Yes. Outpatient counseling services are available for those who do not require inpatient care."],
  ["Is admission voluntary?", "Most admissions are voluntary. Exceptions are only where guided by lawful medical procedures."],
  ["What substances do you treat?", "Alcohol, drugs and prescription misuse. We also treat behavioral addictions and dual-diagnosis presentations."],
  ["Can family visit?", "Yes, visits are supported with structured schedules to protect the therapeutic environment."],
  ["What is inpatient care?", "Residential 24/7 treatment including counseling, medication monitoring, structured daily routines and relapse prevention."],
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" lead="Answers to the most common questions from clients and families." />
      <Section>
        <div className="max-w-3xl mx-auto divide-y divide-border rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-secondary/40">
                <span className="font-medium text-primary">{q}</span>
                <ChevronDown className={`size-5 text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{a}</div>}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
