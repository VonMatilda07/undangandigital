function EventCard({ type, date, time, venue, address, embedUrl }) {
  return (
    <div className="flex flex-col items-center text-center px-8 py-10 border border-gold/20 bg-bg-card w-full max-w-sm">

      {/* Tipe acara */}
      <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase opacity-80 mb-6">
        {type}
      </p>

      {/* Divider kecil */}
      <div className="h-px w-10 bg-gold opacity-30 mb-6" />

      {/* Tanggal */}
      <p className="font-serif text-3xl text-white mb-2">{date}</p>

      {/* Waktu */}
      <p className="font-sans text-sm text-gold/70 tracking-widest uppercase mb-6">
        {time}
      </p>

      {/* Nama venue */}
      <p className="font-serif text-xl text-white mb-1">{venue}</p>

      {/* Alamat */}
      <p className="font-sans text-xs text-white/40 leading-relaxed mb-8">
        {address}
      </p>

     {/* Embed Maps */}
<div className="w-full mt-2 overflow-hidden"
  style={{
    border: "1px solid #D4AF37",
    boxShadow: "0 0 0 1px #D4AF3740, 0 4px 24px #D4AF3720",
    padding: "4px",
  }}
>
  <iframe
    src={embedUrl}
    width="100%"
    height="200"
    style={{ border: 0, display: "block" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

    </div>
  );
}

export default function EventDetails() {
  return (
    <section className="py-24 px-6 flex flex-col items-center text-center">

      {/* Label */}
      <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase opacity-80 mb-4">
        Rangkaian Acara
      </p>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px w-12 bg-gold opacity-30" />
        <span className="text-gold opacity-50 text-sm">✦</span>
        <div className="h-px w-12 bg-gold opacity-30" />
      </div>

      {/* Card */}
      <div className="w-full max-w-sm">
        <EventCard
          type="Resepsi Pernikahan"
          date="Minggu, 28 Juni 2026"
          time="09.00 – 15.00 WITA"
          venue="Gedung Dewan Masjid Indonesia"
          address="Tenggarong, Kutai Kartanegara, Kalimantan Timur"
          embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4244.251148683115!2d116.98912277496471!3d-0.4412978995543731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67b00087e2b5f%3A0x57ad0f40ad468282!2sDMI%20Kukar!5e1!3m2!1sen!2sid!4v1775209623212!5m2!1sen!2sid"
        />
      </div>

    </section>
  );
}