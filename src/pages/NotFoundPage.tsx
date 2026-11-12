import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-charcoal-900 text-offwhite flex flex-col items-center justify-center p-6 text-center editorial-grid">
      <span className="text-xs font-mono uppercase tracking-widest text-accent-blue mb-2">
        Error 404 // Page Missing
      </span>
      <h1 className="font-serif text-5xl sm:text-6xl text-offwhite mb-4">
        Entry Not Found
      </h1>
      <p className="text-sm font-mono text-charcoal-400 max-w-md mb-8">
        The requested address does not correspond to any published case study or portfolio section.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-offwhite text-charcoal-950 font-mono text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center gap-2 hover:bg-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
};
