import { Download, MapPin, Bell } from "lucide-react"
import { FluidBackground } from "@/components/ui/fluid-background"

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: Download,
      title: "Download the App",
      description: "Get TAPPS from Google Play or Huawei AppGallery. It's free and takes just seconds to install.",
    },
    {
      step: "02",
      icon: MapPin,
      title: "Set Your Location",
      description:
        "Enable location services or manually select your area to receive relevant local water information.",
    },
    {
      step: "03",
      icon: Bell,
      title: "Stay Informed",
      description:
        "Receive real-time updates, alerts, and insights tailored to your region. Never be caught off guard again.",
    },
  ]

  return (
    <FluidBackground variant="steps" className="relative overflow-hidden py-20 md:py-28">
      <section id="how-it-works" className="relative">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur-sm">
              How It Works
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Get Started in 3 Simple Steps
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/85">
              Setting up TAPPS takes less than a minute. Download, configure, and start receiving insights immediately.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-16 hidden h-px w-full bg-white/20 md:block" />
                )}

                <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15" />
                  <div className="absolute inset-2 rounded-full bg-white/5 ring-1 ring-white/10" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white text-[#1973bb] shadow-lg shadow-black/10">
                    <item.icon className="h-10 w-10" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-[#1973bb] shadow-md ring-1 ring-white/30">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FluidBackground>
  )
}
