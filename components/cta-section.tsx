import Image from "next/image"
import { FluidBackground } from "@/components/ui/fluid-background"

export function CTASection() {
  return (
    <FluidBackground variant="cta" className="relative overflow-hidden py-20 md:py-28">
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapps%20Final%20Logo-05-glTfrCGyitz0t1auClo76dDJPzD9E4.png"
            alt="TAPPS"
            width={60}
            height={75}
            className="mx-auto mb-8 opacity-95"
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
              href="#"
              className="group inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-white/10 px-6 text-white shadow-sm ring-1 ring-white/20 backdrop-blur-sm transition-transform hover:scale-[1.02] hover:bg-white/15"
            >
              <Image 
                src="/Huawei-AppGallery-logo.png"
                alt="AppGallery"
                width={32}
                height={32}
                className="h-7 w-7"
              />
              <div className="text-left text-white">
                <div className="text-[10px] font-medium uppercase tracking-wider opacity-80">Explore it on</div>
                <div className="text-base font-semibold leading-tight">AppGallery</div>
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
    </FluidBackground>
  )
}
