import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Unboxed Metadata */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-white tracking-tight">
            {PORTFOLIO_DATA.personal.name}
          </span>
          <span className="hidden sm:inline text-zinc-700" aria-hidden="true">&middot;</span>
          <span>{PORTFOLIO_DATA.personal.title}</span>
          <span className="hidden sm:inline text-zinc-700" aria-hidden="true">&middot;</span>
          <span className="text-zinc-500">{PORTFOLIO_DATA.personal.location}</span>
        </div>

        {/* Center: Quick Links */}
        <div className="flex items-center gap-5 text-zinc-400 font-medium">
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#architecture" className="hover:text-white transition-colors">
            Architecture
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a
            href="/atif_qadeer_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
          >
            Resume (PDF)
          </a>
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Email Atif Qadeer"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
