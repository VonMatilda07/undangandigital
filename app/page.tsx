"use client";

import { Suspense, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import HeroSection from "./components/HeroSection";
import QuranVerse from "./components/QuranVerse";
import CountdownTimer from "./components/CountdownTimer";
import OpeningMessage from "./components/OpeningMessage";
import TurutMengundang from "./components/TurutMengundang"; // <-- Import ditambah di sini
import EventDetails from "./components/EventDetails";
import RSVPForm from "./components/RSVPForm";
import LiveComments from "./components/LiveComments"; // <-- Import LiveComments
import MusicPlayer from "./components/MusicPlayer";
import AnimateOnScroll from "./components/AnimateOnScroll";
import EnvelopeOpening from "./components/EnvelopeOpening";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Tambahin class relative dan atur overflow pas amplop belum dibuka
    <main className={`relative bg-bg-dark text-white ${!isOpen ? "h-screen overflow-hidden" : ""}`}>
      
      {/* Elemen Global (Kursor & Background Bintang) ditaruh paling atas */}
      <CustomCursor />
      <ParticleBackground />

      <MusicPlayer isOpen={isOpen} />

      {!isOpen && (
        <Suspense fallback={null}>
          <EnvelopeOpening onOpen={() => setIsOpen(true)} />
        </Suspense>
      )}

      <HeroSection />

      <AnimateOnScroll>
        <QuranVerse />
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <CountdownTimer />
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <OpeningMessage />
      </AnimateOnScroll>

      {/* --- TAMBAHAN TURUT MENGUNDANG DI SINI --- */}
      <AnimateOnScroll delay={100}>
        <TurutMengundang />
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <EventDetails />
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <RSVPForm />
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <LiveComments />
      </AnimateOnScroll>

    </main>
  );
}