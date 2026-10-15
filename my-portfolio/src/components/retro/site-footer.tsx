const links = [
  { name: "X", href: "https://x.com/jesusselimm" },
  { name: "LinkedIn", href: "https://linkedin.com/in/selim-kurtulmus" },
  { name: "GitHub", href: "https://github.com/jesusselimm" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-dashed border-[var(--line)] bg-[var(--bg)]">
      <div className="mx-auto flex max-w-[980px] flex-col gap-3 px-4 py-8 font-[family-name:var(--font-code)] text-[13px] sm:flex-row sm:items-center sm:justify-between">
        <div className="text-[var(--muted)]">
          <p className="m-0">Hand-built with too much care. © {new Date().getFullYear()} Selim Kurtulmuş</p>
          <p className="m-0 mt-1 text-xs">Press D for dark mode. Press ? for nothing.</p>
        </div>
        <ul className="flex gap-4">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--mint-deep)] underline decoration-2 underline-offset-[3px] hover:bg-[var(--mint-soft)]"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
