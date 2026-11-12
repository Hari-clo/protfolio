import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, Calendar, CheckCircle2, X, Printer } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_ITEMS, EDUCATION_ITEMS, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeSectionProps {
  isPreviewOpen: boolean;
  onOpenPreview: () => void;
  onClosePreview: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  isPreviewOpen,
  onOpenPreview,
  onClosePreview,
}) => {
  const handleDownload = () => {
    // Generate an authentic printable version or trigger browser print
    window.print();
  };

  return (
    <section id="resume" className="py-24 border-b border-white/[0.08] bg-charcoal-900/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.06]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-2">
              07 // Curriculum Vitae
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-offwhite font-normal tracking-tight">
              Professional Résumé & Dossier
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-charcoal-400">
            <Calendar className="w-3.5 h-3.5 text-accent-blue" />
            <span>Last Updated: {PERSONAL_INFO.resumeLastUpdated}</span>
          </div>
        </div>

        {/* Editorial Resume Card Container */}
        <div className="bg-charcoal-850/70 border border-white/10 rounded-sm p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Summary and Highlights */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-charcoal-800 border border-white/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-offwhite font-normal">
                    {PERSONAL_INFO.name} — Curriculum Vitae
                  </h3>
                  <span className="text-xs font-mono text-charcoal-400">
                    B.E. Computer Science & Engineering • Data Analyst • AI/ML Developer
                  </span>
                </div>
              </div>

              <p className="text-sm font-light text-charcoal-300 leading-relaxed max-w-2xl">
                Comprehensive overview of formal academic coursework at Kamaraj College of Engineering and Technology, completed technical internships at Cognifyz Technologies and Panith Innovations, verified Oracle Agentic AI certification, and active project codebases.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-charcoal-400 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Peer-Verified Technical Stack</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>2 Active Applied Case Studies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Oracle Agentic AI Foundations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Targeting 2026/27 Roles</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenPreview}
                  className="px-6 py-3 bg-offwhite hover:bg-white text-charcoal-950 font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview Full Résumé</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="px-6 py-3 border border-white/20 hover:border-accent-blue bg-charcoal-800 hover:bg-charcoal-750 text-offwhite font-mono text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-accent-blue" />
                  <span>Download / Print PDF</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Sheet Replica */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={onOpenPreview}
                className="w-full max-w-[280px] aspect-[1/1.41] bg-charcoal-900 border border-white/15 hover:border-accent-blue/50 rounded-sm p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 group shadow-2xl relative overflow-hidden"
              >
                {/* Paper header representation */}
                <div className="space-y-2 border-b border-white/10 pb-3">
                  <div className="w-16 h-2 bg-accent-blue/40 rounded-full" />
                  <div className="w-28 h-3 bg-white/60 rounded" />
                  <div className="w-20 h-2 bg-white/20 rounded" />
                </div>

                {/* Body lines */}
                <div className="space-y-2 py-2">
                  <div className="w-full h-1.5 bg-white/10 rounded" />
                  <div className="w-5/6 h-1.5 bg-white/10 rounded" />
                  <div className="w-4/6 h-1.5 bg-white/10 rounded" />
                  <div className="pt-2 space-y-1.5">
                    <div className="w-full h-1.5 bg-white/10 rounded" />
                    <div className="w-3/4 h-1.5 bg-white/10 rounded" />
                  </div>
                </div>

                {/* Bottom footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-charcoal-500 group-hover:text-accent-blue transition-colors">
                  <span>HHS_RESUME.PDF</span>
                  <Eye className="w-3.5 h-3.5" />
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-accent-blue/[0.04] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-charcoal-950/90 text-offwhite border border-white/20 text-xs font-mono rounded">
                    Click to Inspect
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Full Résumé Modal */}
        <AnimatePresence>
          {isPreviewOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/85 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                className="bg-charcoal-900 border border-white/20 rounded-sm w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto p-6 sm:p-12 text-offwhite"
              >
                {/* Modal Controls Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 sticky -top-6 -mt-6 sm:-top-12 sm:-mt-12 pt-6 sm:pt-12 bg-charcoal-900 z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-accent-blue">
                      Curriculum Vitae Preview
                    </span>
                    <span className="text-charcoal-500 text-xs font-mono">• Updated Nov 2026</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleDownload}
                      className="px-3 py-1.5 rounded-sm border border-white/20 hover:border-white text-xs font-mono flex items-center gap-1.5 text-charcoal-300 hover:text-white"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print</span>
                    </button>
                    <button
                      onClick={onClosePreview}
                      className="p-1.5 text-charcoal-400 hover:text-white rounded border border-white/10 hover:border-white/20"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Rendered Genuine Resume Content */}
                <div className="space-y-8 font-sans">
                  
                  {/* Resume Header */}
                  <div className="border-b border-white/10 pb-6">
                    <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-1">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-base font-mono text-accent-blue mb-3">
                      {PERSONAL_INFO.title}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs font-mono text-charcoal-400">
                      <span>{PERSONAL_INFO.location}</span>
                      <span>•</span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-accent-silver hover:underline">
                        {PERSONAL_INFO.email}
                      </a>
                      <span>•</span>
                      <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-accent-silver hover:underline">
                        github.com/Hari-clo
                      </a>
                      <span>•</span>
                      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent-silver hover:underline">
                        linkedin.com/in/sudhan-analyst
                      </a>
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h2 className="text-xs font-mono uppercase tracking-widest text-accent-silver font-semibold border-b border-white/10 pb-1 mb-3">
                      Professional Summary
                    </h2>
                    <p className="text-sm font-light text-charcoal-300 leading-relaxed">
                      {PERSONAL_INFO.intro}
                    </p>
                  </div>

                  {/* Education */}
                  <div>
                    <h2 className="text-xs font-mono uppercase tracking-widest text-accent-silver font-semibold border-b border-white/10 pb-1 mb-4">
                      Education
                    </h2>
                    {EDUCATION_ITEMS.map((edu, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-baseline">
                          <h3 className="text-sm font-medium text-white">{edu.degree}</h3>
                          <span className="text-xs font-mono text-charcoal-400">{edu.period}</span>
                        </div>
                        <p className="text-xs font-mono text-accent-blue">{edu.institution}, {edu.location}</p>
                        <ul className="list-disc list-inside text-xs text-charcoal-300 space-y-1 pt-1">
                          {edu.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Experience */}
                  <div>
                    <h2 className="text-xs font-mono uppercase tracking-widest text-accent-silver font-semibold border-b border-white/10 pb-1 mb-4">
                      Professional Experience
                    </h2>
                    <div className="space-y-6">
                      {EXPERIENCE_ITEMS.map((exp) => (
                        <div key={exp.id} className="space-y-1.5">
                          <div className="flex justify-between items-baseline">
                            <h3 className="text-sm font-medium text-white">{exp.role}</h3>
                            <span className="text-xs font-mono text-charcoal-400">{exp.period}</span>
                          </div>
                          <p className="text-xs font-mono text-accent-blue">{exp.company} — {exp.location}</p>
                          <ul className="list-disc list-inside text-xs text-charcoal-300 space-y-1 pt-1">
                            {exp.responsibilities.map((r, ri) => (
                              <li key={ri}>{r}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Confirmed Technical Skills */}
                  <div>
                    <h2 className="text-xs font-mono uppercase tracking-widest text-accent-silver font-semibold border-b border-white/10 pb-1 mb-4">
                      Confirmed Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                      {SKILL_CATEGORIES.map((cat) => (
                        <div key={cat.name} className="p-3 bg-charcoal-850 rounded border border-white/5">
                          <span className="text-offwhite font-semibold block mb-1">{cat.name}:</span>
                          <span className="text-charcoal-400">{cat.skills.map((s) => s.name).join(', ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h2 className="text-xs font-mono uppercase tracking-widest text-accent-silver font-semibold border-b border-white/10 pb-1 mb-3">
                      Certifications
                    </h2>
                    {CERTIFICATIONS.map((cert) => (
                      <div key={cert.id} className="text-xs font-mono flex justify-between">
                        <span className="text-white">{cert.name} ({cert.issuer})</span>
                        <span className="text-charcoal-400">{cert.issueDate}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Modal Footer */}
                <div className="mt-10 pt-6 border-t border-white/10 flex justify-end gap-4">
                  <button
                    onClick={onClosePreview}
                    className="px-5 py-2 text-xs font-mono uppercase text-charcoal-400 hover:text-white"
                  >
                    Close Preview
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-6 py-2 bg-offwhite text-charcoal-950 font-mono text-xs uppercase tracking-wider font-semibold rounded-sm"
                  >
                    Print / Save
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
