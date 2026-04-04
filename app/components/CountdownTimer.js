"use client";

import { useEffect, useState } from "react";

// Tanggal hari H
const TARGET_DATE = new Date("2026-06-28T08:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE - now;

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border border-gold/20 bg-bg-card">
        <span className="font-serif text-4xl md:text-5xl text-white">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-sans text-xs tracking-widest text-gold/60 uppercase">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Trik biar gak kena hydration error di Next.js
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-24 px-6 flex flex-col items-center text-center">
      {/* Label */}
      <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase opacity-80 mb-4">
        Menuju Hari Bahagia
      </p>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px w-12 bg-gold opacity-30" />
        <span className="text-gold opacity-50 text-sm">✦</span>
        <div className="h-px w-12 bg-gold opacity-30" />
      </div>

      {/* Timer */}
      {timeLeft ? (
        <div className="flex gap-4 md:gap-6">
          <TimeBox value={timeLeft.days} label="Hari" />
          <TimeBox value={timeLeft.hours} label="Jam" />
          <TimeBox value={timeLeft.minutes} label="Menit" />
          <TimeBox value={timeLeft.seconds} label="Detik" />
        </div>
      ) : (
        <p className="font-serif text-3xl text-gold">
          Hari ini adalah hari istimewa ✦
        </p>
      )}
    </section>
  );
}