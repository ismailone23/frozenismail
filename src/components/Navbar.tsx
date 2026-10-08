"use client";

import { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/scroll';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsMenuOpen(false);
    scrollToSection(e, id);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-background/80 backdrop-blur-xl border-surface-stroke shadow-lg' : 'bg-transparent border-transparent'}`} id="navbar">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <a className="flex items-center gap-3 group cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container border border-surface-stroke text-primary transition-all duration-300 group-hover:bg-primary-container group-hover:text-surface-container-low shadow-sm group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </div>
          <span className="font-display-md text-2xl font-extrabold tracking-tight text-text-primary">
            ismail<span className="text-text-muted font-normal animate-pulse">_</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300 nav-link cursor-pointer" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300 nav-link cursor-pointer" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300 nav-link cursor-pointer" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300 nav-link cursor-pointer" onClick={(e) => handleNavClick(e, 'about')}>About</a>
        </div>
        <a className="cta-button cta-button-primary cta-button-compact hidden md:inline-flex" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
          Hire Me
        </a>
        <button className="cta-icon-button md:hidden" type="button" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="material-symbols-outlined text-2xl" aria-hidden="true">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden bg-surface-container border-b border-surface-stroke absolute w-full ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="flex flex-col p-4 gap-4">
          <a className="font-body-md text-on-surface-variant p-2 cursor-pointer" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a className="font-body-md text-on-surface-variant p-2 cursor-pointer" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
          <a className="font-body-md text-on-surface-variant p-2 cursor-pointer" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
          <a className="font-body-md text-on-surface-variant p-2 cursor-pointer" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a className="cta-button cta-button-primary cta-button-compact mt-2 w-full" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
