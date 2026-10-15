import Image from "next/image";

const cards = [
  {
    kicker: "From our farm",
    title: "Live Rabbits",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=900&q=80&auto=format&fit=crop",
    alt: "White rabbit resting in a garden",
    copy: "Healthy, well-handled rabbits for breeding stock, starter herds or pets. Ask us which breeds and ages are available.",
    cta: "Enquire about rabbits",
  },
  {
    kicker: "From our farm",
    title: "Rabbit Meat",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80&auto=format&fit=crop",
    alt: "Golden wheat field at sunset",
    copy: "Lean, high-protein rabbit meat, freshly slaughtered and cleanly dressed. Whole rabbits for homes, hotels and restaurants.",
    cta: "Order rabbit meat",
  },
  {
    kicker: "From our farm",
    title: "Rabbit Manure",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80&auto=format&fit=crop",
    alt: "Dark, nutrient-rich soil",
    copy: "Rabbit manure is one of the richest natural fertilisers. Sold by the bag for farms, kitchen gardens and nurseries.",
    cta: "Buy manure",
  },
];

export default function Provisions() {
  return (
    <section className="border-b border-espresso/10 bg-tan/40 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-[11px] font-medium tracking-[0.2em] text-espresso/60 uppercase">
              Delight Farms
            </p>
            <h2 className="font-serif text-5xl font-light text-burnt-orange sm:text-6xl">
              Our Produce
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-espresso/60 uppercase">
            Three things from one farm: live rabbits, fresh rabbit meat and
            organic rabbit manure.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title}>
              <p className="mb-2 text-[10px] font-medium tracking-[0.15em] text-espresso/50 uppercase">
                {card.kicker}
              </p>
              <h3 className="mb-4 font-serif text-2xl font-light">
                {card.title}
              </h3>
              <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-sm bg-tan">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mb-4 text-sm leading-relaxed text-espresso/70">
                {card.copy}
              </p>
              <a
                href="#"
                className="text-[11px] font-medium tracking-[0.1em] text-espresso uppercase underline decoration-burnt-orange decoration-1 underline-offset-4 transition-colors hover:text-burnt-orange"
              >
                {card.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
