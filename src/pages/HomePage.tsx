import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { ProjectsSection } from '../components/ProjectsSection';
import { Services } from '../components/Services';
import { ExperienceEducation } from '../components/ExperienceEducation';
import { Certifications } from '../components/Certifications';
import { ResumeSection } from '../components/ResumeSection';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-charcoal-900 text-offwhite overflow-x-hidden">
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      <main>
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <ProjectsSection />
        <Services />
        <ExperienceEducation />
        <Certifications />
        <ResumeSection
          isPreviewOpen={isResumeModalOpen}
          onOpenPreview={() => setIsResumeModalOpen(true)}
          onClosePreview={() => setIsResumeModalOpen(false)}
        />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};
