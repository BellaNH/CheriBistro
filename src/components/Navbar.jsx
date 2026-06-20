import { resolveHeaderLogo } from '../lib/restaurantAssets'

const navLinks = ['Home', 'Menu', 'About', 'Gallery', 'Contact']

export default function Navbar({ config }) {
  const { brandSubtitle, orderCtaText, accentSecondary, name } = config
  const logo = resolveHeaderLogo(config)
  const textColor = config.colors?.text ?? '#422119'

  return (
    <header
      className="border-b bg-[var(--color-cream)]"
      style={{ borderColor: `${config.accentColor}33` }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          {logo ? (
            <img
              src={logo}
              alt={name}
              className="h-16 w-auto rounded-lg object-contain sm:h-[4.5rem]"
            />
          ) : (
            <div>
              <p
                className="font-serif text-xl font-semibold tracking-wide lg:text-2xl"
                style={{ color: textColor }}
              >
                {name.toUpperCase()}
              </p>
              <p className="text-[10px] tracking-[0.2em] opacity-70 sm:text-xs">
                {brandSubtitle}
              </p>
            </div>
          )}
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link === 'Home' ? 'top' : link.toLowerCase()}`}
              className="text-sm opacity-80 transition-opacity hover:opacity-100"
              style={{ color: textColor }}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#menu"
            className="rounded-full px-4 py-2 text-xs font-medium text-[var(--color-cream)] sm:px-5 sm:text-sm"
            style={{ backgroundColor: accentSecondary }}
          >
            {orderCtaText.toUpperCase()}
          </a>
        </div>
      </div>
    </header>
  )
}
