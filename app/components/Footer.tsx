const columns = [
  {
    heading: "Visit us",
    lines: ["Juja", "Kiambu County, Kenya"],
  },
  {
    heading: "Get in touch",
    lines: ["hello@delight.farm", "+254 795 665 995"],
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
    <footer className="relative overflow-hidden border-t border-espresso/10 bg-cream px-6 py-14 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-center">
        <div className="relative h-28 w-full shrink-0 overflow-hidden sm:h-32 sm:w-48">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--espresso-brown) 0px, var(--espresso-brown) 2px, transparent 2px, transparent 7px)",
              opacity: 0.12,
            }}
          />
          <h2 className="absolute top-1/2 left-0 origin-left -translate-y-1/2 -rotate-90 bg-gradient-to-r from-espresso to-burnt-orange bg-clip-text font-serif text-8xl leading-none font-light whitespace-nowrap text-transparent sm:text-9xl">
            DELIGHT FARMS
          </h2>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-5">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-3 text-[10px] font-medium tracking-[0.15em] text-espresso/50 uppercase">
                {col.heading}
              </p>
              {col.lines.map((line) => (
                <p key={line} className="text-sm text-espresso/80">
                  {line}
                </p>
              ))}
            </div>
          ))}
          <p className="col-span-2 text-xs leading-relaxed text-espresso/50 sm:col-span-1">
            © {new Date().getFullYear()} Delight Farms. Live rabbits, rabbit
            meat and manure from Juja, Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}
