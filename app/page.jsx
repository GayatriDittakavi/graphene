import React from 'react';
import { FloatingNavDemo } from "../components/Navbar";
import Hero from './Hero';
import { SpotlightPreview } from '@/components/Spotlight';
import Technology from '@/components/Technology';
import { Team } from '@/components/Team';
import Footer from '@/components/Footer';

function Page() {
  return (
    <div className=' bg-black'>
      <FloatingNavDemo />
      <Hero />
      <SpotlightPreview />
      <Technology />
      <Team />
      <Footer />
    </div>
  );
}

export default Page;