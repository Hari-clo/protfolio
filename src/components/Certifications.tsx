import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Plus, ShieldCheck, X } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const [certList, setCertList] = useState<CertificationItem[]>(CERTIFICATIONS);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  // Form State for Adding New Certificate
  const [newCert, setNewCert] = useState({
    name: '',
    issuer: '',
    issueDate: '',
    credentialUrl: '',
    credentialId: '',
    description: '',
    skillsVerified: '',
  });

  const handleAddCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCert.name || !newCert.issuer) return;

    const certItem: CertificationItem = {
      id: `cert-${Date.now()}`,
      name: newCert.name,
      issuer: newCert.issuer,
      issueDate: newCert.issueDate || '2026',
      credentialUrl: newCert.credentialUrl || undefined,
      credentialId: newCert.credentialId || undefined,
      description: newCert.description || 'Verified technical certification.',
      skillsVerified: newCert.skillsVerified
        ? newCert.skillsVerified.split(',').map((s) => s.trim())
        : ['Technical Proficiency'],
    };

    setCertList([...certList, certItem]);
    setNewCert({
      name: '',
      issuer: '',
      issueDate: '',
      credentialUrl: '',
      credentialId: '',
      description: '',
      skillsVerified: '',
    });
    setIsAddModalOpen(false);
  };

  return (
    <section id="certifications" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.06]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-2">
              05 // Credentials & Accreditations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-offwhite font-normal tracking-tight">
              Verified Certifications
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-sm border border-white/20 hover:border-accent-blue bg-charcoal-850 hover:bg-charcoal-800 text-xs font-mono uppercase tracking-wider text-offwhite transition-colors"
            >
              <Plus className="w-3.5 h-3.5 text-accent-blue" />
              <span>Add Credential</span>
            </button>
          </div>
        </div>

        {/* Certificate Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certList.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-charcoal-850/60 border border-white/10 rounded-sm p-6 sm:p-7 flex flex-col justify-between hover:border-white/25 transition-all group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between text-xs font-mono mb-4 pb-3 border-b border-white/5">
                  <span className="text-accent-blue font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {cert.issuer}
                  </span>
                  <span className="text-charcoal-500">{cert.issueDate}</span>
                </div>

                <h3 className="font-serif text-xl text-offwhite font-medium mb-2 group-hover:text-accent-silver transition-colors">
                  {cert.name}
                </h3>

                {cert.credentialId && (
                  <p className="text-xs font-mono text-charcoal-400 mb-3">
                    ID: <span className="text-charcoal-300">{cert.credentialId}</span>
                  </p>
                )}

                <p className="text-xs text-charcoal-300 font-light leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Verified Skills */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500 block">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsVerified.map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[11px] font-mono bg-charcoal-900 border border-white/10 text-charcoal-400 rounded-sm"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-charcoal-400 hover:text-white transition-colors"
                >
                  View Details
                </button>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent-blue hover:underline"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Detail Inspection Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-charcoal-900 border border-white/20 rounded-sm p-6 sm:p-8 max-w-lg w-full relative shadow-2xl space-y-6"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-5 right-5 text-charcoal-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-blue">
                  <Award className="w-4 h-4" />
                  <span>Credential Dossier</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-offwhite font-medium mb-1">
                    {selectedCert.name}
                  </h3>
                  <p className="text-sm font-mono text-accent-silver">
                    Issued by {selectedCert.issuer} • {selectedCert.issueDate}
                  </p>
                </div>

                <div className="p-4 bg-charcoal-850 border border-white/10 rounded-sm space-y-2 text-xs font-mono text-charcoal-300">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-charcoal-500">Credential Status:</span>
                    <span className="text-emerald-400">Authenticated Associate</span>
                  </div>
                  {selectedCert.credentialId && (
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-charcoal-500">Designation:</span>
                      <span className="text-offwhite">{selectedCert.credentialId}</span>
                    </div>
                  )}
                  <p className="pt-2 text-charcoal-300 leading-relaxed font-sans text-xs">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 text-xs font-mono text-charcoal-400 hover:text-white"
                  >
                    Close
                  </button>
                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-mono uppercase bg-offwhite text-charcoal-950 font-semibold rounded-sm flex items-center gap-1.5"
                    >
                      <span>Open Issuer Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Add Certificate Modal */}
        <AnimatePresence>
          {isAddModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-charcoal-900 border border-white/20 rounded-sm p-6 sm:p-8 max-w-lg w-full relative shadow-2xl"
              >
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="absolute top-5 right-5 text-charcoal-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-blue mb-4">
                  <Plus className="w-4 h-4" />
                  <span>Expand Credential Gallery</span>
                </div>

                <h3 className="font-serif text-xl text-offwhite font-medium mb-6">
                  Add Verified Certificate
                </h3>

                <form onSubmit={handleAddCertificate} className="space-y-4 text-xs font-mono">
                  <div>
                    <label className="block text-charcoal-400 uppercase tracking-wider mb-1">
                      Certificate Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AWS Certified Cloud Practitioner"
                      value={newCert.name}
                      onChange={(e) => setNewCert({ ...newCert, name: e.target.value })}
                      className="w-full bg-charcoal-850 border border-white/10 rounded-sm p-2.5 text-offwhite focus:border-accent-blue focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-charcoal-400 uppercase tracking-wider mb-1">
                        Issuer *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. AWS, Coursera, DeepLearning.AI"
                        value={newCert.issuer}
                        onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                        className="w-full bg-charcoal-850 border border-white/10 rounded-sm p-2.5 text-offwhite focus:border-accent-blue focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-charcoal-400 uppercase tracking-wider mb-1">
                        Issue Date
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. March 2026"
                        value={newCert.issueDate}
                        onChange={(e) => setNewCert({ ...newCert, issueDate: e.target.value })}
                        className="w-full bg-charcoal-850 border border-white/10 rounded-sm p-2.5 text-offwhite focus:border-accent-blue focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-charcoal-400 uppercase tracking-wider mb-1">
                      Credential Verification URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={newCert.credentialUrl}
                      onChange={(e) => setNewCert({ ...newCert, credentialUrl: e.target.value })}
                      className="w-full bg-charcoal-850 border border-white/10 rounded-sm p-2.5 text-offwhite focus:border-accent-blue focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-charcoal-400 uppercase tracking-wider mb-1">
                      Verified Skills (Comma Separated)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Cloud Foundations, S3, IAM"
                      value={newCert.skillsVerified}
                      onChange={(e) => setNewCert({ ...newCert, skillsVerified: e.target.value })}
                      className="w-full bg-charcoal-850 border border-white/10 rounded-sm p-2.5 text-offwhite focus:border-accent-blue focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-charcoal-400 uppercase tracking-wider mb-1">
                      Brief Description
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Course overview and covered areas..."
                      value={newCert.description}
                      onChange={(e) => setNewCert({ ...newCert, description: e.target.value })}
                      className="w-full bg-charcoal-850 border border-white/10 rounded-sm p-2.5 text-offwhite focus:border-accent-blue focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setIsAddModalOpen(false)}
                      className="px-4 py-2 text-xs font-mono text-charcoal-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-offwhite text-charcoal-950 font-semibold rounded-sm uppercase tracking-wider"
                    >
                      Save Credential
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
