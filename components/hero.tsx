"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FluidBackground } from "@/components/ui/fluid-background"

export function Hero() {
  return (
    <FluidBackground variant="hero" className="relative min-h-screen">
      <div className="container relative mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between py-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapps%20Final%20Logo-01-b3jF1KmO0SvEQO4T6h52eqyfUhrM0e.png"
            alt="TAPPS - The Water App"
            width={300}
            height={120}
            className="h-16 w-auto brightness-0 invert md:h-20"
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
            className="hidden rounded-full bg-white px-6 text-[#1870b9] shadow-sm hover:bg-white/90 md:inline-flex"
          >
            Get the App
          </Button>
        </header>

        {/* Hero Content */}
        <div className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur-sm">
              Real-time water insights
            </span>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Know your dam levels.
              <span className="block text-white/90">Plan ahead. Save water.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-white/90 lg:mx-0">
              TAPPS gives you live dam levels, weather forecasts, and metro insights so you can make proactive water-saving
              decisions based on what’s happening now and what’s coming next.
            </p>

            {/* App Store Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              {/* Google Play Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=com.tapps.appmaniazar&hl=en_ZA"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-white px-6 text-[#1870b9] shadow-sm transition-transform hover:scale-[1.02] hover:bg-white/95"
              >
                <Image 
                  src="/google-play-logo.png"
                  alt="Google Play"
                  width={32}
                  height={32}
                  className="h-7 w-7"
                />
                <div className="text-left">
                  <div className="text-[10px] font-medium uppercase tracking-wider opacity-70">Get it on</div>
                  <div className="text-base font-semibold leading-tight">Google Play</div>
                </div>
              </a>
              
              {/* Huawei AppGallery Badge */}
              <a
                href="https://appgallery.huawei.com/app/C116559651"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-white/10 px-6 text-white shadow-sm ring-1 ring-white/20 backdrop-blur-sm transition-transform hover:scale-[1.02] hover:bg-white/15"
              >
                <Image 
                  src="/Huawei-AppGallery-logo.png"
                  alt="AppGallery"
                  width={32}
                  height={32}
                  className="h-7 w-7"
                />
                <div className="text-left">
                  <div className="text-[10px] font-medium uppercase tracking-wider opacity-80">Explore it on</div>
                  <div className="text-base font-semibold leading-tight">AppGallery</div>
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
    </FluidBackground>
  )
}
