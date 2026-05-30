import type { Metadata, Viewport } from "next";
import { Inter, Sora, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

const siteUrl = "https://soumya-saurav-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Soumya Saurav Pattnaik Portfolio | Senior SDET & AI Automation Architect",
    template: "%s | Soumya Saurav Pattnaik Portfolio"
  },
  description:
    "Premium portfolio for Soumya Saurav Pattnaik, Senior Software Engineer in QA Automation, SDET, AI-driven testing specialist, and automation architect.",
  applicationName: "Soumya Saurav Pattnaik Portfolio",
  authors: [{ name: "Soumya Saurav Pattnaik" }],
  creator: "Soumya Saurav Pattnaik",
  keywords: [
    "Soumya Saurav Pattnaik",
    "Senior SDET",
    "QA Automation",
    "Automation Architect",
    "AI Driven Testing",
    "Appium",
    "Selenium",
    "Playwright",
    "Rest Assured",
    "JMeter",
    "CI/CD Quality Engineering"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Soumya Saurav Pattnaik Portfolio | AI-Driven QA Automation Architect",
    description:
      "Engineering quality at scale with mobile, API, web, CI/CD, observability, and AI-assisted testing expertise.",
    siteName: "Soumya Saurav Pattnaik Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Soumya Saurav Pattnaik Portfolio social preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Soumya Saurav Pattnaik Portfolio | Senior SDET",
    description:
      "AI-driven testing specialist and automation architect building intelligent quality ecosystems.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090d",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
