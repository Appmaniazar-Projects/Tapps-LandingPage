"use client"

import { useState } from "react"
import Image from "next/image"
import { Home, Cloud, MapPin, AlertCircle } from "lucide-react"
import { FluidBackground } from "@/components/ui/fluid-background"

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
    <FluidBackground variant="steps" className="relative overflow-hidden py-20 md:py-28">
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur-sm">
            App Preview
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Designed for Simplicity
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/85">
            A clean, intuitive interface that puts critical water information at your fingertips.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center">
          {/* Phone Mockup with Real Screenshot */}
          <div className="relative">
            <div className="relative h-[600px] w-[290px] overflow-hidden rounded-[3rem] border-8 border-white/15 bg-white/5 shadow-2xl backdrop-blur-sm">
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
            <div className="absolute -bottom-10 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-white/15 blur-3xl" />
          </div>

          {/* Screen Tabs */}
          <div className="flex flex-row gap-4 lg:flex-col">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => setActiveScreen(screen.id)}
                className={`flex items-center gap-4 rounded-2xl p-4 transition-all lg:w-64 ${
                  activeScreen === screen.id
                    ? "bg-white text-[#1973bb] shadow-lg shadow-black/10"
                    : "bg-white/10 text-white/80 ring-1 ring-white/15 hover:bg-white/15"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    activeScreen === screen.id ? "bg-[#1973bb]/10" : "bg-white/10"
                  }`}
                >
                  <screen.icon className="h-6 w-6" />
                </div>
                <div className="hidden text-left lg:block">
                  <p className="font-semibold">{screen.title}</p>
                  <p className={`text-sm ${activeScreen === screen.id ? "text-[#1973bb]/80" : "text-white/70"}`}>
                    {screen.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </FluidBackground>
  )
}
