import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_ABOUT } from '../data/websiteData';
import { IconTarget, IconEye, IconShieldCheck } from '@tabler/icons-react';

interface AboutSectionProps {
  onStartInquiry?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 px-5 sm:px-8 md:px-12 bg-[#faf8f3] text-[#10100e] overflow-hidden border-t border-[#e5e0d6] scroll-mt-24">
      <div className="max-w-[1450px] mx-auto space-y-12 sm:space-y-16">
        {/* Top Header: Eyebrow & Heading ABOVE the image and text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 max-w-4xl"
        >
          <span className="font-golos text-xs font-semibold uppercase tracking-widest text-[#d64918] block">
            Engineering & Construction
          </span>
          <h2 className="font-golos text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#10100e] leading-[1.08]">
            {COMPANY_ABOUT.heading}
          </h2>
        </motion.div>

        {/* Side-by-Side Grid: Image on Left, Paragraph Matter on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 lg:col-span-5"
          >
            <div className="w-full h-[240px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden relative shadow-lg border border-[#e5e0d6] group">
              <img
                src="https://framerusercontent.com/images/bO2CHpcm7219CzEeMIskBE5qdoY.png"
                alt="August Infra architectural project"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Right Column: Paragraph Text Matter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 lg:col-span-7"
          >
            <p className="font-golos text-base sm:text-lg md:text-xl text-[#524e47] leading-relaxed">
              {COMPANY_ABOUT.paragraph}
            </p>
          </motion.div>
        </div>

        {/* 3 Detailed Cards Below: Mission, Vision, Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#e5e0d6]"
        >
          {/* Box 1 — Mission */}
          <div className="p-6 bg-[#edeceb]/80 border border-[#e5e0d6] rounded-xl space-y-3 hover:border-[#d64918]/50 transition-colors shadow-xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#d64918]/10 text-[#d64918] rounded-lg flex-shrink-0">
                <IconTarget className="w-5 h-5" stroke={1.75} />
              </div>
              <h3 className="font-golos text-lg font-bold text-[#10100e]">Mission</h3>
            </div>
            <p className="font-golos text-xs sm:text-sm text-[#524e47] leading-relaxed">
              {COMPANY_ABOUT.mission}
            </p>
          </div>

          {/* Box 2 — Vision */}
          <div className="p-6 bg-[#edeceb]/80 border border-[#e5e0d6] rounded-xl space-y-3 hover:border-[#d64918]/50 transition-colors shadow-xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#d64918]/10 text-[#d64918] rounded-lg flex-shrink-0">
                <IconEye className="w-5 h-5" stroke={1.75} />
              </div>
              <h3 className="font-golos text-lg font-bold text-[#10100e]">Vision</h3>
            </div>
            <p className="font-golos text-xs sm:text-sm text-[#524e47] leading-relaxed">
              {COMPANY_ABOUT.vision}
            </p>
          </div>

          {/* Box 3 — Core Values */}
          <div className="p-6 bg-[#edeceb]/80 border border-[#e5e0d6] rounded-xl space-y-3 hover:border-[#d64918]/50 transition-colors shadow-xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#d64918]/10 text-[#d64918] rounded-lg flex-shrink-0">
                <IconShieldCheck className="w-5 h-5" stroke={1.75} />
              </div>
              <h3 className="font-golos text-lg font-bold text-[#10100e]">Core Values</h3>
            </div>
            <p className="font-golos text-xs sm:text-sm text-[#524e47] leading-relaxed">
              {COMPANY_ABOUT.coreValues}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
