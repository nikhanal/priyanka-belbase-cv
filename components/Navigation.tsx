'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'research', label: 'Research', href: '#research' },
  { id: 'publications', label: 'Publications', href: '#publications' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ['hero', ...NAV_ITEMS.map((item) => item.id)];

    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      let nextActive = 'hero';

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          nextActive = sectionId;
        }
      }

      setActiveSection(nextActive);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`pb-nav${scrolled ? ' is-scrolled' : ''}`} id="navbar">
        <div className="pb-nav-in">
          <a className="pb-nav-logo" href="#hero" onClick={closeMobileMenu}>
            Priyanka <span>Belbase</span>
          </a>

          <div className="pb-nav-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                className={`pb-nav-link${activeSection === item.id ? ' active' : ''}`}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
            className={`pb-ham${mobileMenuOpen ? ' is-open' : ''}`}
            onClick={() => setMobileMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`pb-mob${mobileMenuOpen ? ' open' : ''}`} id="mob">
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={item.href} onClick={closeMobileMenu}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
