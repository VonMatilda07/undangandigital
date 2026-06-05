export default function OpeningMessage() {
  return (
    <section className="py-24 px-6 flex flex-col items-center text-center max-w-2xl mx-auto">

      <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase opacity-80 mb-4">
        Kata Pengantar
      </p>

      <div className="flex items-center gap-4 mb-16">
        <div className="h-px w-12 bg-gold opacity-30" />
        <span className="text-gold opacity-50 text-sm">✦</span>
        <div className="h-px w-12 bg-gold opacity-30" />
      </div>

      <p
        className="text-white/80 mb-10"
        style={{
          fontFamily: "var(--font-arabic), 'Scheherazade New', serif",
          fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
          direction: "rtl",
          lineHeight: "2.2",
        }}
      >
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
      </p>

      <p className="font-serif text-xl md:text-2xl text-white/80 leading-relaxed italic mb-12">
        "Dengan penuh rasa syukur kepada Allah SWT, kami mengundang
        Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu
        dalam momen terindah perjalanan hidup kami."
      </p>

      <div className="h-px w-20 bg-gold opacity-20 mb-12" />

      {/* --- FIX: UKURAN NAMA DIPERBESAR DRASTIS --- */}
      <div className="flex items-center gap-6 md:gap-8">
        <p className="font-cursive text-5xl md:text-6xl text-white drop-shadow-sm">Putra</p>
        <span className="text-gold opacity-60 text-2xl font-serif italic">&</span>
        <p className="font-cursive text-5xl md:text-6xl text-white drop-shadow-sm">Jia</p>
      </div>

    </section>
  );
}