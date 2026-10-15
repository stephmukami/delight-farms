import Image from "next/image";
import logo from "../delight-farms-logo.svg";

// Juja, Kiambu County — update to the farm's exact pin when confirmed.
const farm = { lat: -1.1018, lng: 37.0144, zoom: 13 };
const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
const pin = `pin-l+c2410c(${farm.lng},${farm.lat})`;
// mapbox://styles/stephaniemukami/cmv9xugr5015e01r7ci9jczu2
const mapStyle = "stephaniemukami/cmv9xugr5015e01r7ci9jczu2";
const mapSrc = `https://api.mapbox.com/styles/v1/${mapStyle}/static/${pin}/${farm.lng},${farm.lat},${farm.zoom},0/1200x400@2x?access_token=${mapboxToken}`;
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${farm.lat},${farm.lng}`;

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
      <div className="mx-auto mb-14 max-w-7xl border-b border-espresso/10 pb-10">
        <h3 className="mb-6 font-serif text-3xl font-light text-burnt-orange sm:text-4xl">
          Find Us
        </h3>
        {mapboxToken ? (
          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions to Delight Farms in Juja, Kiambu County"
            className="relative block aspect-[3/2] w-full overflow-hidden rounded-3xl bg-tan sm:aspect-[3/1]"
          >
            <Image
              src={mapSrc}
              alt="Map showing Delight Farms in Juja, Kiambu County, Kenya"
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover"
              unoptimized
            />
          </a>
        ) : (
          <p className="text-sm text-espresso/60">
            Juja, Kiambu County, Kenya
          </p>
        )}
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[11px] font-medium tracking-[0.1em] text-espresso uppercase underline decoration-burnt-orange decoration-1 underline-offset-4 transition-colors hover:text-burnt-orange"
        >
          Get directions →
        </a>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-center">
        <div className="shrink-0 sm:w-56">
          <Image src={logo} alt="Delight Farms" className="h-20 w-auto" />
          <p className="mt-4 max-w-56 text-xs leading-relaxed text-espresso/50">
            © {new Date().getFullYear()} Delight Farms. Live rabbits, rabbit
            meat and manure from Juja, Kenya.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
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
        </div>
      </div>
    </footer>
  );
}
