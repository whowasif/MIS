export const homeViewport = { once: true, amount: 0.2 }

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
}

export const reducedFade = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
}

export const motionState = (reduce) => (reduce ? reducedFade : fadeUp)
