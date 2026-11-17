import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/websiteData';
import { IconQuote } from '@tabler/icons-react';

export const TestimonialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const featured = TESTIMONIALS[0];
  const supporting = TESTIMONIALS.slice(1);

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 lg:py-32 px-5 sm:px-8 md:px-12 bg-[#edeceb] text-[#10100e]">
      <div className="max-w-[1450px] mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-end border-b border-[#e5e0d6] pb-6 sm:pb-8"
        >
          <div className="space-y-3">
            <span className="font-golos text-xs font-semibold uppercase tracking-widest text-[#524e47] block">
              Client Stories
            </span>
            <h2 className="font-golos text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.08]">
              What Our Clients Remember
            </h2>
          </div>
          <div>
            <p className="font-golos text-sm sm:text-base text-[#524e47] leading-relaxed">
              Direct feedback from the homeowners and businesses we’ve built for, in their own words.
            </p>
          </div>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr] gap-4 sm:gap-6 md:gap-10 items-start bg-[#faf8f3] border border-[#e5e0d6] hover:border-[#d64918]/40 p-6 sm:p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-default"
        >
          <div className="text-[#8a407b2b] font-serif-display text-6xl sm:text-8xl leading-none select-none hidden md:block">
            “
          </div>

          <div className="space-y-5 sm:space-y-6">
            <p className="font-golos text-xl sm:text-2xl md:text-3xl font-normal text-[#10100e] leading-snug">
              "{featured.quote}"
            </p>

            <div className="flex items-center gap-3.5 sm:gap-4 pt-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-[#e5e0d6] flex-shrink-0 shadow-xs">
                <img
                  src={featured.avatar}
                  alt={featured.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-golos text-sm sm:text-base font-semibold text-[#10100e]">
                  {featured.author}
                </h4>
                <p className="font-golos text-xs text-[#524e47]">
                  {featured.role} · {featured.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supporting Testimonials Row */}
        <div className="pt-6 sm:pt-8 border-t border-[#0e6da63e] grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {supporting.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="space-y-5 sm:space-y-6 bg-[#faf8f3]/80 border border-[#e5e0d6] hover:border-[#d64918]/50 p-5 sm:p-8 rounded-xl shadow-xs hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <p className="font-golos text-xs sm:text-sm md:text-base text-[#10100e] leading-relaxed">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-3.5 pt-2">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#e5e0d6] flex-shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-inter font-semibold text-xs text-[#10100e]">
                    {item.author}
                  </h5>
                  <p className="font-golos text-xs text-[#524e47]">
                    {item.role} · {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
