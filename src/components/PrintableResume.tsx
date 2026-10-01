import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import syedAtifQadeerAvatar from '../assets/images/syed_atif_qadeer.webp';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

export const PrintableResume: React.FC = () => {
  const { personal, experiences, education, projects, skillsCategories } = PORTFOLIO_DATA;

  return (
    <div
      id="printable-resume-document"
      className="hidden print:block resume-printable bg-white text-zinc-900 font-sans p-6 max-w-4xl mx-auto leading-relaxed"
    >
      {/* Header Profile & Contact Details (No border lines) */}
      <header className="pb-6 mb-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-zinc-100">
              <img
                src={syedAtifQadeerAvatar}
                alt={personal.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/syed_atif_qadeer.webp';
                }}
              />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-zinc-950 tracking-tight uppercase">
                {personal.name}
              </h1>
              <p className="text-base font-bold text-blue-700 mt-0.5">
                {personal.title}
              </p>
              <p className="text-xs font-semibold text-zinc-600 mt-1 max-w-xl">
                {personal.specialization}
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-1 text-xs font-medium text-zinc-700 text-right shrink-0">
            <div>
              <span className="font-semibold text-zinc-900">Phone: </span>
              <span>{personal.phoneFormatted}</span>
            </div>
            <div>
              <span className="font-semibold text-zinc-900">Email: </span>
              <span>{personal.email}</span>
            </div>
            <div>
              <span className="font-semibold text-zinc-900">LinkedIn: </span>
              <span>linkedin.com/in/syedatif-qadeer-691791105</span>
            </div>
            <div>
              <span className="font-semibold text-zinc-900">Location: </span>
              <span>{personal.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6 print-avoid-break">
        <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2 font-mono">
          Professional Summary
        </h2>
        <p className="text-xs text-zinc-700 leading-relaxed">
          {personal.summary}
        </p>
      </section>

      {/* Technical Core Competencies (Organized without borders or boxes) */}
      <section className="mb-6 print-avoid-break">
        <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2 font-mono">
          Technical Core Competencies
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
          {skillsCategories.map((cat) => (
            <div key={cat.category} className="py-1">
              <span className="font-bold text-zinc-900">{cat.category}: </span>
              <span className="text-zinc-700">
                {cat.skills.map((s) => s.name).join(', ')}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3 font-mono">
          Professional Work Experience
        </h2>

        <div className="space-y-5">
          {experiences.map((exp) => (
            <div key={exp.id} className="print-avoid-break">
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <div>
                  <span className="text-sm font-bold text-zinc-950">
                    {exp.role}
                  </span>
                  <span className="text-sm font-bold text-blue-700">
                    {' '}&middot; {exp.company}
                  </span>
                </div>
                <div className="text-xs font-semibold text-zinc-600 font-mono">
                  {exp.period} | {exp.location}
                </div>
              </div>

              <p className="text-xs text-zinc-700 italic mb-1.5">
                {exp.summary}
              </p>

              <ul className="space-y-1 mb-2">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-800 leading-relaxed">
                    <span className="text-zinc-900 font-bold shrink-0">&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="text-[11px] text-zinc-600">
                <span className="font-semibold text-zinc-900">Core Technologies: </span>
                <span>{exp.coreTech.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Project Portfolios */}
      <section className="mb-6">
        <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3 font-mono">
          Key Production Projects & Architectures
        </h2>

        <div className="space-y-4">
          {projects.map((proj) => (
            <div key={proj.id} className="print-avoid-break">
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <div className="text-sm font-bold text-zinc-950">
                  {proj.title}
                </div>
                <div className="text-xs font-medium text-zinc-600 font-mono">
                  {proj.client} &middot; {proj.liveStatus}
                </div>
              </div>

              <p className="text-xs text-zinc-700 mb-1.5">
                {proj.shortDescription}
              </p>

              <ul className="space-y-1 mb-1.5">
                {proj.keyContributions.map((contrib, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-800">
                    <span className="text-zinc-900 font-bold shrink-0">&bull;</span>
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>

              <div className="text-[11px] text-zinc-600">
                <span className="font-semibold text-zinc-900">Tech Stack: </span>
                <span>{proj.techStack.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="print-avoid-break">
        <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2 font-mono">
          Education & Academic Background
        </h2>

        {education.map((edu, idx) => (
          <div key={idx} className="flex items-baseline justify-between gap-2">
            <div>
              <h3 className="text-xs font-bold text-zinc-950">
                {edu.degree}
              </h3>
              <p className="text-xs font-semibold text-blue-700">
                {edu.institution} &middot; {edu.location}
              </p>
              <p className="text-xs text-zinc-600 mt-0.5">
                {edu.focus}
              </p>
            </div>
            <div className="text-xs font-mono font-semibold text-zinc-600 shrink-0">
              {edu.period}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
