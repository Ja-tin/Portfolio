"use client"

import { motion } from "framer-motion"
import { Code2, Database, Layout, Server, Settings, Terminal } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
{
  title: "Programming Languages",
  icon: Code2,
  skills: [
    { name: "Java", level: 90 },
    { name: "C++", level: 85 },
    { name: "JavaScript/TypeScript", level: 82 },
    { name: "Python", level: 80 },
  ],
},
{
  title: "Frontend Development",
  icon: Layout,
  skills: [
    { name: "React.js", level: 92 },
    { name: "Next.js", level: 88 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
  ],
},
{
  title: "Backend Development",
  icon: Server,
  skills: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 82 },
    { name: "Django", level: 80 },
    { name: "RESTful APIs", level: 88 },
  ],
},
{
  title: "Databases",
  icon: Database,
  skills: [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 82 },
    { name: "PostgreSQL", level: 80 },
    { name: "Redis", level: 75 },
  ],
},
{
  title: "Developer Tools",
  icon: Terminal,
  skills: [
    { name: "Git", level: 90 },
    { name: "IntelliJ", level: 88 },
    { name: "VS Code", level: 95 },
    { name: "Command Line", level: 88 },
  ],
},
{
  title: "Other Technologies",
  icon: Settings,
  skills: [
    { name: "AWS", level: 80 },
    { name: "CI/CD", level: 78 },
    { name: "Testing", level: 85 },
    { name: "Agile/Scrum", level: 88 },
  ],
},
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 scroll-mt-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight">Skills</h2>
          <p className="text-lg text-muted-foreground">
            Technical expertise and proficiency across various technologies
          </p>
        </motion.div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
                <CardHeader className="space-y-1 pb-4">
                  <div className="flex items-center gap-2">
                    <category.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                  <CardDescription>
                    Proficiency in key technologies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

