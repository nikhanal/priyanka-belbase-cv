'use client';

import { useState, useEffect } from 'react';
import { Mail, Linkedin, GraduationCap, Trophy, Award, Users } from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'award', label: 'Award', icon: Trophy },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certs', icon: Award },
    { id: 'affiliations', label: 'Community', icon: Users },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.id);
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
    <nav className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-lg sm:text-xl font-bold text-foreground hover:text-accent transition-colors flex items-center gap-2"
        >
          <span className="text-accent">🌍</span>
          <span>PB</span>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-1 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-accent-foreground bg-accent shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Social Links - Desktop */}
        <div className="hidden lg:flex gap-3 items-center">
          <a href="https://www.linkedin.com/in/priyanka-belbase-72833023b/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all" title="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://scholar.google.com/citations?user=bkSmlQ8AAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all" title="Google Scholar">
            <GraduationCap size={18} />
          </a>
          <a href="mailto:belbase.priyanka@gmail.com" className="p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all" title="Email">
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
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
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-accent-foreground bg-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-4 pt-4 border-t border-border justify-center">
              <a href="https://www.linkedin.com/in/priyanka-belbase-72833023b/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://scholar.google.com/citations?user=bkSmlQ8AAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all" title="Google Scholar">
                <GraduationCap size={20} />
              </a>
              <a href="mailto:belbase.priyanka@gmail.com" className="p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
