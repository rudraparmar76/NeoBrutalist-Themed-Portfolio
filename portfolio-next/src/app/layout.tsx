import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Rudra Parmar",
    default: "Rudra Parmar - Full-Stack Developer & Systems Builder",
  },
  description: "Explore the portfolio of Rudra Parmar, a Full-Stack Developer & Systems Builder. See projects, experience, skills, and contact information.",
  keywords: [
    "Rudra Parmar",
    "Full Stack Developer",
    "Systems Builder",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "React",
    "Python",
    "Firebase",
    "AI",
    "Web Development",
    "Open Source",
  ],
  authors: [{ name: "Rudra Parmar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rudraparmar76.github.io/", // Update with actual domain if known
    title: "Rudra Parmar - Full-Stack Developer & Systems Builder",
    description: "Explore the portfolio of Rudra Parmar, a Full-Stack Developer & Systems Builder. See projects, experience, skills, and contact information.",
    siteName: "Rudra Parmar Portfolio",
    images: [
      {
        url: "https://rudraparmar76.github.io/Assets/images/hero.jpg", // Update with actual hero image URL
        width: 1200,
        height: 630,
        alt: "Rudra Parmar Portfolio Hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Parmar - Full-Stack Developer & Systems Builder",
    description: "Explore the portfolio of Rudra Parmar, a Full-Stack Developer & Systems Builder. See projects, experience, skills, and contact information.",
    images: ["https://rudraparmar76.github.io/Assets/images/hero.jpg"],
  },
  icons: {
    icon: "/Assets/images/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rudra Parmar",
          url: "https://github.com/rudraparmar76", // Update with actual domain
          sameAs: [
            "https://github.com/rudraparmar76",
            "https://www.linkedin.com/in/rudra-parmar-089125245", // Add if available
            "https://x.com/ruddra_tweets", // Add if available
          ],
          jobTitle: "Full-Stack Developer & Systems Builder",
          knowsAbout: [
            "Web Development",
            "React",
            "Next.js",
            "Python",
            "Firebase",
            "AI",
            "Software Engineering",
          ],
        })}</script>
      </head>
      <body className="bg-[var(--bg)] text-[var(--fg)] antialiased selection:bg-[var(--fg)] selection:text-[var(--bg)] min-h-screen">
        {children}
      </body>
    </html>
  );
}
