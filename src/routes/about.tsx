import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Heart, Shield, Lock, Award, Users, Sparkles, Leaf } from "lucide-react";
import { useState } from "react";
import garden from "@/assets/garden.jpg";
import room from "@/assets/room.jpg";
import facility from "@/assets/repose1.jpg";
import hands from "@/assets/hands.jpg";
import danielObote from "@/assets/Daniel Obote.jpg";
import sharonNatukunda from "@/assets/Sharon Natukunda.jpg";
import drAbdulrahimShirazi from "@/assets/Dr. Abdulrahim Shirazi.jpg";
import violetNassanga from "@/assets/VIOLET NASSANGA.jpg";
import brunoKirabo from "@/assets/Bruno Kirabo.jpg";
import abaineCleophus from "@/assets/Abaine Cleophus.jpg";
import musawoProssy from "@/assets/Musawo Prossy.jpg";

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
  { I: Heart, t: "Empathy and Respect", d: "We treat every individual with compassion, dignity, and without judgment." },
  { I: Users, t: "Community-Centered Care", d: "We believe healing is stronger when families and communities are involved and supported." },
  { I: Shield, t: "Integrity and Professionalism", d: "We provide ethical, evidence-based care with honesty and accountability." },
  { I: Sparkles, t: "Hope and Recovery", d: "We believe recovery is possible for everyone and work to restore hope at every stage." },
  { I: Leaf, t: "Prevention and Awareness", d: "We are committed to educating communities and preventing addiction before it starts." },
  { I: Award, t: "Personalized Support", d: "We recognize that every journey is unique and tailor care to meet individual needs." },
];

const purpose = "To restore lives, strengthen communities, and create pathways to lasting recovery.";

const team = [
  {
    name: "Daniel Obote",
    title: "CEO & Counseling Psychologist",
    image: danielObote,
    bio: "Daniel Obote is a Counseling Psychologist and the CEO of Repose Healing Center, dedicated to helping individuals overcome addiction, trauma, and emotional challenges. He brings strong experience in trauma-informed counseling, creating a safe space where clients feel understood, respected, and supported throughout the healing process.\n\nHis approach is person-centered, recognizing that every individual has unique experiences, strengths, and goals. He also uses Cognitive Behavioral Therapy (CBT) to help clients understand unhealthy thought patterns, develop healthier coping skills, and make lasting positive changes.\n\nWith a compassionate and professional style, Daniel is committed to guiding individuals toward healing, resilience, personal growth, and long-term recovery.",
  },
  {
    name: "Shallon Natukunda",
    title: "Counsellor, Psychotherapist & Psychosocial Skills Trainer",
    image: sharonNatukunda,
    bio: "Shallon Natukunda is a highly trained professional Counsellor, Psychotherapist, and Psychosocial Skills Trainer with profound experience in supporting individuals through emotional, mental health, and recovery challenges. She is dedicated to helping clients build resilience, confidence, and healthier ways of coping with life's difficulties.\n\nHer therapeutic approach includes Cognitive Behavioral Therapy (CBT) and Person-Centred Therapy, allowing her to provide practical tools for change while creating a warm, supportive, and non-judgmental space for healing and personal growth.",
  },
  {
    name: "Dr. Abdulrahim Shirazi",
    title: "Retired Medical Doctor & Recovery Coach",
    image: drAbdulrahimShirazi,
    bio: "Dr. Abdulrahim Shirazi is a retired Medical Doctor with a lifelong commitment to healing and service. After retiring from active medical practice in 2016, he trained with SAPTA Kenya as a Recovery Coach. He now brings both his medical expertise and recovery coaching experience to support individuals on their journey to healing at Repose Healing Center.",
  },
  {
    name: "Nassanga Violet",
    title: "Psychiatric Clinical Officer",
    image: violetNassanga,
    bio: "Nassanga Violet is a dedicated Psychiatric Clinical Officer committed to supporting individuals on their journey to recovery from substance use and mental health challenges. She provides compassionate, professional, and patient-centered care in a safe and supportive environment. Her goal is to help individuals achieve healing, emotional stability, resilience, and lasting recovery.",
  },
  {
    name: "Bruno Kirabo",
    title: "Recovery Coach",
    image: brunoKirabo,
    bio: "Bruno Kirabo is a dedicated Recovery Coach with a deep passion for walking alongside brothers and sisters on their journey to healing. He believes recovery goes beyond sobriety—it is about rediscovering purpose, rebuilding confidence, and creating a life to be proud of.\n\nHis approach is compassionate, non-judgmental, and action-focused. In his sessions, he supports individuals with goal setting, emotional resilience, rebuilding self-esteem, and developing practical steps toward lasting recovery and personal growth.",
  },
  {
    name: "Abaine Cleophus",
    title: "Mental Health Nurse",
    image: abaineCleophus,
    bio: "Abaine Cleophus is a compassionate Mental Health Nurse dedicated to supporting individuals on their recovery journey, especially those facing substance use and emotional challenges. He provides holistic, patient-centered care in a safe and supportive environment that encourages growth and positive change. His goal is to promote healing, resilience, and long-term recovery.",
  },
  {
    name: "Nabateregga Prossy",
    title: "Professional Counsellor",
    image: musawoProssy,
    bio: "Nabateregga Prossy is a professional Counsellor dedicated to supporting individuals on their journey to recovery and emotional healing. She understands that addiction is often a silent response to inner struggles that have not yet been voiced.\n\nHer approach focuses on creating a safe, supportive, and non-judgmental environment where clients can openly explore their hidden challenges. She believes that being truly heard is the first step toward healing, rebuilding hope, and reclaiming one's life.",
  },
];

function AboutPage() {
  const [expandedMembers, setExpandedMembers] = useState<Set<string>>(new Set());

  const toggleExpand = (memberName: string) => {
    const newExpanded = new Set(expandedMembers);
    if (newExpanded.has(memberName)) {
      newExpanded.delete(memberName);
    } else {
      newExpanded.add(memberName);
    }
    setExpandedMembers(newExpanded);
  };

  const truncateBio = (bio: string, wordLimit: number = 40): { text: string; isTruncated: boolean } => {
    const words = bio.split(/\s+/);
    if (words.length > wordLimit) {
      return { text: words.slice(0, wordLimit).join(' ') + '...', isTruncated: true };
    }
    return { text: bio, isTruncated: false };
  };

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
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Mission</div>
            <h3 className="mt-2 font-display text-2xl text-primary">Mission Statement</h3>
            <p className="mt-4 text-foreground/85 leading-relaxed">At Repose Healing Center, we combine professional expertise with empathy and respect to support individuals and families affected by addiction and mental health challenges. Through prevention, community engagement, and personalized care, we promote healing, restore dignity, and build lasting recovery.</p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Vision</div>
            <h3 className="mt-2 font-display text-2xl text-primary">Vision Statement</h3>
            <p className="mt-4 text-foreground/85 leading-relaxed">A community where individuals and families are free from the burden of addiction and mental health challenges, living with dignity, purpose, and hope.</p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Purpose</div>
            <h3 className="mt-2 font-display text-2xl text-primary">Our Purpose</h3>
            <p className="mt-4 text-foreground/85 leading-relaxed">{purpose}</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="What Guides Us" title="Our Core Values" center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => (
            <div key={v.t} className="bg-card p-6 rounded-2xl border border-border">
              <v.I className="size-6 text-primary" />
              <div className="mt-3 font-display text-lg text-primary">{v.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-secondary/30 to-transparent" />
        <div className="absolute top-40 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Section Header - Enhanced */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-accent/20 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Leadership
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-4 leading-tight">
              Our Directors & Clinical Team
            </h2>
            <div className="w-20 h-1 bg-accent/60 rounded-full mx-auto my-4" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Meet the dedicated clinicians and support staff who provide compassionate, professional care.
            </p>
          </div>

          {/* Team Grid - Enhanced Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member) => {
              const isExpanded = expandedMembers.has(member.name);
              const truncatedBio = truncateBio(member.bio);
              const bioIsTruncatable = truncatedBio.isTruncated;
              const displayText = isExpanded ? member.bio : truncatedBio.text;

              return (
                <div
                  key={member.name}
                  className="group relative rounded-2xl border border-border/60 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col backdrop-blur-sm bg-card"
                >
                  {/* Subtle gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 md:h-72 lg:h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6 flex flex-col grow">
                    {/* Name and Title */}
                    <div className="border-b border-border/40 pb-3 mb-3">
                      <div className="font-display text-xl md:text-2xl font-bold text-primary tracking-tight">
                        {member.name}
                      </div>
                      <div className="mt-1 inline-block text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 rounded-full px-2 py-0.5">
                        {member.title}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line grow [&_strong]:text-primary [&_em]:italic">
                      {displayText}
                    </p>

                    {/* Expand/Collapse Button */}
                    <div className="mt-5 pt-2 border-t border-border/30">
                      {bioIsTruncatable && (
                        <button
                          onClick={() => toggleExpand(member.name)}
                          className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
                        >
                          {isExpanded ? (
                            <>
                              <span>Read less</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                              </svg>
                            </>
                          ) : (
                            <>
                              <span>Read more</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Licensing & Registration Footer - Enhanced */}
          <div className="mt-16 md:mt-20">
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-secondary/80 via-secondary/40 to-transparent border border-primary/10 backdrop-blur-sm p-6 md:p-8 max-w-4xl mx-auto shadow-md">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />

              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary font-semibold">Licensing & Registration:</strong>{" "}
                      Repose Healing Center operates in alignment with Uganda's regulatory standards.
                      <br className="hidden sm:block" />
                      <span className="text-xs text-muted-foreground/80">
                        Licenses and professional memberships available upon request.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 text-xs font-mono text-primary/70 border border-primary/10">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Verified Compliance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
