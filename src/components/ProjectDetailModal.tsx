import React, { useState, useEffect } from 'react';
import { Project } from '../data/portfolioData';
import {
  X,
  CheckCircle2,
  Copy,
  Check,
  Code2,
  Layers,
  TrendingUp,
  Cpu,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (!project.codeSnippet) return;
    navigator.clipboard.writeText(project.codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-zinc-800 bg-zinc-900/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="pr-6">
            <div className="flex items-center gap-2 text-xs text-blue-400 font-mono mb-1">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">{project.client}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-emerald-400">{project.liveStatus}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-800 rounded-lg transition-colors shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Overview Summary */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              System Overview
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800"
              >
                <div className="text-xs text-zinc-400 flex items-center gap-1.5 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                  <span>{metric.label}</span>
                </div>
                <div className="text-xl font-bold font-mono text-white tabular-nums">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Key Architectural Contributions */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Architectural Highlights & Engineering Solutions</span>
            </h3>
            <div className="space-y-2.5">
              {project.keyContributions.map((contrib, cIdx) => (
                <div
                  key={cIdx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 bg-zinc-900/40 p-3 rounded-lg border border-zinc-800/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{contrib}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Notes */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40">
              <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Backend Engineering Invariants</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {project.architectureHighlights.map((arch, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">&bull;</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Inspection Snippet */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>Production Implementation Sample: {project.codeSnippet.title}</span>
                </h3>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-zinc-400" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 p-4 font-mono text-xs text-zinc-300 overflow-x-auto shadow-inner">
                <pre className="leading-relaxed">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Full Tech Stack Pills/Tags as unboxed metadata */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Integrated Technologies
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300 font-mono">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-zinc-800 bg-zinc-900/60 flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-mono">
            Role: {project.role} ({project.duration})
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
