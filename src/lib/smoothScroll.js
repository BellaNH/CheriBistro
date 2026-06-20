import { animate } from 'motion/react'

const SCROLL_EASE = [0.22, 1, 0.36, 1]
const SCROLL_DURATION = 1.25
const SCROLL_OFFSET = 12

export function scrollToSection(id) {
  const targetY =
    id === 'top'
      ? 0
      : (() => {
          const el = document.getElementById(id)
          if (!el) return null
          return el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
        })()

  if (targetY === null) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo(0, targetY)
    return
  }

  animate(window.scrollY, targetY, {
    duration: SCROLL_DURATION,
    ease: SCROLL_EASE,
    onUpdate: (value) => window.scrollTo(0, value),
  })
}

export function handleAnchorClick(e) {
  const anchor = e.target.closest('a[href^="#"]')
  if (!anchor) return

  const hash = anchor.getAttribute('href')
  if (!hash || hash === '#') return

  const id = hash.slice(1) || 'top'
  if (id !== 'top' && !document.getElementById(id)) return

  e.preventDefault()
  scrollToSection(id)
}
