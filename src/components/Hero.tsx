import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import syedAtifQadeerAvatar from '../assets/images/syed_atif_qadeer.webp';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Shield,
  Zap,
  CheckCircle2,
} from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Pitch & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Live Availability Status Indicator */}
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personal.availability}</span>
            </div>

            {/* Title / Role */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5 text-balance">
              Building scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Laravel & Microservices</span> architectures.
            </h1>

            {/* Sub-prose */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-6 max-w-xl">
              I am <strong className="text-zinc-200 font-semibold">{personal.name}</strong>, a senior software engineer with 4+ years of expertise delivering high-performance Laravel backends, bespoke WordPress & WooCommerce architectures, high-throughput queue workers, and hardened REST APIs.
            </p>

            {/* Clean unboxed metadata with typographic separators */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-zinc-400 mb-8 border-y border-zinc-800/80 py-3 w-full max-w-xl">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{personal.location}</span>
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>4+ Years Experience</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>MS Computer Science</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-emerald-400 font-medium">99.98% Uptime Focus</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={onOpenContact}
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/30 transition-all duration-150 w-full sm:w-auto cursor-pointer"
              >
                <span>Hire / Discuss Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* WhatsApp Button (+92 343 8677088) */}
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 hover:border-emerald-500/60 rounded-lg shadow-sm transition-all duration-150 w-full sm:w-auto cursor-pointer"
                title="Chat with Atif Qadeer on WhatsApp (+92 343 8677088)"
              >
                <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.237-.245-.588-.493-.508-.678-.517-.176-.009-.377-.01-.578-.01s-.527.075-.803.376c-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.911 1.23 3.112.15.2 2.123 3.242 5.143 4.547.719.311 1.28.497 1.718.636.722.23 1.378.197 1.9.12.581-.086 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.2-.577-.35zM12.042 21.67A9.636 9.636 0 017.13 20.33l-.352-.209-3.64.954.971-3.548-.229-.365a9.637 9.637 0 118.162 4.508zM12.042 0C5.391 0 0 5.392 0 12.043c0 2.124.554 4.197 1.606 6.019L0 24l6.102-1.6c1.764.962 3.76 1.47 5.94 1.47 6.65 0 12.042-5.392 12.042-12.043C24.084 5.392 18.692 0 12.042 0z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors inline-flex items-center justify-center cursor-pointer"
                aria-label="Atif Qadeer LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Proof Pills / Trust Points (rendered as clean editorial list) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 w-full max-w-xl">
              <div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums">4+</div>
                <div className="text-xs text-zinc-400">Years Production Engineering</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">38%</div>
                <div className="text-xs text-zinc-400">Database Query Speedup</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-blue-400 tabular-nums">25+</div>
                <div className="text-xs text-zinc-400">Production Systems Delivered</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Interactive Studio Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-zinc-900/90 border border-zinc-800 p-4 sm:p-5 shadow-2xl backdrop-blur-sm overflow-hidden">
              {/* Top Card Image: Syed Atif Qadeer Profile Portrait */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] mb-5 bg-zinc-950 border border-zinc-800 shadow-inner">
                <img
                  src={syedAtifQadeerAvatar}
                  alt={`Portrait of ${personal.name} - Senior Software Engineer`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/syed_atif_qadeer.webp";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Active Engineering Overlay Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-300 bg-zinc-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-700/60 shadow-md">
                  <span className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Server className="w-3.5 h-3.5 text-blue-400" />
                    <span>Laravel 11 &middot; WordPress &middot; MySQL</span>
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400 font-medium text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online</span>
                  </span>
                </div>
              </div>

              {/* Bio Highlights & Quick Technical Profile */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {personal.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-400 font-semibold mt-0.5">
                    {personal.title} &middot; IBSTEC
                  </p>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    MS Computer Science &middot; Lahore, PK
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center shrink-0 text-blue-400 shadow-inner">
                  <Shield className="w-6 h-6" />
                </div>
              </div>

              {/* Engineering Pillars Checklist */}
              <div className="space-y-2 text-xs text-zinc-300 border-t border-zinc-800 pt-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Microservices orchestration with decoupled REST & SOAP APIs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Stripe Connect, Webhook Idempotency & encrypted financial flows</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Redis Queue workers, WebSockets (Laravel Echo) & live synchronization</span>
                </div>
              </div>

              {/* Terminal-like quick footer */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>stack: PHP 8.3 &middot; Laravel &middot; MySQL</span>
                <span className="text-zinc-500">status: verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
