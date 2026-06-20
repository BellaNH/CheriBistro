import { motion } from 'motion/react'
import { fadeInUp, staggerDelay } from '../lib/scrollAnimation'

export default function StorySection({ config }) {
  const { storyTitle, storyText, gallery, hours, accentColor } = config

  return (
    <section id="about" className="bg-[var(--color-cream)] px-4 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
        <motion.div {...fadeInUp}>
          <h2
            className="font-serif text-2xl sm:text-3xl"
            style={{ color: 'var(--color-text)' }}
          >
            {storyTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed opacity-75">{storyText}</p>
          <a
            href="#about"
            className="mt-6 inline-block rounded-full border px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ borderColor: 'var(--color-copper)', color: 'var(--color-text)' }}
          >
            Read our story
          </a>
        </motion.div>

        <div id="gallery" className="grid grid-cols-3 gap-2">
          {gallery.map((src, i) => (
            <motion.div
              key={`${src}-${i}`}
              className="aspect-square overflow-hidden rounded-xl bg-white"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={staggerDelay(i, 0.06)}
            >
              <img
                src={src}
                alt={`${config.name} gallery ${i + 1}`}
                className="h-full w-full object-contain bg-white p-1"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="rounded-3xl p-6 text-[var(--color-cream)] sm:p-8"
          style={{ backgroundColor: accentColor }}
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] opacity-80">Opening hours</p>
          <ul className="mt-4 space-y-3 text-sm">
            {hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4 border-b border-white/15 pb-2">
                <span className="opacity-90">{row.days}</span>
                <span className="text-right">{row.time}</span>
              </li>
            ))}
          </ul>
          <p
            className="mt-6 text-xl"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            Come visit us!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
