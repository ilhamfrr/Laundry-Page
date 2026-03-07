import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Layanan from "../components/Layanan"
import Promo from "../components/Promo"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Layanan />
      <Promo />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App