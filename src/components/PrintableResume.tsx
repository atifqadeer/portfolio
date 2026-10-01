import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const PrintableResume: React.FC = () => {
  const { personal, experiences, education, projects, skillsCategories } = PORTFOLIO_DATA;

  return (
    <article
      id="printable-resume-document"
      itemScope
      itemType="https://schema.org/Person"
      className="hidden print:block resume-printable bg-white text-black font-sans w-full max-w-none m-0 p-0 leading-relaxed"
    >
      {/* =========================================================================
          ATS CANONICAL HEADER: Single-column, linear, clean
          ========================================================================= */}
      <header className="border-b-2 border-black pb-3 mb-4 text-left">
        <h1
          itemProp="name"
          className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight uppercase mb-1"
        >
          {personal.name}
        </h1>
        <p
          itemProp="jobTitle"
          className="text-base font-bold text-zinc-800 mb-2"
        >
          {personal.title} &mdash; {personal.specialization}
        </p>

        {/* ATS Linear Contact Bar */}
        <address className="not-italic text-xs text-zinc-700 font-medium flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
          <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">{personal.location}</span>
          </span>
          <span>&bull;</span>
          <a href={`tel:${personal.phone}`} itemProp="telephone" className="text-black hover:underline">
            {personal.phoneFormatted}
          </a>
          <span>&bull;</span>
          <a href={`mailto:${personal.email}`} itemProp="email" className="text-black hover:underline">
            {personal.email}
          </a>
          <span>&bull;</span>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            itemProp="sameAs"
            className="text-black hover:underline"
          >
            linkedin.com/in/syedatif-qadeer-691791105
          </a>
        </address>
      </header>

      {/* =========================================================================
          SECTION 1: PROFESSIONAL SUMMARY (Canonical ATS Header)
          ========================================================================= */}
      <section aria-labelledby="ats-summary" className="mb-5 print-avoid-break">
        <h2
          id="ats-summary"
          className="text-sm font-extrabold text-black uppercase tracking-wider border-b border-black pb-1 mb-2 font-mono"
        >
          PROFESSIONAL SUMMARY
        </h2>
        <p itemProp="description" className="text-xs text-zinc-800 leading-relaxed text-justify">
          {personal.summary}
        </p>
      </section>

      {/* =========================================================================
          SECTION 2: TECHNICAL SKILLS (Linear single-column category listing for ATS)
          ========================================================================= */}
      <section aria-labelledby="ats-skills" className="mb-5 print-avoid-break">
        <h2
          id="ats-skills"
          className="text-sm font-extrabold text-black uppercase tracking-wider border-b border-black pb-1 mb-2 font-mono"
        >
          TECHNICAL SKILLS
        </h2>
        <div className="space-y-1.5 text-xs text-zinc-800">
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

      {/* =========================================================================
          SECTION 3: PROFESSIONAL EXPERIENCE (ATS Chronological Format)
          ========================================================================= */}
      <section aria-labelledby="ats-experience" className="mb-5">
        <h2
          id="ats-experience"
          className="text-sm font-extrabold text-black uppercase tracking-wider border-b border-black pb-1 mb-3 font-mono"
        >
          PROFESSIONAL EXPERIENCE
        </h2>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="print-avoid-break">
              {/* Line 1: Role & Company */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-0.5">
                <h3 className="text-xs font-bold text-black uppercase">
                  {exp.role} <span className="font-semibold text-zinc-700">&mdash; {exp.company}</span>
                  <span className="text-zinc-600 font-normal normal-case ml-1.5">({exp.type})</span>
                </h3>
                <div className="text-xs font-semibold text-zinc-700 font-mono">
                  <time>{exp.period}</time> | {exp.location}
                </div>
              </div>

              {/* Summary overview */}
              <p className="text-xs text-zinc-700 italic mb-1.5">
                {exp.summary}
              </p>

              {/* Accomplishment Bullets */}
              <ul className="space-y-1 mb-1.5 text-xs text-zinc-800 list-disc list-outside pl-4">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Core Technologies */}
              <div className="text-[11px] text-zinc-700">
                <span className="font-bold text-black">Technologies: </span>
                <span>{exp.coreTech.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: KEY TECHNICAL PROJECTS
          ========================================================================= */}
      <section aria-labelledby="ats-projects" className="mb-5">
        <h2
          id="ats-projects"
          className="text-sm font-extrabold text-black uppercase tracking-wider border-b border-black pb-1 mb-3 font-mono"
        >
          KEY TECHNICAL PROJECTS
        </h2>

        <div className="space-y-3.5">
          {projects.map((proj) => (
            <div key={proj.id} className="print-avoid-break">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-0.5">
                <h3 className="text-xs font-bold text-black">
                  {proj.title} <span className="font-normal text-zinc-600">&mdash; {proj.client}</span>
                </h3>
                <div className="text-xs font-medium text-zinc-700 font-mono">
                  {proj.liveStatus}
                </div>
              </div>

              <p className="text-xs text-zinc-800 mb-1">
                {proj.shortDescription}
              </p>

              <ul className="space-y-0.5 mb-1 text-xs text-zinc-800 list-disc list-outside pl-4">
                {proj.keyContributions.map((contrib, i) => (
                  <li key={i} className="leading-relaxed">
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>

              <div className="text-[11px] text-zinc-700">
                <span className="font-bold text-black">Tech Stack: </span>
                <span>{proj.techStack.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: EDUCATION
          ========================================================================= */}
      <section aria-labelledby="ats-education" className="print-avoid-break">
        <h2
          id="ats-education"
          className="text-sm font-extrabold text-black uppercase tracking-wider border-b border-black pb-1 mb-2 font-mono"
        >
          EDUCATION
        </h2>

        {education.map((edu, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
            <div>
              <h3 className="font-bold text-black uppercase">
                {edu.degree}
              </h3>
              <p className="text-zinc-700 font-medium">
                {edu.institution} &mdash; {edu.location}
              </p>
              <p className="text-zinc-600 mt-0.5">
                Focus: {edu.focus}
              </p>
            </div>
            <div className="font-mono font-semibold text-zinc-700 shrink-0">
              <time>{edu.period}</time>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};
