import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Search, Sparkles, Check, CheckCircle2 } from 'lucide-react';

export const TechStackMatrix: React.FC = () => {
  const { skillsCategories } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allSkills = useMemo(() => {
    return skillsCategories.flatMap((cat) =>
      cat.skills.map((s) => ({
        ...s,
        category: cat.category,
      }))
    );
  }, [skillsCategories]);

  const filteredCategories = useMemo(() => {
    return skillsCategories
      .map((cat) => {
        const matchesCategory =
          selectedCategory === 'all' || cat.category === selectedCategory;

        const skills = cat.skills.filter((skill) => {
          const q = searchQuery.toLowerCase().trim();
          return !q || skill.name.toLowerCase().includes(q);
        });

        return {
          ...cat,
          skills,
          visible: matchesCategory && skills.length > 0,
        };
      })
      .filter((cat) => cat.visible);
  }, [skillsCategories, selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              Technical Competencies & Tooling
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Engineering Matrix
            </h2>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              Curated capabilities built over 4+ years of professional engineering across Laravel, modern PHP, MySQL data modeling, and cloud deployments.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skill (e.g., Stripe, Redis)..."
              className="w-full pl-9 pr-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900/80 border border-zinc-800/80 rounded-xl mb-10 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            All Categories ({allSkills.length})
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat.category
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-zinc-700/80 transition-all"
            >
              <div>
                <div className="mb-4">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category.category}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlight ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0 ml-1 mr-1" />
                        )}
                        <span className={`font-medium ${skill.highlight ? 'text-zinc-100 font-semibold' : 'text-zinc-300'}`}>
                          {skill.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 shrink-0">
                        <span className="text-zinc-500">{skill.years} yrs</span>
                        <span aria-hidden="true" className="text-zinc-700">·</span>
                        <span
                          className={
                            skill.level === 'Expert'
                              ? 'text-emerald-400 font-semibold'
                              : skill.level === 'Advanced'
                              ? 'text-blue-400 font-medium'
                              : 'text-zinc-400'
                          }
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
                {category.skills.length} competencies listed
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
