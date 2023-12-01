import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import SectionOne from './components/Sections/SectionOne'
import Services from './components/Sections/Services'
import Testimonials from './components/Sections/Testimonials'
import Blog from './components/Sections/Blog'
import Icon from './components/Sections/Design'
import Footer from './components/Footer/Footer'
import About from './components/Sections/About'



function App() {
 
  return (
    <>
    <div className='flex flex-col bg-black min-h-screen text-white'>
    <Navbar/>
    <Banner/>
    <SectionOne/>
    <Services/>
    <About/>
    <Testimonials/>
    <Blog/>
    <Icon/>
    <Footer/>
    </div>
   
    </>
  )
}

export default App
