import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import DownloadSection from './components/DownloadSection'
import Faq from './components/Faq'
import Cta from './components/Cta'

function App() {

  return (
    <  >
      <Navbar/>
      <section className='max-w-7xl mx-auto pt-20 px-6' >
        <HeroSection/>
        <Features/>
        <DownloadSection/>
        <Faq/>
      </section>
      <Cta/>
    </>
  )
}

export default App
