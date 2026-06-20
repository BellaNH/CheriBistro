export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export function staggerDelay(index, step = 0.08) {
  return { ...fadeInUp.transition, delay: index * step }
}
