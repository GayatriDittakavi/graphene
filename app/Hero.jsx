import React from 'react'

function Hero() {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-'>
      <div className='mx-4 my-4 rounded-lg flex items-center justify-center'>
        <video src="https://res.cloudinary.com/dafbhjsmx/video/upload/v1736345819/VideoHero_hggmos.mp4" alt="Logo" className="object-contain rounded-2xl h-[32rem] lg:h-[60rem] md:h-[55rem] sm:h-[40rem] "
        autoPlay
        // loop
        muted
        ></video>
        {/* <video
          src="https://res.cloudinary.com/dafbhjsmx/video/upload/v1736345819/VideoHero_hggmos.mp4"
          className="object-fill w-full h-full lg:h-[60rem] md:h-[55rem] sm:h-[40rem] mx-8 my-8 rounded-lg flex items-center justify-center border-2"
          // controls
          autoPlay
          muted
          loop
        >
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  )
}

export default Hero