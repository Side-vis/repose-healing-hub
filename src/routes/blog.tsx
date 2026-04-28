import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Resources — Mental Wellness, Recovery & Education | Repose" },
      { name: "description", content: "Articles on addiction, depression, family recovery, relapse prevention, youth drug-abuse prevention and mental wellness." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { t: "Signs of Addiction", d: "Common warning signs: increased use, secrecy, mood swings, financial strain, and inability to stop despite consequences." },
  { t: "Depression Awareness", d: "Recognizing low mood, loss of interest and hopelessness — and how early support can make a difference." },
  { t: "Family Support in Recovery", d: "Recovery is stronger when families receive guidance, education and counseling alongside their loved one." },
  { t: "Mental Wellness Tips", d: "Simple daily practices that support emotional balance and long-term resilience." },
  { t: "Relapse Prevention", d: "Identifying triggers, building coping tools and creating a sustainable recovery plan." },
  { t: "Youth Drug Abuse Prevention", d: "How parents, schools and communities can protect young people." },
  { t: "Recovery Success Stories", d: "Anonymous stories of hope and restoration from individuals and families." },
  { t: "Signs Someone May Need Rehabilitation", d: "When habits cross into harm — and how to talk to a loved one." },
  { t: "Why Early Treatment Matters", d: "Early help protects health, relationships and future possibilities." },
  { t: "Understanding Behavioral Addictions", d: "Gambling, gaming, internet, pornography and compulsive spending — beyond substance use." },
];

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Blog & Mental Wellness Resources" lead="Education is part of recovery. Explore our growing library of articles written with care by our clinical team." />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.t} className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lift transition-shadow">
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-accent">Article</div>
                <h3 className="mt-2 font-display text-xl text-primary">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
