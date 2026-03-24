import Image from "next/image"
import { FluidBackground } from "@/components/ui/fluid-background"

export function CTASection() {
  return (
    <FluidBackground variant="cta" className="relative overflow-hidden py-20 md:py-28">
      <section id="download" className="relative z-10">
        <div className="container mx-auto px-4">
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
        </div>
      </section>
    </FluidBackground>
  )
}
