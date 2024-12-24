import React from 'react'

function Hero() {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-'>
      <div className='mx-8 my-8  rounded-lg  flex items-center justify-center p-8 border-2  border-red-900'>
        <img src="https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6458ad1f169fc472b285fe37_Logo.svg" alt="Logo" className="object-contain w-[100rem] h-[32rem] lg:h-[60rem] md:h-[55rem] sm:h-[40rem] "/>
      </div>
    </div>
  )
}

export default Hero