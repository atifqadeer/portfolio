import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import syedAtifQadeerAvatar from '../assets/images/syed_atif_qadeer.webp';

export const PrintableResume: React.FC = () => {
  const { personal, experiences, education, projects, skillsCategories } = PORTFOLIO_DATA;

  return (
    <article
      id="printable-resume-document"
      itemScope
      itemType="https://schema.org/Person"
      className="hidden print:block resume-printable bg-[#09090b] text-white font-sans p-6 max-w-4xl mx-auto leading-relaxed border-2 border-white rounded-xl"
    >
      {/* =========================================================================
          ATS CANONICAL HEADER: Contact & Identification
          ========================================================================= */}
      <header className="border-b-2 border-white pb-6 mb-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 border-white bg-zinc-900 shadow-md">
              <img
                src={syedAtifQadeerAvatar}
                alt={personal.name}
                itemProp="image"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/syed_atif_qadeer.webp';
                }}
              />
            </div>
            <div>
              <h1
                itemProp="name"
                className="text-3xl font-extrabold text-white tracking-tight uppercase"
              >
                {personal.name}
              </h1>
              <p
                itemProp="jobTitle"
                className="text-base font-bold text-sky-400 mt-0.5"
              >
                {personal.title}
              </p>
              <p className="text-xs font-semibold text-zinc-300 mt-1 max-w-xl">
                {personal.specialization}
              </p>
            </div>
          </div>

          {/* Standardized ATS Contact Details with Semantic Anchors */}
          <address className="not-italic space-y-1 text-xs font-medium text-zinc-300 text-right shrink-0">
            <div>
              <span className="font-semibold text-white">Phone: </span>
              <a
                href={`tel:${personal.phone}`}
                itemProp="telephone"
                className="hover:underline text-white"
              >
                {personal.phoneFormatted}
              </a>
            </div>
            <div>
              <span className="font-semibold text-white">Email: </span>
              <a
                href={`mailto:${personal.email}`}
                itemProp="email"
                className="hover:underline text-white"
              >
                {personal.email}
              </a>
            </div>
            <div>
              <span className="font-semibold text-white">LinkedIn: </span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                itemProp="sameAs"
                className="hover:underline text-sky-400"
              >
                linkedin.com/in/syedatif-qadeer-691791105
              </a>
            </div>
            <div
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span className="font-semibold text-white">Location: </span>
              <span itemProp="addressLocality">{personal.location}</span>
            </div>
          </address>
        </div>
      </header>

      {/* =========================================================================
          SECTION: PROFESSIONAL SUMMARY
          ========================================================================= */}
      <section aria-labelledby="section-summary" className="mb-6 print-avoid-break">
        <h2
          id="section-summary"
          className="text-xs font-bold text-white uppercase tracking-wider border-b-2 border-white pb-1 mb-2 font-mono"
        >
          Professional Summary
        </h2>
        <p itemProp="description" className="text-xs text-zinc-200 leading-relaxed">
          {personal.summary}
        </p>
      </section>

      {/* =========================================================================
          SECTION: TECHNICAL SKILLS (ATS Primary Keyword Match Index)
          ========================================================================= */}
      <section aria-labelledby="section-skills" className="mb-6 print-avoid-break">
        <h2
          id="section-skills"
          className="text-xs font-bold text-white uppercase tracking-wider border-b-2 border-white pb-1 mb-3 font-mono"
        >
          Technical Skills & Tooling
        </h2>
        <div className="grid grid-cols-2 gap-3 text-xs">
          {skillsCategories.map((cat) => (
            <div
              key={cat.category}
              className="border border-white rounded-lg p-2.5 bg-zinc-900/70"
            >
              <span className="font-bold text-white block mb-0.5">
                {cat.category}
              </span>
              <span className="text-zinc-300 text-[11px] leading-relaxed">
                {cat.skills.map((s) => s.name).join(' · ')}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION: PROFESSIONAL EXPERIENCE
          ========================================================================= */}
      <section aria-labelledby="section-experience" className="mb-6">
        <h2
          id="section-experience"
          className="text-xs font-bold text-white uppercase tracking-wider border-b-2 border-white pb-1 mb-4 font-mono"
        >
          Professional Experience
        </h2>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="print-avoid-break border border-white rounded-xl p-4 bg-zinc-900/60"
            >
              {/* ATS Standard Role, Company, Date, Location Header */}
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <div>
                  <span className="text-sm font-bold text-white">
                    {exp.role}
                  </span>
                  <span className="text-sm font-bold text-sky-400">
                    {' '}&middot; {exp.company}
                  </span>
                  <span className="text-xs text-zinc-400 ml-1.5 font-normal">
                    ({exp.type})
                  </span>
                </div>
                <div className="text-xs font-semibold text-zinc-300 font-mono">
                  <time>{exp.period}</time> | <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-xs text-zinc-300 italic mb-2">
                {exp.summary}
              </p>

              {/* Action-Oriented Contextual Impact Bullets */}
              <ul className="space-y-1 mb-2.5 list-disc list-inside">
                {exp.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-zinc-200 leading-relaxed"
                  >
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Leveraged */}
              <div className="text-[11px] text-zinc-400 border-t border-white/40 pt-1.5 mt-1.5">
                <span className="font-semibold text-white">Technologies: </span>
                <span>{exp.coreTech.join(' · ')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION: KEY TECHNICAL PROJECTS
          ========================================================================= */}
      <section aria-labelledby="section-projects" className="mb-6">
        <h2
          id="section-projects"
          className="text-xs font-bold text-white uppercase tracking-wider border-b-2 border-white pb-1 mb-4 font-mono"
        >
          Key Technical Projects & Architecture Case Studies
        </h2>

        <div className="space-y-3.5">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="print-avoid-break border border-white rounded-xl p-3.5 bg-zinc-900/60"
            >
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <div className="text-sm font-bold text-white">
                  {proj.title}
                </div>
                <div className="text-xs font-medium text-sky-400 font-mono">
                  {proj.client} &middot; {proj.liveStatus}
                </div>
              </div>

              <p className="text-xs text-zinc-300 mb-1.5">
                {proj.shortDescription}
              </p>

              <ul className="space-y-1 mb-2 list-disc list-inside">
                {proj.keyContributions.map((contrib, i) => (
                  <li key={i} className="text-xs text-zinc-200">
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>

              <div className="text-[11px] text-zinc-400 border-t border-white/40 pt-1 mt-1">
                <span className="font-semibold text-white">Tech Stack: </span>
                <span>{proj.techStack.join(' · ')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION: EDUCATION
          ========================================================================= */}
      <section aria-labelledby="section-education" className="print-avoid-break">
        <h2
          id="section-education"
          className="text-xs font-bold text-white uppercase tracking-wider border-b-2 border-white pb-1 mb-2 font-mono"
        >
          Education & Academic Background
        </h2>

        {education.map((edu, idx) => (
          <div
            key={idx}
            className="border border-white rounded-lg p-3 bg-zinc-900/60 flex items-baseline justify-between gap-2"
          >
            <div>
              <h3 className="text-xs font-bold text-white">
                {edu.degree}
              </h3>
              <p className="text-xs font-semibold text-sky-400">
                {edu.institution} &middot; {edu.location}
              </p>
              <p className="text-xs text-zinc-300 mt-0.5">
                {edu.focus}
              </p>
            </div>
            <div className="text-xs font-mono font-semibold text-zinc-300 shrink-0">
              <time>{edu.period}</time>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};
