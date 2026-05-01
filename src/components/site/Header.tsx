import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/admissions", label: "Admissions" },
  { to: "/blog", label: "Resources" },
  { to: "/faq", label: "FAQ" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Emergency bar */}
      <div className="bg-emergency text-emergency-foreground text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="font-medium">24/7 Emergency Support</span>
          <a href={`tel:${site.phone}`} className="flex items-center gap-2 font-semibold hover:underline">
            <Phone className="size-4" /> {site.phoneDisplay}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 h-18 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="size-11 rounded-full bg-white shadow-sm ring-1 ring-border/70 overflow-hidden grid place-items-center">
              <img src={logo} alt="Repose Healing Center logo" className="size-full object-cover" loading="eager" />
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-display text-lg text-primary">Repose</div>
              <div className="text-[11px] text-muted-foreground tracking-wide uppercase">Healing Center</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary font-medium" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/admissions"
              className="inline-flex items-center rounded-full bg-gold text-gold-foreground px-5 py-2.5 text-sm font-semibold shadow-[0_8px_24px_-8px_oklch(0.78_0.13_88_/_0.5)] hover:brightness-105 transition"
            >
              Book Assessment
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-foreground/80 hover:text-primary"
                  activeProps={{ className: "text-primary font-medium" }}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
              >
                Book Assessment
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
