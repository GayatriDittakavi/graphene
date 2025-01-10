import React from 'react';
import { FloatingNavDemo } from "../components/Navbar";
import Hero from './Hero';
import { SpotlightPreview } from '@/components/Spotlight';
import Technology from '@/components/Technology';
import Footer from '@/components/Footer';

function Page() {
  return (
    <div className=' bg-black'>
      <FloatingNavDemo />
      <Hero />
      <SpotlightPreview />
      <Technology />
      <Footer />
    </div>
  );
}

export default Page;