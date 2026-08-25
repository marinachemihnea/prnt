import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "PRNT — Materiale textile personalizate",
    template: "%s",
  },
  description:
    "Printuri românești pentru nevoile tuturor: tricouri, hanorace, polo, șepci și echipamente de lucru personalizate.",
  openGraph: {
    type: "website",
    title: "PRNT — Materiale textile personalizate",
    description:
      "Printuri românești pentru nevoile tuturor: tricouri, hanorace, polo, șepci și echipamente de lucru personalizate.",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
