// components/ui/AudioConsentPopup.tsx
'use client';

import { useEffect, useState } from 'react';

interface AudioConsentPopupProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function AudioConsentPopup({ onAccept, onDecline }: AudioConsentPopupProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('audio-consent');
    if (hasConsented === null) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    } else if (hasConsented === 'true') {
      onAccept();
    } else {
      onDecline();
    }
  }, [onAccept, onDecline]);

  const handleAccept = () => {
    localStorage.setItem('audio-consent', 'true');
    setVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem('audio-consent', 'false');
    setVisible(false);
    onDecline();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-bg-white rounded-2xl shadow-2xl max-w-md mx-4 p-6 border border-orange-200 dark:border-orange-900/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
              <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-ink dark:text-white">Expérience sonore</h3>
        </div>
        <p className="text-ink dark:text-ink-3 mb-6 leading-relaxed">
          Ce site propose une ambiance musicale douce (piano ralenti) pour enrichir votre navigation.
          Vous pouvez contrôler le volume à tout moment via la vignette flottante.
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={handleAccept}
            className="px-4 py-2 rounded-full font-semibold shadow-sm"
            style={{ backgroundColor: 'var(--or)', color: '#080707' }}
          >
            Activer
          </button>
          <button
            onClick={handleDecline}
            className="px-4 py-2 rounded-full border border-border text-ink hover:bg-orange-pale transition"
          >
            Non, merci
          </button>
        </div>
      </div>
    </div>
  );
}