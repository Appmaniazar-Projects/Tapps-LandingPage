import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { ScreenshotsSection } from "@/components/screenshots-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorks />
      <ScreenshotsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
