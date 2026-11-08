import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  FolderGit2,
  Copy,
  Layers,
  PlayCircle
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import ProjectBlueprintPreview from './ProjectBlueprintPreview';

export default function ProjectModal({ project, onClose, onShowToast }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const handleCopyLinkLocation = (fieldName) => {
    navigator.clipboard.writeText(`src/data/portfolioData.js -> projectsData[id: "${project.id}"].${fieldName}`);
    onShowToast(`Lokasi konfigurasi ${fieldName} disalin ke clipboard!`);
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-content-animated"
        style={{
          backgroundColor: 'var(--surface-card)',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-strong)',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.16)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            padding: '20px 28px',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bg-main)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                fontWeight: 700,
              }}
            >
              PROYEK DETAIL // {project.category}
            </span>
            <span style={{ color: 'var(--border-strong)' }}>|</span>
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

          <button
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
              borderRadius: '4px',
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--text-main)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--surface-card)';
              e.currentTarget.style.color = 'var(--text-main)';
            }}
            aria-label="Tutup jendela detail proyek"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div
          style={{
            padding: 'clamp(20px, 4vw, 32px)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Main Title & Category */}
          <div>
            <div style={{ marginBottom: '8px' }}>
              <span className="editorial-pill" style={{ fontSize: '0.75rem' }}>
                {project.category}
              </span>
            </div>
            <h2
              id="modal-project-title"
              style={{
                fontSize: 'clamp(1.35rem, 2.3vw, 1.75rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                lineHeight: 1.25,
                marginBottom: '10px',
              }}
            >
              {project.title}
            </h2>
          </div>

          {/* Area Screenshot / Dokumentasi Aplikasi */}
          <div
            style={{
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              overflow: 'hidden',
              minHeight: '220px',
              backgroundColor: 'var(--surface-alt)',
            }}
          >
            <ProjectBlueprintPreview type={project.previewType} title={project.title} image={project.image} />
          </div>

          {/* Section 1: Deskripsi Proyek */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-main)',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Layers size={15} style={{ color: 'var(--accent)' }} />
              Deskripsi Proyek:
            </h3>

            <p style={{ fontSize: '0.94rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '14px' }}>
              {project.summary}
            </p>

            {project.contextNote && (
              <div
                style={{
                  padding: '12px 16px',
                  backgroundColor: 'var(--surface-alt)',
                  borderLeft: '3px solid var(--accent)',
                  borderRadius: '0 4px 4px 0',
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.55,
                }}
              >
                <strong style={{ color: 'var(--text-main)' }}>Konteks Kegiatan: </strong>
                {project.contextNote}
              </div>
            )}
          </div>

          {/* Section 2: Kontribusi Berdasarkan CV */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-main)',
                marginBottom: '12px',
              }}
            >
              Fokus Kontribusi:
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {project.contributions.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px 14px',
                    backgroundColor: 'var(--surface-alt)',
                    borderRadius: '4px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Teknologi */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-main)',
                marginBottom: '10px',
              }}
            >
              Teknologi:
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Tangkapan Layar & Dokumentasi Antarmuka (Jika Tersedia) */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-main)',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Layers size={15} style={{ color: 'var(--accent)' }} />
                Tangkapan Layar & Dokumentasi Antarmuka:
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '16px',
                }}
              >
                {project.screenshots.map((screen, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      backgroundColor: 'var(--surface-alt)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      padding: '14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <div
                      style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: '1px solid var(--border-strong)',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxHeight: '420px',
                        padding: '8px',
                      }}
                    >
                      <img
                        src={screen.url}
                        alt={screen.title}
                        style={{
                          width: '100%',
                          maxHeight: '400px',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: 'var(--text-main)',
                          marginBottom: '4px',
                        }}
                      >
                        {screen.title}
                      </div>
                      <p
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.45,
                          margin: 0,
                        }}
                      >
                        {screen.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="editorial-line" />

          {/* Section 4: Repositori & Dokumentasi */}
          <div
            style={{
              padding: '18px 20px',
              border: '1px dashed var(--border-strong)',
              backgroundColor: 'var(--surface-alt)',
              borderRadius: '6px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '10px',
              }}
            >
              <FolderGit2 size={16} style={{ color: 'var(--text-main)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-main)',
                }}
              >
                Tautan Repositori & Demonstrasi Proyek
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                alignItems: 'center',
              }}
            >
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.84rem', padding: '10px 18px', gap: '8px' }}
                >
                  <GithubIcon size={15} />
                  <span>Buka Repository GitHub</span>
                  <ExternalLink size={13} />
                </a>
              ) : project.projectType === 'pbl' ? (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    backgroundColor: 'var(--surface-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <GithubIcon size={15} />
                  <span>GitHub: Belum diisi URL</span>
                  <button
                    onClick={() => handleCopyLinkLocation('githubUrl')}
                    title="Salin lokasi konfigurasi"
                    style={{
                      border: 'none',
                      background: 'none',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    <Copy size={12} />
                    <span>Lokasi File</span>
                  </button>
                </div>
              ) : null}

              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={project.githubUrl ? "btn-secondary" : "btn-primary"}
                  style={{ fontSize: '0.84rem', padding: '10px 18px', gap: '8px' }}
                >
                  <PlayCircle size={15} />
                  <span>
                    {project.id === 'galuhe-bakery'
                      ? 'Tonton Video Demonstrasi Odoo'
                      : 'Tonton Video Demonstrasi'}
                  </span>
                  <ExternalLink size={13} />
                </a>
              ) : (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    backgroundColor: 'var(--surface-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span>
                    {project.id === 'lapangku'
                      ? 'Status: Academic Prototype · Local Environment Verified'
                      : project.projectType === 'coursework'
                        ? 'Status: Practical Coursework · Odoo ERP Simulation'
                        : 'Live Demo: Internal / Belum dipublikasikan'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div
          style={{
            padding: '16px 28px',
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-main)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '8px 20px', fontSize: '0.85rem' }}
          >
            Tutup Detail
          </button>
        </div>
      </div>
    </div>
  );
}
