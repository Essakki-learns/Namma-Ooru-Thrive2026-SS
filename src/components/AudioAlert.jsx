import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FaVolumeUp, FaVolumeMute, FaHeadphones } from 'react-icons/fa';

export default function AudioAlert() {
  const { t, language } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported on this browser.');
      return;
    }

    window.speechSynthesis.cancel();

    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    const message = t('audio_message') || 'Please check the latest government schemes on our portal.';
    const utterance = new SpeechSynthesisUtterance(message);

    // Language voice mapping if supported
    const langMap = {
      en: 'en-IN',
      hi: 'hi-IN',
      ta: 'ta-IN',
      mr: 'mr-IN',
      te: 'te-IN'
    };

    utterance.lang = langMap[language] || 'en-IN';
    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsPlaying(true);
    };

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        id="audio-alert-floating-button"
        type="button"
        onClick={handleSpeak}
        title={t('audio_alert_btn')}
        aria-label={t('audio_alert_btn')}
        className={`group relative flex items-center gap-2.5 px-4 py-3 min-h-[48px] rounded-full shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer font-bold text-sm ${
          isPlaying
            ? 'bg-orange-600 text-white ring-4 ring-orange-300 animate-pulse'
            : 'bg-emerald-700 hover:bg-emerald-800 text-white ring-2 ring-emerald-400/50 hover:shadow-emerald-900/30'
        }`}
      >
        <div className="relative">
          {isPlaying ? (
            <FaVolumeUp className="text-xl animate-bounce" />
          ) : (
            <FaVolumeUp className="text-xl group-hover:scale-110 transition-transform" />
          )}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
            </span>
          )}
        </div>
        <span className="hidden sm:inline font-semibold">
          {isPlaying ? 'Speaking...' : t('audio_alert_btn')}
        </span>
      </button>
    </div>
  );
}
