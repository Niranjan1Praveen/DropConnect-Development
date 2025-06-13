import Faqs from '@/sections/Faqs'
import Features from '@/sections/Features'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Introduction from '@/sections/Introduction'
import LogoTicker from '@/sections/LogoTicker'
import Navbar from '@/sections/Navbar'
import React from 'react'
import SignUpOptions from '@/sections/SignupOptions'


const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <LogoTicker/>
        <Introduction/>
        <Features/>
        <SignUpOptions/>
        <Faqs/>
        <Footer/>
    </>
  )
}

export default Home;