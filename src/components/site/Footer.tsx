import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import logo from "@/assets/logo.png";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 5.82c-.48-.55-.77-1.26-.77-2.03h-2.49v10.03a2.1 2.1 0 1 1-1.91-2.09v-2.54a4.6 4.6 0 1 0 4.59 4.6V9.4a7.1 7.1 0 0 0 4.16 1.33V8.24c-1.2 0-2.3-.38-3.18-1.02-.74-.53-1.43-1.2-1.4-1.4Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full bg-white/10 overflow-hidden ring-1 ring-white/20 shrink-0">
              <img src={logo} alt="Repose Healing Center logo" className="size-full object-cover" loading="eager" />
            </div>
            <div>
              <div className="font-display text-2xl leading-none">Repose Healing Center</div>
              <p className="mt-1 italic opacity-80">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 max-w-xs">
            Professional rehabilitation and mental wellness services in Entebbe, Uganda — safe, confidential, evidence-based care.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { h: site.social.facebook, I: Facebook },
              { h: site.social.instagram, I: Instagram },
              { h: site.social.tiktok, I: TikTokIcon },
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
