import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-between border-b border-white/[0.08] overflow-hidden editorial-grid">
      {/* Subtle background ambient glow (very soft, mature, non-neon) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-blue/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Top Editorial Metadata Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-white/[0.06] text-xs font-mono text-charcoal-400"
        >
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-accent-blue" />
            <span className="uppercase tracking-widest text-charcoal-300">Volume I • Edition 2026/27</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-charcoal-400">LOC: Tamil Nadu, India</span>
            <div className="flex items-center gap-2 text-offwhite bg-charcoal-800/80 px-3 py-1 rounded-sm border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] tracking-wider font-mono">Available for Hire & Projects</span>
            </div>
          </div>
        </motion.div>

        {/* Main Asymmetric Grid: Left Typography, Right Editorial Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headlines & Editorial Intro */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Identity Byline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-4"
            >
              <h2 className="text-sm font-mono tracking-widest uppercase text-accent-silver/90 flex items-center gap-2">
                <span>{PERSONAL_INFO.name}</span>
                <span className="text-charcoal-500">—</span>
                <span className="text-accent-blue">{PERSONAL_INFO.title}</span>
              </h2>
            </motion.div>

            {/* Large Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-1 mb-8"
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] tracking-tight leading-[1.08] text-offwhite">
                <span className="block font-normal">{PERSONAL_INFO.headlineLine1}</span>
                <span className="block italic font-light text-charcoal-200">
                  {PERSONAL_INFO.headlineLine2}
                </span>
              </h1>
            </motion.div>

            {/* Exact Required Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-charcoal-300 max-w-2xl font-light leading-relaxed mb-10 text-justify sm:text-left"
            >
              {PERSONAL_INFO.intro}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group px-6 py-3.5 rounded-sm bg-offwhite hover:bg-white text-charcoal-950 font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-sm border border-white/20 hover:border-white/40 bg-charcoal-850 hover:bg-charcoal-800 text-offwhite font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-accent-blue" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-sm border border-transparent hover:border-white/10 text-charcoal-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Direct Connect Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-white/[0.06] text-xs font-mono text-charcoal-400"
            >
              <span className="text-charcoal-500 uppercase tracking-widest text-[11px]">Direct Channels:</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-charcoal-400 hover:text-white" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-charcoal-400 hover:text-white" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-charcoal-400 hover:text-white" />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Sophisticated Profile Photograph Placeholder & Editorial Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="lg:col-span-4 flex flex-col items-center lg:items-end w-full"
          >
            <div className="relative w-full max-w-[340px] aspect-[4/5] p-2 border border-white/10 bg-charcoal-850/60 rounded-sm shadow-2xl">
              
              {/* Corner Framing Marks */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-accent-blue" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-accent-blue" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-accent-blue" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-accent-blue" />

              {/* Portrait Frame Box */}
              <div className="relative w-full h-full bg-gradient-to-b from-charcoal-800 to-charcoal-900 border border-white/[0.08] flex flex-col justify-between p-6 overflow-hidden group">
                
                {/* Subtle tech coordinate overlay */}
                <div className="flex items-center justify-between text-[10px] font-mono text-charcoal-500 uppercase tracking-widest">
                  <span>REF / HHS-2027</span>
                  <span className="text-accent-blue flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" /> AI & DATA
                  </span>
                </div>

                {/* Editorial Visual Monogram & Silhouette Representation */}
                <div className="my-auto flex flex-col items-center justify-center text-center py-8">
                  <div className="w-24 h-24 rounded-full border border-white/15 bg-charcoal-750/70 flex items-center justify-center mb-5 relative">
                    <span className="font-serif text-3xl font-medium tracking-wider text-offwhite">
                      HS
                    </span>
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-charcoal-800" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-serif text-lg tracking-wide text-offwhite block">
                      Hari Hara Sudhan
                    </span>
                    <span className="text-xs font-mono text-charcoal-400 block tracking-wider">
                      B.E. Computer Science & Eng.
                    </span>
                    <span className="text-[11px] font-mono text-charcoal-500 block">
                      Kamaraj College of Eng. & Tech.
                    </span>
                  </div>
                </div>

                {/* Bottom Frame Badge */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-charcoal-400">
                  <span className="text-charcoal-500">Graduation</span>
                  <span className="text-accent-silver font-medium">Class of 2027</span>
                </div>
              </div>
            </div>

            {/* Editorial Caption Under Image */}
            <div className="w-full max-w-[340px] mt-4 flex items-center justify-between text-[11px] font-mono text-charcoal-500 px-1">
              <span>Fig. 01 — Digital Identity</span>
              <span>Kamaraj CET, IN</span>
            </div>
          </motion.div>

        </div>

        {/* Bottom Ticker / Stats Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6 text-charcoal-300"
        >
          <div>
            <span className="block text-2xl font-serif text-offwhite font-medium">2027</span>
            <span className="text-xs font-mono text-charcoal-400 uppercase tracking-wider">B.E. CSE Candidate</span>
          </div>
          <div>
            <span className="block text-2xl font-serif text-offwhite font-medium">02</span>
            <span className="text-xs font-mono text-charcoal-400 uppercase tracking-wider">Technical Internships</span>
          </div>
          <div>
            <span className="block text-2xl font-serif text-offwhite font-medium">02</span>
            <span className="text-xs font-mono text-charcoal-400 uppercase tracking-wider">Deep Case Studies</span>
          </div>
          <div>
            <span className="block text-2xl font-serif text-accent-blue font-medium">Oracle</span>
            <span className="text-xs font-mono text-charcoal-400 uppercase tracking-wider">Agentic AI Certified</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
