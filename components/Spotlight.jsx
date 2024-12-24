import React from "react";
import { Spotlight } from "./ui/spotlight";

export function SpotlightPreview() {
  return (
    (<div>
      <div
        className=" min-h-screen w-full  flex md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight className="-top-[20rem] left-[0] md:left-60 md:top-48" fill="#8533CD" />
        <Spotlight className="-top-[20rem] left-[0] md:left-60 md:-top-[60rem]" fill="#8533CD" />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-40">
            Who We Are
          </h1>
          <p
            className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa, modi dolorum ratione harum labore consectetur quasi provident! Illum ad deleniti ipsum vel totam sint amet tenetur corrupti necessitatibus quo, quam nemo delectus numquam enim.
            copy.
          </p>
          <div className="md:flex-row mt-56 flex-col flex justify-around items-center">
            <div className="flex flex-col">
              <h1
                className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5">
                Title
              </h1>
              <span className="text-white w-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam blanditiis dolor dolorum placeat laudantium saepe voluptates recusandae eveniet architecto quidem corrupti, iure accusantium, eaque molestias? Deserunt dignissimos similique nihil suscipit ex aspernatur delectus repellendus.</span>
            </div>
            <img src="https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6507ed863085cf26d118723f_Opendrone2-p-1600.webp" className='w-80 h-80 bg-blue-950 rounded-2xl' alt="" />
          </div>



          <div className="md:flex-row mt-56 flex-col flex justify-around items-center">
              <img src="https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6507ed863085cf26d118723f_Opendrone2-p-1600.webp" className='w-80 h-80 bg-blue-950 rounded-2xl' alt="" />
            <div className="flex flex-col">
              <h1
                className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5">
                Title
              </h1>
              <span className="text-white w-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam blanditiis dolor dolorum placeat laudantium saepe voluptates recusandae eveniet architecto quidem corrupti, iure accusantium, eaque molestias? Deserunt dignissimos similique nihil suscipit ex aspernatur delectus repellendus.</span>
            </div>
          </div>



          <div className="md:flex-row mt-56 flex-col flex justify-around items-center">
            <div className="flex flex-col">
              <h1
                className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 uppercase pb-5">
                Title
              </h1>
              <span className="text-white w-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam blanditiis dolor dolorum placeat laudantium saepe voluptates recusandae eveniet architecto quidem corrupti, iure accusantium, eaque molestias? Deserunt dignissimos similique nihil suscipit ex aspernatur delectus repellendus.</span>
            </div>
            <img src="https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6507ed863085cf26d118723f_Opendrone2-p-1600.webp" className='w-80 h-80 bg-blue-950 rounded-2xl' alt="" />
          </div>
        </div>
      </div>
    </div>)
  );
}
