import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_ITEMS, EDUCATION_ITEMS } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-white/[0.08] bg-charcoal-900/40 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.06]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-2">
              04 // Professional Track
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-offwhite font-normal tracking-tight">
              Experience & Academic Foundation
            </h2>
          </div>
          <div className="text-xs font-mono text-charcoal-400 max-w-sm md:text-right">
            <span>Verified practical internships and formal Computer Science curriculum</span>
          </div>
        </div>

        {/* Dual Column Layout: Professional Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Professional Experience (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Briefcase className="w-4 h-4 text-accent-blue" />
              <h3 className="font-serif text-xl text-offwhite font-normal">
                Technical Internships
              </h3>
            </div>

            <div className="space-y-10 relative before:absolute before:inset-0 before:left-3.5 before:w-px before:bg-white/10">
              {EXPERIENCE_ITEMS.map((item) => (
                <div key={item.id} className="relative pl-10 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-charcoal-800 border-2 border-accent-blue group-hover:scale-125 transition-transform" />

                  <div className="bg-charcoal-850/60 border border-white/10 rounded-sm p-6 sm:p-7 space-y-4 hover:border-white/20 transition-all">
                    {/* Role & Company Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 border-b border-white/5 pb-3">
                      <div>
                        <h4 className="font-serif text-lg text-offwhite font-medium">
                          {item.role}
                        </h4>
                        <span className="text-sm font-mono text-accent-silver">
                          {item.company}
                        </span>
                      </div>
                      
                      <div className="flex flex-col items-end text-xs font-mono text-charcoal-400">
                        <span className="flex items-center gap-1.5 text-accent-blue">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-charcoal-500 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-xs sm:text-sm font-light text-charcoal-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Verified Responsibilities */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500 block">
                        Demonstrated Responsibilities:
                      </span>
                      <ul className="space-y-2 text-xs font-mono text-charcoal-300">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <span className="text-accent-blue mt-0.5">•</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Accomplishment Callout */}
                    <div className="p-3 bg-charcoal-900 border border-white/5 rounded text-xs font-mono text-charcoal-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-offwhite font-medium">Core Impact:</strong> {item.keyAccomplishment}</span>
                    </div>

                    {/* Tools Used */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 text-[11px] font-mono bg-charcoal-900 border border-white/10 text-charcoal-400 rounded-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Credentials (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <GraduationCap className="w-4 h-4 text-accent-blue" />
              <h3 className="font-serif text-xl text-offwhite font-normal">
                Formal Education
              </h3>
            </div>

            {EDUCATION_ITEMS.map((edu, idx) => (
              <div
                key={idx}
                className="bg-charcoal-850/60 border border-white/10 rounded-sm p-6 sm:p-7 space-y-5"
              >
                <div className="border-b border-white/5 pb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent-blue block mb-1">
                    Undergraduate Degree Program
                  </span>
                  <h4 className="font-serif text-xl text-offwhite font-medium mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-sans text-charcoal-300">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-white/5 text-xs font-mono text-charcoal-400">
                    <span className="flex items-center gap-1.5 text-offwhite">
                      <Calendar className="w-3 h-3 text-accent-blue" />
                      {edu.period}
                    </span>
                    <span className="text-emerald-400 text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {edu.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs text-charcoal-300">
                  <span className="text-[10px] uppercase tracking-widest text-charcoal-500 block">
                    Curriculum & Applied Focus:
                  </span>
                  <ul className="space-y-2.5">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-accent-blue mt-0.5">•</span>
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-charcoal-900 border border-white/5 rounded text-xs font-mono text-charcoal-400 space-y-1">
                  <span className="text-offwhite block font-medium">Academic Tenet:</span>
                  <p className="text-[11px] leading-relaxed text-charcoal-400">
                    Rigorous grounding in algorithmic complexity, database normalization, relational algebra, and neural network foundations.
                  </p>
                </div>
              </div>
            ))}

            {/* Note on Verification */}
            <div className="p-4 border border-white/[0.06] rounded-sm text-xs font-mono text-charcoal-500 flex items-center justify-between">
              <span>Transcript & Verification</span>
              <span className="text-accent-silver">Available on Request</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
