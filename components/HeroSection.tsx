'use client';

import { ChevronDown, MapPin, Mail, Phone, Linkedin, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">
          
          {/* Left: Main Content */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <p className="text-accent font-medium mb-3 text-sm tracking-wide uppercase">
              Welcome to my portfolio
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
              Priyanka Belbase
            </h1>
            
            <p className="text-xl sm:text-2xl text-accent font-medium mb-6">
              GIS Analyst & PhD Researcher
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              PhD researcher in Earth System Science specializing in remote sensing, GIS analysis, and precision agriculture. 
              7+ years of experience transforming complex geospatial data into actionable insights.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <p className="text-2xl font-bold text-accent">7+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <p className="text-2xl font-bold text-accent">4</p>
                <p className="text-xs text-muted-foreground">Publications</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <p className="text-2xl font-bold text-accent">20+</p>
                <p className="text-xs text-muted-foreground">Certifications</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/priyanka-belbase-72833023b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-accent transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://scholar.google.com/citations?user=bkSmlQ8AAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-accent transition-colors"
                title="Google Scholar"
              >
                <GraduationCap size={22} />
              </a>
              <a
                href="mailto:belbase.priyanka@gmail.com"
                className="p-2 text-muted-foreground hover:text-accent transition-colors"
                title="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Right: Profile Card */}
          <div className="order-1 lg:order-2">
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
              {/* Profile Image */}
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-muted border-4 border-background shadow-lg overflow-hidden">
                {/* Placeholder - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-muted flex items-center justify-center">
                  <span className="text-5xl font-bold text-accent/40">PB</span>
                </div>
                {/* Uncomment when you have the image:
                <Image 
                  src="/profile.jpg" 
                  alt="Priyanka Belbase" 
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  priority
                /> 
                */}
              </div>
              
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-foreground">Priyanka Belbase</h2>
                <p className="text-accent text-sm">PhD Researcher | GIS Analyst</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={16} className="text-accent shrink-0" />
                  <span>Miami, Florida, USA</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={16} className="text-accent shrink-0" />
                  <a href="mailto:belbase.priyanka@gmail.com" className="hover:text-accent transition-colors truncate">
                    belbase.priyanka@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone size={16} className="text-accent shrink-0" />
                  <a href="tel:+16825325155" className="hover:text-accent transition-colors">
                    +1 (682) 532-5155
                  </a>
                </div>
              </div>

              {/* Current Status */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-muted-foreground">Open to collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="hidden md:flex justify-center mt-12 cursor-pointer"
          onClick={() => scrollToSection('award')}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
            <span className="text-xs">Scroll</span>
            <ChevronDown size={20} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
