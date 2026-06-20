import { motion } from 'motion/react'
import { fadeInUp } from '../lib/scrollAnimation'

function Stars({ count }) {
  return (
    <span style={{ color: 'var(--color-copper)' }} aria-label={`${count} stars`}>
      {'★'.repeat(count)}
    </span>
  )
}

function OrderButton({ orderCtaText, className = '' }) {
  return (
    <a
      href="#contact"
      className={`rounded-full bg-[var(--color-cream)] px-5 py-2.5 text-sm font-medium ${className}`}
      style={{ color: 'var(--color-text)' }}
    >
      {orderCtaText.toUpperCase()}
    </a>
  )
}

export default function ChefTestimonial({ config }) {
  const { chefSpecial, testimonial, accentColor, orderCtaText } = config

  return (
    <section className="bg-[var(--color-cream)] px-4 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <motion.div
          className="flex flex-col justify-between rounded-3xl p-6 text-[var(--color-cream)] sm:p-8 md:flex-row md:items-center md:gap-6 lg:flex-row lg:items-center lg:gap-6"
          style={{ backgroundColor: accentColor }}
          {...fadeInUp}
        >
          <div className="max-w-sm">
            <p className="text-xs uppercase tracking-[0.2em] opacity-80">Chef&apos;s special</p>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{chefSpecial.name}</h3>
            {chefSpecial.nameEn && (
              <p className="mt-1 text-sm opacity-80">{chefSpecial.nameEn}</p>
            )}
            <p className="mt-3 text-sm leading-relaxed opacity-90">{chefSpecial.description}</p>
            <p className="mt-4 text-xl font-medium">{chefSpecial.price}</p>
            <OrderButton orderCtaText={orderCtaText} className="mt-6 hidden md:inline-block" />
          </div>
          <div className="mt-6 flex shrink-0 flex-col items-center md:mt-0 lg:mt-0">
            <img
              src={chefSpecial.image}
              alt={chefSpecial.nameEn ?? chefSpecial.name}
              className="h-40 w-40 rounded-full object-contain bg-white p-1 ring-4 ring-white/20 sm:h-48 sm:w-48"
            />
            <OrderButton orderCtaText={orderCtaText} className="mt-4 md:hidden" />
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.12 }}
        >
          <p
            className="text-xs font-medium uppercase tracking-[0.2em] opacity-60"
            style={{ color: 'var(--color-text)' }}
          >
            What our guests say
          </p>
          <blockquote
            className="mt-4 font-serif text-xl leading-relaxed sm:text-2xl"
            style={{ color: 'var(--color-text)' }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium" style={{ color: 'var(--color-text)' }}>
                {testimonial.author}
              </p>
              <Stars count={testimonial.rating} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
