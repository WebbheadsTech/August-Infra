import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, Phone, Calendar, MapPin, Building, Home, Hammer } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/websiteData';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Housing Projects',
}) => {
  const [serviceType, setServiceType] = useState<string>(initialService);
  const [sqFt, setSqFt] = useState<number>(2500);
  const [location, setLocation] = useState<string>('Visakhapatnam');
  const [timeline, setTimeline] = useState<string>('As soon as possible');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const estimatedBudgetRange = React.useMemo(() => {
    let rateMin = 250;
    let rateMax = 450;
    if (serviceType.includes('Custom Home')) {
      rateMin = 350;
      rateMax = 600;
    } else if (serviceType.includes('Renovation') || serviceType.includes('Remodel')) {
      rateMin = 200;
      rateMax = 380;
    } else if (serviceType.includes('Commercial')) {
      rateMin = 180;
      rateMax = 320;
    }
    const min = (sqFt * rateMin).toLocaleString();
    const max = (sqFt * rateMax).toLocaleString();
    return `$${min} - $${max}`;
  }, [serviceType, sqFt]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#11110f]/80 backdrop-blur-md gpu-layer"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#faf8f3] text-[#10100e] rounded-2xl shadow-2xl overflow-hidden z-10 border border-[#e5e0d6] gpu-layer"
          >
          {/* Header */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[#e5e0d6] bg-[#f3f0e8]">
            <div>
              <div className="flex items-center gap-2 text-[#d64918] font-manrope font-semibold text-xs tracking-wider uppercase mb-1">
                <Hammer className="w-4 h-4" />
                <span>{COMPANY_CONTACT.companyName} Project Inquiry</span>
              </div>
              <h2 className="font-golos text-2xl sm:text-3xl font-medium tracking-tight text-[#10100e]">
                {submitted ? 'Inquiry Submitted' : 'Start Your Project Consultation'}
              </h2>
            </div>
            <button
              onClick={resetAndClose}
              className="p-2 text-[#5e36bcce] hover:text-[#10100e] hover:bg-[#e5e0d6] rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-[#d64918]/10 text-[#d64918] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-golos text-2xl font-semibold">Thank you, {name || 'there'}!</h3>
                  <p className="font-golos text-[#524e47] max-w-md mx-auto text-sm leading-relaxed">
                    We've received your project details for <span className="font-semibold text-[#10100e]">{serviceType}</span> in {location}. One of our senior engineering leads will review your parameters and reach out within 24 hours.
                  </p>
                </div>

                <div className="bg-[#f3f0e8] p-4 rounded-xl border border-[#e5e0d6] text-left max-w-md mx-auto text-sm space-y-2 font-inter">
                  <div className="flex justify-between text-[#524e47]">
                    <span>Estimated Footprint:</span>
                    <span className="font-medium text-[#10100e]">{sqFt.toLocaleString()} sq ft</span>
                  </div>
                  <div className="flex justify-between text-[#524e47]">
                    <span>Target Range:</span>
                    <span className="font-semibold text-[#d64918]">{estimatedBudgetRange}</span>
                  </div>
                  <div className="flex justify-between text-[#524e47]">
                    <span>Direct Call:</span>
                    <a href={COMPANY_CONTACT.phoneTel} className="font-medium text-[#10100e] hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#d64918]" /> {COMPANY_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>

                <button
                  onClick={resetAndClose}
                  className="px-8 py-3.5 bg-[#11110f] text-[#f3f0e8] hover:bg-[#d64918] rounded-md font-golos font-medium transition-colors text-sm cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="block font-golos text-xs font-semibold text-[#524e47] uppercase tracking-wider">
                    1. Select Project Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { title: 'Housing Projects', icon: Home },
                      { title: 'Infrastructure', icon: Building },
                      { title: 'Layout Development', icon: Hammer },
                      { title: 'Interiors', icon: Building },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isSelected = serviceType === item.title;
                      return (
                        <button
                          key={item.title}
                          type="button"
                          onClick={() => setServiceType(item.title)}
                          className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs font-golos font-medium transition-all text-left cursor-pointer ${
                            isSelected
                              ? 'border-[#d64918] bg-[#d64918]/10 text-[#d64918] shadow-xs'
                              : 'border-[#e5e0d6] bg-[#f3f0e8] text-[#252522] hover:border-[#8a407b2b]'
                          }`}
                        >
                          <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-[#d64918]' : 'text-[#8a407b2b]'}`} />
                          <span>{item.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sq Ft Range Slider */}
                <div className="space-y-2 bg-[#f3f0e8] p-4 rounded-xl border border-[#e5e0d6]">
                  <div className="flex justify-between items-center text-xs font-golos">
                    <span className="font-semibold text-[#524e47] uppercase tracking-wider">
                      2. Estimated Footprint / Scope
                    </span>
                    <span className="font-bold text-[#10100e] bg-[#faf8f3] px-2.5 py-1 rounded border border-[#e5e0d6]">
                      {sqFt.toLocaleString()} sq ft
                    </span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={20000}
                    step={250}
                    value={sqFt}
                    onChange={(e) => setSqFt(Number(e.target.value))}
                    className="w-full h-2 bg-[#e5e0d6] rounded-lg appearance-none cursor-pointer accent-[#d64918]"
                  />
                  <div className="flex justify-between text-[11px] font-manrope text-[#8a407b2b] pt-1">
                    <span>Target Budget Benchmark:</span>
                    <span className="font-semibold text-[#d64918]">{estimatedBudgetRange}</span>
                  </div>
                </div>

                {/* Location & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-golos text-xs font-semibold text-[#524e47] uppercase tracking-wider">
                      Location / District
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 absolute left-3 top-3 text-[#8a407b2b]" />
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-[#f3f0e8] border border-[#e5e0d6] rounded-lg text-xs font-golos font-medium text-[#10100e] focus:outline-none focus:border-[#d64918]"
                      >
                        <option value="Visakhapatnam">Visakhapatnam</option>
                        <option value="Vizianagaram">Vizianagaram</option>
                        <option value="Kakinada">Kakinada</option>
                        <option value="Ongole">Ongole</option>
                        <option value="Bobbili">Bobbili</option>
                        <option value="Bhogapuram">Bhogapuram</option>
                        <option value="Guntur">Guntur</option>
                        <option value="Karnataka">Karnataka</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-golos text-xs font-semibold text-[#524e47] uppercase tracking-wider">
                      Target Start Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3 top-3 text-[#8a407b2b]" />
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-[#f3f0e8] border border-[#e5e0d6] rounded-lg text-xs font-golos font-medium text-[#10100e] focus:outline-none focus:border-[#d64918]"
                      >
                        <option value="As soon as possible">As soon as possible</option>
                        <option value="1 - 3 Months">1 - 3 Months</option>
                        <option value="3 - 6 Months">3 - 6 Months</option>
                        <option value="Planning / Future Year">Planning / Future Year</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#f3f0e8] border border-[#e5e0d6] rounded-lg text-xs font-golos text-[#10100e] placeholder-[#8a407b2b] focus:outline-none focus:border-[#d64918]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#f3f0e8] border border-[#e5e0d6] rounded-lg text-xs font-golos text-[#10100e] placeholder-[#8a407b2b] focus:outline-none focus:border-[#d64918]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#f3f0e8] border border-[#e5e0d6] rounded-lg text-xs font-golos text-[#10100e] placeholder-[#8a407b2b] focus:outline-none focus:border-[#d64918]"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <textarea
                    rows={2}
                    placeholder="Brief description of your vision, scope, or site conditions (optional)..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-3.5 py-2 bg-[#f3f0e8] border border-[#e5e0d6] rounded-lg text-xs font-golos text-[#10100e] placeholder-[#8a407b2b] focus:outline-none focus:border-[#d64918] resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#e5e0d6]">
                  <a
                    href={COMPANY_CONTACT.phoneTel}
                    className="text-xs font-golos font-medium text-[#524e47] hover:text-[#10100e] flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#d64918]" />
                    <span>Prefer calling? <strong>{COMPANY_CONTACT.phoneDisplay}</strong></span>
                  </a>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 bg-[#11110f] hover:bg-[#d64918] text-[#f3f0e8] rounded-lg font-golos font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <span>Submit Pre-Construction Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
};
