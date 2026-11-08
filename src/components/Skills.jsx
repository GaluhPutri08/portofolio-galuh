import React from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Briefcase, 
  Code2, 
  CheckCircle2, 
  Languages 
} from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'ERP & Business Analysis':
        return <Briefcase size={20} style={{ color: 'var(--accent)' }} />;
      case 'Development':
        return <Code2 size={20} style={{ color: 'var(--accent)' }} />;
      case 'Testing':
        return <CheckCircle2 size={20} style={{ color: 'var(--accent)' }} />;
      case 'Languages':
        return <Languages size={20} style={{ color: 'var(--accent)' }} />;
      default:
        return <CheckCircle2 size={20} style={{ color: 'var(--accent)' }} />;
    }
  };

  return (
    <section
      id="skills"
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
          <div className="section-marker">02 // CAPABILITIES</div>
          <h2 className="section-title">Skills & Competencies</h2>
          <p className="section-lead">
            Pengelompokan keahlian implementasi ERP Odoo, analisis proses bisnis, teknologi pengembangan aplikasi, pengujian sistem, dan kemampuan bahasa sesuai CV.
          </p>
        </div>

        {/* Balanced 2x2 Editorial Grid */}
        <div
          className="skills-editorial-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {skillsData.map((cat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: 'clamp(22px, 3vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    backgroundColor: 'var(--accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    flexShrink: 0,
                  }}
                >
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      lineHeight: 1.2,
                    }}
                  >
                    {cat.category}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--text-light)',
                    }}
                  >
                    GROUP 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Category Description */}
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.55,
                  marginBottom: '18px',
                }}
              >
                {cat.description}
              </p>

              {/* Subtle Line */}
              <div
                style={{
                  height: '1px',
                  width: '100%',
                  backgroundColor: 'var(--border-subtle)',
                  marginBottom: '16px',
                }}
              />

              {/* Skills Tags / Chips (Horizontal Wrapping - No Awkward Whitespace) */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '8px 14px',
                      backgroundColor: 'var(--surface-alt)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '4px',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent)',
                        flexShrink: 0,
                      }}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Subnote */}
        <div
          style={{
            marginTop: '32px',
            padding: '16px 20px',
            border: '1px dashed var(--border-strong)',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent)',
                fontWeight: 700,
              }}
            >
              KOMPETENSI TERVERIFIKASI:
            </span>
            <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Seluruh keahlian selaras dengan pengalaman akademik dan proyek perkuliahan terkini.
            </span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-light)',
            }}
          >
            POLINEMA · D-IV SIB
          </span>
        </div>
      </div>

      {/* Responsive media query for 2x2 layout */}
      <style>{`
        @media (min-width: 768px) {
          .skills-editorial-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
