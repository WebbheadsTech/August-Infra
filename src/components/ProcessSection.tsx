import React from 'react';
import { motion } from 'motion/react';
import { WHAT_SETS_US_APART } from '../data/websiteData';
import { IconAward, IconClockCheck, IconHeartHandshake } from '@tabler/icons-react';

export const ProcessSection: React.FC = () => {
  const icons = [
    <IconAward className="w-6 h-6 text-[#d64918]" key="q" stroke={1.75} />,
    <IconClockCheck className="w-6 h-6 text-[#d64918]" key="t" stroke={1.75} />,
    <IconHeartHandshake className="w-6 h-6 text-[#d64918]" key="p" stroke={1.75} />
  ];

  return (
    <section id="what-sets-us-apart" className="relative py-16 sm:py-24 lg:py-32 px-5 sm:px-8 md:px-12 bg-[#edeceb] text-[#10100e] border-t border-[#e5e0d6]">
      <div className="max-w-[1450px] mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-end"
        >
          <div className="space-y-3">
            <span className="font-golos text-xs font-semibold uppercase tracking-widest text-[#524e47] block">
              Why Choose August Infra
            </span>
            <h2 className="font-golos text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.08]">
              What Sets Us Apart
            </h2>
          </div>
          <div>
            <p className="font-golos text-sm sm:text-base text-[#524e47] leading-relaxed">
              We approach every project with unyielding commitment to engineering precision, strict timeline adherence, and genuine passion for building lasting structures.
            </p>
          </div>
        </motion.div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {WHAT_SETS_US_APART.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="bg-[#faf8f3] border border-[#e5e0d6] hover:border-[#d64918]/60 p-8 rounded-2xl shadow-xs hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#d64918]/10 rounded-xl flex items-center justify-center">
                  {icons[idx]}
                </div>
                <h3 className="font-golos text-xl font-bold text-[#10100e]">
                  {card.title}
                </h3>
                <p className="font-golos text-xs sm:text-sm text-[#524e47] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
