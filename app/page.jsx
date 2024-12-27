import React from 'react';
import { FloatingNavDemo } from "../components/Navbar";
import Hero from './Hero';
import { SpotlightPreview } from '@/components/Spotlight';
import Technology from '@/components/Technology';
// import { AddressMap } from '@/components/Map';
import { Team } from '@/components/Team';
import Footer from '@/components/Footer';
// import { CanvasRevealEffectDemo } from '@/components/AboutUs';

function Page() {
  return (
    <div className=' bg-black'>
      <FloatingNavDemo />
      <Hero />
      <SpotlightPreview />
      <Technology />
      <Team />
      <Footer />
      {/* <div className="bg-black h-screen -mt-6"></div> */}
      {/* <AddressMap /> */}
      {/* <div className="bg-black h-screen"></div> */}
      
      {/* <CanvasRevealEffectDemo /> */}
    </div>
  );
}

export default Page;