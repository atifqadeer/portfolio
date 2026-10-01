import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  X,
  Printer,
  Copy,
  Check,
  CheckCircle2,
} from 'lucide-react';

interface InteractiveResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveResumeModal: React.FC<InteractiveResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const { personal, experiences, education, projects, skillsCategories } = PORTFOLIO_DATA;
    const textResume = `
================================================================================
${personal.name.toUpperCase()}
${personal.title}
Specialization: ${personal.specialization}
================================================================================
Email: ${personal.email}
Phone: ${personal.phoneFormatted}
Location: ${personal.location}
LinkedIn: ${personal.linkedin}

PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
${personal.summary}

TECHNICAL SKILLS
--------------------------------------------------------------------------------
${skillsCategories.map((c) => `• ${c.category}: ${c.skills.map((s) => s.name).join(', ')}`).join('\n')}

PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
${experiences
  .map(
    (exp) => `
${exp.role.toUpperCase()} | ${exp.company} (${exp.type})
${exp.period} | ${exp.location}
Overview: ${exp.summary}
Key Accomplishments:
${exp.bullets.map((b) => `  - ${b}`).join('\n')}
Technologies Used: ${exp.coreTech.join(', ')}
`
  )
  .join('\n')}

KEY TECHNICAL PROJECTS
--------------------------------------------------------------------------------
${projects
  .map(
    (p) => `
${p.title}
Client: ${p.client} | Status: ${p.liveStatus} | Role: ${p.role}
Overview: ${p.shortDescription}
Highlights:
${p.keyContributions.map((c) => `  - ${c}`).join('\n')}
Tech Stack: ${p.techStack.join(', ')}
`
  )
  .join('\n')}

EDUCATION
--------------------------------------------------------------------------------
${education
  .map(
    (edu) => `
${edu.degree}
${edu.institution} | ${edu.period} | ${edu.location}
Focus: ${edu.focus}
`
  )
  .join('\n')}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { personal, experiences, education, projects, skillsCategories } = PORTFOLIO_DATA;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="no-print fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col bg-white border border-zinc-300 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Action Bar (Hidden in Print) */}
        <div className="no-print flex items-center justify-between px-5 py-3.5 bg-zinc-900 border-b border-zinc-800 shrink-0 text-white">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-semibold text-zinc-200">
              Curriculum Vitae &middot; Syed Atif Qadeer
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="w-3 h-3" />
              ATS-Optimized Single-Column
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors"
              title="Copy ATS-formatted plaintext for job portals"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied ATS Text</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy ATS Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors ml-1"
              aria-label="Close CV viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Canvas (White Background & Single-Column ATS Layout) */}
        <article
          itemScope
          itemType="https://schema.org/Person"
          className="overflow-y-auto p-6 sm:p-10 bg-white text-black font-sans leading-relaxed"
        >
          {/* Header */}
          <header className="border-b-2 border-black pb-4 mb-6">
            <h1
              itemProp="name"
              className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight uppercase mb-1"
            >
              {personal.name}
            </h1>
            <p
              itemProp="jobTitle"
              className="text-sm sm:text-base font-bold text-zinc-800 mb-2"
            >
              {personal.title} &mdash; {personal.specialization}
            </p>

            {/* ATS Contact Bar */}
            <address className="not-italic text-xs text-zinc-700 font-medium flex flex-wrap items-center gap-x-3 gap-y-1">
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">{personal.location}</span>
              </span>
              <span>&bull;</span>
              <a href={`tel:${personal.phone}`} itemProp="telephone" className="text-black hover:underline font-semibold">
                {personal.phoneFormatted}
              </a>
              <span>&bull;</span>
              <a href={`mailto:${personal.email}`} itemProp="email" className="text-black hover:underline font-semibold">
                {personal.email}
              </a>
              <span>&bull;</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                itemProp="sameAs"
                className="text-blue-700 hover:underline font-semibold"
              >
                linkedin.com/in/syedatif-qadeer-691791105
              </a>
            </address>
          </header>

          {/* Section 1: Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xs sm:text-sm font-extrabold text-black uppercase tracking-wider border-b border-black pb-1 mb-2 font-mono">
              PROFESSIONAL SUMMARY
            </h2>
            <p itemProp="description" className="text-xs sm:text-sm text-zinc-800 leading-relaxed text-justify">
              {personal.summary}
            </p>
          </section>

          {/* Section 2: Technical Skills (Single-Column Linear Listing for ATS) */}
          <section className="mb-6">
            <h2 className="text-xs sm:text-sm font-extrabold text-black uppercase tracking-wider border-b border-black pb-1 mb-2.5 font-mono">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-zinc-800">
              {skillsCategories.map((cat) => (
                <div key={cat.category} className="leading-snug">
                  <span className="font-bold text-black">{cat.category}: </span>
                  <span className="text-zinc-800">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Professional Experience */}
          <section className="mb-6">
            <h2 className="text-xs sm:text-sm font-extrabold text-black uppercase tracking-wider border-b border-black pb-1 mb-3.5 font-mono">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-b border-zinc-200 pb-4 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-black uppercase">
                      {exp.role} <span className="font-semibold text-zinc-700">&mdash; {exp.company}</span>
                      <span className="text-zinc-500 font-normal normal-case ml-1.5">({exp.type})</span>
                    </h3>
                    <div className="text-xs font-semibold text-zinc-700 font-mono">
                      <time>{exp.period}</time> | {exp.location}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 italic mb-2">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1 mb-2 text-xs sm:text-sm text-zinc-800 list-disc list-outside pl-4">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] sm:text-xs text-zinc-700 mt-1">
                    <span className="font-bold text-black">Technologies: </span>
                    <span>{exp.coreTech.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Key Technical Projects */}
          <section className="mb-6">
            <h2 className="text-xs sm:text-sm font-extrabold text-black uppercase tracking-wider border-b border-black pb-1 mb-3.5 font-mono">
              KEY TECHNICAL PROJECTS
            </h2>

            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="border-b border-zinc-200 pb-3.5 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-black">
                      {proj.title} <span className="font-normal text-zinc-600">&mdash; {proj.client}</span>
                    </h3>
                    <div className="text-xs font-semibold text-zinc-600 font-mono">
                      {proj.liveStatus}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-800 mb-1.5">
                    {proj.shortDescription}
                  </p>

                  <ul className="space-y-1 mb-1.5 text-xs text-zinc-800 list-disc list-outside pl-4">
                    {proj.keyContributions.map((c, i) => (
                      <li key={i} className="leading-relaxed">
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] sm:text-xs text-zinc-700 mt-1">
                    <span className="font-bold text-black">Tech Stack: </span>
                    <span>{proj.techStack.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Education */}
          <section>
            <h2 className="text-xs sm:text-sm font-extrabold text-black uppercase tracking-wider border-b border-black pb-1 mb-2.5 font-mono">
              EDUCATION
            </h2>

            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-black uppercase">
                    {edu.degree}
                  </h3>
                  <p className="text-zinc-700 font-medium">
                    {edu.institution} &mdash; {edu.location}
                  </p>
                  <p className="text-xs text-zinc-600 mt-0.5">
                    Focus: {edu.focus}
                  </p>
                </div>
                <div className="text-xs font-mono font-semibold text-zinc-700 shrink-0">
                  <time>{edu.period}</time>
                </div>
              </div>
            ))}
          </section>
        </article>

        {/* Footer in Modal */}
        <div className="no-print p-4 bg-zinc-100 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-600">
          <span>Syed Atif Qadeer &middot; ATS-Compliant Curriculum Vitae</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg transition-colors font-medium"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
