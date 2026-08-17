import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { StoreSection } from './components/sections/StoreSection';
import { AboutSection } from './components/sections/AboutSection';

export default function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#241B36] flex flex-col selection:bg-[#BFE3FA] selection:text-[#241B36]">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Store Gallery */}
        <StoreSection />

        {/* Section 3: Brand Identity / About / Footer */}
        <AboutSection />
      </main>
    </div>
  );
}
