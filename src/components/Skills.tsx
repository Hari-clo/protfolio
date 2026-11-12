import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Database, Brain, Layout, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const categoryIcons = [Terminal, Database, Brain, Layout, Wrench];

  return (
    <section id="skills" className="py-24 border-b border-white/[0.08] bg-charcoal-900/50 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.06]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-2">
              02 // Technical Competencies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-offwhite font-normal tracking-tight">
              Verified Technical Stack
            </h2>
          </div>
          <div className="text-xs font-mono text-charcoal-400 max-w-sm md:text-right">
            <span>Verified practical proficiencies in active repository codebases</span>
            <span className="block text-charcoal-500 mt-0.5">Strictly empirical • Zero fabricated percentage metrics</span>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const isSelected = selectedCategoryIndex === idx;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all duration-200 border ${
                  isSelected
                    ? 'bg-charcoal-800 border-accent-blue/60 text-white shadow-sm'
                    : 'bg-charcoal-850/50 border-white/[0.08] text-charcoal-400 hover:text-offwhite hover:border-white/20'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-accent-blue' : 'text-charcoal-500'}`} />
                <span>{cat.name}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-charcoal-900 text-charcoal-400 border border-white/5">
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Focused Category Display */}
        <div className="bg-charcoal-850/60 border border-white/10 rounded-sm p-6 sm:p-10 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-accent-blue mb-2">
              <span>Category {String(selectedCategoryIndex + 1).padStart(2, '0')}</span>
              <span>•</span>
              <span>{SKILL_CATEGORIES[selectedCategoryIndex].name}</span>
            </div>
            <h3 className="font-serif text-2xl text-offwhite font-normal mb-2">
              {SKILL_CATEGORIES[selectedCategoryIndex].name} Frameworks
            </h3>
            <p className="text-sm font-light text-charcoal-300">
              {SKILL_CATEGORIES[selectedCategoryIndex].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_CATEGORIES[selectedCategoryIndex].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 bg-charcoal-900/80 border border-white/[0.08] hover:border-white/20 rounded-sm transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-base font-semibold text-offwhite group-hover:text-accent-blue transition-colors">
                    {skill.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/60 group-hover:scale-125 transition-transform" />
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="text-charcoal-300">
                    <span className="text-charcoal-500 block text-[10px] uppercase tracking-wider mb-0.5">Applied Focus</span>
                    {skill.focus}
                  </div>
                  <div className="pt-2 border-t border-white/5 text-charcoal-400 text-[11px]">
                    <span className="text-charcoal-500 block text-[10px] uppercase tracking-wider mb-0.5">Demonstrated In</span>
                    <span className="text-accent-silver/90">{skill.highlightProject}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive Stack Overview Matrix */}
        <div className="border-t border-white/[0.06] pt-12">
          <h4 className="text-xs font-mono uppercase tracking-widest text-charcoal-400 mb-8">
            Complete Categorized Index
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={cat.name} className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-serif text-sm text-offwhite font-medium">
                    {cat.name}
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-500">
                    0{idx + 1}
                  </span>
                </div>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="font-mono text-xs text-charcoal-400 hover:text-white transition-colors flex items-center justify-between group cursor-default"
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-charcoal-600 group-hover:text-accent-blue transition-colors">
                        ✓
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
