import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Sparkles,
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
    const { personal, experiences, education, projects } = PORTFOLIO_DATA;
    const textResume = `
${personal.name.toUpperCase()}
${personal.title}
Phone: ${personal.phone} | Email: ${personal.email}
LinkedIn: ${personal.linkedin}
Location: ${personal.location}

SUMMARY
${personal.summary}

WORK EXPERIENCE
${experiences
  .map(
    (exp) => `
${exp.role} - ${exp.company}
${exp.period} | ${exp.location}
${exp.summary}
${exp.bullets.map((b) => `• ${b}`).join('\n')}
Core Tech: ${exp.coreTech.join(', ')}
`
  )
  .join('\n')}

PROJECTS
${projects
  .map(
    (p) => `
${p.title}
Role: ${p.role} | Tech: ${p.techStack.join(', ')}
${p.shortDescription}
Key Highlights:
${p.keyContributions.map((c) => `• ${c}`).join('\n')}
`
  )
  .join('\n')}

EDUCATION
${education
  .map(
    (edu) => `
${edu.degree}
${edu.institution} (${edu.period}) - ${edu.location}
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Action Bar (Hidden in Print) */}
        <div className="no-print flex items-center justify-between px-5 py-3.5 bg-zinc-900 border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-300">
              Curriculum Vitae &middot; Syed Atif Qadeer
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy Text</span>
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

        {/* Printable & Scrollable Resume Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-zinc-950 text-zinc-100 font-sans">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-700 shrink-0 shadow-md">
                  <img
                    src={personal.avatar || "/src/assets/images/syed_atif_qadeer.webp"}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "/syed_atif_qadeer.webp";
                    }}
                  />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                    {personal.name}
                  </h1>
                  <p className="text-base sm:text-lg font-semibold text-blue-400 mt-0.5">
                    {personal.title}
                  </p>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    {personal.specialization}
                  </p>
                </div>
              </div>

              {/* Contact metadata */}
              <div className="space-y-1.5 text-xs text-zinc-300 font-mono shrink-0">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-zinc-500" />
                  <a href={`tel:${personal.phone}`} className="hover:text-blue-400">
                    {personal.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <a href={`mailto:${personal.email}`} className="hover:text-blue-400">
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-zinc-500" />
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-400"
                  >
                    linkedin.com/in/syedatif-qadeer-691791105
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-800 pb-1.5 mb-3 font-mono">
              Professional Summary
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-800 pb-1.5 mb-4 font-mono">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-base font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-semibold text-blue-400">
                        &middot; {exp.company}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-400 font-mono">
                      {exp.period} &middot; {exp.location}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mb-2 italic">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1.5 mb-3">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                        <span className="text-blue-400 mt-0.5">&bull;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] font-mono text-zinc-500">
                    <span className="text-zinc-400 font-sans">Core Technologies: </span>
                    {exp.coreTech.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-8">
            <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-800 pb-1.5 mb-4 font-mono">
              Key Project Portfolios
            </h2>

            <div className="space-y-5">
              {projects.slice(0, 3).map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold text-white">
                      {proj.title}
                    </h3>
                    <div className="text-xs text-zinc-400 font-mono">
                      {proj.client} &middot; {proj.liveStatus}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 mb-2">
                    {proj.shortDescription}
                  </p>

                  <ul className="space-y-1 mb-2">
                    {proj.keyContributions.slice(0, 3).map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <span className="text-blue-400">&bull;</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] font-mono text-zinc-500">
                    <span className="text-zinc-400 font-sans">Tech: </span>
                    {proj.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-8">
            <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-800 pb-1.5 mb-3 font-mono">
              Technical Core Competencies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsCategories.map((cat) => (
                <div key={cat.category} className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                  <div className="font-semibold text-zinc-200 mb-1">{cat.category}</div>
                  <div className="text-zinc-400 font-mono text-[11px] leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-800 pb-1.5 mb-3 font-mono">
              Education
            </h2>

            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-blue-400">
                    {edu.institution} &middot; {edu.location}
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {edu.focus}
                  </p>
                </div>
                <div className="text-xs text-zinc-400 font-mono shrink-0">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer in Modal */}
        <div className="no-print p-4 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <span>Syed Atif Qadeer &middot; Professional Resume</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
