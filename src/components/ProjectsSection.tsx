import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, BarChart3, Binary, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

type FilterCategory = 'All Projects' | 'Data Analytics' | 'Machine Learning' | 'Deep Learning' | 'Computer Vision';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('All Projects');

  const filters: FilterCategory[] = [
    'All Projects',
    'Data Analytics',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
  ];

  const filteredProjects = PROJECTS.filter((proj) =>
    selectedFilter === 'All Projects'
      ? true
      : proj.filterCategories.includes(selectedFilter)
  );

  return (
    <section id="projects" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.06]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-2">
              03 // Featured Case Studies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-offwhite font-normal tracking-tight">
              Selected Works & Systems
            </h2>
          </div>
          <div className="text-xs font-mono text-charcoal-400 max-w-sm md:text-right">
            <span>Derived strictly from authentic repository architectures & implementations</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-16 pb-4 border-b border-white/[0.04]">
          <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 mr-2">
            Filter Discipline:
          </span>
          {filters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-sm text-xs font-mono tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-offwhite text-charcoal-950 font-semibold border-offwhite'
                    : 'bg-charcoal-850/60 text-charcoal-400 border-white/[0.08] hover:text-white hover:border-white/20'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Large Editorial Project Showcases (Not small generic cards!) */}
        <div className="space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-charcoal-850/50 border border-white/10 rounded-sm overflow-hidden p-6 sm:p-10 lg:p-12 transition-all hover:border-white/20"
              >
                {/* Top Metadata Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-accent-blue/80">
                      {project.number}
                    </span>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-accent-silver block">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-charcoal-500">
                        Peer-reviewed Repository Architecture
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm border border-white/15 bg-charcoal-800 hover:bg-charcoal-750 text-xs font-mono text-charcoal-300 hover:text-white transition-colors"
                      title="Inspect Source Code on GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                      <ArrowUpRight className="w-3 h-3 text-charcoal-500" />
                    </a>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-sm bg-offwhite hover:bg-white text-charcoal-950 text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Main Asymmetric Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                  
                  {/* Left Column: Project Narrative & Technical Highlights (7 Cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-offwhite font-normal mb-3 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-accent-blue/90 mb-4">
                        {project.tagline}
                      </p>
                      <p className="text-base text-charcoal-300 font-light leading-relaxed">
                        {project.overview}
                      </p>
                    </div>

                    {/* Key Highlights Bulleted List */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-charcoal-400 mb-2">
                        System Architecture Highlights:
                      </h4>
                      <ul className="space-y-2 text-xs font-mono text-charcoal-300">
                        {project.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-accent-blue mt-0.5">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Confirmed Technologies Tags */}
                    <div className="pt-4 border-t border-white/[0.06]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500 block mb-2.5">
                        Implemented Technologies:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono bg-charcoal-900 border border-white/10 text-charcoal-300 rounded-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Links Inline */}
                    <div className="pt-4 flex items-center gap-6">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="text-xs font-mono uppercase tracking-wider text-offwhite hover:text-accent-blue flex items-center gap-1.5 transition-colors group"
                      >
                        <span className="underline underline-offset-4">Explore Full Case Study & Methodology</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Sophisticated Visual Artifact Showcase (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className="bg-charcoal-900 border border-white/10 rounded-sm p-5 space-y-4">
                      
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-[11px] font-mono text-charcoal-400">
                        <span className="uppercase tracking-wider text-accent-silver flex items-center gap-1.5">
                          {project.id === 'smart-waste-classification' ? (
                            <Eye className="w-3.5 h-3.5 text-accent-blue" />
                          ) : (
                            <BarChart3 className="w-3.5 h-3.5 text-accent-blue" />
                          )}
                          Artifact Preview
                        </span>
                        <span className="text-charcoal-500">Live Mockup</span>
                      </div>

                      {/* Dynamic Mockup Card based on project type */}
                      {project.id === 'smart-waste-classification' ? (
                        <div className="space-y-3 font-mono text-xs">
                          {/* Vision Classifier Box */}
                          <div className="aspect-[16/10] bg-charcoal-950 border border-white/10 rounded-sm relative flex flex-col justify-between p-4 overflow-hidden">
                            <div className="flex justify-between items-center text-[10px] text-charcoal-500 border-b border-white/5 pb-2">
                              <span>INFERENCE PIPELINE</span>
                              <span className="text-emerald-400">STATUS: READY</span>
                            </div>

                            <div className="my-auto text-center space-y-2">
                              <div className="w-12 h-12 mx-auto rounded-full bg-charcoal-800 border border-accent-blue/30 flex items-center justify-center">
                                <Binary className="w-5 h-5 text-accent-blue" />
                              </div>
                              <span className="text-offwhite font-mono text-xs block font-medium">
                                CNN Multi-Class Detection
                              </span>
                              <span className="text-[11px] text-charcoal-400 block">
                                Input: 224x224x3 Normalized Tensor
                              </span>
                            </div>

                            <div className="grid grid-cols-3 gap-1 pt-2 border-t border-white/5 text-[10px] text-center">
                              <div className="bg-charcoal-900 p-1 rounded">
                                <span className="text-charcoal-500 block">Recyclable</span>
                                <span className="text-accent-blue font-semibold">89.2%</span>
                              </div>
                              <div className="bg-charcoal-900 p-1 rounded">
                                <span className="text-charcoal-500 block">Organic</span>
                                <span className="text-emerald-400 font-semibold">87.6%</span>
                              </div>
                              <div className="bg-charcoal-900 p-1 rounded">
                                <span className="text-charcoal-500 block">Non-Bio</span>
                                <span className="text-charcoal-300 font-semibold">88.4%</span>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 bg-charcoal-950/70 border border-white/5 rounded text-[11px] text-charcoal-400 space-y-1">
                            <span className="text-offwhite font-medium block">Evaluation Metric Benchmark:</span>
                            <div className="flex justify-between">
                              <span>Test Set Accuracy:</span>
                              <span className="text-accent-blue font-semibold">88.4%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Inference Latency:</span>
                              <span className="text-offwhite">~45ms per frame</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3 font-mono text-xs">
                          {/* HR Analytics Dashboard Mockup */}
                          <div className="aspect-[16/10] bg-charcoal-950 border border-white/10 rounded-sm relative flex flex-col justify-between p-4 overflow-hidden">
                            <div className="flex justify-between items-center text-[10px] text-charcoal-500 border-b border-white/5 pb-2">
                              <span>STREAMLIT WORKFORCE TELEMETRY</span>
                              <span className="text-accent-blue">v2.4 ACTIVE</span>
                            </div>

                            <div className="space-y-2 my-auto">
                              <div className="flex justify-between text-[11px]">
                                <span className="text-charcoal-400">Engineering Dept Attrition Risk</span>
                                <span className="text-amber-400 font-semibold">Elevated (28%)</span>
                              </div>
                              <div className="w-full h-2 bg-charcoal-800 rounded-full overflow-hidden">
                                <div className="w-[28%] h-full bg-amber-400" />
                              </div>

                              <div className="flex justify-between text-[11px] pt-1">
                                <span className="text-charcoal-400">Promotion Stagnancy Indicator</span>
                                <span className="text-rose-400 font-semibold">&gt; 3.5 Yrs Lag</span>
                              </div>
                              <div className="w-full h-2 bg-charcoal-800 rounded-full overflow-hidden">
                                <div className="w-[42%] h-full bg-rose-400" />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-[10px]">
                              <div className="bg-charcoal-900 p-1.5 rounded">
                                <span className="text-charcoal-500 block">ROC-AUC Score</span>
                                <span className="text-accent-blue font-semibold">0.862</span>
                              </div>
                              <div className="bg-charcoal-900 p-1.5 rounded">
                                <span className="text-charcoal-500 block">Flight Risk Recall</span>
                                <span className="text-emerald-400 font-semibold">81.3%</span>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 bg-charcoal-950/70 border border-white/5 rounded text-[11px] text-charcoal-400 space-y-1">
                            <span className="text-offwhite font-medium block">Key Organizational Insight:</span>
                            <p className="text-charcoal-300 text-[11px] leading-relaxed">
                              Employees without title progression at 36+ months show 42% spike in departure velocity.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Visual Artifact Details Footer */}
                      <div className="pt-2 text-[11px] font-mono text-charcoal-500 flex items-center justify-between">
                        <span>Fig. {project.number} — Technical Artifact</span>
                        <Link
                          to={`/projects/${project.slug}`}
                          className="text-accent-silver hover:text-white flex items-center gap-1"
                        >
                          <span>Full Metrics</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
