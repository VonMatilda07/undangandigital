"use client";

import { useEffect, useState } from "react";
import Parallax from "./Parallax";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pb-24 overflow-hidden bg-bg-dark">

      {/* 1. LAYER VIGNETTE PERMANEN */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(circle at center, transparent 30%, #0B0B0B 100%)" }}
      />

      {/* 2. LAYER ANIMASI "MENERANG" */}
      <div
        className="absolute inset-0 pointer-events-none z-50 bg-bg-dark"
        style={{
          opacity: mounted ? 0 : 1,
          transition: "opacity 2.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* 3. KONTEN UTAMA */}
      <Parallax speed={0.2} className="z-10 flex flex-col items-center w-full">
        <div
          className="flex flex-col items-center w-full"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 2s ease 0.5s, transform 2s ease 0.5s",
          }}
        >

          {/* --- UPDATE DARI TEMEN LU --- */}
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-gold opacity-30" />
              <span className="text-gold opacity-40 text-xs">✦</span>
              <div className="h-px w-10 bg-gold opacity-30" />
            </div>

            {/* Teks gue sesuaikan sizenya sedikit biar lebih balance di mobile & desktop */}
            <p className="font-serif text-lg md:text-xl italic text-white/70 tracking-wide mt-1">
              Undangan
            </p>
            <p className="font-sans text-xs md:text-sm tracking-[0.4em] text-gold/80 uppercase mb-1">
              Pernikahan
            </p>

            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-gold opacity-30" />
              <span className="text-gold opacity-40 text-xs">✦</span>
              <div className="h-px w-10 bg-gold opacity-30" />
            </div>
          </div>

          {/* Nama pengantin pria (Di-gede-in ke 9xl di layar besar) */}
          <h1 className="font-cursive text-8xl md:text-9xl text-white py-2 drop-shadow-md">
            Putra
          </h1>

          {/* Divider elegan */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-px w-16 bg-gold opacity-40" />
            <span className="text-gold text-2xl opacity-70">✦</span>
            <div className="h-px w-16 bg-gold opacity-40" />
          </div>

          {/* Nama pengantin wanita (Di-gede-in ke 9xl di layar besar) */}
          <h1 className="font-cursive text-8xl md:text-9xl text-white py-2 drop-shadow-md">
            Jia
          </h1>

          {/* Tanggal */}
          <p className="font-sans text-sm md:text-base tracking-[0.25em] text-gold uppercase mt-12 opacity-80">
            Minggu, 14 Juni 2026
          </p>

          {/* Lokasi */}
          <p className="font-sans text-sm md:text-base text-white/50 mt-3 tracking-wide">
            Tenggarong, Kutai Kartanegara
          </p>

          {/* Nama lengkap & orang tua */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-10 w-full max-w-4xl text-center">
            {/* Pria */}
            <div className="flex flex-col gap-1.5 items-center">
              <p className="font-serif text-xl md:text-2xl text-white drop-shadow-sm mb-2">
                Muhammad Athfal Aulia Putra, S.Kom
              </p>
              <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed">
                Putra dari Bapak Hendra Gunawan, S.Sos, M.M
              </p>
              <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed">
                & Ibu Sri Andriani, S.Sos
              </p>
            </div>

            {/* Divider vertikal */}
            <div className="hidden md:block bg-gold/20" />

            {/* Wanita */}
            <div className="flex flex-col gap-1.5 items-center">
              <p className="font-serif text-xl md:text-2xl text-white drop-shadow-sm mb-2">
                Aji Syarifah Kayla Fauziatul Khairiyah
              </p>
              <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed">
                Putri dari Bapak H. Aji Sayid Umar Muhdar Sefry Andani, S.E
              </p>
              <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed">
                & Ibu Syarifah Dewi Riana
              </p>
              <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed">
                serta Almarhumah Ibu Devi Fitri Ismi Yoelianti
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex flex-col items-center gap-2 opacity-50">
            <p className="font-sans text-xs tracking-widest text-white uppercase">Scroll</p>
            <div className="w-px h-12 bg-white/40 animate-pulse" />
          </div>
        </div>
      </Parallax>
    </section>
  );
}