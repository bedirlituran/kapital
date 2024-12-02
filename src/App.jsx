import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Pricing from './components/Pricing/Pricing'
import Faq from './components/Faq/Faq'
import "../src/components/Hero/style.css"
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Pricing/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
