export default function TurutMengundang() {
  const keluarga = [
    "H. A. S. Syahiel Anwar (Alm.)",
    "Achmid Achmad (Alm.)",
    "Hj. Ratna Maksum",
    "Ahmad Taking (Alm.)",
    "Sayid Usman",
    " Ishaq Ali "
  ];

  return (
    <section className="py-24 px-6 flex flex-col items-center text-center max-w-3xl mx-auto">
      
      {/* Label Atas */}
      <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase opacity-80 mb-4">
        Turut Mengundang
      </p>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px w-12 bg-gold opacity-30" />
        <span className="text-gold opacity-40 text-xs">✦</span>
        <div className="h-px w-12 bg-gold opacity-30" />
      </div>

      {/* Judul Keluarga Besar */}
      <h2 className="font-serif text-2xl md:text-3xl text-white mb-12 italic opacity-90">
        Keluarga Besar
      </h2>

      {/* Daftar Nama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full px-4">
        {keluarga.map((nama, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="font-serif text-lg md:text-xl text-white/80 border-b border-gold/10 pb-2 w-full">
              {nama}
            </p>
          </div>
        ))}
      </div>

      {/* Ornamen Bawah */}
      <div className="mt-20 flex items-center gap-3 opacity-20">
        <div className="h-px w-8 bg-gold" />
        <span className="text-gold text-[10px]">✦</span>
        <div className="h-px w-8 bg-gold" />
      </div>

    </section>
  );
}