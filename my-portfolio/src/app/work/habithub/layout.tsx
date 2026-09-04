import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HabitHub — Design Case Study | Selim Kurtulmuş",
  description:
    "A design case study for HabitHub, a habit-tracking app concept designed in Figma — a coaching-style dashboard, a 'Habitly AI' assistant, and a 'Your Garden' gamification metaphor. Design phase, development in progress.",
};

export default function HabitHubCaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
