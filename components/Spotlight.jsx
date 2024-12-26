import React from "react";
import { Spotlight } from "./ui/spotlight";

export function SpotlightPreview() {
  return (
    (<div>
      <div id="about"
        className=" min-h-screen w-full  flex md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight className="-top-[5rem] left-[0] md:left-60 md:top-48" fill="#8533CD" />
        <Spotlight className="-top-[110rem] left-[0] md:left-60 md:-top-[60rem]" fill="#8533CD" />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-40 pb-2">
            Bridging the Gap in Logistics
          </h1>
          <p
            className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            At Graphene Labs, we create smart solutions for logistics and tracking, from real-time monitoring to seamless automation. We&apos;re transforming how people connect the physical and digital worlds.
          </p>
          <div id="services" className="md:flex-row mt-56 flex-col flex justify-around items-center">
            <div className="flex flex-col">
              <h1
                className="text-4xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 max-w-[30rem] max-sm:text-center">
                Never Lose Track Again
              </h1>
              <span className="text-white w-72 pb-5 max-sm:text-center mx-auto">Hex One is the easiest way to keep tabs on your things. Attach one to your bag. Slip another into your wallet. And just like that, they&apos;re on your radar through Apple&apos;s Find My/Google Find My Device app, where you can track everything with ease. Whether it's your luggage, your tech, or anything in between, Hex One keeps you connected to what matters most. 
              Launching Soon.</span>
            </div>
            <img src="https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6507ed863085cf26d118723f_Opendrone2-p-1600.webp" className='w-80 h-80 bg-blue-950 rounded-2xl' alt="" />
          </div>



          <div className="md:flex-row mt-56 flex-col flex justify-around items-center">
            <img src="https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6507ed863085cf26d118723f_Opendrone2-p-1600.webp" className='w-80 h-80 bg-blue-950 rounded-2xl' alt="" />
            <div className="flex flex-col">
              <h1
                className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 pt-5">
                Track Smarter, Not Harder
              </h1>
              <span className="text-white w-72 mx-auto max-sm:text-center">Our IQTags, powered by our intuitive software, provide real-time tracking and automation, reducing errors and saving time. Gain valuable insights into product status, streamline inventory tracking, reduce loss, and enhance customer service—helping your business move beyond traditional methods with smarter, more efficient technology.</span>
            </div>
          </div>



          <div className="md:flex-row mt-56 flex-col flex justify-around items-center">
            <div className="flex flex-col">
              <h1
                className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5 ">
                Smarter Supply Chains, Seamlessly Connected
              </h1>
              <span className="text-white w-72 pb-5 max-sm:text-center mx-auto">At Graphene Labs, we&apos;ve created a logistics tracking platform that works effortlessly with our smart labels to give you real-time visibility and control over your supply chain. From tracking products every step of the way to predicting delays, our platform makes it easy to stay on top of operations. With intuitive updates and insightful analytics, you can make smarter decisions, improve efficiency, and create a better experience for your customers—all while keeping everything running smoothly.</span>
            </div>
            <img src="https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6507ed863085cf26d118723f_Opendrone2-p-1600.webp" className='w-80 h-80 bg-blue-950 rounded-2xl' alt="" />
          </div>
        </div>
      </div>
    </div>)
  );
}
