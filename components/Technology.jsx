import React from 'react'

function Technology1() {
    return (
        <div id='technology' className='max-w-screen flex items-center justify-center bg-black'>
            <div className="w-screen max-lg:flex-col items-center justify-around pb-14 mx-11 rounded-xl flex">
                <img src="https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6507ed863085cf26d118723f_Opendrone2-p-1600.webp" className='h-[30rem] w-[30rem]  rounded-full' alt="" />
                <div className="flex flex-col">



                    <div className="flex max-w-screen">
                        {/* <div className="flex flex-col border-r-2 border-[#8533CD] h-36 pb-44 mt-2 pr-1 border-b-2 "> */}
                        <div className="flex flex-col h-36 mt-2 border-[#8533CD] border-b-[1px] border-r-[1px] pb-44 max-sm:pb-80 pr-2">
                            <h1 className="text-l md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5">
                                Splash, Water, and Dust Resistance
                            </h1>
                            <span className="text-white max-w-72">Rated IP67 (maximum depth of 1 meter up to 30 minutes) under IEC standard 60529.</span>
                        </div>

                        <div className="flex flex-col pl-2 h-36 mt-2 pb-44 max-sm:pb-80">
                            <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5">
                                Connectivity
                            </h1>
                            <span className="text-white max-w-72">Bluetooth for proximity finding
                                NFC tap for Lost Mode</span>
                        </div>
                    </div>


                    <div className="flex max-w-screen">
                        {/* <div className="flex flex-col border-r-2 border-[#8533CD] h-36 pt-2 pr-1"> */}
                        <div className="flex flex-col pr-2 h-36 pt-2 max-sm:pb-80 ">
                            <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5">
                                Battery
                            </h1>
                            <span className="text-white max-w-72">User-replaceable CR2032 coin cell battery
                                Extra Battery included for convenience</span>
                        </div>

                        <div className="flex flex-col pl-2 h-36 pt-2 max-sm:pb-80 border-[#8533CD] border-l-[1px] border-t-[1px]">
                            <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5">
                                Sensor
                            </h1>
                            <span className="text-white max-w-72">Accelerometer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Technology() {
    return (
        <div id='technology' className='max-w-screen flex items-center justify-center bg-black'>
            <div className="w-screen bg-red-900 max-lg:flex-col items-center justify-around pb-14 mx-11 rounded-xl flex">
                <img src="https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6507ed863085cf26d118723f_Opendrone2-p-1600.webp" className='h-[30rem] w-[30rem]  rounded-full' alt="" />
                <div className="container max-md:grid-cols-2 m-auto grid grid-cols-3  text-white">
                    {/* <div>hi</div> */}
                    <div className="flex flex-col h-36 mt-2 border-[#8533CD]  pb-44 max-sm:pb-80 pr-2 border-[1px] max-md:border-l-0 max-md:border-t-0">
                        <h1 className="text-l md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 min-h-20">
                            Splash, Water, and Dust Resistance
                        </h1>
                        <span className="text-white max-w-72 mx-auto">Rated IP67 (maximum depth of 1 meter up to 30 minutes) under IEC standard 60529.</span>
                    </div>
                    {/* <div>hello</div> */}

                    <div className="flex flex-col pl-2 h-36 mt-2 pb-44 max-sm:pb-80 border-[1px] border-[#8533CD] max-md:border-t-0 max-md:border-r-0 max-md:border-l-0">
                        <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 min-h-20">
                            Connectivity
                        </h1>
                        <span className="text-white max-w-72 mx-auto">Bluetooth for proximity finding
                            NFC tap for Lost Mode</span>
                    </div>

                    <div className="flex flex-col pr-2 h-36 mt-2 pb-44 max-sm:pb-80 border-[1px] border-[#8533CD] max-md:border-l-0 max-md:border-t-0">
                        <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 min-h-20 ">
                            Battery
                        </h1>
                        <span className="text-white max-w-72 mx-auto">User-replaceable CR2032 coin cell battery
                            Extra Battery included for convenience</span>
                    </div>

                    <div className="flex flex-col pl-2 h-36 pt-2 max-sm:pb-80 border-[#8533CD] border-[1px] max-md:border-0">
                        <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 min-h-20">
                            Sensor
                        </h1>
                        <span className="text-white max-w-72 text-center mx-auto">Accelerometer</span>
                    </div>
                    
                    <div className="flex flex-col pl-2 h-36 pt-2 max-sm:pb-80 border-[#8533CD] border-[1px]">
                        <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 min-h-20">
                        Environmental Requirements
                        </h1>
                        <span className="text-white max-w-72 text-center mx-auto">
                            Operating ambient temperature: &minus;20° to 60°C (&minus;4° to 140°F)
                        </span>
                    </div>
                    
                    <div className="flex flex-col pl-2 h-36 pt-2 max-sm:pb-80 border-[#8533CD] border-[1px]">
                        <h1 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 min-h-20">
                        In the Box
                        </h1>
                        <div className='mx-auto'>
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