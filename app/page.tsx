import ContactSection from "@/components/contact-section"
import ExperienceSection from "@/components/experience-section"
import HeroSection from "@/components/hero-section"
import NavHeader from "@/components/nav-header"
import ParticlesBackgroundAlt from "@/components/particles-background-alt" // Updated import
import ProjectsSection from "@/components/projects-section"
import PublicationsSection from "@/components/publications-section"
import SkillsSection from "@/components/skills-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <NavHeader />
      <ParticlesBackgroundAlt /> {/* Updated component */}
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <footer className="border-t bg-background/50 backdrop-blur-lg">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Jatin Chopra. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

