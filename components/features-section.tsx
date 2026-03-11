import { Activity, Cloud, MapPin, Bell, FileWarning, Droplets } from "lucide-react"

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
    <section id="features" className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#8FC9FE]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#3bb4e7]/10 blur-3xl" />
      
      {/* Decorative water droplets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <WaterDroplet className="absolute top-20 right-[10%] h-12 w-8 text-[#3bb4e7]/8 rotate-12" />
        <WaterDroplet className="absolute bottom-32 left-[8%] h-16 w-10 text-[#8FC9FE]/10 -rotate-6" />
        <WaterDroplet className="absolute top-1/2 right-[5%] h-10 w-7 text-[#1870b9]/6 rotate-[-15deg]" />
        <WaterDroplet className="absolute top-[30%] left-[15%] h-8 w-5 text-[#3bb4e7]/8 rotate-8" />
        <WaterDroplet className="absolute bottom-[20%] right-[20%] h-6 w-4 text-[#8FC9FE]/12 rotate-[-10deg]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary">
            Features
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Everything You Need to Stay Informed
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            TAPPS brings together essential water data in one intuitive app, helping you make smarter decisions about
            your water usage.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-transparent hover:shadow-xl hover:shadow-primary/10"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} text-white shadow-lg transition-transform group-hover:scale-110`}
              >
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
              <p className="mt-3 text-muted-foreground">{feature.description}</p>
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-[#8FC9FE]/20 to-transparent opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
