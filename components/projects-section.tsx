"use client"

import { motion } from "framer-motion"
import { Globe, Github } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
{
  title: "E-commerce Platform",
  description: "Full-stack e-commerce solution with secure payments and enhanced user navigation.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eCommerce_Platform_Pic_2000x-WrwqhYRkBg4dVaeUxvbisOkGgDBNOj.webp",
  github: "https://github.com/ja-tin/ecommerce",
  tech: ["React", "Node.js", "Express", "MongoDB", "PayPal API"],
  challenges: [
    "Implementing secure payment processing with PayPal integration",
    "Building responsive product filtering system",
    "Optimizing database queries for performance"
  ],
  achievements: [
    "Implemented JWT-based authentication system",
    "Achieved 25% faster checkout process",
    "Enhanced user navigation and search functionality"
  ]
},
{
  title: "AppleGo",
  description: "A price comparison platform for Apple products with real-time tracking and advanced filtering capabilities.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-07%20at%205.13.38%E2%80%AFPM-SsCA4XD0oVkUGdVKnEMSXXrhLyotDK.png",
  link: "https://applego-price-comparison.vercel.app",
  github: "https://github.com/ja-tin/applego",
  tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  challenges: [
    "Aggregating data from 100+ authorized retailers",
    "Implementing real-time price tracking system",
    "Creating dynamic filtering and search functionality"
  ],
  achievements: [
    "Built interactive store locator",
    "Implemented automated price alerts",
    "Developed price trend visualization"
  ]
},
{
  title: "Emotion-based Music Recommender",
  description: "An AI-powered system achieving 95% recommendation accuracy using multi-modal data and deep neural networks.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Happy-VOnp8SHKNjOUnNe1xy9rWdORXsHtpI.png",
  github: "https://github.com/ja-tin/music-recommender",
  tech: ["Python", "TensorFlow", "Scikit-learn", "Deep Learning"],
  challenges: [
    "Processing over 100,000 audio samples",
    "Integrating multi-modal data for recommendations",
    "Optimizing deep neural networks for accuracy"
  ],
  achievements: [
    "Achieved 95% recommendation accuracy",
    "Published research paper at Springer conference",
    "Improved recommendation accuracy by 30%"
  ]
},
{
  title: "Game Hub",
  description: "A modern gaming platform featuring multiple classic games including Sudoku, Tic Tac Toe, and Character Pyramid. Built with Next.js and TypeScript, featuring high scores and multiplayer capabilities.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-07%20at%205.15.54%E2%80%AFPM-qkYR00ElK4cRzm2GT5pmCYJONuvfRK.png",
  link: "https://v0-game-website.vercel.app/",
  github: "https://github.com/ja-tin/game-website",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "HTML Canvas", "React"],
  challenges: [
    "Implementing multiple game logics with reusable components",
    "Creating a responsive and engaging user interface",
    "Developing a high score system with local storage"
  ],
  achievements: [
    "Developed 3 classic games with modern interfaces",
    "Implemented persistent high score tracking",
    "Created an intuitive and responsive design"
  ]
},
{
  title: "Portfolio Website (v1)",
  description: "Personal portfolio website with a clean, minimalist design featuring a sidebar navigation, animated sections, and dark mode support. Built with vanilla web technologies.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-07%20at%205.21.33%E2%80%AFPM-pA9jzyNvUhNrh4Z9RZUFROBaXH2krw.png",
  link: "https://ja-tin.github.io/old_Portfolio-project/",
  github: "https://github.com/ja-tin/old_Portfolio-project",
  tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  challenges: [
    "Creating responsive layouts without modern frameworks",
    "Implementing smooth animations with vanilla JavaScript",
    "Building an intuitive navigation system"
  ],
  achievements: [
    "Designed a clean, minimalist interface with custom animations",
    "Implemented dark mode and theme switching",
    "Created responsive sidebar navigation"
  ]
},
{
  title: "Restaurant Website",
  description: "Modern restaurant website with elegant design and smooth animations.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-07%20at%205.26.45%E2%80%AFPM-krmhEXQnEOSD28mzy8o3muOFSdJKtH.png",
  link: "https://ja-tin.github.io/Restro-website/",
  github: "https://github.com/ja-tin/Restro-website",
  tech: ["HTML", "CSS", "JavaScript"],
  challenges: [
    "Designing intuitive navigation system",
    "Creating engaging visual elements",
    "Optimizing image loading for better performance"
  ],
  achievements: [
    "Implemented responsive layout",
    "Created interactive menu system",
    "Added smooth scrolling animations"
  ]
}
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 scroll-mt-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
          <p className="text-lg text-muted-foreground">
            Showcasing my expertise in software development
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary">
                <CardHeader className="space-y-4 p-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="aspect-video object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-4 pt-0">
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Challenges & Solutions</h4>
                      <ul className="ml-4 list-disc text-sm text-muted-foreground">
                        {project.challenges.map((challenge) => (
                          <li key={challenge} className="leading-relaxed">{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Achievements</h4>
                      <ul className="ml-4 list-disc text-sm text-muted-foreground">
                        {project.achievements.map((achievement) => (
                          <li key={achievement} className="leading-relaxed">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end space-x-4 border-t pt-6">
                    {project.link && (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button 
                          className="w-[130px] h-10"
                          variant="default"
                        >
                          <Globe className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                    {project.github && (
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button 
                          className="w-[130px] h-10"
                          variant="outline"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

