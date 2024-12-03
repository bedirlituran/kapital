import Pricing from './components/Pricing/Pricing'
import Stat from './components/Stats/Stat'
import "../src/components/Hero/style.css"
import Footer from './components/Footer/Footer'
import Faq from './components/Faq/Faq'
import Odeme from './components/Odeme/Odeme'
import Hero from './components/Hero/Hero'
import Hero2 from './components/Hero/Hero2'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'



function App() {
  return (
    <div>
      <Hero2/>
      <Hero/>
      <Pricing/>
      <Odeme/>
      <About/>
      <Faq/>
     
      <Stat/>
      <Footer/>
    </div>
  )
}

export default App
