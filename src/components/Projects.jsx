import React from 'react';
import { ArrowUpRight, Award, BookOpen, Users, PlayCircle } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectBlueprintPreview from './ProjectBlueprintPreview';
import { GithubIcon } from './BrandIcons';

export default function Projects({ onSelectProject }) {
  const pblProjects = projectsData.filter((p) => p.projectType === 'pbl');
  const courseworkProjects = projectsData.filter((p) => p.projectType === 'coursework');

  return (
    <section
      id="projects"
      style={{
        paddingTop: 'clamp(56px, 8vw, 96px)',
        paddingBottom: 'clamp(56px, 8vw, 96px)',
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-main)',
      }}
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(36px, 6vw, 60px)' }}>
          <div className="section-marker">03 // ACADEMIC PROJECTS & COURSEWORK</div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '16px',
            }}
          >
            <div>
              <h2 className="section-title">Academic Projects & Coursework</h2>
              <p className="section-lead">
                Dokumentasi pengembangan sistem berbasis tim melalui Project-Based Learning (PBL) serta pengalaman simulasi praktikum ERP Odoo selama perkuliahan.
              </p>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--text-light)',
                letterSpacing: '0.04em',
              }}
            >
              2 PBL PROJECTS · 1 PRACTICAL COURSEWORK
            </div>
          </div>
        </div>

        {/* =========================================================================
            CATEGORY 1: PROJECT-BASED LEARNING (PBL) - TEAM-BASED DEVELOPMENT
           ========================================================================= */}
        <div style={{ marginBottom: '56px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              paddingBottom: '14px',
              borderBottom: '1px solid var(--border-strong)',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'var(--accent-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                color: 'var(--accent)',
              }}
            >
              <Users size={17} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                }}
              >
                Project-Based Learning (PBL)
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                Proyek pengembangan sistem informasi kolaboratif berbasis tim perkuliahan.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {pblProjects.map((project) => {
              const isMainFeatured = project.isFeatured;

              return (
                <article
                  key={project.id}
                  style={{
                    backgroundColor: 'var(--surface-card)',
                    border: isMainFeatured ? '2px solid var(--accent)' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    boxShadow: isMainFeatured ? '0 12px 36px rgba(117, 139, 115, 0.12)' : 'none',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    if (!isMainFeatured) {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.boxShadow = '0 10px 28px rgba(0, 0, 0, 0.04)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMainFeatured) {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {/* Top Bar */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 24px',
                      borderBottom: '1px solid var(--border-subtle)',
                      backgroundColor: isMainFeatured ? 'var(--accent-light)' : 'var(--surface-alt)',
                      gap: '10px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {isMainFeatured ? (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            color: 'var(--accent-hover)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                          }}
                        >
                          <Award size={14} />
                          PROYEK UTAMA // FEATURED ACADEMIC PROJECT
                        </span>
                      ) : (
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.74rem',
                            fontWeight: 700,
                            color: 'var(--text-main)',
                            textTransform: 'uppercase',
                          }}
                        >
                          PROYEK AKADEMIK PENDUKUNG // PBL
                        </span>
                      )}

                      <span style={{ color: 'var(--border-strong)' }}>|</span>

                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--text-muted)',
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--text-light)',
                      }}
                    >
                      {project.timeline}
                    </span>
                  </div>

                  {/* Main Grid Columns */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isMainFeatured ? '1.15fr 1fr' : '1fr 1.15fr',
                      gap: '0',
                    }}
                    className="project-grid-columns"
                  >
                    {/* Visual Blueprint Column */}
                    <div
                      style={{
                        minHeight: isMainFeatured ? '320px' : '260px',
                        borderRight: isMainFeatured ? '1px solid var(--border-subtle)' : 'none',
                        borderLeft: !isMainFeatured ? '1px solid var(--border-subtle)' : 'none',
                        order: isMainFeatured ? 1 : 2,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      className="project-visual-col"
                    >
                      <ProjectBlueprintPreview type={project.previewType} title={project.title} />

                      <div
                        style={{
                          position: 'absolute',
                          bottom: '8px',
                          right: '8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.92)',
                          padding: '3px 8px',
                          fontSize: '0.62rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-light)',
                          borderRadius: '2px',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        AREA DOKUMENTASI SISTEM
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      style={{
                        padding: 'clamp(24px, 4vw, 36px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        order: isMainFeatured ? 2 : 1,
                      }}
                    >
                      <div>
                        <div style={{ marginBottom: '6px' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.72rem',
                              color: 'var(--accent)',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                            }}
                          >
                            {project.category}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontSize: isMainFeatured ? 'clamp(1.35rem, 2.2vw, 1.7rem)' : 'clamp(1.2rem, 1.9vw, 1.45rem)',
                            fontWeight: 800,
                            color: 'var(--text-main)',
                            lineHeight: 1.25,
                            marginBottom: '10px',
                          }}
                        >
                          {project.title}
                        </h3>

                        <p
                          style={{
                            fontSize: '0.92rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.65,
                            marginBottom: '18px',
                          }}
                        >
                          {project.summary}
                        </p>

                        {/* Contributions */}
                        <div style={{ marginBottom: '22px' }}>
                          <div
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.72rem',
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              color: 'var(--text-light)',
                              fontWeight: 600,
                              marginBottom: '8px',
                            }}
                          >
                            Fokus Kontribusi:
                          </div>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {project.contributions.map((item, cIdx) => (
                              <li
                                key={cIdx}
                                style={{
                                  fontSize: '0.84rem',
                                  color: 'var(--text-main)',
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '8px',
                                }}
                              >
                                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tech Stack & Action */}
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '6px',
                            marginBottom: '20px',
                          }}
                        >
                          {project.technologies.map((tech, tIdx) => (
                            <span key={tIdx} className="tech-tag" style={{ fontSize: '0.72rem', padding: '3px 8px' }}>
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                          <button
                            onClick={() => onSelectProject(project)}
                            className="btn-primary"
                            style={{
                              padding: '10px 22px',
                              fontSize: '0.86rem',
                            }}
                          >
                            <span>View Details</span>
                            <ArrowUpRight size={15} />
                          </button>

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary"
                              style={{
                                padding: '10px 16px',
                                fontSize: '0.86rem',
                                gap: '6px',
                              }}
                              title="Buka repository GitHub proyek"
                            >
                              <GithubIcon size={15} />
                              <span>GitHub</span>
                            </a>
                          )}

                          {project.liveDemoUrl && (
                            <a
                              href={project.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary"
                              style={{
                                padding: '10px 16px',
                                fontSize: '0.86rem',
                                gap: '6px',
                              }}
                              title="Tonton video demonstrasi proyek"
                            >
                              <PlayCircle size={15} />
                              <span>Demo Video</span>
                            </a>
                          )}

                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.72rem',
                              color: 'var(--text-light)',
                            }}
                          >
                            {project.contextNote}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            CATEGORY 2: PRACTICAL COURSEWORK - ERP LEARNING EXPERIENCE
           ========================================================================= */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              paddingBottom: '14px',
              borderBottom: '1px solid var(--border-strong)',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'var(--surface-alt)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                color: 'var(--text-main)',
              }}
            >
              <BookOpen size={17} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                }}
              >
                ERP Practical Coursework
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                Pengalaman praktikum dan simulasi penerapan proses bisnis menggunakan sistem ERP Odoo dalam konteks pembelajaran akademik.
              </p>
            </div>
          </div>

          {/* Practical Coursework Card */}
          {courseworkProjects.map((project) => (
            <article
              key={project.id}
              style={{
                backgroundColor: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Header Bar */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 24px',
                  borderBottom: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--surface-alt)',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: 'var(--accent)',
                    }}
                  >
                    PRAKTIKUM AKADEMIK // ERP
                  </span>
                  <span style={{ color: 'var(--border-strong)' }}>|</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      backgroundColor: 'var(--surface-card)',
                      padding: '2px 8px',
                      borderRadius: '3px',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    Practical Coursework
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-light)',
                  }}
                >
                  SIMULASI ODOO ERP
                </span>
              </div>

              {/* Main Two-Column Layout */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.15fr',
                  gap: '0',
                }}
                className="project-grid-columns"
              >
                {/* Visual Preview */}
                <div
                  style={{
                    minHeight: '260px',
                    borderRight: '1px solid var(--border-subtle)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="project-visual-col"
                >
                  <ProjectBlueprintPreview type={project.previewType} title={project.title} />

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      padding: '3px 8px',
                      fontSize: '0.62rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-light)',
                      borderRadius: '2px',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    ALUR SIMULASI PRAKTIKUM
                  </div>
                </div>

                {/* Narrative */}
                <div
                  style={{
                    padding: 'clamp(24px, 4vw, 36px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: 'clamp(1.2rem, 1.9vw, 1.45rem)',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        lineHeight: 1.25,
                        marginBottom: '10px',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.92rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.65,
                        marginBottom: '14px',
                      }}
                    >
                      {project.summary}
                    </p>

                    {/* Context Disclaimer Callout */}
                    <div
                      style={{
                        padding: '10px 14px',
                        backgroundColor: 'var(--surface-alt)',
                        borderLeft: '3px solid var(--accent)',
                        borderRadius: '0 4px 4px 0',
                        marginBottom: '18px',
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.5,
                      }}
                    >
                      <strong style={{ color: 'var(--text-main)' }}>Konteks Akademik: </strong>
                      {project.contextNote}
                    </div>

                    {/* Contributions */}
                    <div style={{ marginBottom: '20px' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: 'var(--text-light)',
                          fontWeight: 600,
                          marginBottom: '8px',
                        }}
                      >
                        Aktivitas Praktikum:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {project.contributions.map((item, cIdx) => (
                          <li
                            key={cIdx}
                            style={{
                              fontSize: '0.84rem',
                              color: 'var(--text-main)',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                            }}
                          >
                            <span style={{ color: 'var(--accent)', fontWeight: 700 }}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '18px',
                      }}
                    >
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag" style={{ fontSize: '0.72rem', padding: '3px 8px' }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => onSelectProject(project)}
                        className="btn-secondary"
                        style={{
                          padding: '10px 20px',
                          fontSize: '0.86rem',
                        }}
                      >
                        <span>View Details</span>
                        <ArrowUpRight size={15} />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                          style={{
                            padding: '10px 16px',
                            fontSize: '0.86rem',
                            gap: '6px',
                          }}
                          title="Buka repository GitHub"
                        >
                          <GithubIcon size={15} />
                          <span>GitHub</span>
                        </a>
                      )}

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                          style={{
                            padding: '10px 16px',
                            fontSize: '0.86rem',
                            gap: '6px',
                          }}
                          title="Tonton video demonstrasi simulasi Odoo"
                        >
                          <PlayCircle size={15} />
                          <span>Video Demonstrasi</span>
                        </a>
                      )}

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--text-light)',
                        }}
                      >
                        Simulasi Odoo ERP Akademik
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Responsive columns override */}
      <style>{`
        @media (max-width: 860px) {
          .project-grid-columns {
            grid-template-columns: 1fr !important;
          }
          .project-visual-col {
            border-right: none !important;
            border-left: none !important;
            border-bottom: 1px solid var(--border-subtle) !important;
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
