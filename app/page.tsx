"use client";

import { Suspense, useState, useRef } from "react";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import HeroSection from "./components/HeroSection";
import QuranVerse from "./components/QuranVerse";
import CountdownTimer from "./components/CountdownTimer";
import OpeningMessage from "./components/OpeningMessage";
import TurutMengundang from "./components/TurutMengundang";
import EventDetails from "./components/EventDetails";
import RSVPForm from "./components/RSVPForm";
import LiveComments from "./components/LiveComments";
import AnimateOnScroll from "./components/AnimateOnScroll";
import EnvelopeOpening from "./components/EnvelopeOpening";
import MusicPlayer from "./components/MusicPlayer";
import { MusicPlayerRef } from "./components/MusicPlayer";
import WeddingGift from "./components/WeddingGift";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const musicRef = useRef<MusicPlayerRef>(null);

  return (
    <main className={`relative bg-bg-dark text-white ${!isOpen ? "h-screen overflow-hidden" : ""}`}>

      <CustomCursor />
      <ParticleBackground />

      <MusicPlayer ref={musicRef} isOpen={isOpen} />

      {!isOpen && (
        <Suspense fallback={null}>
          <EnvelopeOpening
            onOpen={() => setIsOpen(true)}
            onClickEnvelope={() => musicRef.current?.play()}
          />
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

      <AnimateOnScroll delay={100}>
        <TurutMengundang />
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <EventDetails />
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <WeddingGift />
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