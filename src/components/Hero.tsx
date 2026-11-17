import React from 'react';
import { motion } from 'motion/react';
import { IconArrowRight } from '@tabler/icons-react';

import { COMPANY_CONTACT } from '../data/websiteData';

interface HeroProps {
  onStartInquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative flex flex-col justify-start pt-28 sm:pt-32 lg:pt-40 pb-0 px-5 sm:px-8 md:px-12 overflow-hidden bg-[#edeceb] min-h-[auto] lg:min-h-screen">
      {/* Background Cloud Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden gpu-layer">
        <img
          src="/hero-cloud-bg.webp"
          alt="Atmospheric architectural sky cloud background"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-top gpu-layer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#edeceb]/10 via-transparent via-40% to-[#edeceb]" />
      </div>

      {/* Hero Content Container (Side-by-Side Grid Layout) */}
      <div className="relative z-10 max-w-[1650px] mx-auto w-full flex-1 flex flex-col justify-start pt-0 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start lg:items-end w-full flex-1">
          {/* Left Column: Headline & Action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 space-y-5 sm:space-y-6 z-20 pt-1 sm:pt-2 lg:pt-2 pb-4 lg:pb-12 lg:self-start gpu-layer"
          >
            {/* Main Headline */}
            <h1 className="font-golos text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[66px] font-medium tracking-tight leading-[1.06] text-[#10100e]">
              Passion reinforced with quality
            </h1>

            {/* Action Button */}
            <div className="pt-1">
              <motion.a
                href={COMPANY_CONTACT.whatsappUrl || "https://wa.me/919160666776?text=Hi%20August%20Infra%2C%20I%20would%20like%20to%20inquire%20about%20a%20project."}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#11110f] hover:bg-[#d64918] text-[#f3f0e8] text-sm font-golos font-medium rounded transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer min-h-[50px] gpu-layer"
              >
                <span>Let's Begin</span>
                <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" stroke={1.75} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Transparent House Cutout Render */}
          <div className="lg:col-span-7 xl:col-span-7 relative z-10 flex justify-center lg:justify-end items-end self-end cursor-pointer mt-2 lg:mt-0 -mx-4 sm:mx-0 pb-0 -translate-y-4 sm:-translate-y-6 lg:-translate-y-10 xl:-translate-y-12 gpu-layer">
            <img
              src="/hero2-transparent.webp"
              alt="August Infra custom residence render"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-[115%] sm:w-full max-w-none sm:max-w-full lg:max-w-none lg:w-[130%] xl:w-[145%] h-auto max-h-[420px] sm:max-h-[520px] md:max-h-[620px] lg:max-h-[880px] xl:max-h-[1050px] object-contain object-bottom drop-shadow-2xl -ml-[7.5%] sm:ml-0 block align-bottom transition-transform duration-500 hover:scale-[1.015] hover:-translate-y-1 gpu-layer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
