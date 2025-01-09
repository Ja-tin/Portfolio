"use client"

import { useCallback } from "react"
import dynamic from "next/dynamic"

// Dynamically import Particles component with no SSR
const Particles = dynamic(() => import("react-particles"), {
  ssr: false,
  loading: () => null,
})

// Dynamically import loadSlim to avoid SSR issues
const loadParticlesEngine = async () => {
  const { loadSlim } = await import("tsparticles-slim")
  return loadSlim
}

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    const loadSlim = await loadParticlesEngine()
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      className="absolute inset-0 -z-10"
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#3b82f6",
          },
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

