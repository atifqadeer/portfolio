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
            href={PORTFOLIO_DATA.personal.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-400 hover:text-emerald-400 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center group"
            aria-label="Chat on WhatsApp (+92 343 8677088)"
            title="Chat on WhatsApp: +92 343 8677088"
          >
            <svg className="w-4 h-4 fill-current group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.237-.245-.588-.493-.508-.678-.517-.176-.009-.377-.01-.578-.01s-.527.075-.803.376c-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.911 1.23 3.112.15.2 2.123 3.242 5.143 4.547.719.311 1.28.497 1.718.636.722.23 1.378.197 1.9.12.581-.086 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.2-.577-.35zM12.042 21.67A9.636 9.636 0 017.13 20.33l-.352-.209-3.64.954.971-3.548-.229-.365a9.637 9.637 0 118.162 4.508zM12.042 0C5.391 0 0 5.392 0 12.043c0 2.124.554 4.197 1.606 6.019L0 24l6.102-1.6c1.764.962 3.76 1.47 5.94 1.47 6.65 0 12.042-5.392 12.042-12.043C24.084 5.392 18.692 0 12.042 0z" />
            </svg>
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Email Atif Qadeer"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
