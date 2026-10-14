const items = [
  "Selim Kurtulmuş",
  "Front-end developer",
  "Geomatics engineer",
  "Samplify founder",
  "3D GIS & CesiumJS",
  "UI/UX design",
  "Building with AI",
  "Design engineer",
  "Open to collaborations",
  "Grad student",
  "Spatial analysis",
  "Izmir",
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="m-0 flex shrink-0 list-none items-center gap-6 p-0 pr-6">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-6 whitespace-nowrap">
          <span>{item}</span>
          <span className="text-[var(--mint-deep)]">✦</span>
        </li>
      ))}
    </ul>
  );
}

export function Ticker() {
  return (
    <div
      className="overflow-hidden border-y-2 border-[var(--frame)] bg-[var(--bg-2)] py-3 font-[family-name:var(--font-pixel)] text-xl"
      role="presentation"
    >
      <div className="flex w-max animate-[retro-ticker_80s_linear_infinite] motion-reduce:animate-none hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
        <Row hidden />
        <Row hidden />
      </div>
    </div>
  );
}
