import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import AboutSection from './components/sections/AboutSection'
import BoardSection from './components/sections/BoardSection'
import ContactSection from './components/sections/ContactSection'
import DestinationsSection from './components/sections/DestinationsSection'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'

function App() {
  return (
    <div className="min-h-screen bg-ivory text-graphite">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DestinationsSection />
        <BoardSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
