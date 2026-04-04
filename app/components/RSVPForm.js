"use client";

import { useState } from "react";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    nama: "",
    kehadiran: "Hadir",
    jumlah: "1",
    ucapan: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Nembak ke API Route yang barusan kita bikin
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ nama: "", kehadiran: "Hadir", jumlah: "1", ucapan: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="py-24 px-6 flex flex-col items-center max-w-2xl mx-auto w-full">
      <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase opacity-80 mb-4 text-center">
        Konfirmasi Kehadiran
      </p>

      <div className="flex items-center gap-4 mb-12">
        <div className="h-px w-12 bg-gold opacity-30" />
        <span className="text-gold opacity-40 text-xs">✦</span>
        <div className="h-px w-12 bg-gold opacity-30" />
      </div>

      {status === "success" ? (
        <div className="bg-gold/10 border border-gold/30 p-8 text-center w-full rounded-sm">
          <p className="font-serif text-2xl text-white mb-2">Terima Kasih!</p>
          <p className="text-white/60 font-sans text-sm">
            Konfirmasi kehadiran & ucapan doa Anda telah kami terima.
          </p>
          <button 
            onClick={() => setStatus("idle")}
            className="mt-6 text-xs text-gold uppercase tracking-widest border-b border-gold/30 pb-1 hover:border-gold transition-colors"
          >
            Kirim Ucapan Lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          {/* Input Nama */}
          <div className="flex flex-col gap-2">
            <label className="text-xs text-gold/80 uppercase tracking-widest">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              required
              value={formData.nama}
              onChange={handleChange}
              className="bg-transparent border-b border-white/20 pb-2 text-white font-serif text-lg focus:outline-none focus:border-gold transition-colors"
              placeholder="Masukkan nama Anda..."
            />
          </div>

          {/* Konfirmasi Kehadiran */}
          <div className="flex flex-col gap-2 mt-2">
            <label className="text-xs text-gold/80 uppercase tracking-widest">Kehadiran</label>
            <select
              name="kehadiran"
              value={formData.kehadiran}
              onChange={handleChange}
              className="bg-[#111] border-b border-white/20 pb-2 text-white/80 font-serif text-lg focus:outline-none focus:border-gold transition-colors w-full cursor-pointer"
            >
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Mohon Maaf, Tidak Bisa Hadir</option>
            </select>
          </div>

          {/* Jumlah Tamu */}
          {formData.kehadiran === "Hadir" && (
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-xs text-gold/80 uppercase tracking-widest">Jumlah Tamu</label>
              <select
                name="jumlah"
                value={formData.jumlah}
                onChange={handleChange}
                className="bg-[#111] border-b border-white/20 pb-2 text-white/80 font-serif text-lg focus:outline-none focus:border-gold transition-colors w-full cursor-pointer"
              >
                <option value="1">1 Orang</option>
                <option value="2">2 Orang</option>
              </select>
            </div>
          )}

          {/* Ucapan & Doa */}
          <div className="flex flex-col gap-2 mt-2">
            <label className="text-xs text-gold/80 uppercase tracking-widest">Ucapan & Doa</label>
            <textarea
              name="ucapan"
              required
              rows="4"
              value={formData.ucapan}
              onChange={handleChange}
              className="bg-transparent border-b border-white/20 pb-2 text-white font-serif text-lg focus:outline-none focus:border-gold transition-colors resize-none"
              placeholder="Berikan ucapan atau doa restu..."
            />
          </div>

          {/* Error Message kalau gagal */}
          {status === "error" && (
            <p className="text-red-400 text-xs text-center mt-2">Gagal mengirim RSVP. Silakan coba lagi.</p>
          )}

          {/* Tombol Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-8 font-sans text-xs tracking-[0.3em] uppercase text-bg-dark bg-gold px-8 py-4 hover:bg-gold/80 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto self-center"
          >
            {status === "loading" ? "Mengirim..." : "Kirim RSVP"}
          </button>
        </form>
      )}
    </section>
  );
}