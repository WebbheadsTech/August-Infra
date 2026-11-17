import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { FAQSection } from './components/FAQSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';

import { HousingPage } from './pages/HousingPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { LayoutPage } from './pages/LayoutPage';
import { InteriorsPage } from './pages/InteriorsPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('General Contracting');

  // Handle route navigation and section smooth scrolling
  const handleNavigate = (path: string) => {
    if (path.includes('#')) {
      const parts = path.split('#');
      const targetPath = parts[0] || '/';
      const targetId = parts[1];

      window.history.pushState(null, '', path);

      const scrollToElement = (attempt = 0) => {
        const el = document.getElementById(targetId);
        if (el) {
          const lenis = (window as any).lenis;
          if (lenis) {
            lenis.resize();
            lenis.scrollTo(el, { offset: 0 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
        if (attempt < 2) {
          setTimeout(() => scrollToElement(attempt + 1), 200);
        }
      };

      if (currentPath !== targetPath) {
        setCurrentPath(targetPath);
        setTimeout(() => scrollToElement(0), 100);
      } else {
        scrollToElement(0);
      }
      return;
    }

    // Direct section keyword fallbacks
    if (path === '/services') {
      handleNavigate('/#services');
      return;
    }
    if (path === '/about') {
      handleNavigate('/#about');
      return;
    }
    if (path === '/team') {
      handleNavigate('/#team');
      return;
    }
    if (path === '/faq') {
      handleNavigate('/#faq');
      return;
    }

    window.history.pushState(null, '', path);
    setCurrentPath(path);

    // Scroll to absolute top immediately for page changes
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  };

  // Sync route change scroll position & dynamic SEO title
  useEffect(() => {
    switch (currentPath) {
      case '/housing':
        document.title = 'Housing Projects & Gated Communities | August Infra';
        break;
      case '/infrastructure':
        document.title = 'Infrastructure, River Bridges & Municipal Works | August Infra';
        break;
      case '/layout':
        document.title = 'Turn-Key Layout Development & Civil Execution | August Infra';
        break;
      case '/interiors':
        document.title = 'Commercial & Residential Interior Fit-Outs | August Infra';
        break;
      case '/':
      default:
        document.title = 'August Infra | Housing, Infrastructure, Layouts & Interiors';
        break;
    }

    if (window.location.hash) {
      return;
    }

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [currentPath]);

  // Sync back/forward button navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);

      if (window.location.hash) {
        const targetId = window.location.hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            const lenis = (window as any).lenis;
            if (lenis) {
              lenis.scrollTo(el, { offset: 0 });
            } else {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.8,
      infinite: false,
    });

    (window as any).lenis = lenis;

    let reqId: number;
    function raf(time: number) {
      lenis.raf(time);
      reqId = requestAnimationFrame(raf);
    }

    reqId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(reqId);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  // Pause smooth scroll while interactive modals are open
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (!lenis) return;

    if (inquiryModalOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [inquiryModalOpen]);

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setInquiryModalOpen(true);
  };

  // Render active page view based on path
  const renderPageView = () => {
    switch (currentPath) {
      case '/housing':
        return (
          <HousingPage
            onNavigate={handleNavigate}
            onStartInquiry={() => handleOpenInquiry('Housing Projects')}
          />
        );
      case '/infrastructure':
        return (
          <InfrastructurePage
            onNavigate={handleNavigate}
            onStartInquiry={() => handleOpenInquiry('Infrastructure')}
          />
        );
      case '/layout':
        return (
          <LayoutPage
            onNavigate={handleNavigate}
            onStartInquiry={() => handleOpenInquiry('Layout Development')}
          />
        );
      case '/interiors':
        return (
          <InteriorsPage
            onNavigate={handleNavigate}
            onStartInquiry={() => handleOpenInquiry('Interiors')}
          />
        );
      case '/':
      default:
        return (
          <main>
            {/* Hero */}
            <Hero onStartInquiry={() => handleOpenInquiry('Custom Home Building')} />

            {/* Hero Auto-scrolling Ticker Bar */}
            <TrustTicker />

            {/* About August Infra */}
            <AboutSection onStartInquiry={() => handleOpenInquiry('Custom Home Building')} />

            {/* Our Team Section */}
            <TeamSection />

            {/* What We Build / Services Cards linking to pages */}
            <ServicesSection onNavigate={handleNavigate} />

            {/* What Sets Us Apart */}
            <ProcessSection />

            {/* FAQ */}
            <FAQSection />

            {/* Call to Action */}
            <CtaSection onStartInquiry={() => handleOpenInquiry('Custom Home Building')} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#edeceb] text-[#10100e] font-golos selection:bg-[#d64918] selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onStartInquiry={() => handleOpenInquiry('Custom Home Building')}
      />

      {/* Main Page View */}
      {renderPageView()}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
