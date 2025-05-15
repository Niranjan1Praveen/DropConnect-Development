import Faqs from '@/sections/Faqs'
import Features from '@/sections/Features'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Introduction from '@/sections/Introduction'
import LogoTicker from '@/sections/LogoTicker'
import Navbar from '@/sections/Navbar'
import Integrations from '@/sections/Integrations'
import React from 'react'
import SignUpOptions from '@/sections/SignupOptions'
import Link from 'next/link'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <LogoTicker/>
        <Introduction/>
        <Features/>
        <Integrations/>
        <SignUpOptions/>
        <Faqs/>
        <Link href={""}>Click here to view the map!</Link>
        <Footer/>
    </>
  )
}

export default Home;