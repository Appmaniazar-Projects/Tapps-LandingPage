"use client"

import { useState } from "react"
import Image from "next/image"
import { Home, Cloud, MapPin, AlertCircle } from "lucide-react"

// Water droplet SVG component
function WaterDroplet({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 0C12 0 0 14 0 21C0 27.075 5.373 32 12 32C18.627 32 24 27.075 24 21C24 14 12 0 12 0Z"
        fill="currentColor"
      />
      <ellipse cx="8" cy="18" rx="4" ry="5" fill="white" fillOpacity="0.3" />
    </svg>
  )
}

export function ScreenshotsSection() {
  const [activeScreen, setActiveScreen] = useState(0)

  const screens = [
    {
      id: 0,
      title: "Home",
      icon: Home,
      description: "View dam levels at a glance",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250922_083408-F3NLswq07wSpQdDz1vxBEg2ZXoSd0x.jpg",
    },
    {
      id: 1,
      title: "Weather",
      icon: Cloud,
      description: "Track weather patterns",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250922_085800-QvXzIa0hOYS7615dEcDIu8nV3SwjEk.jpg",
    },
    {
      id: 2,
      title: "Provinces",
      icon: MapPin,
      description: "Browse dams by province",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250922_083436-g2kekO9FBN1puyrj3yPgv0nh6gnATn.jpg",
    },
    {
      id: 3,
      title: "Report",
      icon: AlertCircle,
      description: "Report water issues",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250922_083444-YhL8dsUq622FiCHDxwg7ejqvOwGNMI.jpg",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#8FC9FE]/20 to-transparent blur-3xl" />

      {/* Decorative water droplets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <WaterDroplet className="absolute top-16 left-[8%] h-14 w-10 text-[#3bb4e7]/8 rotate-12" />
        <WaterDroplet className="absolute bottom-24 right-[12%] h-18 w-12 text-[#8FC9FE]/10 -rotate-8" />
        <WaterDroplet className="absolute top-1/3 right-[6%] h-10 w-7 text-[#1870b9]/6 rotate-[-12deg]" />
        <WaterDroplet className="absolute bottom-1/3 left-[5%] h-8 w-6 text-[#3bb4e7]/10 rotate-15" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary">
            App Preview
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Designed for Simplicity
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            A clean, intuitive interface that puts critical water information at your fingertips.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center">
          {/* Phone Mockup with Real Screenshot */}
          <div className="relative">
            <div className="relative h-[600px] w-[290px] overflow-hidden rounded-[3rem] border-8 border-foreground/10 bg-foreground/5 shadow-2xl">
              {/* Screen Content - Real Screenshot */}
              <Image
                src={screens[activeScreen].image}
                alt={screens[activeScreen].title}
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Glow effect */}
            <div className="absolute -bottom-10 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-[#3bb4e7]/30 blur-3xl" />
          </div>

          {/* Screen Tabs */}
          <div className="flex flex-row gap-4 lg:flex-col">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => setActiveScreen(screen.id)}
                className={`flex items-center gap-4 rounded-2xl p-4 transition-all lg:w-64 ${
                  activeScreen === screen.id
                    ? "bg-gradient-to-r from-[#1870b9] to-[#3bb4e7] text-white shadow-lg shadow-primary/20"
                    : "bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    activeScreen === screen.id ? "bg-white/20" : "bg-muted"
                  }`}
                >
                  <screen.icon className="h-6 w-6" />
                </div>
                <div className="hidden text-left lg:block">
                  <p className="font-semibold">{screen.title}</p>
                  <p className={`text-sm ${activeScreen === screen.id ? "text-white/80" : "text-muted-foreground"}`}>
                    {screen.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
