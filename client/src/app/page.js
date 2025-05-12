import Faqs from '@/sections/Faqs'
import Features from '@/sections/Features'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Introduction from '@/sections/Introduction'
import Navbar from '@/sections/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
        <Navbar/>
        <Hero/>
        <Introduction/>
        <Features/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default Home