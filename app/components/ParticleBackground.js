"use client";

import { useEffect, useState } from "react";
import Parallax from "./Parallax";

export default function ParticleBackground() {
  const [particles, setParticles] = useState({ far: [], mid: [], near: [] });

  useEffect(() => {
    const generateParticles = (count, maxOpacity, maxSize, hasStars) =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        // FIX AREA: Sebar partikel jauh ke bawah layar (300%) biar gak abis pas discroll
        top: `${Math.random() * 300 - 50}%`, 
        size: Math.random() * maxSize + 1,
        opacity: Math.random() * maxOpacity + 0.1,
        isStar: hasStars ? Math.random() > 0.85 : false,
      }));

    setParticles({
      // Jumlah partikel gue tambahin dikit karena area layarnya sekarang lebih panjang
      far: generateParticles(100, 0.3, 2, false),
      mid: generateParticles(60, 0.5, 3, true),
      near: generateParticles(30, 0.8, 5, true),
    });
  }, []);

  return (
    // FIX AREA: Pakai fixed biar backgroundnya nempel terus di layar
    <div className="fixed inset-0 pointer-events-none z-0">
      
      <Parallax speed={-0.1} className="absolute inset-0">
        {particles.far.map((p) => (
          <div key={p.id} className="absolute bg-white/40 rounded-full blur-[1px]"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: p.opacity }}
          />
        ))}
      </Parallax>

      <Parallax speed={-0.3} className="absolute inset-0">
        <svg viewBox="0 0 500 500" className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] opacity-[0.04] text-gold animate-[spin_120s_linear_infinite]" fill="none" stroke="currentColor">
          <circle cx="250" cy="250" r="240" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="220" strokeWidth="0.5" strokeDasharray="4 4" />
          <rect x="80" y="80" width="340" height="340" transform="rotate(45 250 250)" strokeWidth="0.5" />
          <rect x="80" y="80" width="340" height="340" strokeWidth="0.5" />
          <path d="M250 10 L250 490 M10 250 L490 250" strokeWidth="0.5" />
        </svg>

        <svg viewBox="0 0 500 500" className="absolute top-[60%] -left-[5%] w-[500px] h-[500px] opacity-[0.03] text-gold animate-[spin_150s_linear_infinite_reverse]" fill="none" stroke="currentColor">
          <circle cx="250" cy="250" r="200" strokeWidth="0.5" />
          <path d="M250 50 L423.2 350 L76.8 350 Z" strokeWidth="0.5" />
          <path d="M250 450 L76.8 150 L423.2 150 Z" strokeWidth="0.5" />
        </svg>

        {particles.mid.map((p) => (
          p.isStar ? (
            <span key={p.id} className="absolute text-gold font-sans leading-none"
              style={{ left: p.left, top: p.top, fontSize: p.size + 8, opacity: p.opacity }}>✦</span>
          ) : (
            <div key={p.id} className="absolute bg-gold/70 rounded-full"
              style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: p.opacity }} />
          )
        ))}
      </Parallax>

      <Parallax speed={-0.6} className="absolute inset-0">
        {particles.near.map((p) => (
          p.isStar ? (
            <span key={p.id} className="absolute text-gold font-sans leading-none drop-shadow-[0_0_8px_#D4AF37]"
              style={{ left: p.left, top: p.top, fontSize: p.size + 14, opacity: p.opacity + 0.2 }}>✦</span>
          ) : (
            <div key={p.id} className="absolute bg-gold rounded-full shadow-[0_0_12px_#D4AF37]"
              style={{ left: p.left, top: p.top, width: p.size + 1.5, height: p.size + 1.5, opacity: p.opacity + 0.3 }} />
          )
        ))}
      </Parallax>

    </div>
  );
}