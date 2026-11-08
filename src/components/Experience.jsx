import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { workExperienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
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
          <div className="section-marker">04 // WORK EXPERIENCE</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-lead">
            Pengalaman kerja operasional dalam melayani pelanggan, mendukung kelancaran operasional tempat kerja, serta membangun keterampilan komunikasi dan kerja sama tim.
          </p>
        </div>

        {/* Minimalist Editorial Experience Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {workExperienceData.map((job, idx) => (
            <div
              key={job.id}
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
              {/* Top Meta Strip */}
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
                    EXP / 0{idx + 1}
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
                    {job.period}
                  </span>
                </div>

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
                  {job.location}
                </span>
              </div>

              {/* Job Title & Company */}
              <div style={{ marginBottom: '16px' }}>
                <h3
                  style={{
                    fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '4px',
                  }}
                >
                  {job.role}
                </h3>
                <div
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                  }}
                >
                  {job.company}
                </div>
              </div>

              {/* Responsibilities */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {job.responsibilities.map((resp, rIdx) => (
                  <div
                    key={rIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
                    <span
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                      }}
                    >
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

