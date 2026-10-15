/**
 * First-visit loading screen. Server-rendered and animated entirely in CSS (see
 * globals.css); the inline script in layout.tsx hides it on repeat visits and
 * on every page except "/". Decorative only, so it is hidden from assistive tech.
 */
const messages = ["Warming up the pixels…", "Convincing the CSS…", "Ironing the margins…", "Ready."];

export function BootScreen() {
  return (
    <div id="boot" aria-hidden="true">
      <div className="w-[min(320px,80vw)] font-[family-name:var(--font-code)] text-sm">
        <div className="mb-6 inline-block rounded-[6px] bg-[var(--bar)] px-[10px] py-[6px] font-medium text-[var(--bar-fg)]">
          S:\
        </div>
        <div className="relative mb-3 h-5">
          {messages.map((m, i) => (
            <span key={m} className="boot-msg" style={{ ["--d" as string]: `${i * 0.4}s` }}>
              {m}
            </span>
          ))}
        </div>
        <div className="h-4 border-2 border-[var(--frame)] p-[2px]">
          <div className="boot-fill h-full bg-[var(--mint)]" />
        </div>
      </div>
    </div>
  );
}
