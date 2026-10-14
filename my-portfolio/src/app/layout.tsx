import type { Metadata } from "next";
import {
  Libre_Baskerville,
  Montserrat,
  Syne,
  Instrument_Serif,
  Pixelify_Sans,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import { ThemeKey } from "@/components/retro/theme-key";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixelify",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

/* Sets data-theme before first paint: saved choice, otherwise light. */
const themeInit = `try{var t=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",t==="dark"?"dark":"light")}catch(e){document.documentElement.setAttribute("data-theme","light")}`;

export const metadata: Metadata = {
  title: "Selim Kurtulmuş — Design Engineer",
  description:
    "I build interfaces that don't just work — they feel inevitable. Front-end development where code and craft converge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${montserrat.variable} ${syne.variable} ${instrumentSerif.variable} ${pixelifySans.variable} ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <ThemeKey />
        {children}
      </body>
    </html>
  );
}
