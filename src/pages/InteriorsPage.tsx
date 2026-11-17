import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INTERIORS_PROJECTS } from '../data/websiteData';
import { IconMapPin, IconArmchair, IconArrowLeft, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

interface InteriorsPageProps {
  onNavigate: (path: string) => void;
  onStartInquiry: () => void;
}

interface ImageSliderProps {
  projectName: string;
  slides: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ projectName, slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide interval of 3 seconds
  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden bg-[#11110f] border border-[#e5e0d6] select-none group/slide shadow-md">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.4, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.4 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full relative"
        >
          <img
            src={slides[currentIndex]}
            alt={`${projectName} interior view ${currentIndex + 1}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10100e]/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Manual Prev / Next Arrow Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-[#10100e]/80 hover:bg-[#d64918] text-white flex items-center justify-center opacity-95 sm:opacity-0 group-hover/slide:opacity-100 transition-all duration-300 cursor-pointer shadow-lg z-10 active:scale-95"
        aria-label="Previous slide"
      >
        <IconChevronLeft className="w-5 h-5" stroke={2} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-[#10100e]/80 hover:bg-[#d64918] text-white flex items-center justify-center opacity-95 sm:opacity-0 group-hover/slide:opacity-100 transition-all duration-300 cursor-pointer shadow-lg z-10 active:scale-95"
        aria-label="Next slide"
      >
        <IconChevronRight className="w-5 h-5" stroke={2} />
      </button>

      {/* Slide Counter Badge */}
      <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#10100e]/80 text-[#faf8f3] text-[11px] font-mono rounded-full backdrop-blur-xs z-10 border border-white/10">
        {currentIndex + 1} / {slides.length}
      </div>

      {/* Slide Indicators Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentIndex === idx
                ? 'w-6 bg-[#d64918]'
                : 'w-2 bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const InteriorsPage: React.FC<InteriorsPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Residential' | 'Commercial'>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  const residentialProjects = INTERIORS_PROJECTS.filter((p) => p.category === 'Residential');
  const commercialProjects = INTERIORS_PROJECTS.filter((p) => p.category === 'Commercial');

  const renderProjectCard = (project: typeof INTERIORS_PROJECTS[0], idx: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="bg-[#faf8f3] border border-[#e5e0d6] rounded-xl sm:rounded-2xl overflow-hidden p-5 sm:p-7 md:p-8 hover:shadow-xl hover:border-[#d64918]/60 transition-all duration-300 flex flex-col justify-between space-y-6"
    >
      <div className="space-y-6">
        {/* Image Slider if available */}
        {project.hasImages && project.imageSlides && (
          <ImageSlider projectName={project.name} slides={project.imageSlides} />
        )}

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#d64918]/10 text-[#d64918] font-bold text-[10px] sm:text-[11px] rounded-full uppercase tracking-wider">
              {project.category} Interior
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#10100e]">
            {project.name}
          </h3>

          <div className="space-y-2.5 text-xs sm:text-sm text-[#524e47] pt-2 border-t border-[#e5e0d6]">
            <div className="flex items-start gap-2">
              <IconMapPin className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
              <span><strong className="text-[#10100e]">Location:</strong> {project.location}</span>
            </div>
            {project.scope && (
              <div className="flex items-start gap-2">
                <IconArmchair className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
                <span><strong className="text-[#10100e]">Scope:</strong> {project.scope}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#edeceb] text-[#10100e] pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 font-golos">
      <div className="max-w-[1450px] mx-auto space-y-8 sm:space-y-12">
        {/* Back Link & Header */}
        <div className="space-y-4 sm:space-y-6">
          <button
            onClick={() => onNavigate('/#services')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#524e47] hover:text-[#d64918] transition-colors cursor-pointer py-1.5 min-h-[44px]"
          >
            <IconArrowLeft className="w-4 h-4" stroke={1.75} />
            <span>Back To Services</span>
          </button>

          <div className="pb-6 sm:pb-8 border-b border-[#e5e0d6]">
            <div className="space-y-3 max-w-3xl">
              <span className="font-golos text-xs font-semibold uppercase tracking-widest text-[#d64918] block">
                Disciplines & Services
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#10100e]">
                Interiors
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#524e47] leading-relaxed">
                Personalized interior design solutions, full home interiors, flat interior fit-outs, and commercial execution with end-to-end management.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Capsule Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 border-b border-[#e5e0d6] pb-4">
          <button
            onClick={() => setActiveTab('All')}
            className={`min-h-[44px] inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'All'
                ? 'bg-[#11110f] text-[#f3f0e8] shadow-md'
                : 'bg-[#faf8f3] text-[#524e47] hover:text-[#10100e] border border-[#e5e0d6]'
            }`}
          >
            All Interiors ({INTERIORS_PROJECTS.length})
          </button>
          <button
            onClick={() => setActiveTab('Residential')}
            className={`min-h-[44px] inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'Residential'
                ? 'bg-[#11110f] text-[#f3f0e8] shadow-md'
                : 'bg-[#faf8f3] text-[#524e47] hover:text-[#10100e] border border-[#e5e0d6]'
            }`}
          >
            Residential ({residentialProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('Commercial')}
            className={`min-h-[44px] inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'Commercial'
                ? 'bg-[#11110f] text-[#f3f0e8] shadow-md'
                : 'bg-[#faf8f3] text-[#524e47] hover:text-[#10100e] border border-[#e5e0d6]'
            }`}
          >
            Commercial ({commercialProjects.length})
          </button>
        </div>

        {/* Separate Section 1: Residential Interiors */}
        {(activeTab === 'All' || activeTab === 'Residential') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#e5e0d6] pb-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#10100e]">
                  Residential Interiors
                </h2>
                <p className="text-xs sm:text-sm text-[#524e47] mt-1">
                  Full home interiors, luxury apartments, and duplex villa fit-outs.
                </p>
              </div>
              <span className="px-3 py-1 bg-[#10100e] text-[#faf8f3] text-xs font-bold rounded-full">
                {residentialProjects.length} Projects
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {residentialProjects.map((project, idx) => renderProjectCard(project, idx))}
            </div>
          </div>
        )}

        {/* Separate Section 2: Commercial Interiors */}
        {(activeTab === 'All' || activeTab === 'Commercial') && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#e5e0d6] pb-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#10100e]">
                  Commercial Interiors
                </h2>
                <p className="text-xs sm:text-sm text-[#524e47] mt-1">
                  Corporate office spaces, retail store fit-outs, and commercial interiors.
                </p>
              </div>
              <span className="px-3 py-1 bg-[#10100e] text-[#faf8f3] text-xs font-bold rounded-full">
                {commercialProjects.length} {commercialProjects.length === 1 ? 'Project' : 'Projects'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {commercialProjects.map((project, idx) => renderProjectCard(project, idx))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

