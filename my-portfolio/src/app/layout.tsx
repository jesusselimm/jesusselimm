import type { Metadata } from "next";
import {
  Pixelify_Sans,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import { BootScreen } from "@/components/retro/boot-screen";
import { EasterEgg } from "@/components/retro/easter-egg";
import { PageTransitions } from "@/components/retro/page-transitions";
import { ThemeKey } from "@/components/retro/theme-key";
import "./globals.css";

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
  title: {
    default: "Selim Kurtulmuş — Software Developer & Designer",
    template: "%s · Selim Kurtulmuş",
  },
  description:
    "I build interfaces that don't just work — they feel inevitable. Software where code, craft and geospatial thinking converge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixelifySans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
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
        <PageTransitions />
        {children}
      </body>
    </html>
  );
}
