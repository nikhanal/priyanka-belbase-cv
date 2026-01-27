'use client';

import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
          Priyanka Belbase
        </h1>
        
        <div className="mb-6 sm:mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4 text-accent">
            GIS Analyst & PhD Researcher
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            PhD researcher in Earth System Science specializing in remote sensing, GIS analysis, and precision agriculture. 
            7+ years of experience transforming complex geospatial data into actionable insights.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
          <button onClick={() => scrollToSection('projects')} className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors w-full sm:w-auto text-center">
            View My Work
          </button>
          <button onClick={() => scrollToSection('contact')} className="px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/5 transition-colors w-full sm:w-auto text-center">
            Get In Touch
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 text-sm text-muted-foreground mb-16 sm:mb-20">
          <div>
            <p className="font-semibold text-foreground mb-1">Location</p>
            <p>Miami, Florida</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Email</p>
            <p className="break-all">belbase.priyanka@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Phone</p>
            <p>+1 (682) 532-5155</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
        <ChevronDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
}
