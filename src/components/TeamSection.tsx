import React from 'react';
import { motion } from 'motion/react';

export interface Partner {
  id: string;
  name: string;
  role: string;
  initials: string;
  image?: string;
}

export const PARTNERS: Partner[] = [
  {
    id: 'sudheer-nemani',
    name: 'Sudheer Nemani',
    role: 'Partner',
    initials: 'SN',
  },
  {
    id: 'uday-chandra-oruganti',
    name: 'Uday Chandra Oruganti',
    role: 'Partner',
    initials: 'UO',
  },
  {
    id: 'harish-pallapati',
    name: 'Harish Pallapati',
    role: 'Partner',
    initials: 'HP',
  },
  {
    id: 'navya-vahini-rapeti',
    name: 'Navya Vahini Rapeti',
    role: 'Partner',
    initials: 'NV',
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section
      id="team"
      className="relative py-16 sm:py-24 lg:py-32 px-5 sm:px-8 md:px-12 bg-[#faf8f3] text-[#10100e] border-t border-[#e5e0d6] scroll-mt-24"
    >
      <div className="max-w-[1450px] mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-4xl"
        >
          <span className="font-golos text-xs font-semibold uppercase tracking-widest text-[#524e47] block">
            OUR TEAM
          </span>
          <h2 className="font-golos text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#10100e] leading-[1.08]">
            The Partners Behind August Infra
          </h2>
          <p className="font-golos text-sm sm:text-base md:text-lg text-[#524e47] leading-relaxed pt-2">
            In the vibrant coastal city of Visakhapatnam, the story of August Infra began its first chapter in 2016, as a testament to the shared vision of four partners: Sudheer Nemani, Uday Chandra Oruganti, Harish Pallapati, and Navya Vahini Rapeti. United by a passion for transforming dreams into reality, they laid the foundation for a company that would redefine the landscape of housing, interiors, infrastructure, and venture development services.
          </p>
        </motion.div>

        {/* 4 Partner Cards Grid: 1 col mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="bg-[#faf8f3] border border-[#e5e0d6] rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl hover:border-[#d64918]/60 transition-all duration-300 flex flex-col items-center justify-center space-y-4 group"
            >
              {partner.image ? (
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#d64918]/30 group-hover:border-[#d64918] transition-colors shadow-md"
                />
              ) : (
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#11110f] text-[#faf8f3] font-bold text-xl sm:text-2xl flex items-center justify-center border-2 border-[#d64918]/30 group-hover:border-[#d64918] transition-colors shadow-md select-none">
                  {partner.initials}
                </div>
              )}

              <div className="space-y-1">
                <h3 className="font-golos text-lg sm:text-xl font-bold text-[#10100e] group-hover:text-[#d64918] transition-colors">
                  {partner.name}
                </h3>
                <p className="font-golos text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#d64918]">
                  {partner.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
