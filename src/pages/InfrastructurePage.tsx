import React, { useState } from 'react';
import { motion } from 'motion/react';
import { INFRASTRUCTURE_PROJECTS, COMPANY_CONTACT } from '../data/websiteData';
import { IconMapPin, IconBuildingBridge, IconArrowLeft, IconUserCheck } from '@tabler/icons-react';

interface InfrastructurePageProps {
  onNavigate: (path: string) => void;
  onStartInquiry: () => void;
}

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({ onNavigate, onStartInquiry }) => {
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

  const completedProjects = INFRASTRUCTURE_PROJECTS.filter((p) => p.status === 'Completed');
  const ongoingProjects = INFRASTRUCTURE_PROJECTS.filter((p) => p.status === 'Ongoing');

  const displayedProjects = activeTab === 'Completed' ? completedProjects : ongoingProjects;

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
                Infrastructure
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#524e47] leading-relaxed">
                Major River Bridges, CC Roadways, PMC Engineering Supervisions, Railway Renovations, School Buildings, And Municipal Works.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs - Flex Wrap for Mobile */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 border-b border-[#e5e0d6] pb-4">
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
        </div>

        {/* Clean Structured List Layout */}
        <div className="space-y-4 sm:space-y-6">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#faf8f3] border border-[#e5e0d6] rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-8 hover:border-[#d64918]/60 transition-all duration-300 shadow-xs hover:shadow-md space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e5e0d6] pb-3 sm:pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-[#d64918]/10 text-[#d64918] rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0">
                    0{idx + 1}
                  </span>
                  <h2 className="text-lg sm:text-2xl font-semibold text-[#10100e] leading-snug">
                    {project.name}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#10100e] text-[#faf8f3] font-bold text-[10px] sm:text-[11px] rounded-full uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs sm:text-sm text-[#524e47]">
                <div className="md:col-span-6 flex items-start gap-2.5">
                  <IconBuildingBridge className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
                  <div>
                    <strong className="text-[#10100e] block mb-0.5">Scope of Work:</strong>
                    <span>{project.scope}</span>
                  </div>
                </div>

                {project.location && (
                  <div className="md:col-span-3 flex items-start gap-2.5">
                    <IconMapPin className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
                    <div>
                      <strong className="text-[#10100e] block mb-0.5">Location:</strong>
                      <span>{project.location}</span>
                    </div>
                  </div>
                )}

                {project.clientName && (
                  <div className="md:col-span-3 flex items-start gap-2.5">
                    <IconUserCheck className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
                    <div>
                      <strong className="text-[#10100e] block mb-0.5">Client Name:</strong>
                      <span>{project.clientName}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

