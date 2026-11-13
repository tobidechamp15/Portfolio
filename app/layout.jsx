import "./globals.css";
import { profile, links } from "@/data/portfolio";

const title = "Oluwatobiloba Oluwadare | Full-Stack and Mobile Engineer";
const description =
  "Full-stack and React Native engineer building banking, fintech and product apps with React, Next.js, Node.js and Java. Based in Ibadan, Nigeria.";

export const metadata = {
  title,
  description,
  keywords: [
    "Oluwatobiloba Oluwadare",
    "full-stack developer",
    "React Native developer",
    "Next.js",
    "Node.js",
    "fintech",
    "Temenos Infinity",
    "Nigeria",
  ],
  authors: [{ name: profile.name }],
  icons: { icon: "/favicon.ico" },
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport = {
  themeColor: "#0b0d14",
};

// Structured data so search engines know who this page is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Full-Stack and Mobile Engineer",
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Ibadan", addressCountry: "NG" },
  alumniOf: "Redeemer's University",
  sameAs: [links.github, links.linkedin, links.x],
  knowsAbout: ["Temenos Infinity", "React", "Next.js", "Node.js", "Java", "React Native", "TypeScript", "MongoDB", "PostgreSQL"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-black"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
