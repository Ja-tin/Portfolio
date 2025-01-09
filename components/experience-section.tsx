"use client"

import { motion } from "framer-motion"
import { Building2, Calendar, GraduationCap } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
{
  company: "Nyadeko",
  position: "Web Developer Intern",
  period: "Mar 2023 - Aug 2023",
  location: "India",
  achievements: [
    "Architected a high-performance website using React and TypeScript, optimizing site structure and content delivery, based on user feedback and testing, which resulted in a noticeable reduction in load times by 10% and improved user retention.",
    "Directed the overhaul of the website architecture for responsive design, enhancing loading times and interactions, which led to a 25% reduction in customer support inquiries related to accessibility issues.",
    "Collaborated with cross-functional teams to ensure seamless integration and high-quality web performance across multiple browsers, minimizing cross-browser issues by 40%.",
  ],
},
{
  company: "Oasis Infobyte",
  position: "Frontend Developer Intern",
  period: "Feb 2023 - Mar 2023",
  location: "India",
  achievements: [
    "Contributed to the development of 3 full-stack web applications, including an e-commerce payment page and a coffee shop website & chatbot, enhancing functionality and gaining hands-on experience in both front-end and back-end technologies.",
    "Enhanced UI/UX of websites by implementing design improvements and resolving 20+ bugs, resulting in smoother navigation and a 15% boost in user engagement.",
  ],
},
{
  company: "SkyScaper Buildtech",
  position: "Full Stack Intern",
  period: "Mar 2022 - Sep 2022",
  location: "India",
  achievements: [
    "Developed and optimized the front-end using React.js and managed database operations with SQL and MongoDB, leading to a 15% improvement in overall system performance and a significant reduction in crash rates during performance testing.",
    "Resolved critical bugs and optimized back-end functionality, addressing a major issue that impacted 2,000 users, resulting in a 15% reduction in error rates and smoother operations across the platform.",
    "Designed responsive web layouts to ensure consistent user experience across devices and browsers, leading to a 5% increase in user engagement and improved compatibility across multiple platforms.",
  ],
},
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 scroll-mt-16 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight">Experience</h2>
          <p className="text-lg text-muted-foreground">
            Professional journey and achievements in software development
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
                <CardHeader className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      <CardTitle>{experience.company}</CardTitle>
                    </div>
                    <div className="space-y-2">
                      <span className="block font-medium text-foreground">
                        {experience.position}
                      </span>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-3 text-sm text-muted-foreground">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="leading-relaxed">{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

