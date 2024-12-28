import React from 'react'

function Technology() {
    return (
        <div id='technology' className='max-w-screen h-screen flex items-center justify-center bg-black'>
            <div className="w-screen  h-full max-xl:flex-col items-center justify-around mx-auto xl:px-10 px-3 rounded-xl flex ">
                <img src="https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6507ed863085cf26d118723f_Opendrone2-p-1600.webp" className='h-[30rem] w-[30rem] rounded-full' alt="" />
                <div className="container max-md:grid-cols-2 m-auto grid grid-cols-3 max-sm:pt-[50rem] text-white">

                    <div className="flex flex-col md:h-full min-h-36 mt-2 border-[#8533CD]  pb-44 max-sm:pb-80 pr-2 border-[1px] border-l-0 border-t-0 border-r-0 ">
                        <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 min-h-20 pt-2">
                            Splash, Water, and Dust Resistance
                        </h1>
                        <span className="text-white max-w-72 mx-auto">Rated IP67 (maximum depth of 1 meter up to 30 minutes) under IEC standard 60529.</span>
                    </div>

                    <div className="flex flex-col pl-2 md:h-full min-h-36 mt-2 pb-44 max-sm:pb-80 border-[1px] border-[#8533CD] border-t-0 max-md:border-r-0 ">
                        <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 min-h-20 pt-2">
                            Connectivity
                        </h1>
                        <span className="text-white max-w-72 mx-auto">Bluetooth for proximity finding
                            NFC tap for Lost Mode</span>
                    </div>

                    <div className="flex flex-col pr-2 md:h-full min-h-36 max-md:pt-2 md:mt-2 pb-44 max-sm:pb-80 border-b-[1px] border-[#8533CD] ">
                        <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 min-h-20 pt-2">
                            Battery
                        </h1>
                        <span className="text-white max-w-72 mx-auto">User-replaceable CR2032 coin cell battery
                            Extra Battery included for convenience</span>
                    </div>

                    <div className="flex flex-col pl-2 min-h-36 md:h-full pt-2 max-sm:pb-80 border-[#8533CD] border-0 max-md:border-l-[1px]">
                        <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 min-h-20 pt-2">
                            Sensor
                        </h1>
                        <span className="text-white max-w-72 text-center mx-auto">Accelerometer</span>
                    </div>
                    
                    <div className="flex flex-col pl-2 md:h-full min-h-36 pt-2 max-sm:pb-80 border-[#8533CD] border-[1px] max-md:border-l-0 border-b-0 border-t-0 max-md:border-r-0">
                        <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 min-h-20 pt-2">
                        Environmental Requirements
                        </h1>
                        <span className="text-white max-w-72  mx-auto">
                            Operating ambient temperature: &minus;20° to 60°C (&minus;4° to 140°F)
                        </span>
                    </div>
                    
                    <div className="flex flex-col pl-2 min-h-36 md:h-full pt-2 max-sm:pb-80 border-[#8533CD] max-md:border-[1px] max-md:border-r-0 max-md:border-b-0 ">
                        <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 min-h-20 pt-2">
                        In the Box
                        </h1>
                        <div className='mx-auto pl-3'>
                        <li>Smart Tracker with CR2032 coin cell battery installed</li>
                        <li>Extra CR2032 coin cell battery</li>
                        <li>Documentation</li>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Technology