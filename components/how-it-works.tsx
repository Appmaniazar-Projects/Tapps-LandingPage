import { Download, MapPin, Bell } from "lucide-react"

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
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            How It Works
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Get Started in 3 Simple Steps
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            Setting up TAPPS takes less than a minute. Download, configure, and start receiving insights immediately.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-gradient-to-r from-primary/30 to-secondary/30 md:block" />
              )}

              <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1870b9] to-[#3bb4e7] opacity-10" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1870b9] to-[#3bb4e7] opacity-20" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#1870b9] to-[#3bb4e7] text-white shadow-lg shadow-primary/20">
                  <item.icon className="h-10 w-10" />
                </div>
                <span className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-primary shadow-md">
                  {item.step}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
