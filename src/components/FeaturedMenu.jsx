import { motion } from 'motion/react'
import { fadeInUp, staggerDelay } from '../lib/scrollAnimation'

export default function FeaturedMenu({ config }) {
  const { menuItems, name, accentColor } = config

  return (
    <section id="menu" className="bg-[var(--color-cream)] px-4 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-wrap items-end justify-between gap-4"
          {...fadeInUp}
        >
          <div>
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] opacity-60"
              style={{ color: 'var(--color-text)' }}
            >
              Featured menu
            </p>
            <h2
              className="mt-2 font-serif text-3xl sm:text-4xl"
              style={{ color: 'var(--color-text)' }}
            >
              Made for you, every day
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm underline underline-offset-4 opacity-80"
            style={{ color: 'var(--color-text)' }}
          >
            View full menu
          </a>
        </motion.div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.name}
              className="overflow-hidden rounded-2xl"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={staggerDelay(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img src={item.image} alt={item.nameEn ?? item.name} className="h-full w-full object-contain p-3" />
              </div>
              <div className="flex items-start justify-between gap-3 p-4">
                <div>
                  <h3 className="font-medium leading-snug" style={{ color: 'var(--color-text)' }}>
                    {item.name}
                  </h3>
                  {item.nameEn && (
                    <p className="mt-0.5 text-xs opacity-60">{item.nameEn}</p>
                  )}
                  {item.description && (
                    <p className="mt-1 text-sm opacity-70">{item.description}</p>
                  )}
                  <p className="mt-2 text-sm font-medium" style={{ color: 'var(--color-copper)' }}>
                    {item.price}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label={`Add ${item.nameEn ?? item.name}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-[var(--color-cream)]"
                  style={{ backgroundColor: accentColor }}
                >
                  +
                </button>
              </div>
            </motion.li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs opacity-50">
          Preview for {name} — ordering not available on this demo.
        </p>
      </div>
    </section>
  )
}
