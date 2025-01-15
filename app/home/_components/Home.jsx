import React from 'react'
import HeroImg from '../_assets/Hero.png'

function Hero() {
  return (
    <div className='mt-12'>
      <img src={HeroImg.src} alt="" className=' border-[1.8px] border-[#F15D22] rounded-[50px]'/>
    </div>
  )
}

export default Hero