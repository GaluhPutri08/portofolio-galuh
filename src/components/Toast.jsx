import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 2000,
        backgroundColor: '#17212B',
        color: '#F7F7F4',
        padding: '12px 18px',
        borderRadius: '6px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '0.88rem',
        border: '1px solid #283747',
        animation: 'slideUp 0.2s ease-out',
      }}
    >
      <CheckCircle2 size={18} style={{ color: '#93AC91', flexShrink: 0 }} />
      <span>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: '#A0ABB7',
          cursor: 'pointer',
          padding: '2px',
          display: 'flex',
          alignItems: 'center',
          marginLeft: '4px',
        }}
        aria-label="Tutup notifikasi"
      >
        <X size={15} />
      </button>
    </div>
  );
}

