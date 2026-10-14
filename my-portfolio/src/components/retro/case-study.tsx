import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Px } from "./px";
import { Reveal } from "./reveal";
import { SiteFooter } from "./site-footer";
import { SiteNav } from "./site-nav";
import { Tag } from "./tag";
import { WindowCard } from "./window-card";

const pixel = "font-[family-name:var(--font-pixel)]";
const code = "font-[family-name:var(--font-code)]";

/** Page chrome shared by every case study: nav, main column, footer. */
export function CaseStudyShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] font-[family-name:var(--font-ui)]">
      <SiteNav />
      <main className="mx-auto max-w-[980px] px-4 pb-8">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function CaseHero({
  kicker,
  title,
  lede,
  meta,
  actions,
  note,
}: {
  kicker: string;
  title: string;
  lede: ReactNode;
  meta: [label: string, value: string][];
  actions?: ReactNode;
  note?: ReactNode;
}) {
  return (
    <header className="pb-14 pt-12 sm:pt-16">
      <p className={`m-0 mb-4 text-[13px] text-[var(--muted)] ${code}`}>{kicker}</p>
      <h1 className={`m-0 mb-5 text-[clamp(46px,9vw,84px)] font-bold leading-[1.02] ${pixel}`}>
        {title}
        <span className="ml-1 inline-block h-[0.14em] w-[0.5em] bg-[var(--mint)] align-baseline" aria-hidden />
      </h1>
      <p className="m-0 mb-8 max-w-[56ch] text-[19px] leading-snug">{lede}</p>

      <WindowCard title="details.txt" className="mb-8">
        <dl className="m-0 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {meta.map(([label, value]) => (
            <div key={label}>
              <dt className={`text-xs text-[var(--muted)] ${code}`}>{label}</dt>
              <dd className="m-0 mt-1 text-[16px] leading-snug">{value}</dd>
            </div>
          ))}
        </dl>
      </WindowCard>

      {note && (
        <div className="mb-8 rounded-[6px] border-2 border-dashed border-[var(--frame)] bg-[var(--mint-soft)] p-4 text-[15px] leading-relaxed">
          {note}
        </div>
      )}

      {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
    </header>
  );
}

/** Heading on the left, content on the right; `wide` puts the heading above full-width content. */
export function CaseSection({
  title,
  children,
  wide,
}: {
  title: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <section className="border-t border-dashed border-[var(--line)] py-14">
      <div className={cn("grid gap-8", !wide && "md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]")}>
        <Reveal>
          <h2 className={`m-0 text-[clamp(26px,4vw,34px)] font-bold leading-[1.1] ${pixel}`}>{title}</h2>
        </Reveal>
        <div className={cn(wide && "md:col-span-1")}>{children}</div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-5 text-[17px] leading-relaxed">{children}</div>;
}

/** A numbered design step rendered as a small "file". */
export function Step({
  num,
  title,
  children,
  tags,
  delay = 0,
}: {
  num: string;
  title: string;
  children: ReactNode;
  tags?: string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <WindowCard title={`step-${num}.md`}>
        <h3 className={`m-0 mb-3 text-[22px] font-semibold leading-tight ${pixel}`}>
          <Px>{title}</Px>
        </h3>
        <p className="m-0 text-[16px] leading-relaxed text-[var(--muted)]">{children}</p>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </WindowCard>
    </Reveal>
  );
}

export function Metric({ value, children }: { value: string; children: ReactNode }) {
  return (
    <div className="rounded-[6px] border-2 border-[var(--frame)] bg-[var(--mint-soft)] p-5">
      <div className={`mb-2 text-[40px] font-bold leading-none ${pixel}`}>
        <Px>{value}</Px>
      </div>
      <p className="m-0 text-[15px] leading-relaxed text-[var(--muted)]">{children}</p>
    </div>
  );
}

/** Image in a window frame, shown uncropped. */
export function Figure({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const file = src.split("/").pop() ?? "image.png";
  return (
    <figure className={cn("m-0", className)}>
      <WindowCard title={file}>
        <div className="-m-4">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 980px) 940px, 100vw"
            className="block h-auto w-full"
          />
        </div>
      </WindowCard>
      <figcaption className={`mt-3 text-xs text-[var(--muted)] ${code}`}>{alt}</figcaption>
    </figure>
  );
}

export function CaseClosing({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-dashed border-[var(--line)] py-16 text-center">
      <Reveal>
        <h2 className={`m-0 mb-8 text-[clamp(30px,5vw,44px)] font-bold ${pixel}`}>{title}</h2>
        <div className="flex flex-wrap justify-center gap-3">{children}</div>
      </Reveal>
    </section>
  );
}
