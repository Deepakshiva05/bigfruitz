import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Benefits from './Pages/Benefits'
import Categories from './Pages/Categories'
import Products from './Pages/Products'
import Dealofday from './Pages/Dealofday'
import Testimonials from './Pages/Testimonials'
import Partners from './Pages/Partners'
import Newsletter from './Pages/Newsletter'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Contact from './components/Contact'
import Fetchdata from './Pages/Fetchdata'
import { CartProvider } from 'react-use-cart'
import Cart from './components/Cart'



function App() {

  useEffect(() => {
    AOS.init();
  }, [])
 
 
  return (
    <>
    <Navbar/>
    {/* <Home/>
    <Benefits/> 
    <Categories/>
    <Dealofday/>
    <Testimonials/>
    <Partners/>
    <Newsletter/>
    <Footer/> */}
    </>
  )
}

export default App
