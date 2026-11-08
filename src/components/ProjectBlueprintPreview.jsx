import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import lapangkuBeranda from '../assets/lapangku-beranda.jpg';
import lapangkuAdmin from '../assets/lapangku-admin.jpg';

export default function ProjectBlueprintPreview({ type, title, image }) {
  if (image) {
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }

  switch (type) {
    case 'erp-simulation':
      // GALUHE BAKERY: Simulasi Odoo ERP
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#F8F6F4',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '12px',
              borderBottom: '1px solid #E5DFD9',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#758B73', borderRadius: '50%' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#202124' }}>
                ODOO ERP // ALUR SIMULASI PROSES BISNIS
              </span>
            </div>
            <span style={{ fontSize: '0.65rem', color: '#758B73', fontWeight: 600 }}>SIMULASI AKADEMIK</span>
          </div>

          {/* 4 Core Pillars of the Bakery Simulation */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px',
              margin: '16px 0',
            }}
          >
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5DFD9',
                padding: '10px 12px',
                borderRadius: '4px',
              }}
            >
              <div style={{ fontSize: '0.62rem', color: '#758B73', fontWeight: 700 }}>01. DATA PRODUK & VARIAN</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#202124', marginTop: '2px' }}>
                Atribut Ukuran & Isian
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5DFD9',
                padding: '10px 12px',
                borderRadius: '4px',
              }}
            >
              <div style={{ fontSize: '0.62rem', color: '#758B73', fontWeight: 700 }}>02. PENJUALAN & FAKTUR</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#202124', marginTop: '2px' }}>
                Uang Muka (Down Payment)
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5DFD9',
                padding: '10px 12px',
                borderRadius: '4px',
              }}
            >
              <div style={{ fontSize: '0.62rem', color: '#758B73', fontWeight: 700 }}>03. PEMBELIAN & INVENTARIS</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#202124', marginTop: '2px' }}>
                Persediaan Bahan Baku
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5DFD9',
                padding: '10px 12px',
                borderRadius: '4px',
              }}
            >
              <div style={{ fontSize: '0.62rem', color: '#758B73', fontWeight: 700 }}>04. PROSES MANUFAKTUR</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#202124', marginTop: '2px' }}>
                Produksi & Stok Produk Jadi
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '10px',
              borderTop: '1px dashed #E5DFD9',
              fontSize: '0.65rem',
              color: '#5F6368',
            }}
          >
            <span>MODUL: SALES · PURCHASE · INVENTORY · MANUFACTURING</span>
            <span style={{ color: '#758B73', fontWeight: 600 }}>ODOO SIMULATION</span>
          </div>
        </div>
      );

    case 'web-system':
      // LENSA MBG: Web System PBL Semester 5
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#F3F4F0',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '12px',
              borderBottom: '1px solid #D8DCD5',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#758B73', borderRadius: '50%' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#202124' }}>
                LENSA MBG // SISTEM INFORMASI WEB
              </span>
            </div>
            <span style={{ fontSize: '0.65rem', color: '#7E8287' }}>PBL SEMESTER 5</span>
          </div>

          {/* Core Areas */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
              margin: '16px 0',
            }}
          >
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #C8D4C7',
                padding: '12px 10px',
                borderRadius: '4px',
              }}
            >
              <div style={{ fontSize: '0.62rem', color: '#758B73', fontWeight: 700 }}>BASIS DATA</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#202124', marginTop: '2px' }}>
                Pengelolaan Data
              </div>
              <div style={{ fontSize: '0.62rem', color: '#5F6368', marginTop: '4px' }}>Supabase / Relasi Data</div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #C8D4C7',
                padding: '12px 10px',
                borderRadius: '4px',
              }}
            >
              <div style={{ fontSize: '0.62rem', color: '#758B73', fontWeight: 700 }}>FITUR SISTEM</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#202124', marginTop: '2px' }}>
                Pengembangan Web
              </div>
              <div style={{ fontSize: '0.62rem', color: '#5F6368', marginTop: '4px' }}>Laravel & Tailwind CSS</div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #758B73',
                padding: '12px 10px',
                borderRadius: '4px',
              }}
            >
              <div style={{ fontSize: '0.62rem', color: '#758B73', fontWeight: 700 }}>PENGUJIAN SISTEM</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#202124', marginTop: '2px' }}>
                Cypress Testing
              </div>
              <div style={{ fontSize: '0.62rem', color: '#5F6368', marginTop: '4px' }}>Automated Testing</div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '10px',
              borderTop: '1px dashed #D8DCD5',
              fontSize: '0.65rem',
              color: '#5F6368',
            }}
          >
            <span>TRANSPARANSI & PENGELOLAAN MAKAN BERGIZI GRATIS</span>
            <span style={{ color: '#758B73', fontWeight: 600 }}>WEB PLATFORM</span>
          </div>
        </div>
      );

    case 'mobile-app':
      // LAPANGKU: Real Application Screenshots in Modern Editorial Mockups
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            minHeight: '260px',
            backgroundColor: '#F3F6F4',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '10px',
              borderBottom: '1px solid #D8E0DA',
              zIndex: 2,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#2E7D32', borderRadius: '50%' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#202124' }}>
                LAPANGKU // DOKUMENTASI ANTARMUKA
              </span>
            </div>
            <span
              style={{
                fontSize: '0.64rem',
                color: '#2E7D32',
                fontWeight: 700,
                backgroundColor: '#E8F5E9',
                border: '1px solid #C8E6C9',
                padding: '2px 7px',
                borderRadius: '4px',
              }}
            >
              FLUTTER & FIREBASE
            </span>
          </div>

          {/* Dual Phone Showcase */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              margin: '12px 0',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Phone 1: Customer View */}
            <div
              style={{
                width: '110px',
                height: '196px',
                borderRadius: '14px',
                border: '3px solid #1E293B',
                boxShadow: '0 10px 22px rgba(0, 0, 0, 0.12)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                position: 'relative',
                transform: 'rotate(-2deg)',
                transition: 'transform 0.2s ease',
              }}
              title="Katalog & Pemesanan Lapangan (Customer App)"
            >
              <img
                src={lapangkuBeranda}
                alt="Lapangku Beranda Customer"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(30, 41, 59, 0.92)',
                  color: '#FFFFFF',
                  fontSize: '0.55rem',
                  padding: '3px 4px',
                  textAlign: 'center',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}
              >
                Customer App
              </div>
            </div>

            {/* Phone 2: Admin View (Personal Contribution) */}
            <div
              style={{
                width: '110px',
                height: '196px',
                borderRadius: '14px',
                border: '3px solid #2E7D32',
                boxShadow: '0 12px 26px rgba(46, 125, 50, 0.22)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                position: 'relative',
                transform: 'rotate(2deg)',
                transition: 'transform 0.2s ease',
              }}
              title="Kelola Status Lapangan (Fitur Admin - Kontribusi Galuh)"
            >
              <img
                src={lapangkuAdmin}
                alt="Lapangku Fitur Admin"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: '#2E7D32',
                  color: '#FFFFFF',
                  fontSize: '0.55rem',
                  padding: '3px 4px',
                  textAlign: 'center',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}
              >
                Fitur Admin ★
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '8px',
              borderTop: '1px dashed #D8E0DA',
              fontSize: '0.65rem',
              color: '#5F6368',
              zIndex: 2,
            }}
          >
            <span>KONTRIBUSI: FITUR ADMIN</span>
            <span style={{ color: '#2E7D32', fontWeight: 600 }}>PBL SEMESTER 4</span>
          </div>
        </div>
      );

    default:
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#F7F7F4',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: '#7E8287',
          }}
        >
          <ImageIcon size={28} />
          <span>Area Screenshot Dokumentasi Proyek</span>
        </div>
      );
  }
}
