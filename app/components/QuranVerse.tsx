export default function QuranVerse() {
  return (
    <section className="py-24 px-6 flex flex-col items-center text-center max-w-2xl mx-auto">

      {/* Ornamen atas */}
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px w-12 bg-gold opacity-30" />
        <span className="text-gold opacity-50 text-sm">✦</span>
        <div className="h-px w-12 bg-gold opacity-30" />
      </div>

      {/* Tulisan Arab */}
      <p
        className="text-white/90 leading-loose mb-10"
        style={{
          fontFamily: "var(--font-arabic), 'Scheherazade New', serif",
          fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
          direction: "rtl",
          lineHeight: "2.2",
        }}
      >
        وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
      </p>

      {/* Divider */}
      <div className="h-px w-16 bg-gold opacity-20 mb-10" />

      {/* Terjemahan */}
      <p className="font-serif text-lg md:text-xl text-white/70 leading-relaxed italic mb-6">
        "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
        dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
        kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
        terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir."
      </p>

      {/* Sumber ayat */}
      <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase opacity-70">
        QS. Ar-Rum : 21
      </p>

      {/* Ornamen bawah */}
      <div className="flex items-center gap-4 mt-16">
        <div className="h-px w-12 bg-gold opacity-30" />
        <span className="text-gold opacity-50 text-sm">✦</span>
        <div className="h-px w-12 bg-gold opacity-30" />
      </div>

    </section>
  );
}