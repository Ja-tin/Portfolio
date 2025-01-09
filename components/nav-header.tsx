"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { Menu } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { scrollToSection } from "@/lib/smooth-scroll"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experience" },
  { name: "Publications", href: "publications" },
  { name: "Contact", href: "contact" },
]

export default function NavHeader() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg"
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-[0%]"
        style={{ scaleX }}
      />
      <div className="container flex h-16 items-center justify-between px-4">
        <Link 
          href="#" 
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('about')
          }}
          className="text-2xl font-bold tracking-tight text-gradient"
        >
          JC
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </button>
            ))}
          </nav>
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <div className="flex flex-col gap-6 pt-16">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => {
                      scrollToSection(item.href)
                      setIsOpen(false)
                    }}
                    className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

