"use client";

import React, { useState, useEffect } from 'react'

function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const videoSrc = isMobile 
    ? 'https://res.cloudinary.com/dafbhjsmx/video/upload/v1737788891/graphene_animation0001-0200_1_ymfbfe.mp4' 
    : 'https://res.cloudinary.com/dafbhjsmx/video/upload/v1736345819/VideoHero_hggmos.mp4'

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-'>
      <div className='mx-4 my-4 rounded-lg flex items-center justify-center'>
        <video src={videoSrc} alt="Logo" className="object-contain rounded-2xl h-[32rem] lg:h-[60rem] md:h-[55rem] sm:h-[40rem]"
          autoPlay
          muted
        ></video>
      </div>
    </div>
  )
}

export default Hero