import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import ClientProviders from "@/components/ClientProviders";
import { siteConfig } from "@/site.config";

// Fonts (server-safe)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s — Regent Travel",
  },
  description: siteConfig.tagline,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Regent Travel — Qingyuan",
      },
    ],
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[color:var(--brand-ivory)] text-[color:var(--brand-ink)] antialiased">
        <ClientProviders>
          {/* Global Header (client-safe, no handlers passed from here) */}
          <Header />

          {/* Main content */}
          <main className="pb-12">
            <Container>{children}</Container>
          </main>

          {/* Footer is a Client Component but receives no functions/handlers */}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
