const columns = [
  {
    heading: "Visit us",
    lines: ["484 Juniper Road", "Highlands, USA"],
  },
  {
    heading: "Get in touch",
    lines: ["hello@lepori.farm", "+27 000 0000"],
  },
  {
    heading: "Follow",
    lines: ["Instagram", "The Journal"],
  },
  {
    heading: "Hours",
    lines: ["Mon — Fri: 09:00 – 17:00", "Weekends by appointment"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-near-black px-6 pt-20 pb-10 text-cream sm:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 border-b border-cream/10 pb-16 sm:grid-cols-4">
        {columns.map((col) => (
          <div key={col.heading}>
            <p className="mb-3 text-[10px] font-medium tracking-[0.15em] text-cream/50 uppercase">
              {col.heading}
            </p>
            {col.lines.map((line) => (
              <p key={line} className="text-sm text-cream/80">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center pt-10">
        <div
          aria-hidden
          className="mb-4 h-14 w-full max-w-3xl"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--cream-ivory) 0px, var(--cream-ivory) 2px, transparent 2px, transparent 6px)",
            maskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        />
        <h2 className="font-serif text-[16vw] leading-none font-light tracking-tight sm:text-[10rem]">
          LEPORI
        </h2>
        <p className="mt-6 text-[10px] tracking-[0.15em] text-cream/40 uppercase">
          © {new Date().getFullYear()} Lepori Farms. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
