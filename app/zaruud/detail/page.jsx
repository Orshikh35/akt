import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Detail from './_components/Detail'

function page() {
  return (
    <div>
        <Navbar/>
        <Detail/>
        <Footer/>
    </div>
  )
}

export default page