import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import SectionOne from '../components/HomeSections/SectionOne'
import Services from '../components/HomeSections/Services'
import About from '../components/HomeSections/About'
import Testimonials from '../components/HomeSections/Testimonials'
import Blog from '../components/HomeSections/Blog'
import Icon from '../components/HomeSections/Design'
import Footer from '../components/Footer/Footer'

function HomePage() {
   
  return (
    <div className="flex flex-col bg-black min-h-screen text-white">
    <Navbar />
    <Banner />
    <SectionOne  />
    <Services />
    <About />
    <Testimonials />
    <Blog />
    <Icon />
    <Footer />
  </div>
  )
}

export default HomePage
