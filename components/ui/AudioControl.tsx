// components/ui/AudioControl.tsx (vignette flottante avec volume)
'use client';

import { useAudio } from '@/hooks/useAudio';
import { useState, useEffect, useRef } from 'react';

export default function AudioControl() {
  const { isEnabled, volume, enable, disable, changeVolume, isLoading } = useAudio();
  const [isOpen, setIsOpen] = useState(false);
  const [tempVolume, setTempVolume] = useState(volume);
  const popupRef = useRef<HTMLDivElement>(null);

  // Synchroniser le volume temporaire avec le volume réel
  useEffect(() => {
    setTempVolume(volume);
  }, [volume]);

  // Fermer la popup si clic en dehors
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setTempVolume(newVol);
    changeVolume(newVol);
  };

  // Si l'audio n'est pas encore chargé, on ne montre rien
  if (isLoading) return null;

  // Si l'utilisateur n'a jamais activé le son, on ne montre que le bouton d'activation (mais la popup de consentement gère déjà)
  // Pour une expérience homogène, on affiche toujours la vignette, mais avec un état "inactif"
  return (
    <div className="fixed bottom-6 right-6 z-50" ref={popupRef}>
      <div className="relative">
        {/* Bouton principal */}
        <button
          onClick={() => {
            if (!isEnabled) {
              enable();
            } else {
              setIsOpen(!isOpen);
            }
          }}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
            isEnabled
              ? 'bg-orange text-white hover:bg-orange-dark'
              : 'bg-white/80 dark:bg-bg-white/80 backdrop-blur border border-border text-ink-2 hover:border-orange'
          }`}
          aria-label="Contrôle audio"
        >
          {isEnabled ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </button>

        {/* Panneau de contrôle déroulant (si activé) */}
        {isEnabled && isOpen && (
          <div className="absolute bottom-14 right-0 mb-2 w-64 bg-white dark:bg-bg-white rounded-xl shadow-xl border border-border p-4 animate-in slide-in-from-bottom-2 duration-150">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-ink">Ambiance sonore</span>
              <button
                onClick={() => {
                  disable();
                  setIsOpen(false);
                }}
                className="text-xs text-ink-3 hover:text-orange transition"
              >
                Désactiver
              </button>
            </div>
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-3">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={tempVolume}
                onChange={handleVolumeChange}
                className="flex-1 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 accent-orange"
              />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-3">
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            </div>
            <div className="text-xs text-center text-ink-3 mt-3 font-mono">
              Yiruma – ralenti
            </div>
          </div>
        )}
      </div>
    </div>
  );
}