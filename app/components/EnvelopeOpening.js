"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti"; // IMPORT CONFETTI DI SINI

export default function EnvelopeOpening({ onOpen }) {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to");
  
  const [opened, setOpened] = useState(false);
  const [cardOut, setCardOut] = useState(false);
  
  const [envelopeHidden, setEnvelopeHidden] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [leaving, setLeaving] = useState(false);

  function handleOpen() {
    if (opened) return;
    setOpened(true);
    
    // FIRE THE GOLD PARTICLES! 
    // Warnanya kita set khusus nuansa emas & sedikit putih biar elegan
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#A8892A", "#FFFFFF"],
      disableForReducedMotion: true,
      zIndex: 9999,
    });
    
    setTimeout(() => setCardOut(true), 400); 
    
    setTimeout(() => {
      setEnvelopeHidden(true); 
      setTimeout(() => setShowGreeting(true), 600); 
    }, 1500); 
  }

  function handleContinue() {
    setLeaving(true);
    setTimeout(() => onOpen(), 600); 
  }

  return (
    <div
      style={{
        opacity: leaving ? 0 : 1,
        transition: "opacity 0.6s ease",
      }}
      className="fixed inset-0 z-50 bg-bg-dark"
    >
      
      {/* ================= STAGE 1: LAYAR AMPLOP ================= */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
        style={{
          opacity: envelopeHidden ? 0 : 1,
          pointerEvents: envelopeHidden ? "none" : "auto",
          transition: "opacity 0.8s ease",
        }}
      >
        
        {/* GRUP TEKS DI ATAS AMPLOP */}
        <div 
          className="flex flex-col items-center text-center gap-4 mb-12"
          style={{ opacity: opened ? 0 : 1, transition: "opacity 0.3s ease" }}
        >
          <p className="font-sans text-xs tracking-[0.3em] text-gold/60 uppercase opacity-70">
            Undangan Pernikahan
          </p>
          
          {guestName && (
            <div className="flex flex-col items-center gap-1 mt-2">
              <p className="font-sans text-xs tracking-[0.3em] text-gold/60 uppercase">
                Kepada Yth,
              </p>
              <p className="font-serif text-2xl md:text-3xl text-white leading-tight drop-shadow-md">
                {decodeURIComponent(guestName)}
              </p>
            </div>
          )}
        </div>

        {/* Amplop Clickable Container */}
        <div
          className="relative cursor-pointer select-none"
          style={{ width: 300, height: 200 }}
          onClick={handleOpen}
        >
          <div className="absolute inset-0 border border-gold/10" style={{ background: "#1a1a1a", zIndex: 0 }} />
          
          {/* Kartu dalam amplop */}
          <div
            className="absolute border border-gold/30 flex flex-col items-center justify-center gap-2 overflow-hidden"
            style={{
              width: 260, height: 170, background: "#111",
              top: "50%", left: "50%",
              transform: cardOut ? "translate(-50%, -150%)" : "translate(-50%, -48%)",
              transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)",
              zIndex: cardOut ? 10 : 1, 
            }}
          >
            <div style={{ opacity: opened ? 1 : 0, transition: "opacity 0.2s ease 0.6s" }} className="flex flex-col items-center justify-center gap-1">
              <p className="font-serif text-2xl text-white">Putra</p>
              <p className="text-gold/60 text-sm">✦</p>
              <p className="font-serif text-2xl text-white">Jia</p>
              <p className="font-sans text-xs tracking-widest text-white/30 uppercase mt-1">28 Juni 2026</p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0" style={{ width: 0, height: 0, borderBottom: "100px solid #161616", borderRight: "150px solid transparent", zIndex: 2 }} />
          <div className="absolute bottom-0 right-0" style={{ width: 0, height: 0, borderBottom: "100px solid #161616", borderLeft: "150px solid transparent", zIndex: 2 }} />
          <div className="absolute bottom-0 left-0" style={{ width: 0, height: 0, borderTop: "100px solid #181818", borderLeft: "150px solid transparent", borderRight: "150px solid transparent", zIndex: 2 }} />

          <div
            className="absolute top-0 left-0"
            style={{
              width: 0, height: 0, borderLeft: "150px solid transparent", borderRight: "150px solid transparent", borderTop: "100px solid #141414",
              transformOrigin: "top center", transform: opened ? "rotateX(180deg)" : "rotateX(0deg)", 
              transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)", 
              zIndex: 3, 
            }}
          />

          <div
            className="absolute font-sans font-bold text-bg-dark text-xs flex items-center justify-center border-2 border-[var(--color-gold-muted)]"
            style={{
              width: 48, height: 48, borderRadius: "50%", background: "#D4AF37",
              top: "50%", left: "50%", transform: "translate(-50%, -50%)", 
              zIndex: 4, opacity: opened ? 0 : 1, transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            P✦J
          </div>
        </div>

        <button onClick={handleOpen} className="mt-12 font-sans text-xs tracking-[0.3em] uppercase text-gold border border-gold/30 px-8 py-3 hover:bg-gold/10 transition-colors duration-300">
          Buka Undangan
        </button>
      </div>


      {/* ================= STAGE 2: LAYAR SAPAAN ================= */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        style={{
          opacity: showGreeting ? 1 : 0,
          pointerEvents: showGreeting ? "auto" : "none",
          transition: "opacity 0.8s ease",
        }}
      >
        <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-6 opacity-80">
          Turut Mengundang
        </p>
        <p className="font-serif text-3xl md:text-4xl text-white mb-6 leading-relaxed">
          {guestName ? decodeURIComponent(guestName) : "Bapak/Ibu/Saudara/i"}
        </p>
        <p className="font-sans text-sm text-white/60 max-w-md leading-relaxed mb-16 opacity-80">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami untuk mengundang Anda hadir dan memberikan doa restu pada acara pernikahan kami.
        </p>
        <button
          onClick={handleContinue}
          className="flex flex-col items-center gap-4 opacity-80 hover:opacity-100 transition-opacity duration-300"
        >
          <span className="font-sans text-xs tracking-widest text-gold uppercase">Lanjut ke Undangan</span>
          <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center animate-bounce">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </button>
      </div>

    </div>
  );
}