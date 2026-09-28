import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  GraduationCap,
  MapPin,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const { experiences, education } = PORTFOLIO_DATA;
  const [expandedId, setExpandedId] = useState<string | null>('ibstec');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-zinc-950/60 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Career Journey & Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            Over 4 years of engineering scalable, secure, and resilient web solutions across industry-leading product teams and tech consultancies.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                    index === 0
                      ? 'bg-blue-600 border-zinc-950 ring-4 ring-blue-500/20'
                      : 'bg-zinc-800 border-zinc-600 group-hover:border-blue-400'
                  }`}
                  aria-hidden="true"
                />

                {/* Experience Card */}
                <div className="rounded-xl bg-zinc-900/60 border border-zinc-800/80 p-5 sm:p-6 transition-all duration-200 hover:border-zinc-700/80 hover:bg-zinc-900/90 shadow-sm">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {index === 0 && (
                          <span className="text-[11px] font-semibold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/60">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="text-base font-semibold text-blue-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 font-mono shrink-0">
                      <span className="flex items-center gap-1 text-zinc-300">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.period}</span>
                      </span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Key Impact highlight banner */}
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-950/80 border border-zinc-800/80 mb-4 text-xs">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-zinc-200">Measurable Impact: </span>
                      <span className="text-zinc-300">{exp.keyImpact}</span>
                    </div>
                  </div>

                  {/* Expandable Bullet Points */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-zinc-800/80 space-y-2.5">
                      <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Key Responsibilities & System Architectural Deliverables:
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                          >
                            <CheckCircle className="w-4 h-4 text-blue-400/90 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Card Footer: Tech Tags & Expand button */}
                  <div className="mt-4 pt-4 border-t border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Unboxed tech metadata separated by dots */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-zinc-400 font-mono">
                      <span className="text-zinc-500 font-sans">Core Tech:</span>
                      {exp.coreTech.map((tech, tIdx) => (
                        <React.Fragment key={tech}>
                          <span className="text-zinc-300 hover:text-white transition-colors">
                            {tech}
                          </span>
                          {tIdx < exp.coreTech.length - 1 && (
                            <span aria-hidden="true" className="text-zinc-600">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
                    >
                      <span>{isExpanded ? 'Show Less' : 'Show All Details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Education Block in the Timeline */}
          {education.map((edu, eIdx) => (
            <div key={eIdx} className="relative group pt-4">
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-indigo-600 border-2 border-zinc-950 ring-4 ring-indigo-500/20"
                aria-hidden="true"
              />

              <div className="rounded-xl bg-zinc-900/40 border border-zinc-800/80 p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-semibold text-indigo-300">
                        {edu.institution}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                    <span>{edu.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                  <strong className="text-zinc-300">Core Focus: </strong>
                  {edu.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
