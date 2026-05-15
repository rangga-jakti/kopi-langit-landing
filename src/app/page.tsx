import { Navbar } from "@/components/shared/Navbar"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Solution } from "@/components/sections/Solution"
import { Menu } from "@/components/sections/Menu"
import { SocialProof } from "@/components/sections/SocialProof"
import { Location } from "@/components/sections/Location"
import { CTA } from "@/components/sections/CTA"
import { FAQ } from "@/components/sections/FAQ"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Menu />
      <SocialProof />
      <Location />
      <CTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
