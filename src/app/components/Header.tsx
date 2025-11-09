"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useAdParameter } from "../hooks/useAdParameter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const adType = useAdParameter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100; // Offset para transição mais suave
        
        setIsScrolled(scrollPosition > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="header" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1a365d] shadow-lg border-b border-[#2d5aa0]/20 translate-y-0' 
          : 'bg-white/10 backdrop-blur-md border-b border-white/20 md:translate-y-0 -translate-y-full md:block'
      }`}
    >
      <div id="header-container" className="max-w-7xl mx-auto px-6">
        <div id="header-content" className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div id="header-logo" className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div 
              id="header-logo-wrapper" 
              className="flex items-center justify-center transition-all duration-300"
            >
              <Image 
                id="header-logo-image" 
                src="/images/logos/logo-sem-titulo.png" 
                alt="Logo LegadoVivo" 
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <span 
              id="header-brand-text" 
              className={`ml-3 font-semibold text-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-white drop-shadow-sm' 
                  : 'text-white drop-shadow-lg'
              }`}
            >
              LegadoVivo
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav id="header-nav-desktop" className="hidden md:flex items-center space-x-8">
            <a
              href="#sobre"
              className={`transition-colors duration-200 font-medium ${
                isScrolled
                  ? 'text-white/90 hover:text-white'
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              }`}
            >
              Sobre
            </a>
            <a
              href="#como-funciona"
              className={`transition-colors duration-200 font-medium ${
                isScrolled
                  ? 'text-white/90 hover:text-white'
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              }`}
            >
              Como Funciona
            </a>
            {adType && (
              <a
                href="#planos"
                className={`transition-colors duration-200 font-medium ${
                  isScrolled
                    ? 'text-white/90 hover:text-white'
                    : 'text-white/90 hover:text-white drop-shadow-sm'
                }`}
              >
                Planos
              </a>
            )}
            <a
              href="#seguranca"
              className={`transition-colors duration-200 font-medium ${
                isScrolled
                  ? 'text-white/90 hover:text-white'
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              }`}
            >
              Segurança
            </a>
            <a
              href="#faq"
              className={`transition-colors duration-200 font-medium ${
                isScrolled
                  ? 'text-white/90 hover:text-white'
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              }`}
            >
              FAQ
            </a>
            <a
              href="#contato"
              className={`transition-colors duration-200 font-medium ${
                isScrolled
                  ? 'text-white/90 hover:text-white'
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              }`}
            >
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-button"
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled 
                ? 'text-white hover:bg-white/20' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu" 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav
            id="header-nav-mobile"
            className={`py-4 space-y-4 border-t transition-all duration-300 ${
              isScrolled
                ? 'border-white/30'
                : 'border-white/20'
            }`}
          >
            <a
              href="#sobre"
              className="block text-white/90 hover:text-white transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#como-funciona"
              className="block text-white/90 hover:text-white transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </a>
            {adType && (
              <a
                href="#planos"
                className="block text-white/90 hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </a>
            )}
            <a
              href="#seguranca"
              className="block text-white/90 hover:text-white transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Segurança
            </a>
            <a
              href="#faq"
              className="block text-white/90 hover:text-white transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#contato"
              className="block text-white/90 hover:text-white transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
