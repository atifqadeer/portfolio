import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  ArrowRight,
  Download,
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
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
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
              I am <strong className="text-zinc-200 font-semibold">{personal.name}</strong>, a senior backend engineer with 4+ years of expertise designing mission-critical web platforms, high-throughput asynchronous queue workers, Stripe payment pipelines, and normalized MySQL schemas.
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
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/30 transition-all duration-150 w-full sm:w-auto"
              >
                <span>Hire / Discuss Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>View Full CV</span>
              </button>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
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
              {/* Studio workspace image with contrast gradient */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-5 bg-zinc-950 border border-zinc-800">
                <img
                  src="/src/assets/images/hero_workspace_studio_1790626105776.jpg"
                  alt="Syed Atif Qadeer software engineering workstation"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if asset missing
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
                
                {/* Active Engineering Overlay Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-300 bg-zinc-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-700/60">
                  <span className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Server className="w-3.5 h-3.5 text-blue-400" />
                    <span>Microservices &middot; Laravel 11 &middot; MySQL</span>
                  </span>
                  <span className="text-emerald-400 font-medium text-[11px]">Online</span>
                </div>
              </div>

              {/* Bio Highlights & Quick Technical Profile */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-zinc-800 border-2 border-blue-500/70 shadow-lg shrink-0">
                  <img
                    src={personal.avatar || "/src/assets/images/syed_atif_qadeer.webp"}
                    alt={`${personal.name} - Senior Software Engineer`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "/syed_atif_qadeer.webp";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {personal.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-400 font-semibold mt-0.5">
                    {personal.title} &middot; IBSTEC
                  </p>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    MS Computer Science &middot; Lahore, PK
                  </p>
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
