import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LAYOUT_PROJECTS, COMPANY_CONTACT } from '../data/websiteData';
import { IconMapPin, IconLayersIntersect, IconCalendar, IconArrowLeft, IconTrees, IconInfoCircle } from '@tabler/icons-react';

interface LayoutPageProps {
  onNavigate: (path: string) => void;
  onStartInquiry: () => void;
}

export const LayoutPage: React.FC<LayoutPageProps> = ({ onNavigate, onStartInquiry }) => {
  const [activeTab, setActiveTab] = useState<'Ongoing' | 'Completed'>('Ongoing');

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  const ongoingProjects = LAYOUT_PROJECTS.filter((p) => p.status === 'Ongoing');
  const completedProjects = LAYOUT_PROJECTS.filter((p) => p.status === 'Completed');

  const displayedProjects = activeTab === 'Ongoing' ? ongoingProjects : completedProjects;

  return (
    <div className="min-h-screen bg-[#edeceb] text-[#10100e] pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 font-golos">
      <div className="max-w-[1450px] mx-auto space-y-8 sm:space-y-12">
        {/* Back Link & Header */}
        <div className="space-y-4 sm:space-y-6">
          <button
            onClick={() => onNavigate('/#services')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#524e47] hover:text-[#d64918] transition-colors cursor-pointer py-1.5 min-h-[44px]"
          >
            <IconArrowLeft className="w-4 h-4" stroke={1.75} />
            <span>Back To Services</span>
          </button>

          <div className="pb-6 sm:pb-8 border-b border-[#e5e0d6]">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#10100e]">
                Layout Development
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#524e47] leading-relaxed">
                Turn-Key Residential Layout Execution - Asphalt & CC Roads, Underground Drainage Networks, Boundary Walls, Clubhouses, And Government Approvals.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs - Flex Wrap for Mobile */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 border-b border-[#e5e0d6] pb-4">
          <button
            onClick={() => setActiveTab('Ongoing')}
            className={`min-h-[44px] inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'Ongoing'
                ? 'bg-[#11110f] text-[#f3f0e8] shadow-md'
                : 'bg-[#faf8f3] text-[#524e47] hover:text-[#10100e] border border-[#e5e0d6]'
            }`}
          >
            Ongoing ({ongoingProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('Completed')}
            className={`min-h-[44px] inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'Completed'
                ? 'bg-[#11110f] text-[#f3f0e8] shadow-md'
                : 'bg-[#faf8f3] text-[#524e47] hover:text-[#10100e] border border-[#e5e0d6]'
            }`}
          >
            Completed ({completedProjects.length})
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#faf8f3] border border-[#e5e0d6] rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-8 hover:shadow-xl hover:border-[#d64918]/60 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`px-3 py-1 font-bold text-[10px] sm:text-[11px] rounded-full uppercase tracking-wider ${
                      project.status === 'Completed'
                        ? 'bg-[#15803d] text-white'
                        : 'bg-[#10100e] text-[#faf8f3]'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#10100e]">
                  {project.name}
                </h2>

                <div className="space-y-2.5 text-xs sm:text-sm text-[#524e47] pt-2 border-t border-[#e5e0d6]/70">
                  <div className="flex items-start gap-2">
                    <IconMapPin className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
                    <span><strong className="text-[#10100e]">Location:</strong> {project.location}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <IconLayersIntersect className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
                    <span><strong className="text-[#10100e]">Scope:</strong> {project.scope}</span>
                  </div>
                  {project.acres && (
                    <div className="flex items-start gap-2">
                      <IconTrees className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
                      <span><strong className="text-[#10100e]">Extent (Acres):</strong> {project.acres}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-start gap-2">
                      <IconCalendar className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
                      <span><strong className="text-[#10100e]">Duration:</strong> {project.duration}</span>
                    </div>
                  )}
                  {project.note && (
                    <div className="flex items-start gap-2 text-xs italic text-[#d64918]">
                      <IconInfoCircle className="w-4 h-4 mt-0.5 flex-shrink-0" stroke={1.75} />
                      <span>Note: {project.note}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-[#e5e0d6]/60">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#d64918]">
                  Turn-key Layout Execution
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

