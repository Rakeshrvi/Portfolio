
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 120; // Increased offset for the floating header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes bobble {
            0%, 100% {
              transform: translateY(-2px) translateX(-50%);
            }
            50% {
              transform: translateY(2px) translateX(-50%);
            }
          }
          .animate-bobble {
            animation: bobble 5s ease-in-out infinite;
          }
        `}
      </style>
      <header 
        className={`fixed top-4 left-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 rounded-full animate-bobble
                    ${isScrolled 
                      ? 'bg-slate-900/80 backdrop-blur-lg shadow-2xl shadow-cyan-500/10' 
                      : 'bg-slate-900/50 backdrop-blur-md'}`
      }>
        <div className="px-6 sm:px-10">
          <div className="flex items-center justify-between h-16">
            <a href="#home" onClick={handleNavLinkClick} className="flex-shrink-0">
              <div className="flex flex-col items-start leading-tight">
                <span className="font-montserrat text-xl font-bold text-white tracking-wider">RAKESH RAVI</span>
                <span className="font-lato text-xs text-cyan-400">Techno Manager</span>
              </div>
            </a>
            <nav className="hidden md:flex">
              <ul className="flex items-center space-x-6">
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <a href={link.href} onClick={handleNavLinkClick} className="font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-cyan-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full mt-3 left-0 w-full transition-all duration-300 ease-in-out origin-top
                      ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 pointer-events-none'}`}
        >
          <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl shadow-lg mx-4">
            <ul className="flex flex-col items-center p-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href} className="w-full">
                  <a 
                    href={link.href} 
                    onClick={handleNavLinkClick} 
                    className="block w-full text-center py-2 text-base font-medium text-slate-300 hover:text-slate-900 hover:bg-cyan-400 rounded-md transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
