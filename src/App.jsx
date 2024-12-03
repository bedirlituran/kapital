import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Pricing from './components/Pricing/Pricing'
import Stats from './components/Stats/Stats'
import "../src/components/Hero/style.css"
import Footer from './components/Footer/Footer'
import Faq from './components/Faq/Faq'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Pricing/>
      <Faq/>
      <Stats/>
      <Footer/>
    </div>
  )
}

export default App
