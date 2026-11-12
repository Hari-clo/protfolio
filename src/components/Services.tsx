import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/portfolioData';
import { BarChart3, Brain, ArrowUpRight, CheckCircle2, Globe2, Shield } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.06]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-2">
              06 // Client & Team Value
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-offwhite font-normal tracking-tight">
              How I Can Help Your Business
            </h2>
          </div>
          <div className="text-xs font-mono text-charcoal-400 max-w-sm md:text-right">
            <span>Specialized consulting, freelance analytical engagements, and technical internship contributions</span>
          </div>
        </div>

        {/* International Collaboration Assurance Banner */}
        <div className="mb-12 p-5 bg-charcoal-850/80 border border-white/10 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <Globe2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
            <div>
              <span className="text-offwhite font-medium block">
                Welcoming Global & Remote Engagements
              </span>
              <span className="text-charcoal-400 text-[11px]">
                Comfortable with asynchronous workflows, reproducible Git codebases, and clear milestone updates.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-charcoal-400 text-[11px] flex-shrink-0">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Honest Scope • Demonstrated Capabilities Only</span>
          </div>
        </div>

        {/* Services Two-Domain Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((srv) => {
            const isAnalytics = srv.domain === 'DATA ANALYTICS';
            const Icon = isAnalytics ? BarChart3 : Brain;

            return (
              <div
                key={srv.id}
                className="bg-charcoal-850/60 border border-white/10 rounded-sm p-8 sm:p-10 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between text-xs font-mono mb-4 pb-4 border-b border-white/5">
                    <span className="text-accent-blue uppercase tracking-widest flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {srv.domain}
                    </span>
                    <span className="text-charcoal-500">Core Service Track</span>
                  </div>

                  <h3 className="font-serif text-2xl text-offwhite font-medium mb-3">
                    {srv.title}
                  </h3>

                  <p className="text-xs font-mono text-accent-silver/90 mb-4">
                    {srv.tagline}
                  </p>

                  <p className="text-sm font-light text-charcoal-300 leading-relaxed mb-8">
                    {srv.description}
                  </p>

                  {/* Concrete Deliverables */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500 block">
                      Specific Deliverables:
                    </span>
                    <ul className="space-y-2.5 text-xs font-mono text-charcoal-300">
                      {srv.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tooling Tags */}
                  <div className="pt-4 border-t border-white/5 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500 block mb-2">
                      Employed Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {srv.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 text-[11px] font-mono bg-charcoal-900 border border-white/10 text-charcoal-300 rounded-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Link to Case Study */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                  {srv.sampleProjectSlug && (
                    <Link
                      to={`/projects/${srv.sampleProjectSlug}`}
                      className="text-accent-silver hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <span>Examine Case Study Reference</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}

                  <a
                    href="#contact"
                    className="px-4 py-2 bg-offwhite hover:bg-white text-charcoal-950 font-semibold uppercase tracking-wider rounded-sm transition-colors"
                  >
                    Discuss Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="p-8 border border-white/10 bg-charcoal-900 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-xl text-offwhite font-medium">
              Have a custom dataset or vision model requirement?
            </h4>
            <p className="text-xs font-mono text-charcoal-400">
              I can analyze requirements, test data feasibility, and engineer an initial benchmark prototype.
            </p>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3 rounded-sm bg-accent-blue/15 hover:bg-accent-blue/25 border border-accent-blue/40 text-accent-blue hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
          >
            Initiate Project Inquiry
          </a>
        </div>

      </div>
    </section>
  );
};
