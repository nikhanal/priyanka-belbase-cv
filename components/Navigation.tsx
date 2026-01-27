'use client';

import { useState, useEffect } from 'react';
import { Mail, Linkedin, GraduationCap } from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg sm:text-xl font-semibold text-foreground">Priyanka Belbase</h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize text-sm font-medium transition-colors ${
                activeSection === section
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex gap-4 items-center">
          <a href="https://www.linkedin.com/in/priyanka-belbase-72833023b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://scholar.google.com/citations?user=bkSmlQ8AAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" title="Google Scholar">
            <GraduationCap size={20} />
          </a>
          <a href="mailto:belbase.priyanka@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" title="Email">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-4 py-2 rounded-lg capitalize text-sm font-medium transition-colors ${
                  activeSection === section
                    ? 'text-accent bg-accent/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {section}
              </button>
            ))}
            <div className="flex gap-4 pt-4 border-t border-border justify-center">
              <a href="https://www.linkedin.com/in/priyanka-belbase-72833023b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://scholar.google.com/citations?user=bkSmlQ8AAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2" title="Google Scholar">
                <GraduationCap size={20} />
              </a>
              <a href="mailto:belbase.priyanka@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors p-2" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
