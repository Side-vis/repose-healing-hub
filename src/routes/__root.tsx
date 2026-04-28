import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Repose Healing Center — Rehabilitation & Mental Health, Entebbe Uganda" },
      { name: "description", content: "Repose Healing Center offers confidential addiction treatment, mental health care, counseling and inpatient rehabilitation in Entebbe, Uganda. Restoring Hope Again." },
      { name: "keywords", content: "addiction treatment Entebbe, addiction treatment Kampala, rehabilitation center Uganda, mental health services Entebbe, counseling Uganda, drug rehab Uganda" },
      { name: "author", content: "Repose Healing Center" },
      { property: "og:title", content: "Repose Healing Center — Restoring Hope Again" },
      { property: "og:description", content: "Confidential, professional rehabilitation and mental health services in Entebbe, Uganda." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      // Placeholders: Google Analytics, Search Console, Meta Pixel go here when keys are provided
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundPage,
});

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] grid place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-6xl text-primary">404</h1>
        <p className="mt-3 text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a href="/" className="inline-block mt-6 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm">Go home</a>
      </div>
    </div>
  );
}

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
