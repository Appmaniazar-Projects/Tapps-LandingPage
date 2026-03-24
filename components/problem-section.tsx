import { Droplets, AlertTriangle, TrendingDown } from "lucide-react"
import { FluidBackground } from "@/components/ui/fluid-background"

export function ProblemSection() {
  return (
    <FluidBackground variant="challenge" className="relative overflow-hidden py-20 md:py-28">
      <section id="challenge" className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur-sm">
              The Challenge
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              South Africa&apos;s Water Challenge
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/85">
              With dam levels fluctuating and water restrictions common, South Africans need better access to water resource information to plan ahead and conserve effectively.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-[20px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-[#1870b9]">
                <AlertTriangle className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#0f1724]">Limited Dam Information</h3>
              <p className="mt-3 text-[#0f1724]/80">
                Most people don&apos;t know which dams supply their metro or what the current water levels are until restrictions are announced.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[20px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-[#1870b9]">
                <TrendingDown className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#0f1724]">Declining Reserves</h3>
              <p className="mt-3 text-[#0f1724]/80">
                Dam levels fluctuate with weather patterns, but most people only hear about critical shortages when it&apos;s too late.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[20px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-[#1870b9]">
                <Droplets className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#0f1724]">Lack of Awareness</h3>
              <p className="mt-3 text-[#0f1724]/80">
                Without real-time data, it&apos;s nearly impossible to plan for water restrictions or understand local supply conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FluidBackground>
  )
}
