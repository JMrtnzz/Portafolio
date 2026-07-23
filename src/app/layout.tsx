import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · Portafolio`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://portafolio-nine-blue-65.vercel.app"),
  openGraph: {
    title: `${site.name} · Portafolio`,
    description: site.description,
    type: "website",
    locale: "es_ES",
    siteName: site.name,
    images: [{ url: "/logo-full.png", width: 512, height: 512, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: `${site.name} · Portafolio`,
    description: site.description,
    creator: "@xRocKGx",
    images: ["/logo-full.png"],
  },
  icons: {
    icon: [{ url: "/logo-full.png", type: "image/png" }],
    apple: [{ url: "/logo-full.png" }],
    shortcut: "/logo-full.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <body
        className="atmosphere min-h-screen font-body antialiased"
        style={
          {
            "--font-display": "var(--font-syne), ui-sans-serif, system-ui, sans-serif",
            "--font-body": "var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif",
          } as CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
