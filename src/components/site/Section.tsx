import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  lead,
  children,
  className = "",
  center = false,
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {(eyebrow || title || lead) && (
          <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12`}>
            {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-3">{eyebrow}</div>}
            {title && <h2 className="font-display text-3xl md:text-4xl text-primary">{title}</h2>}
            {lead && <p className="mt-4 text-muted-foreground leading-relaxed">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <section className="bg-secondary/60 border-b border-border">
      <div className="container mx-auto px-4 py-20 md:py-28 text-center">
        {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-3">{eyebrow}</div>}
        <h1 className="font-display text-4xl md:text-5xl text-primary">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">{lead}</p>}
      </div>
    </section>
  );
}
