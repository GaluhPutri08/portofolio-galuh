import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contacts.email);
    setCopiedEmail(true);
    onShowToast('Alamat email berhasil disalin ke clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Harap isi kolom nama, email, dan pesan.');
      return;
    }

    // Build mailto query
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Halo Galuh,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n`
    );

    window.location.href = `mailto:${personalInfo.contacts.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    onShowToast('Membuka aplikasi email Anda...');
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--dark-bg)',
        color: 'var(--dark-text)',
        paddingTop: 'clamp(64px, 10vw, 112px)',
        paddingBottom: 'clamp(64px, 10vw, 112px)',
        position: 'relative',
        borderTop: '1px solid var(--dark-border)',
      }}
    >
      <div className="editorial-container">
        {/* Section Marker */}
        <div style={{ marginBottom: '16px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--dark-accent)',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ width: '14px', height: '2px', backgroundColor: 'var(--dark-accent)' }} />
            06 // GET IN TOUCH
          </span>
        </div>

        {/* Two-Column Editorial Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 72px)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Invitation & Social Channels */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: 'var(--dark-text)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
              }}
            >
              Have a project or opportunity in mind?
            </h2>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw, 1.18rem)',
                color: 'var(--dark-muted)',
                lineHeight: 1.75,
                marginBottom: '36px',
                maxWidth: '520px',
              }}
            >
              I'm always open to learning, collaborating, and exploring new opportunities in the technology field.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div
              style={{
                backgroundColor: 'var(--dark-surface)',
                border: '1px solid var(--dark-border)',
                padding: '20px',
                borderRadius: '6px',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--dark-accent)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Direct Communication Channel:
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <a
                  href={`mailto:${personalInfo.contacts.email}`}
                  style={{
                    fontSize: '1.02rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    wordBreak: 'break-all',
                  }}
                  title="Kirim email langsung"
                >
                  <Mail size={18} style={{ color: 'var(--dark-accent)', flexShrink: 0 }} />
                  <span>{personalInfo.contacts.email}</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn-ghost-dark"
                  style={{
                    padding: '8px 14px',
                    fontSize: '0.8rem',
                    gap: '6px',
                  }}
                  title="Salin email ke clipboard"
                >
                  {copiedEmail ? <Check size={14} style={{ color: 'var(--dark-accent)' }} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Tersalin' : 'Salin Email'}</span>
                </button>
              </div>
            </div>

            {/* Professional Profiles Grid */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--dark-muted)',
                  marginBottom: '14px',
                }}
              >
                Professional Profiles:
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px',
                }}
              >
                {/* LinkedIn */}
                <a
                  href={personalInfo.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark"
                  style={{
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                  }}
                  title="Profil LinkedIn Galuh Putri"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <LinkedinIcon size={17} color="#0A66C2" />
                    <span style={{ fontSize: '0.88rem' }}>LinkedIn</span>
                  </div>
                  <ArrowUpRight size={14} style={{ color: 'var(--dark-muted)' }} />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark"
                  style={{
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                  }}
                  title="Profil GitHub GaluhPutri08"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <GithubIcon size={17} />
                    <span style={{ fontSize: '0.88rem' }}>GitHub (GaluhPutri08)</span>
                  </div>
                  <ArrowUpRight size={14} style={{ color: 'var(--dark-muted)' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive "Let's Connect" Quick Form */}
          <div
            style={{
              backgroundColor: 'var(--dark-surface)',
              border: '1px solid var(--dark-border)',
              padding: 'clamp(24px, 4vw, 36px)',
              borderRadius: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px',
              }}
            >
              <MessageSquare size={17} style={{ color: 'var(--dark-accent)' }} />
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--dark-text)',
                }}
              >
                Send a Direct Message
              </h3>
            </div>
            <p
              style={{
                fontSize: '0.86rem',
                color: 'var(--dark-muted)',
                marginBottom: '24px',
                lineHeight: 1.5,
              }}
            >
              Ingin mendiskusikan peluang proyek, magang, atau bertukar gagasan mengenai analisis sistem informasi?
            </p>

            {formSubmitted && (
              <div
                style={{
                  backgroundColor: 'rgba(147, 172, 145, 0.15)',
                  border: '1px solid var(--dark-accent)',
                  color: 'var(--dark-accent)',
                  padding: '12px 16px',
                  borderRadius: '4px',
                  marginBottom: '16px',
                  fontSize: '0.84rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Check size={16} />
                <span>Pesan telah disiapkan di aplikasi email Anda. Terima kasih telah menghubungi!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    color: 'var(--dark-muted)',
                    marginBottom: '6px',
                  }}
                >
                  Nama Anda *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Budi Santoso"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: 'rgba(23, 33, 43, 0.7)',
                    border: '1px solid var(--dark-border)',
                    borderRadius: '4px',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--dark-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--dark-border)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    color: 'var(--dark-muted)',
                    marginBottom: '6px',
                  }}
                >
                  Email Anda *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. budi@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: 'rgba(23, 33, 43, 0.7)',
                    border: '1px solid var(--dark-border)',
                    borderRadius: '4px',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--dark-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--dark-border)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    color: 'var(--dark-muted)',
                    marginBottom: '6px',
                  }}
                >
                  Subjek / Topik
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="e.g. Peluang Magang / Kolaborasi Proyek Sistem"
                  value={formData.subject}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: 'rgba(23, 33, 43, 0.7)',
                    border: '1px solid var(--dark-border)',
                    borderRadius: '4px',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--dark-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--dark-border)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    color: 'var(--dark-muted)',
                    marginBottom: '6px',
                  }}
                >
                  Pesan Anda *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tuliskan pesan atau detail kebutuhan Anda di sini..."
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: 'rgba(23, 33, 43, 0.7)',
                    border: '1px solid var(--dark-border)',
                    borderRadius: '4px',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--dark-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--dark-border)')}
                />
              </div>

              <button
                type="submit"
                className="btn-accent"
                style={{
                  width: '100%',
                  padding: '14px',
                  marginTop: '8px',
                  justifyContent: 'center',
                }}
              >
                <span>Let's Connect</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
