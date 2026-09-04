import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samplify — Case Study | Selim Kurtulmuş",
  description:
    "How I designed and built Samplify, an AI-powered personal style and wardrobe platform — a 25-aesthetic design engine, a 5-dimensional outfit scoring system, and a KVKK-compliant onboarding flow, built solo.",
};

export default function SamplifyCaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
