import Image from "next/image"

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

export function CTASection() {
  return (
    <section id="download" className="relative overflow-hidden bg-gradient-to-br from-[#0d4f7a] via-[#1870b9] to-[#3bb4e7] py-20 md:py-28">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-[#3bb4e7]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-[#8FC9FE]/15 blur-3xl" />
      </div>
      
      {/* Decorative water droplets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <WaterDroplet className="absolute top-12 left-[12%] h-14 w-10 text-white/5 rotate-12" />
        <WaterDroplet className="absolute bottom-20 right-[10%] h-18 w-12 text-[#8FC9FE]/10 -rotate-8" />
        <WaterDroplet className="absolute top-1/3 right-[15%] h-10 w-7 text-white/8 rotate-[-12deg]" />
        <WaterDroplet className="absolute bottom-1/3 left-[8%] h-8 w-5 text-[#3bb4e7]/12 rotate-15" />
        <WaterDroplet className="absolute top-[60%] right-[30%] h-6 w-4 text-white/6 rotate-6" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapps%20Final%20Logo-05-glTfrCGyitz0t1auClo76dDJPzD9E4.png"
            alt="TAPPS"
            width={60}
            height={75}
            className="mx-auto mb-8"
          />
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Ready to Take Control of Your Water Future?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-white/90">
            Join thousands of South Africans who stay ahead of water disruptions with TAPPS. Download now and never be
            caught off guard again.
          </p>

          {/* App Store Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Google Play Badge */}
            <a
              href="#"
              className="group flex h-[62px] items-center gap-3 rounded-xl bg-black px-6 transition-all hover:scale-105 hover:bg-black/90"
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
              className="group flex h-[62px] items-center gap-3 rounded-xl bg-black px-6 transition-all hover:scale-105 hover:bg-black/90"
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

          <div className="mt-6 flex items-center justify-center gap-3">
            <svg className="h-6 w-6 text-white/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-sm text-white/80">Coming soon to Apple App Store</span>
          </div>
        </div>
      </div>
    </section>
  )
}
