import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 border-t border-white/[0.08] py-16 text-xs font-mono text-charcoal-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Top Colophon Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div className="space-y-1">
            <span className="font-serif text-lg text-offwhite font-medium block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-charcoal-500 text-[11px] block">
              Data Analyst • AI/ML Developer • B.E. Computer Science and Engineering
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-sm border border-white/10 hover:border-white/30 text-charcoal-300 hover:text-white transition-colors flex items-center gap-1.5"
              title="Return to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase tracking-wider">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Integrity Statement */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-charcoal-500">
          <div>
            <span>© {new Date().getFullYear()} Hari Hara Sudhan. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <span>•</span>
            <span className="text-accent-blue">Vercel Production Deployment</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
