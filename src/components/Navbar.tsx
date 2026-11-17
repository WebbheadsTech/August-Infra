import React, { useState, useEffect } from 'react';
import { IconPhone, IconMenu2, IconX, IconArrowRight } from '@tabler/icons-react';
import { COMPANY_CONTACT } from '../data/websiteData';
import { AugustLogo } from './AugustLogo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onStartInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onStartInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/#about', target: 'about' },
    { name: 'Team', path: '/#team', target: 'team' },
    { name: 'Services', path: '/#services', target: 'services' },
    { name: 'FAQ', path: '/#faq', target: 'faq' },
  ];

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (currentPath !== '/') {
      setActiveSection('');
      return;
    }

    let ticking = false;
    const handleScrollActive = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY < 350) {
            setActiveSection('');
            ticking = false;
            return;
          }

          const sections = ['about', 'team', 'services', 'faq'];
          const scrollPosition = window.scrollY + 180;

          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(sectionId);
                ticking = false;
                return;
              }
            }
          }
          setActiveSection('');
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScrollActive();
    window.addEventListener('scroll', handleScrollActive, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, [currentPath]);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const isHeroTransparent = currentPath === '/' && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isHeroTransparent
          ? 'bg-transparent py-5 border-none text-white'
          : 'bg-[#faf8f3]/90 backdrop-blur-md shadow-sm py-3.5 border-b border-[#e5e0d6]/80 text-[#10100e]'
      }`}
    >
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-2.5 group cursor-pointer py-1"
        >
          <div className="transition-transform group-hover:scale-105">
            <AugustLogo 
              className="w-6 h-6 sm:w-7 sm:h-7" 
              color={isHeroTransparent ? "#ffffff" : "#2b3a8c"} 
            />
          </div>
          <span className={`font-golos text-lg sm:text-xl font-medium tracking-tight transition-colors duration-300 ${
            isHeroTransparent ? 'text-[#faf8f3]' : 'text-[#10100e]'
          }`}>
            {COMPANY_CONTACT.companyName}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-golos text-xs xl:text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentPath === '/' && activeSection === link.target;
            return (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`transition-colors py-2 relative ${
                  isActive
                    ? 'text-[#d64918] font-semibold'
                    : isHeroTransparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-[#252522] hover:text-[#d64918]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d64918] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 xl:gap-5">
          <a
            href={COMPANY_CONTACT.phoneTel}
            className={`flex items-center gap-2 font-golos text-xs xl:text-sm font-medium transition-colors border-b pb-0.5 ${
              isHeroTransparent
                ? 'text-white/90 border-white/60 hover:text-[#d64918] hover:border-[#d64918]'
                : 'text-[#10100e] border-[#10100e] hover:text-[#d64918] hover:border-[#d64918]'
            }`}
          >
            <IconPhone className="w-3.5 h-3.5" stroke={1.75} />
            <span>Call {COMPANY_CONTACT.phoneDisplay}</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2.5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer ${
            isHeroTransparent ? 'text-white' : 'text-[#10100e] hover:text-[#d64918]'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <IconX className="w-6 h-6" stroke={1.75} /> : <IconMenu2 className="w-6 h-6" stroke={1.75} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f3] border-b border-[#e5e0d6] px-6 py-6 space-y-6 animate-in slide-in-from-top-2 shadow-xl">
          <nav className="flex flex-col gap-2 font-golos text-base font-medium text-[#252522]">
            {navLinks.map((link) => {
              const isActive = currentPath === '/' && activeSection === link.target;
              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`transition-colors py-2.5 px-3 rounded-md flex items-center justify-between ${
                    isActive
                      ? 'bg-[#d64918]/10 text-[#d64918] font-semibold'
                      : 'hover:bg-[#e5e0d6]/40 text-[#252522]'
                  }`}
                >
                  <span>{link.name}</span>
                  <IconArrowRight className="w-4 h-4 text-[#d64918]" stroke={1.75} />
                </a>
              );
            })}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={COMPANY_CONTACT.phoneTel}
              className="flex items-center justify-center gap-2 py-3 bg-[#f3f0e8] border border-[#e5e0d6] rounded-md font-golos text-xs font-semibold text-[#10100e]"
            >
              <IconPhone className="w-4 h-4 text-[#d64918]" stroke={1.75} />
              <span>Call {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartInquiry();
              }}
              className="w-full py-3.5 bg-[#11110f] text-[#f3f0e8] text-xs font-golos font-medium rounded-md text-center flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
            >
              <span>Start Your Project</span>
              <IconArrowRight className="w-4 h-4" stroke={1.75} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
