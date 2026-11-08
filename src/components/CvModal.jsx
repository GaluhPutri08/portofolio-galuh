import React, { useEffect } from 'react';
import { X, Printer, Download, FileText } from 'lucide-react';
import { personalInfo, skillsData, projectsData, educationData, workExperienceData } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose, onShowToast }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadFile = () => {
    const pdfPath = '/CV_Galuh_Saprilia_Putri.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'CV_Galuh_Saprilia_Putri.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('Memproses file CV atau gunakan opsi Cetak/Save PDF.');
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-content-animated"
        style={{
          backgroundColor: '#FFFFFF',
          width: '100%',
          maxWidth: '860px',
          maxHeight: '92vh',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-strong)',
          boxShadow: '0 24px 50px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Modal Action Header (Non-printable toolbar) */}
        <div
          className="non-printable"
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={18} style={{ color: 'var(--accent)' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--text-main)',
              }}
            >
              CURRICULUM VITAE PREVIEW
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handlePrint}
              className="btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.8rem', gap: '6px' }}
              title="Cetak langsung atau simpan sebagai PDF rapi"
            >
              <Printer size={14} />
              <span>Cetak / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadFile}
              className="btn-primary"
              style={{ padding: '8px 14px', fontSize: '0.8rem', gap: '6px' }}
              title="Download file CV PDF"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '4px',
                backgroundColor: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                cursor: 'pointer',
              }}
              aria-label="Tutup CV"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* CV Scrollable Content Body (Printable Target) */}
        <div
          className="cv-print-container"
          style={{
            padding: 'clamp(28px, 5vw, 44px)',
            overflowY: 'auto',
            backgroundColor: '#FFFFFF',
            color: '#202124',
            fontFamily: 'var(--font-sans)',
          }}
        >
          {/* CV Header */}
          <div
            style={{
              paddingBottom: '20px',
              borderBottom: '2px solid #202124',
              marginBottom: '24px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h1
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#202124',
                    lineHeight: 1.15,
                    marginBottom: '4px',
                  }}
                >
                  {personalInfo.name}
                </h1>
                <div
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    marginBottom: '4px',
                  }}
                >
                  {personalInfo.personalBranding}
                </div>
                <div
                  style={{
                    fontSize: '0.84rem',
                    color: '#5F6368',
                  }}
                >
                  Arah Karier: {personalInfo.careerPaths.join(' · ')}
                </div>
              </div>

              {/* CV Contact Details */}
              <div
                style={{
                  fontSize: '0.8rem',
                  color: '#5F6368',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  textAlign: 'right',
                }}
              >
                <span>{personalInfo.location}</span>
                <span>{personalInfo.contacts.email}</span>
                <span>{personalInfo.contacts.linkedin.replace('https://www.', '').replace('https://', '')}</span>
                <span>{personalInfo.contacts.github.replace('https://', '')}</span>
                <span>Politeknik Negeri Malang · SIB</span>
              </div>
            </div>
          </div>

          {/* Section: Profil Ringkas */}
          <div style={{ marginBottom: '24px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#202124',
                fontWeight: 700,
                borderBottom: '1px solid #E8E9E5',
                paddingBottom: '6px',
                marginBottom: '10px',
              }}
            >
              Tentang Saya
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {personalInfo.aboutText.split('\n\n').map((para, pIdx) => (
                <p key={pIdx} style={{ fontSize: '0.88rem', color: '#333333', lineHeight: 1.65, margin: 0 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Section: Pendidikan */}
          <div style={{ marginBottom: '24px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#202124',
                fontWeight: 700,
                borderBottom: '1px solid #E8E9E5',
                paddingBottom: '6px',
                marginBottom: '12px',
              }}
            >
              Riwayat Pendidikan
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {educationData.map((edu) => (
                <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.94rem', color: '#202124' }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#5F6368' }}>
                      {edu.degree} · {edu.location} ({edu.status})
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--accent)',
                    }}
                  >
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Pengalaman Kerja */}
          <div style={{ marginBottom: '24px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#202124',
                fontWeight: 700,
                borderBottom: '1px solid #E8E9E5',
                paddingBottom: '6px',
                marginBottom: '12px',
              }}
            >
              Pengalaman Kerja
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {workExperienceData.map((job) => (
                <div key={job.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.94rem', color: '#202124' }}>
                      {job.role} – {job.company}
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600 }}>
                      {job.period}
                    </span>
                  </div>
                  <ul style={{ listStyle: 'disc', paddingLeft: '18px', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    {job.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} style={{ fontSize: '0.82rem', color: '#444444', lineHeight: 1.5 }}>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Pengalaman Proyek */}
          <div style={{ marginBottom: '24px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#202124',
                fontWeight: 700,
                borderBottom: '1px solid #E8E9E5',
                paddingBottom: '6px',
                marginBottom: '12px',
              }}
            >
              Pengalaman Proyek
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {projectsData.map((proj) => (
                <div key={proj.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#202124' }}>
                      {proj.title}
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#5F6368' }}>
                      {proj.category}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#444444', lineHeight: 1.5, margin: '4px 0 6px 0' }}>
                    {proj.summary}
                  </p>
                  <ul style={{ listStyle: 'disc', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '6px' }}>
                    {proj.contributions.map((c, cIdx) => (
                      <li key={cIdx} style={{ fontSize: '0.8rem', color: '#555555' }}>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {proj.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 6px',
                          backgroundColor: '#F3F4F0',
                          border: '1px solid #E8E9E5',
                          borderRadius: '2px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Kemampuan */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#202124',
                fontWeight: 700,
                borderBottom: '1px solid #E8E9E5',
                paddingBottom: '6px',
                marginBottom: '12px',
              }}
            >
              Kemampuan & Keahlian
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
              {skillsData.map((cat, idx) => (
                <div key={idx}>
                  <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#202124', marginBottom: '4px' }}>
                    {cat.category}:
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#5F6368', lineHeight: 1.45 }}>
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          className="non-printable"
          style={{
            padding: '12px 24px',
            backgroundColor: 'var(--bg-main)',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.75rem',
            color: 'var(--text-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>Gunakan tombol 'Cetak / Save PDF' untuk menyimpan sebagai resume PDF siap kirim ke recruiter.</span>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.75rem' }}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
