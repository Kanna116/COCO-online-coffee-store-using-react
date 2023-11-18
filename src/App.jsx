import './App.css'
import CoffeeProductCollection from './components/CoffeeProductCollection'
import CoffeeStrip from './components/CoffeeStrip'
import Explore from './components/Explore'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'
import Offer from './components/Offer'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <CoffeeStrip />
      <CoffeeProductCollection />
      <Explore />
      <Highlights />
      <Offer />
      <Footer />
    </div>
  )
}

export default App
