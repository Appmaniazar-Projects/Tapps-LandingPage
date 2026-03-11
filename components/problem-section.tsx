import { Droplets, AlertTriangle, TrendingDown } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            The Challenge
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            South Africa&apos;s Water Challenge
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            With dam levels fluctuating and water restrictions common, South Africans need better access to water resource information to plan ahead and conserve effectively.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="group rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <AlertTriangle className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">Limited Dam Information</h3>
            <p className="mt-3 text-muted-foreground">
              Most people don&apos;t know which dams supply their metro or what the current water levels are until restrictions are announced.
            </p>
          </div>

          <div className="group rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
              <TrendingDown className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">Declining Reserves</h3>
            <p className="mt-3 text-muted-foreground">
              Dam levels fluctuate with weather patterns, but most people only hear about critical shortages when
              it&apos;s too late.
            </p>
          </div>

          <div className="group rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/30 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Droplets className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">Lack of Awareness</h3>
            <p className="mt-3 text-muted-foreground">
              Without real-time data, it&apos;s nearly impossible to plan for water restrictions or understand local
              supply conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
