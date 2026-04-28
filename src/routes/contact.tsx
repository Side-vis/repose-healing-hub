import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { site, waLink } from "@/lib/site";
import { MapPin, Phone, Mail, Clock, MessageCircle, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Repose Healing Center, Entebbe" },
      { name: "description", content: "Call, WhatsApp, email or visit Repose Healing Center at Ssese View Road, Plot 2, Manyago, Entebbe, Uganda." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Reach out — confidentially" lead="Our team is available by phone, WhatsApp, email or in person during office hours. Emergency support is available by phone 24/7." />

      <Section>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { I: MapPin, t: "Address", d: site.address },
            { I: Phone, t: "Phone", d: site.phoneDisplay, href: `tel:${site.phone}` },
            { I: Mail, t: "Email", d: site.email, href: `mailto:${site.email}` },
            { I: Clock, t: "Office Hours", d: site.hours },
            { I: MessageCircle, t: "WhatsApp", d: "Click-to-chat with our team", href: waLink() },
            { I: AlertTriangle, t: "Emergency Line", d: `${site.phoneDisplay} • 24/7`, href: `tel:${site.phone}`, emergency: true },
          ].map((c, i) => (
            <a key={i} href={c.href ?? "#"} className={`bg-card rounded-2xl p-6 border border-border hover:shadow-soft transition ${c.emergency ? "border-emergency/50" : ""}`}>
              <c.I className={`size-6 ${c.emergency ? "text-emergency" : "text-primary"}`} />
              <div className="mt-3 font-display text-lg text-primary">{c.t}</div>
              <div className="mt-1 text-sm text-muted-foreground break-words">{c.d}</div>
            </a>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl text-primary">Send us a message</h2>
            <p className="mt-3 text-muted-foreground">We respond within one business day. For urgent matters please call the 24/7 emergency line.</p>

            <form className="mt-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you — message sent."); }}>
              <Field label="Full name"><input required className={inputCls} /></Field>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email"><input required type="email" className={inputCls} /></Field>
                <Field label="Phone"><input required type="tel" className={inputCls} /></Field>
              </div>
              <Field label="Message"><textarea rows={5} required className={inputCls} /></Field>
              <div className="flex items-center justify-between text-xs bg-background rounded-lg p-3 border border-border">
                <span className="text-muted-foreground">🔒 SSL-secured • CAPTCHA protected</span>
                <span className="text-primary font-medium">I'm not a robot ✓</span>
              </div>
              <button className="rounded-full bg-primary text-primary-foreground py-3 font-medium hover:bg-primary-glow">Send Message</button>
            </form>

            <div className="mt-10 bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-display text-lg text-primary">Newsletter</h3>
              <p className="text-sm text-muted-foreground mt-1">Mental wellness tips, resources and updates. No spam.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }} className="mt-4 flex gap-2">
                <input type="email" required placeholder="you@example.com" className={inputCls} />
                <button className="rounded-full bg-primary text-primary-foreground px-5 text-sm font-medium whitespace-nowrap">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="aspect-square lg:aspect-auto rounded-2xl overflow-hidden border border-border shadow-soft min-h-[400px]">
            <iframe title="Map" src={site.maps} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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
