import React from 'react';
import { motion } from 'motion/react';

export const CraftBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[80vh] overflow-hidden bg-[#11110f]">
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="w-full h-full relative"
      >
        <img
          src="https://framerusercontent.com/images/rB1t1z6k1X3JOgP3phyffa1AVHo.jpg"
          alt="High craft architectural construction craftsmanship"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11110f]/60 via-transparent to-[#11110f]/30" />
      </motion.div>
    </section>
  );
};
