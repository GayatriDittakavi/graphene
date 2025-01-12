import React from "react";
import { Spotlight } from "./ui/spotlight";

export function SpotlightPreview() {
  return (
    (<div>
      <div id="about"
        className=" min-h-screen w-full  flex md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight className="-top-[5rem] left-[0] md:left-60 md:top-48" fill="#8533CD" />
        <Spotlight className="-top-[110rem] left-[0] md:left-60 md:-top-[60rem]" fill="#8533CD" />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 max-md:pb-52">
          <h1
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-40 pb-2 font-poppins">
            Bridging the Gap in Logistics
          </h1>
          <p
            className="text-white text-xl font-sans max-w-[60rem] pb-5 max-sm:text-center mt-4 text-center mx-auto">
            At Graphene Labs, we create smart solutions for logistics and tracking, from real-time monitoring to seamless automation. We&apos;re transforming how people connect the physical and digital worlds.
          </p>
          <div id="services" className="lg:flex-row mt-56 gap-32 flex-col flex justify-around items-center">
            <div className="flex flex-col gap-6 font">
              <h1
                className="text-4xl lg:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50  pb-5 max-w-[65rem] max-sm:text-center font-poppins">
                Never Lose Track Again
              </h1>
              <span className="text-white text-xl font-sans lg:max-w-[40rem] 2xl:w-[50rem] pb-5 max-sm:text-center ">Hex One is the easiest way to keep tabs on your things. Attach one to your bag. Slip another into your wallet. And just like that, they&apos;re on your radar through a simple connection to your mobile, making it easy to track everything that matters. Whether it's your luggage, your tech, or anything in between, Hex One keeps you connected to what matters most. <br />
              </span>
              <span className="text-white text-xl max-w-[40rem] pb-5 max-sm:text-center ">Launching Soon.</span>
            </div>
            <img src="https://res.cloudinary.com/dafbhjsmx/image/upload/v1736687770/tag_2_qtodey.jpg" className='w-[40rem] h-[40rem] bg-purple-950 rounded-2xl max-lg:w-[30rem] max-lg:h-[30rem]' alt="" />
          </div>



          <div className="lg:flex-row mt-56 gap-32 flex-col flex justify-around items-center">
          <img src="https://res.cloudinary.com/dafbhjsmx/image/upload/v1736687771/ticket_2_1_poz8ah.png" className='w-[40rem] h-[40rem] bg-purple-950 rounded-2xl max-lg:w-[30rem] max-lg:h-[30rem]' alt="" />
            <div className="flex flex-col gap-6 font">
              <h1
                className="text-4xl lg:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50  pb-5 max-w-[50rem] max-sm:text-center font-poppins">
                Track Smarter, Not Harder
              </h1>
              <span className="text-white text-xl font-sans lg:max-w-[40rem] 2xl:w-[50rem] pb-5 max-sm:text-center">Our IQTags, powered by our intuitive software, provide real-time tracking and automation, reducing errors and saving time. Gain valuable insights into product status, streamline inventory tracking, reduce loss, and enhance customer service—helping your business move beyond traditional methods with smarter, more efficient technology.</span>
            </div>
          </div>



          <div className="lg:flex-row mt-56 gap-32 flex-col flex justify-around items-center">
            <div className="flex flex-col gap-6 font">
              <h1
                className="text-4xl lg:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50  pb-5 max-w-[50rem] max-sm:text-center font-poppins">
                Smarter, Seamless Supply Chains
              </h1>
              <span className="text-white text-xl font-sans lg:max-w-[40rem] 2xl:w-[50rem] pb-5 max-sm:text-center">At Graphene Labs, we&apos;ve created a logistics tracking platform that works effortlessly with our smart labels to give you real-time visibility and control over your supply chain. From tracking products every step of the way to predicting delays, our platform makes it easy to stay on top of operations. With intuitive updates and insightful analytics, you can make smarter decisions, improve efficiency, and create a better experience for your customers—all while keeping everything running smoothly.</span>
            </div>
            <img src="https://res.cloudinary.com/dafbhjsmx/image/upload/v1736687771/ticket_2_e9ukgy.jpg" className='w-[40rem] h-[40rem] bg-purple-950 rounded-2xl max-lg:w-[30rem] max-lg:h-[30rem]' alt="" />
          </div>
        </div>
      </div>
    </div>)
  );
}
