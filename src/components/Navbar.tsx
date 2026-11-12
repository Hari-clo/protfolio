import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (isHomePage) {
        const sections = ['hero', 'about', 'skills', 'projects', 'services', 'experience', 'certifications', 'contact'];
        const current = sections.find((section) => {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            return rect.top <= 140 && rect.bottom >= 140;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navItems = [
    { label: 'About', href: isHomePage ? '#about' : '/#about', id: 'about' },
    { label: 'Skills', href: isHomePage ? '#skills' : '/#skills', id: 'skills' },
    { label: 'Projects', href: isHomePage ? '#projects' : '/#projects', id: 'projects' },
    { label: 'Services', href: isHomePage ? '#services' : '/#services', id: 'services' },
    { label: 'Experience', href: isHomePage ? '#experience' : '/#experience', id: 'experience' },
    { label: 'Contact', href: isHomePage ? '#contact' : '/#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-900/90 backdrop-blur-md border-b border-white/[0.08] py-4'
          : 'bg-transparent py-6 border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Monogram */}
        <Link
          to="/"
          className="group flex items-center gap-3 text-offwhite hover:text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-sm border border-white/20 bg-charcoal-800 flex items-center justify-center font-serif text-sm tracking-wider font-semibold text-accent-silver group-hover:border-accent-blue/50 transition-colors">
            HS
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base tracking-wide font-medium text-offwhite">
              Hari Hara Sudhan
            </span>
            <span className="text-[10px] tracking-widest uppercase text-charcoal-400 font-mono -mt-0.5">
              Data Analyst • AI/ML
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = isHomePage && activeSection === item.id;
            return isHomePage ? (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs uppercase tracking-widest font-mono transition-colors relative py-1 ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-charcoal-400 hover:text-offwhite'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent-blue" />
                )}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-xs uppercase tracking-widest font-mono text-charcoal-400 hover:text-offwhite transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-charcoal-850 text-[11px] font-mono text-charcoal-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Open to Roles</span>
          </div>

          {onOpenResumeModal && (
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm border border-white/20 hover:border-accent-blue/60 text-offwhite hover:text-white bg-charcoal-800/80 hover:bg-charcoal-750 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-accent-blue" />
              <span>Resume</span>
            </button>
          )}

          <a
            href={isHomePage ? '#contact' : '/#contact'}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm bg-offwhite hover:bg-white text-charcoal-950 font-medium transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-charcoal-300 hover:text-white rounded-sm border border-white/10 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-950/98 backdrop-blur-xl border-b border-white/10 px-6 py-8 mt-2 transition-all">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-charcoal-300 hover:text-white py-1 flex items-center justify-between border-b border-white/5"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-500" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              {onOpenResumeModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full py-3 flex items-center justify-center gap-2 rounded-sm border border-white/20 text-xs font-mono uppercase tracking-wider text-white bg-charcoal-800"
                >
                  <FileText className="w-4 h-4 text-accent-blue" />
                  View Resume
                </button>
              )}
              <a
                href={isHomePage ? '#contact' : '/#contact'}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center rounded-sm bg-offwhite text-charcoal-950 font-mono text-xs uppercase tracking-wider font-semibold"
              >
                Contact Hari
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
