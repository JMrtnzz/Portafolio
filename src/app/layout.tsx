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
    default: `${site.brand} · ${site.name}`,
    template: `%s · ${site.brand}`,
  },
  description: site.description,
  metadataBase: new URL("https://portafolio-jmrtnzz.vercel.app"),
  openGraph: {
    title: `${site.brand} · ${site.name}`,
    description: site.description,
    type: "website",
    locale: "es_ES",
    siteName: site.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} · ${site.name}`,
    description: site.description,
    creator: "@xRocKGx",
  },
  icons: {
    icon: "/favicon.svg",
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
