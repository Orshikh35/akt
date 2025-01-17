import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OrgDetail from './_components/OrgDetail'

function page() {
  return (
    <div>
        <Navbar/>
        <OrgDetail/>
        <Footer />
    </div>
  )
}

export default page