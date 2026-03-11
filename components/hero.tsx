"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

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

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0d4f7a] via-[#1870b9] to-[#3bb4e7]">
      {/* Soft background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#3bb4e7]/20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-[#8FC9FE]/15 blur-3xl" />
        <div className="absolute bottom-40 right-1/3 h-64 w-64 rounded-full bg-[#3bb4e7]/25 blur-3xl" />
      </div>

      {/* Decorative water droplets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large droplets */}
        <WaterDroplet className="absolute top-20 left-[10%] h-16 w-12 text-white/5 rotate-12" />
        <WaterDroplet className="absolute top-32 right-[15%] h-20 w-14 text-[#8FC9FE]/10 -rotate-6" />
        <WaterDroplet className="absolute bottom-40 left-[20%] h-24 w-16 text-white/5 rotate-[-15deg]" />
        <WaterDroplet className="absolute top-1/2 right-[8%] h-14 w-10 text-[#3bb4e7]/15 rotate-20" />
        
        {/* Medium droplets */}
        <WaterDroplet className="absolute top-[15%] left-[30%] h-10 w-7 text-white/8 rotate-[-8deg]" />
        <WaterDroplet className="absolute top-[60%] left-[5%] h-12 w-8 text-[#8FC9FE]/10 rotate-15" />
        <WaterDroplet className="absolute bottom-[25%] right-[25%] h-10 w-7 text-white/6 rotate-[-12deg]" />
        <WaterDroplet className="absolute top-[40%] left-[45%] h-8 w-6 text-[#3bb4e7]/12 rotate-6" />
        
        {/* Small droplets */}
        <WaterDroplet className="absolute top-[25%] right-[35%] h-6 w-4 text-white/10 rotate-[-5deg]" />
        <WaterDroplet className="absolute bottom-[35%] left-[35%] h-5 w-4 text-[#8FC9FE]/15 rotate-10" />
        <WaterDroplet className="absolute top-[70%] right-[40%] h-6 w-4 text-white/8 rotate-[-18deg]" />
        <WaterDroplet className="absolute top-[10%] left-[55%] h-5 w-4 text-[#3bb4e7]/10 rotate-8" />
        <WaterDroplet className="absolute bottom-[50%] right-[12%] h-4 w-3 text-white/12 rotate-[-3deg]" />
        <WaterDroplet className="absolute top-[85%] left-[60%] h-5 w-4 text-[#8FC9FE]/8 rotate-22" />
      </div>

      <div className="container relative mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between py-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapps%20Final%20Logo-01-b3jF1KmO0SvEQO4T6h52eqyfUhrM0e.png"
            alt="TAPPS - The Water App"
            width={140}
            height={56}
            className="brightness-0 invert"
            style={{ height: 56, width: "auto" }}
          />
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
              How it Works
            </a>
            <a href="#download" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
              Download
            </a>
          </nav>
          <Button
            variant="secondary"
            className="hidden rounded-full bg-white px-6 text-[#1870b9] hover:bg-white/90 md:inline-flex"
          >
            Get the App
          </Button>
        </header>

        {/* Hero Content */}
        <div className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          <div className="text-center lg:text-left">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Proactive Water Management
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Know Your Dam Levels, Save Water
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/90 lg:mx-0">
              TAPPS empowers South Africans with real-time dam levels, weather forecasts, and metro insights to adopt proactive water-saving behaviour based on current and anticipated water availability.
            </p>

            {/* App Store Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              {/* Google Play Badge */}
              <a
                href="#"
                className="group flex h-[58px] items-center gap-3 rounded-xl bg-black px-5 transition-all hover:scale-105 hover:bg-black/90"
              >
                <svg className="h-8 w-8" viewBox="0 0 512 512" fill="none">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#ffffff"/>
                </svg>
                <div className="text-left text-white">
                  <div className="text-[10px] font-medium uppercase tracking-wider opacity-80">Get it on</div>
                  <div className="text-lg font-semibold leading-tight">Google Play</div>
                </div>
              </a>
              
              {/* Huawei AppGallery Badge */}
              <a
                href="#"
                className="group flex h-[58px] items-center gap-3 rounded-xl bg-black px-5 transition-all hover:scale-105 hover:bg-black/90"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FF0000"/>
                  <path d="M2 17l10 5 10-5" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12l10 5 10-5" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" fill="#ffffff"/>
                </svg>
                <div className="text-left text-white">
                  <div className="text-[10px] font-medium uppercase tracking-wider opacity-80">Explore it on</div>
                  <div className="text-lg font-semibold leading-tight">AppGallery</div>
                </div>
              </a>
            </div>
            <p className="mt-4 text-sm text-white/70">Coming soon to Apple App Store</p>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative h-[580px] w-[280px] overflow-hidden rounded-[3rem] border-8 border-white/20 bg-gradient-to-b from-[#1870b9] to-[#3bb4e7] shadow-2xl backdrop-blur-sm">
                <div className="absolute left-1/2 top-4 h-6 w-24 -translate-x-1/2 rounded-full bg-black/20" />
                <div className="flex h-full flex-col items-center justify-center p-6 pt-12">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapps%20Final%20Logo-05-glTfrCGyitz0t1auClo76dDJPzD9E4.png"
                    alt="TAPPS Icon"
                    width={80}
                    height={100}
                    className="mb-6"
                  />
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold">Welcome to TAPPS</h3>
                    <p className="mt-2 text-sm text-white/80">Your water management companion</p>
                  </div>
                  {/* Mock App UI */}
                  <div className="mt-8 w-full space-y-3">
                    <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Water Level</div>
                          <div className="text-xs text-white/70">85% Capacity</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Weather</div>
                          <div className="text-xs text-white/70">Clear skies ahead</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -left-8 top-1/3 h-24 w-24 rounded-full bg-[#8FC9FE]/40 blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
