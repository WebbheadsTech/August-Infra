import React from 'react';
import { motion } from 'motion/react';
import { IconPhone } from '@tabler/icons-react';
import { COMPANY_CONTACT } from '../data/websiteData';

interface CtaSectionProps {
  onStartInquiry: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartInquiry }) => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center py-20 sm:py-28 lg:py-32 px-5 sm:px-8 md:px-12 bg-[#11110f] text-[#f3f0e8] overflow-hidden">
      {/* Background Architectural House Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/zyyn9zhescyZo17s5nC4sAjHDGI.jpg"
          alt="Two story custom house with windows and balcony"
          className="w-full h-full object-cover object-top"
        />
        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-[#11110f]/85 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1450px] mx-auto w-full space-y-8 sm:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-5 sm:space-y-6 max-w-3xl"
        >
          <span className="font-golos text-xs font-semibold uppercase tracking-widest text-[#9c6a36] block">
            Start a Project
          </span>

          <h2 className="font-golos text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#f3f0e8] leading-[1.08] sm:leading-[1.05]">
            Let’s Build Something
            <br className="hidden sm:inline" />{' '}
            Worth Coming Home To.
          </h2>

          <p className="font-golos text-sm sm:text-base md:text-lg text-[#aca598] max-w-xl leading-relaxed">
            Tell us about your project and we’ll start with a thoughtful conversation about your goals, timeline, and vision.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-3 sm:pt-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              href={COMPANY_CONTACT.phoneTel}
              className="inline-flex items-center justify-center sm:justify-start gap-2 font-golos text-xs sm:text-sm font-medium text-[#f3f0e8] hover:text-[#d64918] border-b border-[#f3f0e8] hover:border-[#d64918] pb-1 transition-colors min-h-[44px]"
            >
              <IconPhone className="w-4 h-4 text-[#d64918]" stroke={1.75} />
              <span>Call {COMPANY_CONTACT.phoneDisplay}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
