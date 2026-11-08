import React from 'react';
import { Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const paragraphs = personalInfo.aboutText.split('\n\n');

  return (
    <section
      id="about"
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
          <div className="section-marker">01 // ABOUT</div>
          <h2 className="section-title">A little about me.</h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 72px)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Descriptive Narrative & Core Approaches */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                    color: 'var(--text-main)',
                    lineHeight: 1.8,
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Core Approaches & Capabilities */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-light)',
                  fontWeight: 600,
                }}
              >
                Fokus Pendekatan dan Kemampuan:
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {personalInfo.coreApproaches.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-light)',
                        color: 'var(--accent)',
                        flexShrink: 0,
                        marginTop: '3px',
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <div>
                      <strong style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.94rem' }}>
                        {item.title}:{' '}
                      </strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Editorial Factsheet & Career Snapshot */}
          <div>
            <div
              style={{
                backgroundColor: 'var(--surface-card)',
                border: '1px solid var(--border-strong)',
                padding: 'clamp(24px, 4vw, 36px)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border-subtle)',
                  marginBottom: '24px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    fontWeight: 700,
                  }}
                >
                  Candidate Profile Summary
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-light)',
                  }}
                >
                  ID: SIB-SMT5
                </span>
              </div>

              {/* Data Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-light)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    Nama Lengkap
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1.05rem' }}>
                    {personalInfo.name}
                  </div>
                </div>

                <div className="editorial-line" />

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-light)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    Pendidikan & Status
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>
                    {personalInfo.institution}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    {personalInfo.studyProgram} · {personalInfo.status}
                  </div>
                </div>

                <div className="editorial-line" />

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-light)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    Fokus & Minat Karier
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '0.92rem', lineHeight: 1.4 }}>
                    {personalInfo.careerInterestsHeadline}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.84rem', marginTop: '6px', lineHeight: 1.55 }}>
                    {personalInfo.careerDescription}
                  </div>
                </div>

                <div className="editorial-line" />

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-light)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    Lokasi & Domisili
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.92rem' }}>
                    {personalInfo.location}
                  </div>
                </div>

                <div className="editorial-line" />

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-light)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    Fokus Pengalaman Proyek
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.55 }}>
                    Simulasi proses bisnis terintegrasi menggunakan Odoo ERP dan proyek perkuliahan berbasis tim (PBL Semester 4 & 5).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
