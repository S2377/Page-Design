import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SelectedProject from './components/SelectedProject'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Testimonials from './components/Testimonial'
import Work from './components/Work'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Hero/>
        <SelectedProject/>
        <Testimonials/>
        <FAQ/>
        <Work/>
        <Footer/>
      </div>
    </>
  )
}

export default App
