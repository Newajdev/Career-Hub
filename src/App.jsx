import { Outlet } from 'react-router-dom'
import './App.css'
import HeroBanner from './components/HeroSction/HeroBanner'
import Container from './components/HeroSction/Container'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div className='w-full'>
      <div className='bg-gradient-to-r from-Start5 to-End5 '>
        <Container>
          <Navbar></Navbar>
        </Container>
      </div>

      <Outlet></Outlet>

      <div className='bg-black'>
        <Container>
          <Footer></Footer>
        </Container>
      </div>
    </div>
  )
}

export default App
