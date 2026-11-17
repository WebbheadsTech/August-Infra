import React from 'react';
import { COMPANY_CONTACT } from '../data/websiteData';
import { AugustLogo } from './AugustLogo';
import { IconBrandInstagram, IconBrandFacebook, IconPhone, IconMail, IconMapPin, IconGlobe } from '@tabler/icons-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[#11110f] text-[#f3f0e8] pt-16 sm:pt-20 pb-10 sm:pb-12 px-5 sm:px-8 md:px-12 border-t border-[#252522]">
      <div className="max-w-[1450px] mx-auto space-y-12 sm:space-y-16">
        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-4 space-y-4 sm:space-y-6">
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center gap-2.5">
              <div>
                <AugustLogo className="w-6 h-6 sm:w-7 sm:h-7" color="#4f62d1" />
              </div>
              <span className="font-golos text-lg sm:text-xl font-medium tracking-tight text-[#f3f0e8]">
                {COMPANY_CONTACT.companyName}
              </span>
            </a>

            <h3 className="font-golos text-xl sm:text-2xl font-normal text-[#f3f0e8] leading-snug max-w-sm">
              Thoughtful Construction.
              <br />
              Built To Last.
            </h3>
            <p className="font-golos text-xs text-[#aca598] max-w-xs leading-relaxed">
              General Contracting, Construction Management, and Design Build services across housing, infrastructure, layout development, and interiors.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#191a17] hover:bg-[#d64918] text-[#aca598] hover:text-white rounded-full flex items-center justify-center transition-colors border border-[#252522]"
                aria-label="Instagram"
              >
                <IconBrandInstagram className="w-4 h-4" stroke={1.75} />
              </a>
              <a
                href={COMPANY_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#191a17] hover:bg-[#d64918] text-[#aca598] hover:text-white rounded-full flex items-center justify-center transition-colors border border-[#252522]"
                aria-label="Facebook"
              >
                <IconBrandFacebook className="w-4 h-4" stroke={1.75} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="sm:col-span-1 md:col-span-3 space-y-3 sm:space-y-4">
            <span className="font-golos text-xs font-semibold uppercase tracking-widest text-[#aca598] block">
              Disciplines & Pages
            </span>
            <ul className="space-y-2.5 font-golos text-xs text-[#aca598]">
              <li>
                <a href="/#services" onClick={(e) => handleLinkClick(e, '/#services')} className="hover:text-[#f3f0e8] transition-colors py-0.5 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="/#about" onClick={(e) => handleLinkClick(e, '/#about')} className="hover:text-[#f3f0e8] transition-colors py-0.5 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="/#faq" onClick={(e) => handleLinkClick(e, '/#faq')} className="hover:text-[#f3f0e8] transition-colors py-0.5 inline-block">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="sm:col-span-1 md:col-span-5 space-y-3 sm:space-y-4">
            <span className="font-golos text-xs font-semibold uppercase tracking-widest text-[#aca598] block">
              Contact August Infra
            </span>
            <div className="space-y-3 font-golos text-xs text-[#aca598]">
              <div className="flex items-start gap-2.5">
                <IconMapPin className="w-4 h-4 text-[#d64918] mt-0.5 flex-shrink-0" stroke={1.75} />
                <span className="text-[#f3f0e8] leading-relaxed">{COMPANY_CONTACT.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <IconPhone className="w-4 h-4 text-[#d64918] flex-shrink-0" stroke={1.75} />
                <a href={COMPANY_CONTACT.phoneTel} className="text-[#f3f0e8] hover:text-[#d64918] transition-colors font-semibold">
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <IconMail className="w-4 h-4 text-[#d64918] flex-shrink-0" stroke={1.75} />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-[#f3f0e8] transition-colors">
                  {COMPANY_CONTACT.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <IconGlobe className="w-4 h-4 text-[#d64918] flex-shrink-0" stroke={1.75} />
                <a href={`https://${COMPANY_CONTACT.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#f3f0e8] transition-colors">
                  {COMPANY_CONTACT.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-[#252522] flex flex-col sm:flex-row items-center justify-between text-xs font-golos text-[#aca598] gap-3 text-center sm:text-left">
          <p>© 2026 {COMPANY_CONTACT.companyName}. All rights reserved.</p>
          
          <p className="text-[#aca598]">
            Developed by{' '}
            <a
              href="https://www.webbheads.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d64918] hover:text-white font-semibold transition-colors underline decoration-[#d64918]/60 underline-offset-4"
            >
              WEBBHEADS
            </a>
          </p>

          <div>
            <span>Visakhapatnam, Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
