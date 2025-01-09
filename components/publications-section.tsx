"use client"

import { motion } from "framer-motion"
import { BookOpen, Award, ExternalLink, Medal } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const publications = [
  {
    title: "Multi-Agent Deep Reinforcement Learning for Hybrid Motion Planning in Dynamic Environments",
    conference: "IEEE International Conference on Emerging Trends in Networks and Computer Communications (ETNCC)",
    location: "Windhoek, Namibia",
    date: "July 23-25",
    link: "https://ieeexplore.ieee.org/document/10767440"
  },
  {
    title: "AI Based Battery Management Device For Electric Vehicle | GOVT. OF INDIA",
    description: "Co-inventor of a design patent registered under the Designs Act, 2000, Application No.: 424805-001, focused on innovative battery management for electric vehicles.",
    certificate: "https://drive.google.com/file/d/1jjrD_bXAGyao8i_PF7gS2PZh_cANzDOX/view?usp=sharing",
    link: "https://search.ipindia.gov.in/DesignApplicationStatus"
  }
]

const certifications = [
  {
    title: "Full Stack Development Training",
    organization: "IBM",
    description: "Completed comprehensive training including an industry-oriented project."
  },
  {
    title: "IEEE Conference Reviewer",
    organization: "IEEE-ETNCC 2024",
    description: "Received appreciation for reviewing at the IEEE-sponsored 2024 International Conference on Emerging Trends in Networks and Computer Communications (ETNCC)."
  },
  {
    title: "IEEE Student Chapter Leadership",
    organization: "IEEE",
    description: "Served as Membership Lead in 2023, successfully boosting chapter growth through strategic recruitment and engaging events. Fostered networking & collaboration among electrical engineering students."
  }
]

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-16 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-8"
        >
          <h2 className="text-3xl font-bold">Publications</h2>
          <p className="text-muted-foreground">
            Research contributions and intellectual property
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardHeader className="space-y-4 pb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{publication.title}</CardTitle>
                  </div>
                  {publication.conference && (
                    <CardDescription className="text-sm">
                      {publication.conference}
                      {publication.location && `, ${publication.location}`}
                      {publication.date && `, ${publication.date}`}
                    </CardDescription>
                  )}
                  {publication.description && (
                    <CardDescription className="text-sm">
                      {publication.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex justify-end gap-4">
                    {publication.certificate && (
                      <Link href={publication.certificate} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2 rounded-full px-6 hover:bg-primary hover:text-primary-foreground"
                        >
                          <Medal className="h-4 w-4" />
                          Certificate
                        </Button>
                      </Link>
                    )}
                    {publication.link && (
                      <Link href={publication.link} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="gap-2 rounded-full bg-primary px-6 hover:bg-primary/90"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Visit
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-8 mt-16"
        >
          <h2 className="text-3xl font-bold">Certifications</h2>
          <p className="text-muted-foreground">
            Professional achievements and recognitions
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardHeader className="space-y-4 pb-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{certification.title}</CardTitle>
                  </div>
                  <CardDescription className="font-medium text-sm">
                    {certification.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    {certification.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

