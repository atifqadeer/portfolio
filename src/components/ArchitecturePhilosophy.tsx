import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Layers,
  Zap,
  Database,
  ShieldCheck,
} from 'lucide-react';

export const ArchitecturePhilosophy: React.FC = () => {
  return (
    <section id="architecture" className="py-20 md:py-28 bg-zinc-950/80 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Engineering Principles & System Design
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Backend Architecture Philosophy
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            How I architect mission-critical Laravel and PHP applications to survive high concurrency, maintain sub-100ms response times, and prevent data regressions.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.architecturePrinciples.map((principle, idx) => {
            const icons = [Layers, Zap, Database, ShieldCheck];
            const IconComponent = icons[idx % icons.length];

            return (
              <div
                key={principle.title}
                className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-900/60 flex items-center justify-center text-blue-400 mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-blue-400">
                  {principle.stat}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
