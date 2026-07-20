import Image from "next/image";

const highlights = [
  ["01", "Raised on open pasture"],
  ["02", "Finished slow, never rushed"],
  ["03", "Zero-waste packaging"],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-espresso/10 bg-cream px-6 pt-28 pb-16 text-espresso sm:px-10 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-end lg:gap-16">
        <div>
          <p className="mb-4 text-[11px] font-medium tracking-[0.2em] text-burnt-orange uppercase">
            The first-ever restorative collection
          </p>
          <h1 className="font-serif text-[15vw] leading-[0.9] font-light tracking-tight sm:text-7xl lg:text-8xl">
            Pure
            <br />
            Food.
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-espresso/70">
            An exploration of intentionality. We raise our rabbits with
            dignity, enriching the soil they graze on for the good of the
            planet — and the perfect meal for your dog.
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm sm:aspect-[5/6]">
            <Image
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=1200&q=80&auto=format&fit=crop"
              alt="Golden retriever sitting in a sunlit meadow"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-4 border-t border-espresso/10 pt-6 sm:grid-cols-3">
            {highlights.map(([n, label]) => (
              <li key={n} className="text-xs text-espresso/70">
                <span className="mr-2 font-serif text-burnt-orange">{n}</span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
