import type { Variant, Variants } from "framer-motion"

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleOnHover: Variants = {
  whileHover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
}

