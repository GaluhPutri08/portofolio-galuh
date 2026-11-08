import React from 'react';
import { ArrowDownRight, FileText, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

export default function Hero({ onOpenCvModal }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        paddingTop: 'clamp(32px, 6vw, 64px)',
        paddingBottom: 'clamp(48px, 8vw, 88px)',
        position: 'relative',
      }}
    >
      <div className="editorial-container">
        {/* Subtle Top Metadata Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: 'clamp(28px, 5vw, 48px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--accent)',
                borderRadius: '50%',
                boxShadow: '0 0 0 3px rgba(117, 139, 115, 0.2)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--text-main)',
                fontWeight: 600,
              }}
            >
              Mahasiswa Semester 5 · Polinema
            </span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-light)',
              letterSpacing: '0.05em',
            }}
          >
            REF: SIB / ERP & SYSTEM ANALYSIS
          </div>
        </div>

        {/* Main Hero Layout: Two-Column Editorial Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(36px, 6vw, 64px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Typography & Intent */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                }}
              >
                {personalInfo.headlineGreeting}
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.1rem, 4vw, 3.4rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '20px',
              }}
            >
              {personalInfo.personalBranding}
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.02rem, 1.25vw, 1.18rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '24px',
              }}
            >
              {personalInfo.heroDescription}
            </p>

            {/* Quick Context Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '32px',
              }}
            >
              <span className="editorial-pill">
                <MapPin size={12} />
                {personalInfo.location}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  backgroundColor: 'var(--surface-alt)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '9999px',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                }}
              >
                D-IV Sistem Informasi Bisnis
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  backgroundColor: 'var(--surface-alt)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '9999px',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                }}
              >
                Mahasiswa Semester 5
              </span>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                alignItems: 'center',
              }}
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                <span>View My Projects</span>
                <ArrowDownRight size={17} />
              </a>

              <button
                onClick={onOpenCvModal}
                className="btn-secondary"
              >
                <FileText size={17} />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Profile Placeholder Composition */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Editorial Frame Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '430px',
              }}
            >
              {/* Corner Architectural Markers */}
              <div
                style={{
                  position: 'absolute',
                  top: -8,
                  left: -8,
                  width: '16px',
                  height: '16px',
                  borderTop: '2px solid var(--accent)',
                  borderLeft: '2px solid var(--accent)',
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: -8,
                  right: -8,
                  width: '16px',
                  height: '16px',
                  borderTop: '2px solid var(--accent)',
                  borderRight: '2px solid var(--accent)',
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: -8,
                  left: -8,
                  width: '16px',
                  height: '16px',
                  borderBottom: '2px solid var(--accent)',
                  borderLeft: '2px solid var(--accent)',
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: -8,
                  right: -8,
                  width: '16px',
                  height: '16px',
                  borderBottom: '2px solid var(--accent)',
                  borderRight: '2px solid var(--accent)',
                  zIndex: 2,
                }}
              />

              {/* Photo Card Frame */}
              <div
                style={{
                  backgroundColor: 'var(--surface-card)',
                  border: '1px solid var(--border-strong)',
                  padding: '16px',
                  position: 'relative',
                  boxShadow: '0 12px 32px rgba(32, 33, 36, 0.05)',
                }}
              >
                {/* Photo Aspect Container */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4 / 5',
                    backgroundColor: '#EAECE7',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <img
                    src={profileImg}
                    alt="Galuh Saprilia Putri"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />

                  {/* Editorial Name Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(4px)',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      border: '1px solid var(--border-subtle)',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        marginBottom: '2px',
                      }}
                    >
                      GALUH SAPRILIA PUTRI
                    </div>
                    <div
                      style={{
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.3,
                      }}
                    >
                      D-IV Sistem Informasi Bisnis · Polinema
                    </div>
                  </div>
                </div>

                {/* Editorial Caption Under Image */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '12px',
                    paddingTop: '10px',
                    borderTop: '1px solid var(--border-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-light)',
                  }}
                >
                  <span>FIG. 01 — IDENTITY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
