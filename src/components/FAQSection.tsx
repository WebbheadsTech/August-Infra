import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS, FAQ_HEADER } from '../data/websiteData';
import { IconPlus, IconMinus } from '@tabler/icons-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-32 px-5 sm:px-8 md:px-12 bg-[#edeceb] text-[#10100e]">
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-start">
        {/* Header Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="md:col-span-4 lg:col-span-4 space-y-4 md:sticky md:top-32"
        >
          <span className="font-golos text-xs font-semibold uppercase tracking-widest text-[#524e47] block">
            {FAQ_HEADER.eyebrow}
          </span>
          <h2 className="font-golos text-2xl sm:text-4xl font-medium tracking-tight leading-[1.08]">
            {FAQ_HEADER.heading}
          </h2>
          <p className="font-golos text-xs sm:text-sm text-[#524e47] leading-relaxed pt-2">
            Questions about our operations across Andhra Pradesh and Karnataka, turn-key approvals, and project management.
          </p>
        </motion.div>

        {/* Accordion Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-8 lg:col-span-8 space-y-0 divide-y divide-[#0e6da63e]"
        >
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                whileHover={{ backgroundColor: 'rgba(250, 248, 243, 0.5)' }}
                className="py-5 sm:py-7 px-3 sm:px-4 rounded-xl transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none gap-4 min-h-[44px]"
                >
                  <span className="font-golos text-base sm:text-lg md:text-xl font-medium text-[#10100e] group-hover:text-[#d64918] transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="p-1.5 rounded-full bg-[#faf8f3] border border-[#e5e0d6] text-[#524e47] group-hover:text-[#d64918] group-hover:border-[#d64918]/50 transition-all duration-300 flex-shrink-0">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? <IconMinus className="w-4 h-4" stroke={1.75} /> : <IconPlus className="w-4 h-4" stroke={1.75} />}
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-golos text-xs sm:text-sm text-[#524e47] leading-relaxed pt-3 sm:pt-4 pr-2 sm:pr-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
