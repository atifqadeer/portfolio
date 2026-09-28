import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import {
  ExternalLink,
  Search,
  SlidersHorizontal,
  TrendingUp,
  Code,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech & Payments' },
    { id: 'enterprise', label: 'Enterprise & HR' },
    { id: 'media', label: 'Media & Visual' },
    { id: 'ecommerce', label: 'eCommerce' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              Featured Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Systems & Projects
            </h2>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              Real-world systems engineered for financial transactions, enterprise workforce automation, and media workflows.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech (Stripe, MySQL, Docker)..."
              className="w-full pl-9 pr-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900/80 border border-zinc-800/80 rounded-xl mb-8 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Dynamic Bento Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
            <p className="text-zinc-400 text-sm">
              No projects found matching "{searchQuery}" in this category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-blue-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {filteredProjects.map((project, index) => {
              // Bento layout: first project is wide (span 7 or 8 on desktop) if index 0, or alternating
              const isLead = index === 0;
              const colSpan = isLead ? 'lg:col-span-7' : index === 1 ? 'lg:col-span-5' : 'lg:col-span-6';

              return (
                <div
                  key={project.id}
                  onClick={() => setActiveModalProject(project)}
                  className={`${colSpan} group cursor-pointer rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 flex flex-col justify-between transition-all duration-200 hover:border-zinc-700/80 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-black/30 relative overflow-hidden`}
                >
                  {/* Top line metadata without pills */}
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-zinc-500 mb-3 font-mono">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 font-semibold">{project.categoryLabel}</span>
                        <span aria-hidden="true" className="text-zinc-700">·</span>
                        <span className="text-zinc-400">{project.client}</span>
                      </div>
                      <span className="text-emerald-400 font-medium">{project.liveStatus}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors mb-2.5">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Middle stats & highlights */}
                  <div className="my-2">
                    <div className="grid grid-cols-3 gap-2.5 mb-5 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-[11px] text-zinc-400 truncate">{metric.label}</div>
                          <div className="text-sm font-bold font-mono text-zinc-100 tabular-nums">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Tech stack metadata & modal trigger */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-4 mt-auto">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-400 font-mono">
                      {project.techStack.slice(0, 4).map((tech, tIdx) => (
                        <React.Fragment key={tech}>
                          <span className="text-zinc-300">{tech}</span>
                          {tIdx < Math.min(project.techStack.length, 4) - 1 && (
                            <span aria-hidden="true" className="text-zinc-700">·</span>
                          )}
                        </React.Fragment>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-zinc-500">+{project.techStack.length - 4} more</span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:translate-x-0.5 transition-transform shrink-0">
                      <span>Inspect Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Interactive Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
