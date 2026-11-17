import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HOUSING_PROJECTS, COMPANY_CONTACT } from '../data/websiteData';
import { IconMapPin, IconHome2, IconBuildingSkyscraper, IconArrowLeft } from '@tabler/icons-react';

interface HousingPageProps {
  onNavigate: (path: string) => void;
  onStartInquiry: () => void;
}

export const HousingPage: React.FC<HousingPageProps> = ({ onNavigate, onStartInquiry }) => {
  const [activeTab, setActiveTab] = useState<'Completed' | 'Ongoing'>('Completed');

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  const completedProjects = HOUSING_PROJECTS.filter((p) => p.status === 'Completed');
  const ongoingProjects = HOUSING_PROJECTS.filter((p) => p.status === 'Ongoing');

  const displayedProjects = activeTab === 'Completed' ? completedProjects : ongoingProjects;

  return (
    <div className="min-h-screen bg-[#edeceb] text-[#10100e] pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 font-golos">
      <div className="max-w-[1450px] mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Back Link & Header */}
        <div className="space-y-4 sm:space-y-6">
          <button
            onClick={() => onNavigate('/#services')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#524e47] hover:text-[#d64918] transition-colors cursor-pointer min-h-[44px]"
          >
            <IconArrowLeft className="w-4 h-4" stroke={1.75} />
            <span>Back To Services</span>
          </button>

          <div className="pb-6 sm:pb-8 border-b border-[#e5e0d6]">
            <div className="space-y-2 sm:space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#10100e]">
                Housing Projects
              </h1>
              <p className="text-xs sm:text-base text-[#524e47] leading-relaxed">
                Site development, duplex villas, triplex villas, and gated community residential developments across Andhra Pradesh.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Capsule Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-[#e5e0d6] pb-4">
          <button
            onClick={() => setActiveTab('Completed')}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer min-h-[44px] ${
              activeTab === 'Completed'
                ? 'bg-[#11110f] text-[#f3f0e8] shadow-md'
                : 'bg-[#faf8f3] text-[#524e47] hover:text-[#10100e] border border-[#e5e0d6]'
            }`}
          >
            Completed ({completedProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('Ongoing')}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer min-h-[44px] ${
              activeTab === 'Ongoing'
                ? 'bg-[#11110f] text-[#f3f0e8] shadow-md'
                : 'bg-[#faf8f3] text-[#524e47] hover:text-[#10100e] border border-[#e5e0d6]'
            }`}
          >
            Ongoing ({ongoingProjects.length})
          </button>
        </div>

        {/* Project Cards Grid (Responsive 1-col on mobile/tablet, 2-col on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[#faf8f3] border border-[#e5e0d6] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#d64918]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4 p-5 sm:p-7 md:p-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#d64918]/10 text-[#d64918] font-bold text-[10px] sm:text-[11px] rounded-full uppercase tracking-wider">
                      {project.status} Housing
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-semibold text-[#10100e]">
                    {project.name}
                  </h2>

                  <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#524e47]">
                    <div className="flex items-start gap-2.5">
                      <IconHome2 className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
                      <div>
                        <strong className="text-[#10100e] block">Scope:</strong>
                        <span>{project.scope}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <IconMapPin className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
                      <div>
                        <strong className="text-[#10100e] block">Location:</strong>
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* SFT Field - Hidden if empty/null */}
                    {project.sft && project.sft.trim() !== '' && project.sft !== '[to be added]' && (
                      <div className="flex items-start gap-2.5 pt-2 border-t border-[#e5e0d6]/50">
                        <IconBuildingSkyscraper className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
                        <div>
                          <strong className="text-[#10100e] block">SFT:</strong>
                          <span>{project.sft}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

