import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-2xl">Repose Healing Center</div>
          <p className="mt-1 italic opacity-80">Restoring Hope Again</p>
          <p className="mt-4 text-sm opacity-80 max-w-xs">
            Professional rehabilitation and mental wellness services in Entebbe, Uganda — safe, confidential, evidence-based care.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { h: site.social.facebook, I: Facebook },
              { h: site.social.instagram, I: Instagram },
              { h: site.social.twitter, I: Twitter },
              { h: site.social.linkedin, I: Linkedin },
              { h: site.social.youtube, I: Youtube },
            ].map(({ h, I }, i) => (
              <a key={i} href={h} target="_blank" rel="noreferrer" className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <I className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            {[
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/admissions", "Admissions"],
              ["/blog", "Resources & Blog"],
              ["/faq", "FAQ"],
              ["/careers", "Careers & Volunteers"],
            ].map(([to, l]) => (
              <li key={to}><Link to={to} className="hover:underline">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg">Policies</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            {[
              ["/policies/confidentiality", "Confidentiality"],
              ["/policies/consent", "Consent"],
              ["/policies/patient-rights", "Patient Rights"],
              ["/policies/safeguarding", "Safeguarding"],
              ["/policies/non-discrimination", "Non-discrimination"],
              ["/policies/privacy", "Data Privacy"],
              ["/policies/complaints", "Complaints"],
            ].map(([to, l]) => (
              <li key={to}><Link to={to} className="hover:underline">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex gap-2"><MapPin className="size-4 shrink-0 mt-0.5" /><span>{site.address}</span></li>
            <li className="flex gap-2"><Phone className="size-4 shrink-0 mt-0.5" /><a href={`tel:${site.phone}`} className="hover:underline">{site.phoneDisplay}</a></li>
            <li className="flex gap-2"><Mail className="size-4 shrink-0 mt-0.5" /><a href={`mailto:${site.email}`} className="hover:underline break-all">{site.email}</a></li>
            <li className="opacity-75">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 text-xs opacity-70 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Repose Healing Center. All rights reserved.</span>
          <span>SSL secured • GDPR-aligned data handling</span>
        </div>
      </div>
    </footer>
  );
}
