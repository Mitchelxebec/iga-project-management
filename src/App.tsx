import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ValueProposition from './components/ValueProposition'
import OurWork from './components/OurWork'
import TalentVendor from './components/TalentVendor'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white text-[#0f172a] font-sans antialiased">
      <Navbar />
      <Hero />
      <Services />
      <ValueProposition />
      <OurWork />
      <TalentVendor />
      <Footer />
    </div>
  )
}
