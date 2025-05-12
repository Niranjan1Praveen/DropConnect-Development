import Faqs from '@/components/Faqs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
        <Header/>
        <Hero/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default Home