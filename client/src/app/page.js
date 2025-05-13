import Faqs from '@/sections/Faqs'
import Features from '@/sections/Features'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Introduction from '@/sections/Introduction'
import LogoTicker from '@/sections/LogoTicker'
import Navbar from '@/sections/Navbar'
import Integrations from '@/sections/Integrations'
import React from 'react'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <LogoTicker/>
        <Introduction/>
        <Features/>
        <Integrations/>
        <Faqs/>
        <Footer/>
    </>
  )
}

export default Home;