import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github, Database, Cpu, AlertCircle, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'results' | 'impact'>('overview');

  const project = PROJECTS.find((p) => p.slug === projectId || p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-serif text-3xl text-offwhite mb-4">Case Study Not Found</h2>
        <p className="text-charcoal-400 font-mono text-xs mb-8">The requested project identifier does not match our catalog.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-offwhite text-charcoal-950 font-mono text-xs uppercase tracking-wider font-semibold rounded-sm"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  // Find next project
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="min-h-screen bg-charcoal-900 text-offwhite pb-24 pt-28 editorial-grid">
      
      {/* Top Breadcrumb & Return Bar */}
      <div className="border-b border-white/[0.08] bg-charcoal-900/90 backdrop-blur-md sticky top-0 z-30 py-4">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between text-xs font-mono">
          <Link
            to="/#projects"
            className="flex items-center gap-2 text-charcoal-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-charcoal-500">Case Study</span>
            <span className="text-accent-blue font-semibold">{project.number}</span>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 pt-12 space-y-16">
        
        {/* Editorial Case Study Header */}
        <div className="space-y-6 border-b border-white/[0.08] pb-12">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-charcoal-800 border border-white/10 text-xs font-mono uppercase tracking-widest text-accent-blue rounded-sm">
              {project.category}
            </span>
            <span className="text-xs font-mono text-charcoal-500">
              Ref: {project.slug}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-offwhite font-normal leading-[1.12]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-light text-charcoal-300 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-offwhite hover:bg-white text-charcoal-950 font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors flex items-center gap-2 shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>Inspect GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="px-4 py-3 rounded-sm border border-white/10 bg-charcoal-850 text-xs font-mono text-charcoal-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Peer-Verifiable Codebase</span>
            </div>
          </div>

          {/* Implemented Technologies Ribbon */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 mr-2">
              Stack:
            </span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-charcoal-850 border border-white/10 text-charcoal-300 rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Section Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-white/[0.06] pb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-sm transition-colors border ${
              activeTab === 'overview'
                ? 'bg-charcoal-800 border-accent-blue/50 text-white font-semibold'
                : 'bg-transparent border-transparent text-charcoal-400 hover:text-white'
            }`}
          >
            01. Problem & Strategy
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-sm transition-colors border ${
              activeTab === 'architecture'
                ? 'bg-charcoal-800 border-accent-blue/50 text-white font-semibold'
                : 'bg-transparent border-transparent text-charcoal-400 hover:text-white'
            }`}
          >
            02. Architecture & Pipeline
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-sm transition-colors border ${
              activeTab === 'results'
                ? 'bg-charcoal-800 border-accent-blue/50 text-white font-semibold'
                : 'bg-transparent border-transparent text-charcoal-400 hover:text-white'
            }`}
          >
            03. Evaluation & Metrics
          </button>
          <button
            onClick={() => setActiveTab('impact')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-sm transition-colors border ${
              activeTab === 'impact'
                ? 'bg-charcoal-800 border-accent-blue/50 text-white font-semibold'
                : 'bg-transparent border-transparent text-charcoal-400 hover:text-white'
            }`}
          >
            04. Impact, Limits & Roadmap
          </button>
        </div>

        {/* Dynamic Tab Content */}
        <div className="space-y-16">
          
          {/* TAB 1: Problem & Strategy */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              {/* Problem vs Proposed Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-charcoal-850/60 border border-white/10 rounded-sm p-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-400">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Problem Statement</span>
                  </div>
                  <h3 className="font-serif text-2xl text-offwhite font-medium">
                    Diagnostic Challenge
                  </h3>
                  <p className="text-sm font-light text-charcoal-300 leading-relaxed text-justify">
                    {project.problemStatement}
                  </p>
                </div>

                <div className="bg-charcoal-850/60 border border-white/10 rounded-sm p-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-blue">
                    <Sparkles className="w-4 h-4" />
                    <span>Engineered Solution</span>
                  </div>
                  <h3 className="font-serif text-2xl text-offwhite font-medium">
                    Technical Approach
                  </h3>
                  <p className="text-sm font-light text-charcoal-300 leading-relaxed text-justify">
                    {project.proposedSolution}
                  </p>
                </div>

              </div>

              {/* Dataset & Preprocessing Dossier */}
              <div className="bg-charcoal-850/50 border border-white/10 rounded-sm p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <Database className="w-5 h-5 text-accent-blue" />
                  <div>
                    <h3 className="font-serif text-2xl text-offwhite font-medium">
                      Dataset & Data Engineering Protocol
                    </h3>
                    <span className="text-xs font-mono text-charcoal-400">
                      {project.dataset.name} — {project.dataset.source}
                    </span>
                  </div>
                </div>

                <p className="text-sm font-light text-charcoal-300 leading-relaxed">
                  {project.dataset.description}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent-silver block">
                    Preprocessing & Cleaning Pipelines:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.dataset.preprocessingSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-charcoal-900 border border-white/5 rounded-sm text-xs font-mono text-charcoal-300 flex items-start gap-3"
                      >
                        <span className="text-accent-blue font-semibold">0{idx + 1}.</span>
                        <span className="leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Highlights Checklist */}
              <div className="bg-charcoal-900 border border-white/10 rounded-sm p-8 space-y-4">
                <h4 className="font-serif text-xl text-offwhite font-medium">
                  Verified Implementation Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-charcoal-300">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2 bg-charcoal-850/40 rounded">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Architecture & Pipeline */}
          {activeTab === 'architecture' && (
            <div className="space-y-12">
              <div className="bg-charcoal-850/60 border border-white/10 rounded-sm p-8 space-y-8">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <Cpu className="w-5 h-5 text-accent-blue" />
                  <div>
                    <h3 className="font-serif text-2xl text-offwhite font-medium">
                      Computational Architecture & Execution Pipeline
                    </h3>
                    <span className="text-xs font-mono text-charcoal-400">
                      {project.architecture.details.type} • {project.architecture.details.framework}
                    </span>
                  </div>
                </div>

                <p className="text-sm font-light text-charcoal-300 leading-relaxed">
                  {project.architecture.description}
                </p>

                {/* Pipeline Flow Stepper */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent-silver block mb-4">
                    Sequential Data Flow Pipeline:
                  </span>
                  
                  <div className="space-y-2">
                    {project.architecture.pipeline.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-charcoal-900 border border-white/5 rounded-sm flex items-center justify-between font-mono text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded bg-charcoal-800 border border-white/10 text-accent-blue flex items-center justify-center font-semibold text-[11px]">
                            {idx + 1}
                          </span>
                          <span className="text-offwhite font-medium">{step}</span>
                        </div>
                        <span className="text-[10px] text-charcoal-500 uppercase tracking-widest">
                          Stage 0{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architectural Specifications Table */}
                <div className="p-6 bg-charcoal-900 border border-white/5 rounded-sm space-y-3 text-xs font-mono">
                  <h4 className="text-offwhite font-semibold uppercase tracking-wider mb-2">
                    Key Architectural Components
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.architecture.details.keyComponents.map((comp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-charcoal-300">
                        <span className="text-accent-blue">•</span>
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Training Methodology or EDA insights */}
              {project.trainingWorkflow && (
                <div className="bg-charcoal-850/60 border border-white/10 rounded-sm p-8 space-y-4">
                  <h4 className="font-serif text-2xl text-offwhite font-medium">
                    Training Methodology & Convergence Control
                  </h4>
                  <p className="text-sm font-light text-charcoal-300 leading-relaxed">
                    {project.trainingWorkflow.methodology}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.trainingWorkflow.metricsTracked.map((m, i) => (
                      <span key={i} className="px-3 py-1 bg-charcoal-900 border border-white/10 text-xs font-mono text-accent-silver rounded-sm">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.edaAndInsights && (
                <div className="bg-charcoal-850/60 border border-white/10 rounded-sm p-8 space-y-6">
                  <h4 className="font-serif text-2xl text-offwhite font-medium">
                    Exploratory Data Analysis & Statistical Findings
                  </h4>
                  <div className="space-y-3">
                    {project.edaAndInsights.keyFindings.map((finding, fIdx) => (
                      <div key={fIdx} className="p-4 bg-charcoal-900 border border-white/5 rounded text-xs font-mono text-charcoal-300 leading-relaxed flex items-start gap-3">
                        <span className="text-accent-blue font-bold">Insight {fIdx + 1}:</span>
                        <span>{finding}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Evaluation & Metrics */}
          {activeTab === 'results' && (
            <div className="space-y-12">
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.evaluationResults.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-charcoal-850 border border-white/10 rounded-sm space-y-2 text-center"
                  >
                    <span className="text-3xl font-serif text-accent-blue font-medium block">
                      {metric.value}
                    </span>
                    <span className="text-xs font-mono text-offwhite font-semibold block">
                      {metric.label}
                    </span>
                    <span className="text-[11px] font-mono text-charcoal-400 block">
                      {metric.context}
                    </span>
                  </div>
                ))}
              </div>

              {/* Evaluation Summary */}
              <div className="p-6 bg-charcoal-850/60 border border-white/10 rounded-sm text-sm font-light text-charcoal-300 leading-relaxed">
                <span className="font-serif text-xl text-offwhite block mb-2 font-normal">
                  Performance Assessment
                </span>
                {project.evaluationResults.summary}
              </div>

              {/* Visual Artifacts Section */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-offwhite font-medium">
                  Empirical Visual Artifacts & Confusion Metrics
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {project.visualArtifacts.map((artifact, aIdx) => (
                    <div
                      key={aIdx}
                      className="bg-charcoal-850/70 border border-white/10 rounded-sm p-6 space-y-4 font-mono text-xs"
                    >
                      <div className="flex items-center justify-between border-b border-white/5 pb-3">
                        <span className="text-offwhite font-semibold text-sm">
                          {artifact.title}
                        </span>
                        <span className="text-accent-blue text-[11px] uppercase tracking-wider">
                          {artifact.type}
                        </span>
                      </div>

                      <p className="text-charcoal-400 text-xs leading-normal">
                        {artifact.caption}
                      </p>

                      {/* Render Table or Stats */}
                      {artifact.mockupDetails.rows && artifact.mockupDetails.headers && (
                        <div className="overflow-x-auto pt-2">
                          <table className="w-full text-left border-collapse text-[11px]">
                            <thead>
                              <tr className="border-b border-white/10 text-charcoal-400">
                                {artifact.mockupDetails.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="py-2 px-3">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {artifact.mockupDetails.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-white/5 text-charcoal-300 hover:bg-white/[0.02]">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className={`py-2 px-3 ${cIdx === 0 ? 'font-semibold text-white' : ''}`}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {artifact.mockupDetails.stats && (
                        <div className="grid grid-cols-2 gap-3 pt-2">
                          {artifact.mockupDetails.stats.map((st, sIdx) => (
                            <div key={sIdx} className="p-3 bg-charcoal-900 border border-white/5 rounded">
                              <span className="text-[10px] text-charcoal-500 uppercase block mb-1">{st.label}</span>
                              <span className="text-offwhite font-semibold text-xs">{st.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Impact, Limits & Roadmap */}
          {activeTab === 'impact' && (
            <div className="space-y-12">
              {/* Business Recommendations or Impact */}
              {project.businessImpactOrRecommendations && (
                <div className="bg-charcoal-850/60 border border-white/10 rounded-sm p-8 space-y-4">
                  <h3 className="font-serif text-2xl text-offwhite font-medium">
                    Strategic Recommendations & Business Directives
                  </h3>
                  <ul className="space-y-3 font-mono text-xs text-charcoal-300">
                    {project.businessImpactOrRecommendations.map((rec, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 p-3 bg-charcoal-900 border border-white/5 rounded">
                        <CheckCircle2 className="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Limitations vs Roadmap */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Limitations */}
                <div className="bg-charcoal-850/60 border border-white/10 rounded-sm p-8 space-y-4">
                  <h4 className="font-serif text-xl text-offwhite font-medium flex items-center gap-2">
                    <span className="text-rose-400">●</span>
                    Current Implementation Boundaries
                  </h4>
                  <ul className="space-y-3 text-xs font-mono text-charcoal-300">
                    {project.limitations.map((lim, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2">
                        <span className="text-charcoal-500">•</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future Roadmap */}
                <div className="bg-charcoal-850/60 border border-white/10 rounded-sm p-8 space-y-4">
                  <h4 className="font-serif text-xl text-offwhite font-medium flex items-center gap-2">
                    <span className="text-accent-blue">●</span>
                    Future Engineering Roadmap
                  </h4>
                  <ul className="space-y-3 text-xs font-mono text-charcoal-300">
                    {project.futureImprovements.map((imp, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <span className="text-accent-blue">•</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Bottom Pagination / Next Project Bar */}
        <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/#projects"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-charcoal-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Selected Works</span>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center gap-3 p-4 bg-charcoal-850 hover:bg-charcoal-800 border border-white/10 rounded-sm text-right group transition-all"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500 block">
                Next Case Study
              </span>
              <span className="font-serif text-base text-offwhite group-hover:text-accent-blue transition-colors">
                {nextProject.displayName || nextProject.title}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-accent-blue group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </main>

    </div>
  );
};
