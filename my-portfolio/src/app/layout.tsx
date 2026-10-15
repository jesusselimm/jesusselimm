import type { Metadata } from "next";
import {
  Libre_Baskerville,
  Montserrat,
  Syne,
  Instrument_Serif,
  Pixelify_Sans,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import { BootScreen } from "@/components/retro/boot-screen";
import { EasterEgg } from "@/components/retro/easter-egg";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

/* Before first paint: apply saved theme (light by default) and decide whether the
   boot screen runs. It only plays on the first visit of a session, and only on "/". */
const themeInit = `try{var t=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",t==="dark"?"dark":"light")}catch(e){document.documentElement.setAttribute("data-theme","light")}try{if(sessionStorage.getItem("boot")||location.pathname!=="/"){document.documentElement.setAttribute("data-boot","seen")}sessionStorage.setItem("boot","1")}catch(e){document.documentElement.setAttribute("data-boot","seen")}`;

export const metadata: Metadata = {
  title: "Selim Kurtulmuş — Design Engineer",
  description:
    "I build interfaces that don't just work — they feel inevitable. Software where code, craft and geospatial thinking converge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${montserrat.variable} ${syne.variable} ${instrumentSerif.variable} ${pixelifySans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <BootScreen />
        <ThemeKey />
        <EasterEgg />
        {children}
      </body>
    </html>
  );
}
