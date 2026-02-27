import type { Metadata } from "next";
import { Inter, Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unfold.nl"),
  title: "Unfold — Geen small talk. Gewoon echte vragen.",
  description:
    "Voor first dates, vrienden, situatieships en 3AM talks. Kies een vibe. Trek een kaart. See what unfolds.",
  keywords: ["unfold", "app", "conversatie", "vragen", "date", "vrienden"],
  openGraph: {
    title: "Unfold — Geen small talk. Gewoon echte vragen.",
    description:
      "Voor first dates, vrienden, situatieships en 3AM talks. Kies een vibe. Trek een kaart. See what unfolds.",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfold — Geen small talk. Gewoon echte vragen.",
    description:
      "Voor first dates, vrienden, situatieships en 3AM talks. Kies een vibe. Trek een kaart. See what unfolds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${inter.variable} ${playfair.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
