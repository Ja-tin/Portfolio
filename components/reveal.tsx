"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  width?: "fit-content" | "100%"
}

export default function Reveal({ children, width = "fit-content" }: RevealProps) {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  )
}

