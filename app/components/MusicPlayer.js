"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ isOpen }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto play saat undangan dibuka
  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  }, [isOpen]);

  function togglePlay() {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/music/background.mp3" loop />
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center border border-gold/40 bg-bg-dark/80 backdrop-blur-sm hover:bg-gold/10 transition-all duration-300"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-4">
            <span className="w-[3px] bg-gold animate-[musicBar1_0.8s_ease-in-out_infinite]" />
            <span className="w-[3px] bg-gold animate-[musicBar2_0.8s_ease-in-out_infinite_0.2s]" />
            <span className="w-[3px] bg-gold animate-[musicBar3_0.8s_ease-in-out_infinite_0.4s]" />
          </div>
        ) : (
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M1 1L13 8L1 15V1Z" fill="#D4AF37" />
          </svg>
        )}
      </button>
    </>
  );
}