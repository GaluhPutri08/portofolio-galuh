import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection, onOpenCvModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          backgroundColor: isScrolled ? 'rgba(247, 247, 244, 0.94)' : 'var(--bg-main)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          transition: 'all 0.25s ease',
        }}
      >
        <div
          className="editorial-container"
          style={{
            height: 'var(--header-height)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              group: 'logo',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                border: '1.5px solid var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--text-main)',
                backgroundColor: 'var(--surface-card)',
                transition: 'all 0.2s ease',
              }}
            >
              {personalInfo.initials}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '-0.01em',
                  color: 'var(--text-main)',
                  lineHeight: 1.15,
                }}
              >
                {personalInfo.name}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--accent)',
                  letterSpacing: '0.04em',
                  fontWeight: 500,
                }}
              >
                ERP & SYSTEM ANALYSIS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '28px',
            }}
            className="desktop-nav"
          >
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                listStyle: 'none',
              }}
            >
              {navLinks.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                        padding: '6px 2px',
                        position: 'relative',
                        transition: 'color 0.15s ease',
                      }}
                    >
                      {item.label}
                      {isActive && (
                        <span
                          style={{
                            position: 'absolute',
                            bottom: -2,
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: 'var(--accent)',
                            borderRadius: '1px',
                          }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div style={{ width: '1px', height: '22px', backgroundColor: 'var(--border-subtle)' }} />

            {/* Download CV Button */}
            <button
              onClick={onOpenCvModal}
              className="btn-secondary"
              style={{
                padding: '9px 18px',
                fontSize: '0.84rem',
                gap: '8px',
                fontWeight: 600,
              }}
              title="Lihat & Download CV Galuh Saprilia Putri"
            >
              <FileText size={15} />
              <span>Download CV</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="mobile-actions">
            <button
              onClick={onOpenCvModal}
              className="btn-secondary mobile-cv-btn"
              style={{
                padding: '7px 12px',
                fontSize: '0.78rem',
                gap: '6px',
                display: 'none',
              }}
            >
              <FileText size={14} />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border-strong)',
                color: 'var(--text-main)',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-sm)',
              }}
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              className="mobile-toggle-btn"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(247, 247, 244, 0.98)',
            backdropFilter: 'blur(16px)',
            zIndex: 890,
            display: 'flex',
            flexDirection: 'column',
            padding: '32px 24px',
            animation: 'fadeIn 0.2s ease',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                fontWeight: 600,
              }}
            >
              Navigasi Halaman
            </span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map((item, idx) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '1.25rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--accent)' : 'var(--text-main)',
                      padding: '10px 0',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-light)' }}>
                      0{idx + 1}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', gap: '10px', padding: '14px' }}
            >
              <FileText size={18} />
              <span>Lihat & Download CV</span>
            </button>

            <div
              style={{
                marginTop: '16px',
                textAlign: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-light)',
              }}
            >
              POLITEKNIK NEGERI MALANG · SISTEM INFORMASI BISNIS
            </div>
          </div>
        </div>
      )}

      {/* Responsive media query helper for Navbar */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-actions {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-cv-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
