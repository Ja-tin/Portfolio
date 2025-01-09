"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { fadeInUp, staggerContainer } from "@/styles/animations"

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 scroll-mt-16">
      <div className="absolute inset-0 bg-grid-small-white/[0.02]" />
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold tracking-tight">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden border border-border bg-card p-8 hover:border-primary transition-all duration-300">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:jatin.chopra@gwu.edu" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        jatin.chopra@gwu.edu
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <Link 
                        href="tel:+15712370712" 
                        className="text-muted-foreground hover:text-primary"
                      >
                        +1 (571) 237-0712
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Arlington, VA, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-4">
                      <Link href="https://github.com/ja-tin" target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-12 w-12 rounded-full hover:bg-primary hover:text-white"
                        >
                          <Github className="h-6 w-6" />
                        </Button>
                      </Link>
                      <Link href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-12 w-12 rounded-full hover:bg-primary hover:text-white"
                        >
                          <Linkedin className="h-6 w-6" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

