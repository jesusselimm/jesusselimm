import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/retro/case-study";
import { PhotoViewer } from "@/components/retro/photo-viewer";
import { Px } from "@/components/retro/px";
import { Reveal } from "@/components/retro/reveal";
import { WindowCard } from "@/components/retro/window-card";
import { Mark } from "@/components/retro/mark";

export const metadata: Metadata = {
  title: "About",
  description: "A brief summary of my software journey: from geomatics engineering to software and design.",
};

const pixel = "font-[family-name:var(--font-pixel)]";
const code = "font-[family-name:var(--font-code)]";

type Entry = { file: string; heading: string; items: React.ReactNode[] };

const journey: Entry[] = [
  {
    file: "features.log",
    heading: "Features",
    items: [
      <>
        I am currently working on <strong>Samplify</strong>, an AI-powered personal style and wardrobe platform. As a
        solo founder I design and build it end to end, from the style engine to the interface, and I&apos;m preparing
        it for an App Store and Play Store launch. I am also developing my portfolio site and trying to gain real
        world experience through freelance projects and open source contributions.
      </>,
    ],
  },
  {
    file: "sep-2026.log",
    heading: "Sep 2026",
    items: [
      "Procons Digital Construction — Developer.",
      "Turning drone-captured 3D render and mesh data into web-based viewers with CesiumJS.",
    ],
  },
  {
    file: "2026.log",
    heading: "2026",
    items: [
      "Graduate Studies + Scaling Samplify.",
      "Pursuing a master's degree in software engineering while continuing to build and grow Samplify. Exploring App Store launch, B2B opportunities, and the intersection of AI and personal style.",
    ],
  },
  {
    file: "2025.log",
    heading: "2025",
    items: [
      "Portfolio Projects and Personal Development.",
      "I started to focus more on front-end, I started to take a special interest in user experience (UX) and user interface (UI) design, and I started to focus more on design thinking.",
      "I reinforced what I learned by developing my own portfolio site and various projects. I started to deepen in UI/UX and QA. I started to see design not only as “visual” but also as “meaningful experience”.",
    ],
  },
  {
    file: "sep-2024.log",
    heading: "Sep 2024 – Sep 2025",
    items: [
      "airporttransfer.com — Front End Developer.",
      "Built user-facing interfaces that shipped to production — front-end craft working against real users and real constraints.",
    ],
  },
  {
    file: "2024.log",
    heading: "2024",
    items: [
      "Focus on Front-End Development and UX/UI Design.",
      "In my software journey, I realized that especially the front-end side is closer to me. I realized that the user interface development process is not just about writing code; it is also the art of balancing design and aesthetics.",
      "My interest in music, architecture and visual arts has given me a natural sensitivity to typography choice, color palette harmony and user experience. In this way, I care about creating interfaces that not only work, but also feel and guide. For me, design is an invisible journey that leads the user consciously and intuitively to a goal.",
    ],
  },
  {
    file: "2023.log",
    heading: "2023",
    items: [
      "Workintech Full Stack Training.",
      "I participated in Workintech's Full Stack Developer program. I received intensive training on front-end and back-end development. I developed various projects throughout the training.",
    ],
  },
  {
    file: "2022.log",
    heading: "2022",
    items: [
      "Entered the software world.",
      "I was introduced to the software world thanks to the map engineering courses. I took my first step with JavaScript, then React completely sucked me in and I started my journey into this world with Front End Career Path at Codecademy.",
    ],
  },
  {
    file: "2018.log",
    heading: "2018",
    items: [
      "University Entry.",
      "I started my undergraduate education at Izmir Katip Çelebi University, Department of Geomatics Engineering. In this process, I gained engineering discipline and problem-solving oriented thinking skills.",
    ],
  },
];

/** Entries with a sub-heading use it as the title; "Features" has none, so it keeps its own. */
function entryTitle(entry: Entry): string {
  return entry.items.length > 1 ? String(entry.items[0]).replace(/\.$/, "") : entry.heading;
}
function entryBody(entry: Entry): React.ReactNode[] {
  return entry.items.length > 1 ? entry.items.slice(1) : entry.items;
}

/* Titles are derived from the file names; edit freely. Everything is portrait 3:4. */
const photos = [
  { src: "/images/albayCove.jpeg", title: "Albay Cove", width: 768, height: 1024 },
  { src: "/images/birdsAndSunset.jpeg", title: "Birds and Sunset", width: 768, height: 1024 },
  { src: "/images/mirror.jpeg", title: "Mirror", width: 768, height: 1024 },
  { src: "/images/skyAndUmbrella.jpeg", title: "Sky and Umbrella", width: 768, height: 1024 },
  { src: "/images/waterline.jpeg", title: "Waterline", width: 1050, height: 1400 },
  { src: "/images/forestCanopy.jpeg", title: "Forest Canopy", width: 1050, height: 1400 },
  { src: "/images/seaAndRock.jpeg", title: "Sea and Rock", width: 1050, height: 1400 },
  { src: "/images/stoneArches.jpeg", title: "Stone Arches", width: 1050, height: 1400 },
  { src: "/images/waterChannel.jpeg", title: "Water Channel", width: 1050, height: 1400 },
  { src: "/images/columnsAndSky.jpeg", title: "Columns and Sky", width: 1050, height: 1400 },
  { src: "/images/carvedCapital.jpeg", title: "Carved Capital", width: 1050, height: 1400 },
];

export default function AboutPage() {
  return (
    <CaseStudyShell>
      <header className="pb-32 pt-12 sm:pt-16">
        <p className={`m-0 mb-4 text-[13px] text-[var(--muted)] ${code}`}>~/about</p>
        <h1 className={`m-0 mb-5 text-[clamp(46px,9vw,84px)] font-bold leading-[1.02] ${pixel}`}>
          About
          <span className="ml-1 inline-block h-[0.14em] w-[0.5em] bg-[var(--mint)] align-baseline" aria-hidden />
        </h1>
        <p className="m-0 max-w-[56ch] text-[19px] leading-snug">
          Hello! I&apos;m Selim. I&apos;m a software developer with a geomatics background. Here&apos;s a brief summary of my software journey:
        </p>
        <p className="m-0 mt-4 max-w-[56ch] text-[16px] leading-relaxed text-[var(--muted)]">
          Before software I studied <Mark>geomatics engineering</Mark> — mapping, spatial analysis and 3D data
          are where I started, and a strength I still lean on.
        </p>
      </header>

      {/* Journey */}
      <section className="border-t border-dashed border-[var(--line)] py-32">
        <Reveal>
          <p className={`m-0 mb-2 text-[13px] text-[var(--muted)] ${code}`}>01 · journey</p>
          <h2 className={`m-0 mb-10 text-[clamp(30px,5vw,44px)] font-bold leading-[1.05] ${pixel}`}>The long way round</h2>
        </Reveal>
        <div className="space-y-6">
          {journey.map((entry, i) => (
            <Reveal key={entry.file} delay={Math.min(i * 0.03, 0.15)}>
              <WindowCard title={entry.file}>
                <h3 className={`m-0 mb-4 text-[24px] font-bold leading-tight ${pixel}`}>
                  <Px>{entryTitle(entry)}</Px>
                </h3>
                <div className="space-y-3 text-[16px] leading-relaxed text-[var(--muted)]">
                  {entryBody(entry).map((item, j) => (
                    <p key={j} className="m-0">
                      {item}
                    </p>
                  ))}
                </div>
              </WindowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Beyond the code */}
      <section id="gallery" className="scroll-mt-16 border-t border-dashed border-[var(--line)] py-32">
        <Reveal>
          <p className={`m-0 mb-2 text-[13px] text-[var(--muted)] ${code}`}>02 · beyond the code</p>
          <h2 className={`m-0 mb-6 text-[clamp(30px,5vw,44px)] font-bold leading-[1.05] ${pixel}`}>Beyond the code</h2>
          <p className="m-0 mb-10 max-w-[60ch] text-[17px] leading-relaxed">
            Creativity starts for me behind the camera. Capturing fleeting moments, <strong>chasing light</strong>, and{" "}
            <strong>framing stories</strong> — photography is how I <strong>stay inspired</strong> and see the world
            differently, one shot at a time.
          </p>
        </Reveal>

        <Reveal>
          <PhotoViewer photos={photos} />
        </Reveal>
      </section>
    </CaseStudyShell>
  );
}
