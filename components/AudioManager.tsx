'use client';

import { useAudio } from '@/hooks/useAudio';
import AudioConsentPopup from '@/components/ui/AudioConsentPopup';
import AudioControl from '@/components/ui/AudioControl';

export default function AudioManager() {
  const { enable, disable } = useAudio();
  return (
    <>
      <AudioConsentPopup onAccept={enable} onDecline={disable} />
      <AudioControl />
    </>
  );
}