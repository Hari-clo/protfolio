import React from 'react';
import { Terminal, Database, Cpu, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Database,
      title: "Data-Driven Problem Solving",
      desc: "Transforming ambiguous, unstructured data into clean statistical foundations. Extracting signal, diagnosing anomalies, and ensuring integrity before making modeling assumptions.",
    },
    {
      icon: Cpu,
      title: "Applied Machine Learning",
      desc: "Architecting supervised classifiers and Convolutional Neural Networks (CNNs) in TensorFlow and Scikit-learn with focused attention on generalization and measurable validation.",
    },
    {
      icon: Terminal,
      title: "Practical Application Engineering",
      desc: "Bridging the gap between Jupyter research notebooks and functional user experiences using Streamlit and Gradio to deliver accessible analytical tools.",
    },
    {
      icon: Compass,
      title: "Analytical & Empirical Thinking",
      desc: "Rooted in Computer Science fundamentals from Kamaraj College of Engineering and Technology, approaching systems methodically from data structures to model inference latency.",
    },
  ];

  return (
    <section id="about" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.06]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-2">
              01 // Narrative & Ethos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-offwhite font-normal tracking-tight">
              Engineering with Analytical Discipline
            </h2>
          </div>
          <div className="text-xs font-mono text-charcoal-400 max-w-xs md:text-right">
            <span>B.E. CSE Candidate</span>
            <span className="block text-charcoal-500">Kamaraj College of Eng. & Tech. (2027)</span>
          </div>
        </div>

        {/* Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Prose (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-charcoal-300 leading-relaxed font-light text-base sm:text-lg">
            <p className="text-offwhite font-normal text-lg sm:text-xl leading-relaxed">
              "I believe data is most powerful when it moves beyond passive reporting into predictive, decision-enabling intelligence."
            </p>

            {PERSONAL_INFO.aboutDetailed.map((paragraph, idx) => (
              <p key={idx} className="text-charcoal-300 text-justify sm:text-left">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-accent-silver mb-3">
                Core Academic & Professional Focus:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono text-charcoal-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                  <span>Computer Science & Engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                  <span>Deep Learning (CNN / Vision)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                  <span>Exploratory & SQL Analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                  <span>Predictive Workforce Modeling</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillars & Quote Card (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-charcoal-850/80 border border-white/10 p-6 sm:p-8 rounded-sm">
              <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-400 block mb-6">
                Technical Tenets
              </span>

              <div className="space-y-6">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-sm bg-charcoal-800 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-accent-blue" />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-medium text-offwhite mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-charcoal-400 leading-normal">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Academic Credential Summary Callout */}
            <div className="p-6 border border-white/[0.08] bg-charcoal-900 rounded-sm font-mono text-xs text-charcoal-400 space-y-2">
              <div className="flex justify-between items-center text-offwhite border-b border-white/[0.06] pb-2">
                <span className="uppercase text-[11px] text-charcoal-400">Institutional Affiliation</span>
                <span className="text-accent-blue">2023 – 2027</span>
              </div>
              <p className="text-charcoal-300 font-sans text-sm">
                Kamaraj College of Engineering and Technology
              </p>
              <p className="text-[11px] text-charcoal-500">
                Department of Computer Science and Engineering • Tamil Nadu, India
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
