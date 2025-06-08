import './App.css'
import HeroBanner from './components/HeroSction/HeroBanner'
import HeroContainer from './components/HeroSction/HeroContainer'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <div className='w-full'>
      <HeroContainer>
        <Navbar></Navbar>
        <HeroBanner></HeroBanner>
      </HeroContainer>
    </div>
  )
}

export default App
