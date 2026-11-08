import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0F161E',
        color: 'var(--dark-muted)',
        borderTop: '1px solid var(--dark-border)',
        paddingTop: '40px',
        paddingBottom: '40px',
        fontSize: '0.86rem',
      }}
    >
      <div className="editorial-container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          {/* Left: Designer & Developer attribution */}
          <div>
            <div
              style={{
                color: 'var(--dark-text)',
                fontWeight: 600,
                fontSize: '0.92rem',
                marginBottom: '4px',
              }}
            >
              Designed & Developed by {personalInfo.name}.
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--dark-muted)',
              }}
            >
              Politeknik Negeri Malang · D-IV Sistem Informasi Bisnis
            </div>
          </div>

          {/* Center: Copyright Statement */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--dark-muted)',
              textAlign: 'center',
            }}
          >
            © {CURRENT_YEAR} {personalInfo.name}. All rights reserved.
          </div>

          {/* Right: Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="btn-ghost-dark"
              style={{
                padding: '8px 14px',
                fontSize: '0.78rem',
                gap: '8px',
              }}
              title="Kembali ke bagian paling atas"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
