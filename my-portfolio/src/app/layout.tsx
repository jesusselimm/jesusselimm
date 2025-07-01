import type { Metadata } from "next";
import { Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesusselimm | Front-End Developer",
  description: "A Front-End Developer with a passion for creating beautiful and functional websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${libreBaskerville.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
