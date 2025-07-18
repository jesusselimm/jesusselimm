import { useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-[var(--background)] rounded-2xl shadow-xl p-6 max-w-2xl w-full h-1/3 relative animate-fadeIn"
        style={{ boxShadow: '0 8px 32px rgba(225, 226, 225, 0.4)' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-5 text-5xl text-[var(--accent)] hover:text-[var(--accent-light)] focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
      `}</style>
    </div>
  );
} 