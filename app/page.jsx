import React from 'react';
import { FloatingNavDemo } from "../components/Navbar";
import Hero from './Hero';
import { SpotlightPreview } from '@/components/Spotlight';
// import { CanvasRevealEffectDemo } from '@/components/AboutUs';

function Page() {
  return (
    <div className='w-screen h-[2000px] bg-black'>
      <FloatingNavDemo />
      <Hero />
      <SpotlightPreview />
      <div className="bg-black h-screen"></div>
      
      {/* <CanvasRevealEffectDemo /> */}
    </div>
  );
}

export default Page;