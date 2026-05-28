// hooks/useAudio.ts
'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

export type SoundName = 'click' | 'submit' | 'hover' | 'theme';

export function useAudio() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [volume, setVolume] = useState(0.1); // ← modifié : 10%
  const [isLoading, setIsLoading] = useState(true);
  const ambientRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const ambient = new Audio('/sounds/Yiruma.mp3');
    ambient.loop = true;
    ambient.playbackRate = 0.25;
    ambient.volume = volume;
    ambient.preload = 'auto';
    ambientRef.current = ambient;
    setIsLoading(false);

    return () => {
      if (ambientRef.current) {
        ambientRef.current.pause();
        ambientRef.current.src = '';
        ambientRef.current = null;
      }
    };
  }, []);

  // Appliquer le volume à chaque changement (y compris pendant la lecture)
  useEffect(() => {
    if (ambientRef.current) {
      ambientRef.current.volume = volume;
    }
  }, [volume]);

  const enable = useCallback(async () => {
    if (!ambientRef.current) return;
    try {
      if (ambientRef.current.paused) {
        await ambientRef.current.play();
      }
      setIsEnabled(true);
    } catch (err) {
      console.warn('Audio autoplay bloqué :', err);
      setIsEnabled(false);
    }
  }, []);

  const disable = useCallback(() => {
    if (ambientRef.current) {
      ambientRef.current.pause();
    }
    setIsEnabled(false);
  }, []);

  const changeVolume = useCallback((newVolume: number) => {
    const clamped = Math.min(1, Math.max(0, newVolume));
    setVolume(clamped);
  }, []);

  const playEffect = useCallback((_name: SoundName) => {
    // réservé pour extension future
  }, []);

  return {
    isEnabled,
    isLoading,
    volume,
    enable,
    disable,
    changeVolume,
    playEffect,
  };
}