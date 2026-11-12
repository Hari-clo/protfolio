import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Please provide your name or organization.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Please specify a brief subject or role.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errors.message = 'Please include a message with at least 15 characters.';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setStatus('submitting');

    // Simulate reliable dispatch and generate mailto fallback without exposing private API keys
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Construct mailto link as resilient client delivery
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open mailto fallback in background
      window.location.href = mailtoUrl;

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.06]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-2">
              08 // Direct Communication
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-offwhite font-normal tracking-tight">
              Initiate Collaboration
            </h2>
          </div>
          <div className="text-xs font-mono text-charcoal-400 max-w-sm md:text-right">
            <span>Direct correspondence for internships, freelance analytics, and technical inquiries</span>
          </div>
        </div>

        {/* Contact Grid: Left Dossier Channels, Right Validated Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Dossier Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-offwhite font-normal">
                Let's discuss data-driven solutions.
              </h3>
              <p className="text-sm font-light text-charcoal-300 leading-relaxed">
                Whether you're hiring for a Data Analyst or AI/ML Developer internship, have a contract analytics requirement, or want to review my codebases, I respond promptly to all authentic inquiries.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3 font-mono text-xs">
              
              {/* Email Card with Copy Button */}
              <div className="p-4 bg-charcoal-850/70 border border-white/10 rounded-sm flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded bg-charcoal-800 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-charcoal-500 uppercase tracking-wider block">Primary Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-offwhite hover:text-accent-blue transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-charcoal-400 hover:text-white rounded border border-white/10 hover:border-white/20 ml-2 flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn CTA */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-charcoal-850/70 border border-white/10 hover:border-accent-blue/50 rounded-sm flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-charcoal-800 border border-white/10 flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div>
                    <span className="text-[10px] text-charcoal-500 uppercase tracking-wider block">LinkedIn Profile</span>
                    <span className="text-offwhite group-hover:text-accent-blue transition-colors">
                      sudhan-analyst
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-charcoal-500 group-hover:text-accent-blue transition-colors" />
              </a>

              {/* GitHub CTA */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-charcoal-850/70 border border-white/10 hover:border-accent-blue/50 rounded-sm flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-charcoal-800 border border-white/10 flex items-center justify-center">
                    <Github className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div>
                    <span className="text-[10px] text-charcoal-500 uppercase tracking-wider block">GitHub Repository</span>
                    <span className="text-offwhite group-hover:text-accent-blue transition-colors">
                      Hari-clo
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-charcoal-500 group-hover:text-accent-blue transition-colors" />
              </a>

              {/* Location & Configurable Phone Badge */}
              <div className="p-4 bg-charcoal-900 border border-white/5 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-charcoal-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                  <span>Location: <strong className="text-offwhite">{PERSONAL_INFO.location}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <Phone className="w-3.5 h-3.5 text-charcoal-500" />
                  <span>Phone: <span className="text-charcoal-400">{PERSONAL_INFO.phone}</span></span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Validated Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-charcoal-850/60 border border-white/10 rounded-sm p-6 sm:p-10 relative">
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-accent-blue flex items-center gap-2">
                  <Send className="w-3.5 h-3.5" />
                  Transmission Dispatch
                </span>
                <span className="text-[10px] font-mono text-charcoal-500">Secure Direct Message</span>
              </div>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-sm text-xs font-mono text-emerald-300 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-emerald-200">Inquiry Prepared Successfully</span>
                    <span>Your message has been processed and routed to my email client. I will respond to your address shortly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 text-xs font-mono">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-charcoal-400 uppercase tracking-wider mb-1.5">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Elena Rostova / Acme Analytics"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                      }}
                      className={`w-full bg-charcoal-900 border rounded-sm p-3 text-offwhite placeholder:text-charcoal-600 focus:outline-none transition-colors ${
                        formErrors.name ? 'border-rose-500' : 'border-white/10 focus:border-accent-blue'
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 block font-mono">{formErrors.name}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-charcoal-400 uppercase tracking-wider mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. elena@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                      }}
                      className={`w-full bg-charcoal-900 border rounded-sm p-3 text-offwhite placeholder:text-charcoal-600 focus:outline-none transition-colors ${
                        formErrors.email ? 'border-rose-500' : 'border-white/10 focus:border-accent-blue'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block font-mono">{formErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-charcoal-400 uppercase tracking-wider mb-1.5">
                    Subject / Project Scope *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Data Analyst Internship Opportunity / Computer Vision Consultation"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (formErrors.subject) setFormErrors({ ...formErrors, subject: '' });
                    }}
                    className={`w-full bg-charcoal-900 border rounded-sm p-3 text-offwhite placeholder:text-charcoal-600 focus:outline-none transition-colors ${
                      formErrors.subject ? 'border-rose-500' : 'border-white/10 focus:border-accent-blue'
                    }`}
                  />
                  {formErrors.subject && (
                    <span className="text-[11px] text-rose-400 mt-1 block font-mono">{formErrors.subject}</span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-charcoal-400 uppercase tracking-wider mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project, timeline, dataset, or internship role..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                    }}
                    className={`w-full bg-charcoal-900 border rounded-sm p-3 text-offwhite placeholder:text-charcoal-600 focus:outline-none transition-colors resize-none ${
                      formErrors.message ? 'border-rose-500' : 'border-white/10 focus:border-accent-blue'
                    }`}
                  />
                  {formErrors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block font-mono">{formErrors.message}</span>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-[11px] text-charcoal-500 font-mono">
                    Direct transmission to {PERSONAL_INFO.email}
                  </span>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto px-7 py-3.5 bg-offwhite hover:bg-white text-charcoal-950 font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span>Dispatching...</span>
                    ) : (
                      <>
                        <span>Send Transmission</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
