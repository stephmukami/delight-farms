const links = ["The Harvest", "The Life", "The Earth", "Contact"];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
      <span className="font-spicy text-xl tracking-wide text-espresso sm:text-2xl">
        Delight Farms
      </span>
      <nav className="hidden gap-8 text-[11px] font-medium tracking-[0.15em] text-espresso uppercase sm:flex">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="transition-colors hover:text-burnt-orange"
          >
            {link}
          </a>
        ))}
      </nav>
      <button className="text-[11px] font-medium tracking-[0.15em] text-espresso uppercase sm:hidden">
        Menu
      </button>
    </header>
  );
}
