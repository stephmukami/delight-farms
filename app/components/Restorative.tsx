const stats = [
  ["6.3 KG / AVG", "Average yield per hectare"],
  ["High Plateau", "Grazing altitude"],
];

export default function Restorative() {
  return (
    <section className="grid border-b border-espresso/10 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-20 sm:px-10 sm:py-28">
        <p className="mb-4 text-[11px] font-medium tracking-[0.2em] text-espresso/50 uppercase">
          Our philosophy
        </p>
        <h2 className="mb-6 max-w-md font-serif text-4xl font-light sm:text-5xl">
          Restorative Agriculture.
        </h2>
        <p className="mb-10 max-w-sm text-sm leading-relaxed text-espresso/70">
          We do not just farm, we curate a landscape. By integrating our
          rabbits into a holistic grazing cycle, we transform barren topsoil
          into a thriving ecosystem.
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
          Impact &amp; waste
        </p>
        <h2 className="mb-6 max-w-md font-serif text-4xl font-light text-burnt-orange sm:text-5xl">
          A Closed Loop System.
        </h2>
        <p className="mb-4 max-w-sm text-sm leading-relaxed text-cream/70">
          Every byproduct of Delight Farms is input to another life. The hay feeds
          the rabbits, the soil absorbs the calculus of this rhythmic natural
          symphony.
        </p>
        <p className="mb-10 max-w-sm text-sm leading-relaxed text-cream/70">
          Our packaging is compostable, our carbon footprint is monitored
          monthly, and our commitment to the animal is absolute.
        </p>
        <a
          href="#"
          className="w-fit text-[11px] font-medium tracking-[0.1em] uppercase underline decoration-burnt-orange decoration-1 underline-offset-4 transition-colors hover:text-burnt-orange"
        >
          To learn more →
        </a>
      </div>
    </section>
  );
}
