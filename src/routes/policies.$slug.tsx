import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";

type Policy = { slug: string; title: string; lead: string; body: { h: string; p: string }[] };

const policies: Record<string, Policy> = {
  confidentiality: {
    slug: "confidentiality", title: "Confidentiality Policy",
    lead: "All client information is protected and disclosed only as necessary for care or as required by law.",
    body: [
      { h: "Our Commitment", p: "We protect the privacy of every client. Staff are trained in confidentiality and sign binding agreements." },
      { h: "Limits of Confidentiality", p: "Information may be shared only with informed consent, or where required by law (e.g. risk of serious harm to self or others, or lawful medical procedures)." },
      { h: "Records", p: "Clinical records are stored securely with restricted access, retained in line with regulatory guidance." },
    ],
  },
  consent: {
    slug: "consent", title: "Consent Policy",
    lead: "Care at Repose is built on informed, voluntary consent wherever possible.",
    body: [
      { h: "Informed Consent", p: "Before treatment begins, clients (or authorized representatives) receive a clear explanation of services, risks, benefits and alternatives." },
      { h: "Right to Withdraw", p: "Consent may be withdrawn at any time, except where lawful medical procedures apply." },
      { h: "Minors & Capacity", p: "For minors or clients with diminished capacity, consent is sought from legally authorized persons in accordance with Ugandan law." },
    ],
  },
  "patient-rights": {
    slug: "patient-rights", title: "Patient Rights Charter",
    lead: "Every client has fundamental rights that our team upholds at all times.",
    body: [
      { h: "Right to Dignity & Respect", p: "Clients are treated without judgment, discrimination or stigma." },
      { h: "Right to Information", p: "Clients have access to information about their condition, treatment and progress." },
      { h: "Right to Privacy", p: "Personal information and clinical records are strictly protected." },
      { h: "Right to Complain", p: "Clients may raise concerns without fear of negative consequences (see Complaints Policy)." },
    ],
  },
  safeguarding: {
    slug: "safeguarding", title: "Safeguarding Policy",
    lead: "We protect children, young people and adults at risk across all programs.",
    body: [
      { h: "Zero Tolerance", p: "We have zero tolerance for abuse, exploitation, neglect or harmful behavior by any person on our premises." },
      { h: "Staff Checks & Training", p: "All staff undergo background checks and ongoing safeguarding training." },
      { h: "Reporting", p: "Any safeguarding concern is escalated to the designated safeguarding lead and, where required, reported to authorities." },
    ],
  },
  "non-discrimination": {
    slug: "non-discrimination", title: "Non-Discrimination Policy",
    lead: "Repose provides care without discrimination on any grounds.",
    body: [
      { h: "Equality of Care", p: "We do not discriminate on the basis of race, gender, age, disability, religion, HIV status, sexual orientation, nationality or socioeconomic status." },
      { h: "Accessibility", p: "We adapt our services where possible to ensure fair access for clients with disabilities or special needs." },
    ],
  },
  privacy: {
    slug: "privacy", title: "Data Privacy Policy",
    lead: "GDPR-aligned handling of personal and clinical data.",
    body: [
      { h: "Data We Collect", p: "Contact details, clinical information, and information necessary to deliver care and meet legal obligations." },
      { h: "How We Use It", p: "To provide treatment, communicate with clients and referrers, and comply with legal or regulatory requirements." },
      { h: "Your Rights", p: "You may request access, correction or deletion of your data, subject to legal retention requirements. Contact us to exercise these rights." },
      { h: "Security", p: "Forms are SSL-encrypted, access is role-based and systems are monitored for security." },
    ],
  },
  complaints: {
    slug: "complaints", title: "Complaints Handling Policy",
    lead: "We welcome feedback and handle every complaint fairly and promptly.",
    body: [
      { h: "How to Complain", p: "Speak to any staff member, email us, or use our contact form. You may request anonymity." },
      { h: "Our Response", p: "We acknowledge complaints within 3 working days and aim to resolve them within 30 days." },
      { h: "Escalation", p: "If unsatisfied, you may escalate to the director or to the relevant regulatory body." },
    ],
  },
};

export const Route = createFileRoute("/policies/$slug")({
  head: ({ params }) => {
    const p = policies[params.slug];
    return { meta: [{ title: `${p?.title ?? "Policy"} — Repose Healing Center` }] };
  },
  component: PolicyPage,
  notFoundComponent: () => <div className="py-32 text-center">Policy not found.</div>,
});

function PolicyPage() {
  const { slug } = Route.useParams();
  const p = policies[slug];
  if (!p) return <div className="py-32 text-center">Policy not found.</div>;
  return (
    <>
      <PageHero eyebrow="Policy" title={p.title} lead={p.lead} />
      <Section>
        <article className="max-w-3xl mx-auto prose-custom">
          {p.body.map((s) => (
            <div key={s.h} className="mb-8">
              <h2 className="font-display text-2xl text-primary">{s.h}</h2>
              <p className="mt-3 text-foreground/85 leading-relaxed">{s.p}</p>
            </div>
          ))}
          <p className="text-xs text-muted-foreground mt-12">Last updated: {new Date().toLocaleDateString()}. For questions about this policy, please contact us.</p>
        </article>
      </Section>
    </>
  );
}
