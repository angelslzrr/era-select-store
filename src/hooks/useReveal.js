import { useLayoutEffect } from 'react'

/**
 * Scroll-reveal: marks every [data-reveal] child of `ref` as hidden, then
 * reveals each one once it enters the viewport. Uses transform + opacity only.
 * Falls back to visible content if IntersectionObserver is unavailable.
 */
export default function useReveal(ref) {
  useLayoutEffect(() => {
    const root = ref.current
    if (!root || !('IntersectionObserver' in window)) return

    const items = root.querySelectorAll('[data-reveal]')
    items.forEach((el, i) => {
      el.classList.add('reveal')
      el.style.setProperty('--reveal-delay', `${(Number(el.dataset.reveal) || i) * 60}ms`)
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ref])
}
