import { resolveFooterLogo } from '../lib/restaurantAssets'

export default function Footer({ config }) {
  const { name, brandSubtitle, ctaText } = config
  const logo = resolveFooterLogo(config)
  const footerBg = config.colors?.footer ?? config.colors?.orange ?? '#FF7A20'

  return (
    <footer className="text-[var(--color-cream)]" style={{ backgroundColor: footerBg }}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 py-12 md:grid-cols-3 lg:grid-cols-4 lg:px-8">
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          {logo ? (
            <div className="relative h-14 overflow-visible">
              <img
                src={logo}
                alt={name}
                className="absolute bottom-0 left-0 h-[4.5rem] w-auto object-contain sm:h-20"
              />
            </div>
          ) : (
            <>
              <p className="font-serif text-xl font-semibold">{name.toUpperCase()}</p>
              <p className="mt-1 text-xs tracking-[0.15em] opacity-90">{brandSubtitle}</p>
            </>
          )}
          <p className="mt-4 text-sm leading-relaxed opacity-90">
            {config.bio ?? config.tagline}
          </p>
        </div>

        <div className="pl-5 md:pl-0">
          <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-80">
            Quick links
          </p>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li><a href="#top" className="hover:opacity-100">Home</a></li>
            <li><a href="#menu" className="hover:opacity-100">Menu</a></li>
            <li><a href="#about" className="hover:opacity-100">About</a></li>
            <li><a href="#contact" className="hover:opacity-100">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-80">
            Info
          </p>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li>Reservations</li>
            <li>Private events</li>
            <li>{config.contact?.website}</li>
          </ul>
        </div>

        <div className="col-span-2 flex flex-col items-center text-center md:col-span-1 md:items-start md:text-left lg:col-span-1">
          <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-80">
            Contact
          </p>
          <a
            href="#reservation"
            className="mt-4 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
            style={{ color: 'var(--color-text)' }}
          >
            {ctaText}
          </a>
        </div>
      </div>

      <div className="border-t border-white/20 px-4 py-4 text-center text-xs opacity-80 lg:px-8">
        © {new Date().getFullYear()} {name}. Preview demo — not a live ordering site.
      </div>
    </footer>
  )
}
