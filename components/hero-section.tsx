"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, FileText, Download } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'

import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/smooth-scroll"

export default function HeroSection() {
  return (
    <section id="about" className="relative pt-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Image Column - Moved to first on mobile for better visual hierarchy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:order-last"
          >
            <div className="relative h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]">
              <div className="absolute inset-0 animate-border rounded-full bg-gradient-to-r from-primary to-primary-foreground bg-[length:200%_200%] p-0.5">
                <div className="h-full w-full rounded-full border-2 border-border/50 bg-background">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Photo.jpg-JfsqHyrNnjBqdNcniJ8Pn0bEykXtUK.jpeg"
                    alt="Jatin Chopra"
                    fill
                    className="rounded-full object-cover transition duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                Hi, I&apos;m{" "}
                <span className="text-gradient">Jatin Chopra</span>
              </h1>
              <div className="h-12 text-xl font-medium text-muted-foreground sm:text-2xl">
                <TypeAnimation
                  sequence={[
                    'Specializing in Full Stack Development',
                    1500,
                    'Specializing in Software Engineering',
                    1500,
                    'Specializing in Frontend Development',
                    1500,
                    'Specializing in Backend Development',
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <p className="mx-auto max-w-[600px] text-base text-muted-foreground sm:text-lg lg:mx-0">
                Currently pursuing Master&apos;s in Computer Science at George Washington University.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
              <Button
                onClick={() => scrollToSection('contact')}
                className="group relative h-11 rounded-full bg-primary px-6 hover:bg-primary/90"
              >
                Let&apos;s Connect
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <a 
                href="https://docs.google.com/document/d/1BMOc1DpyETBIjqUXBXo53iQRHuNssh7w3Nw76FFZx7s/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="group h-11 rounded-full px-6 hover:bg-primary hover:text-primary-foreground"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </Button>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Link href="https://github.com/ja-tin" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-10 w-10 rounded-full hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/jatin-chopra-/" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-10 w-10 rounded-full hover:bg-primary hover:text-primary-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <a href="mailto:jatin.chopra@gwu.edu">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-10 w-10 rounded-full hover:bg-primary hover:text-primary-foreground"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

