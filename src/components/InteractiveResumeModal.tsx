import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  X,
  Download,
  Copy,
  Check,
  ExternalLink,
  FileText,
  Eye,
  AlignLeft,
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
  const [viewMode, setViewMode] = useState<'pdf' | 'text'>('pdf');
  const pdfUrl = '/atif_qadeer_resume.pdf';

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
      className="no-print fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-hidden"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Action Bar */}
        <div className="no-print flex items-center justify-between px-4 sm:px-6 py-3.5 bg-zinc-900 border-b border-zinc-800 shrink-0 text-white">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                <FileText className="w-4 h-4" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-200 truncate max-w-[200px] sm:max-w-none">
                Atif_Qadeer_Resume.pdf
              </span>
            </div>

            {/* View Mode Switcher */}
            <div className="hidden md:flex items-center bg-zinc-800 p-0.5 rounded-lg border border-zinc-700 text-xs">
              <button
                onClick={() => setViewMode('pdf')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'pdf'
                    ? 'bg-zinc-700 text-white font-semibold shadow-xs'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>PDF Document</span>
              </button>
              <button
                onClick={() => setViewMode('text')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'text'
                    ? 'bg-zinc-700 text-white font-semibold shadow-xs'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <AlignLeft className="w-3.5 h-3.5" />
                <span>Plain Text</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors cursor-pointer"
              title="Copy ATS-formatted text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="hidden sm:inline">Copy ATS Text</span>
                  <span className="sm:hidden">Copy</span>
                </>
              )}
            </button>

            {/* External link to open PDF in a new tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors"
              title="Open PDF in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Tab</span>
            </a>

            {/* Direct PDF Download button */}
            <a
              href={pdfUrl}
              download="Atif_Qadeer_Senior_Software_Engineer_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors cursor-pointer"
              title="Download original resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors ml-1 cursor-pointer"
              aria-label="Close CV viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 bg-zinc-900 overflow-hidden relative">
          {viewMode === 'pdf' ? (
            <div className="w-full h-full flex flex-col bg-zinc-800">
              <object
                data={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                type="application/pdf"
                className="w-full h-full border-none"
              >
                {/* Fallback if browser PDF plugin is blocked or on mobile Safari */}
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-zinc-950 text-white">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-blue-400">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Atif Qadeer &mdash; Senior Software Engineer Resume
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mb-6 leading-relaxed">
                    The PDF document is ready. You can view it in a new window or download the file directly.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-medium rounded-lg border border-zinc-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open PDF in Tab</span>
                    </a>
                    <a
                      href={pdfUrl}
                      download="Atif_Qadeer_Senior_Software_Engineer_Resume.pdf"
                      className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              </object>
            </div>
          ) : (
            /* Plain Text View */
            <div className="w-full h-full overflow-y-auto p-6 sm:p-10 bg-white text-black font-sans leading-relaxed">
              <header className="border-b-2 border-black pb-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight uppercase mb-1">
                  {personal.name}
                </h1>
                <p className="text-sm sm:text-base font-bold text-zinc-800 mb-2">
                  {personal.title} &mdash; {personal.specialization}
                </p>
                <div className="text-xs text-zinc-700 font-medium flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span>{personal.location}</span>
                  <span>&bull;</span>
                  <span>{personal.phoneFormatted}</span>
                  <span>&bull;</span>
                  <span>{personal.email}</span>
                  <span>&bull;</span>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 hover:underline font-semibold"
                  >
                    linkedin.com/in/syedatif-qadeer-691791105
                  </a>
                </div>
              </header>

              <section className="mb-6">
                <h2 className="text-xs sm:text-sm font-extrabold text-black uppercase tracking-wider border-b border-black pb-1 mb-2 font-mono">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed text-justify">
                  {personal.summary}
                </p>
              </section>

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
                        </h3>
                        <div className="text-xs font-semibold text-zinc-700 font-mono">
                          {exp.period} | {exp.location}
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
                    </div>
                  ))}
                </div>
              </section>

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
                    </div>
                  ))}
                </div>
              </section>

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
                      {edu.period}
                    </div>
                  </div>
                ))}
              </section>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="no-print px-4 sm:px-6 py-3 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span>Atif Qadeer</span>
            <span>&middot;</span>
            <span>Senior Software Engineer Resume PDF</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              download="Atif_Qadeer_Senior_Software_Engineer_Resume.pdf"
              className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-md transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
