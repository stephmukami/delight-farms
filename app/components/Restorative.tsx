const stats = [
  ["300 Rabbits", "On the farm today"],
  ["Juja", "Kiambu County, Kenya"],
];

export default function Restorative() {
  return (
    <section className="grid border-b border-espresso/10 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-20 sm:px-10 sm:py-28">
        <p className="mb-4 text-[11px] font-medium tracking-[0.2em] text-espresso/50 uppercase">
          About the farm
        </p>
        <h2 className="mb-6 max-w-md font-serif text-4xl font-light sm:text-5xl">
          Rooted in Juja.
        </h2>
        <p className="mb-10 max-w-sm text-sm leading-relaxed text-espresso/70">
          Delight Farms is a mid-sized rabbit farm in Juja, Kiambu County,
          caring for around 300 rabbits. Clean housing, good feed and daily
          attention keep our herd healthy.
        </p>
        <dl className="flex max-w-sm gap-10 border-t border-espresso/10 pt-6">
          {stats.map(([value, label]) => (
            <div key={value}>
              <dt className="font-serif text-lg">{value}</dt>
              <dd className="mt-1 text-[10px] tracking-[0.1em] text-espresso/50 uppercase">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-col justify-center bg-near-black px-6 py-20 text-cream sm:px-10 sm:py-28">
        <p className="mb-4 text-[11px] font-medium tracking-[0.2em] text-cream/50 uppercase">
          Nothing wasted
        </p>
        <h2 className="mb-6 max-w-md font-serif text-4xl font-light text-burnt-orange sm:text-5xl">
          A Closed Loop System.
        </h2>
        <p className="mb-4 max-w-sm text-sm leading-relaxed text-cream/70">
          Every part of Delight Farms feeds another. Our rabbits give us
          breeding stock and meat, and their manure goes back to the land as
          fertiliser.
        </p>
        <p className="mb-10 max-w-sm text-sm leading-relaxed text-cream/70">
          Whether you are starting a herd, stocking a kitchen or feeding your
          soil, you get produce raised close to home, with care at every step.
        </p>
        <a
          href="#"
          className="w-fit text-[11px] font-medium tracking-[0.1em] uppercase underline decoration-burnt-orange decoration-1 underline-offset-4 transition-colors hover:text-burnt-orange"
        >
          Talk to us →
        </a>
      </div>
    </section>
  );
}
