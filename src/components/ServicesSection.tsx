import React from 'react';
import { motion } from 'motion/react';
import { SERVICES, SERVICES_HEADER, COMPANY_CONTACT } from '../data/websiteData';
import { IconArrowUpRight } from '@tabler/icons-react';

interface ServicesSectionProps {
  onNavigate: (path: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 px-5 sm:px-8 md:px-12 bg-[#edeceb] text-[#10100e] border-t border-[#e5e0d6] scroll-mt-24">
      <div className="max-w-[1450px] mx-auto space-y-16 sm:space-y-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-end pb-4 sm:pb-8"
        >
          <div className="space-y-3">
            <span className="font-golos text-xs font-semibold uppercase tracking-widest text-[#524e47] block">
              {SERVICES_HEADER.eyebrow}
            </span>
            <h2 className="font-golos text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.08]">
              {SERVICES_HEADER.heading}
            </h2>
          </div>
          <div>
            <p className="font-golos text-sm sm:text-base text-[#524e47] leading-relaxed">
              {SERVICES_HEADER.intro}
            </p>
          </div>
        </motion.div>

        {/* Services & Projects Cards List */}
        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 scroll-mt-28">
          {SERVICES.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                onClick={() => onNavigate(service.path)}
                className="group cursor-pointer flex flex-col justify-between bg-[#faf8f3] border border-[#e5e0d6] rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-[#d64918]/60 transition-all duration-500"
              >
                <div className="space-y-6">
                  {/* Image Box */}
                  <div className="h-[220px] sm:h-[260px] md:h-[280px] rounded-xl overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 right-4 bg-[#11110f]/80 backdrop-blur-md text-white p-2.5 rounded-full opacity-90 sm:opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <IconArrowUpRight className="w-4 h-4" stroke={1.75} />
                    </div>
                  </div>

                  {/* Text Detail Box */}
                  <div className="space-y-2">
                    <h3 className="font-golos text-xl sm:text-2xl font-medium tracking-tight text-[#10100e] group-hover:text-[#d64918] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-golos text-xs sm:text-sm text-[#524e47] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#e5e0d6] mt-6 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#10100e] text-[#faf8f3] text-xs font-golos font-medium tracking-wide shadow-sm group-hover:bg-[#d64918] group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.02]">
                    <span>Explore {service.title}</span>
                    <IconArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" stroke={1.75} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
