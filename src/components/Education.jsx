import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      style={{
        paddingTop: 'clamp(56px, 8vw, 96px)',
        paddingBottom: 'clamp(56px, 8vw, 96px)',
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-main)',
      }}
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(36px, 6vw, 56px)' }}>
          <div className="section-marker">05 // EDUCATION</div>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-lead">
            Riwayat pendidikan formal di bidang Sistem Informasi Bisnis dan Sains yang tercantum dalam CV.
          </p>
        </div>

        {/* Minimalist Editorial Timeline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            position: 'relative',
          }}
        >
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              style={{
                backgroundColor: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                padding: 'clamp(24px, 4vw, 36px)',
                position: 'relative',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top metadata strip */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border-subtle)',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: 'var(--accent)',
                    }}
                  >
                    EDU / 0{idx + 1}
                  </span>
                  <span style={{ color: 'var(--border-strong)' }}>|</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      color: 'var(--text-main)',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Calendar size={13} style={{ color: 'var(--accent)' }} />
                    {edu.period}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.76rem',
                      color: 'var(--text-light)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <MapPin size={12} />
                    {edu.location}
                  </span>

                  <span className="editorial-pill" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Main Content Info */}
              <div>
                <h3
                  style={{
                    fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '4px',
                  }}
                >
                  {edu.institution}
                </h3>

                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    marginBottom: '10px',
                  }}
                >
                  {edu.degree}
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    margin: 0,
                    maxWidth: '720px',
                  }}
                >
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
