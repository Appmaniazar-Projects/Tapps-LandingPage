import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { FluidBackground } from "@/components/ui/fluid-background"

export function Footer() {
  return (
    <FluidBackground variant="subtle" className="border-t border-white/15 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapps%20Final%20Logo-01-b3jF1KmO0SvEQO4T6h52eqyfUhrM0e.png"
              alt="TAPPS - The Water App"
              width={300}
              height={120}
              className="h-20 w-auto brightness-0 invert md:h-24"
            />
            <p className="mt-4 max-w-sm text-white/80">
              TAPPS is your proactive water management companion, helping South Africans stay informed and prepared for
              water-related challenges.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1973bb] shadow-sm ring-1 ring-white/20 transition-colors hover:bg-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1973bb] shadow-sm ring-1 ring-white/20 transition-colors hover:bg-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1973bb] shadow-sm ring-1 ring-white/20 transition-colors hover:bg-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1973bb] shadow-sm ring-1 ring-white/20 transition-colors hover:bg-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/75 transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 transition-colors hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 transition-colors hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/75 transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 transition-colors hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 transition-colors hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} TAPPS - The Water App. All rights reserved.</p>
        </div>
      </div>
    </FluidBackground>
  )
}
