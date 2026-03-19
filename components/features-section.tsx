import { Activity, Cloud, MapPin, Bell, FileWarning, Droplets } from "lucide-react"
import { FluidBackground } from "@/components/ui/fluid-background"

export function FeaturesSection() {
  const features = [
    {
      icon: Activity,
      title: "Real-Time Dam Levels",
      description: "Monitor dam levels across all 9 South African provinces with weekly and yearly comparisons to track water availability trends.",
      color: "bg-[#1870b9]",
    },
    {
      icon: Cloud,
      title: "Weather Forecasts",
      description: "Get detailed weather patterns including temperature, wind, humidity, and hourly forecasts to predict future water storage levels.",
      color: "bg-[#3bb4e7]",
    },
    {
      icon: MapPin,
      title: "Provincial Coverage",
      description:
        "Browse water data by province and discover which dams supply your metro area with water across all regions.",
      color: "bg-[#1870b9]",
    },
    {
      icon: FileWarning,
      title: "Report Issues",
      description: "Easily report water issues in your area with location details and descriptions to help your community stay informed.",
      color: "bg-[#3bb4e7]",
    },
    {
      icon: Droplets,
      title: "Water Saving Tips",
      description: "Adopt proactive water-saving behaviour with tips based on current dam levels and anticipated water availability.",
      color: "bg-[#1870b9]",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Receive alerts about dam level changes, weather updates, and water restrictions relevant to your location.",
      color: "bg-[#3bb4e7]",
    },
  ]

  return (
    <FluidBackground variant="features" className="relative overflow-hidden py-20 md:py-28">
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur-sm">
            Features
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Everything You Need to Stay Informed
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/85">
            TAPPS brings together essential water data in one intuitive app, helping you make smarter decisions about
            your water usage.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-sm backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/15"
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${feature.color} text-white shadow-sm transition-transform group-hover:scale-105`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-white/80">{feature.description}</p>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br from-[#8FC9FE]/20 to-transparent opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </FluidBackground>
  )
}
