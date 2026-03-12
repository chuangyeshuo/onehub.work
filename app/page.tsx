import Navbar from "./components/navbar"
import Hero from "./components/hero"
import TraditionalCaseSection from "./components/traditional-case-section"
import WorksSection from "./components/works-section"
import NeedsSection from "./components/needs-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TraditionalCaseSection />
      <WorksSection />
      <NeedsSection />
      <Footer />
    </main>
  )
}
