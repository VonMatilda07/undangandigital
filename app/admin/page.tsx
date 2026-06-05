"use client";

import { useState, useEffect } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://undangan-putra-jia.vercel.app";

const WA_MESSAGE = (name: string, link: string) =>
  `Assalamu'alaikum Warahmatullahi Wabarakatuh

Kepada Yth,
${name}

Dengan memohon ridho Allah SWT, kami mengundang kehadiran Bapak/Ibu/Saudara/i pada acara pernikahan kami.

Untuk informasi lengkap, silakan buka undangan digital kami di bawah ini 👇

${link}

Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.

Wassalamu'alaikum Warahmatullahi Wabarakatuh

Muhammad Athfal Aulia Putra & Aji Syarifah Kayla Fauziatul Khairiyah`;

interface RSVPData {
  nama: string;
  kehadiran: string;
  jumlah: string;
  ucapan: string;
  timestamp: string;
}

export default function AdminPage() {
  const [tab, setTab] = useState<"generator" | "rsvp">("generator");
  const [guestName, setGuestName] = useState("");
  const [copied, setCopied] = useState(false);
  const [rsvpData, setRsvpData] = useState<RSVPData[]>([]);
  const [loading, setLoading] = useState(false);

  const encodedName = encodeURIComponent(guestName);
  const generatedLink = guestName
    ? `${BASE_URL}/?to=${encodedName}`
    : "";

  function copyLink() {
    if (!generatedLink) return;
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function openWhatsApp() {
    if (!generatedLink) return;
    const message = WA_MESSAGE(guestName, generatedLink);
    const waUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  }

  async function fetchRSVP() {
    setLoading(true);
    try {
      const res = await fetch("/api/comments", { cache: "no-store" });
      const json = await res.json();
      if (json.success) setRsvpData(json.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (tab === "rsvp") fetchRSVP();
  }, [tab]);

  const totalHadir = rsvpData.filter((r) => r.kehadiran === "Hadir").length;
  const totalTamu = rsvpData
    .filter((r) => r.kehadiran === "Hadir")
    .reduce((acc, r) => acc + parseInt(r.jumlah || "0"), 0);

  return (
    <main className="min-h-screen bg-bg-dark text-white px-6 py-12 max-w-2xl mx-auto">

      {/* Header */}
      <div className="mb-10 text-center">
        <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase opacity-70 mb-2">
          Admin Panel
        </p>
        <h1 className="font-serif text-4xl text-white">Putra & Jia</h1>
        <p className="font-sans text-xs text-white/30 mt-2">14 Juni 2026</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gold/20 mb-10">
        {(["generator", "rsvp"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${tab === t
                ? "text-gold border-b-2 border-gold"
                : "text-white/30 hover:text-white/60"
              }`}
          >
            {t === "generator" ? "Generator Link" : "Data RSVP"}
          </button>
        ))}
      </div>

      {/* Tab: Generator */}
      {tab === "generator" && (
        <div className="flex flex-col gap-6">

          {/* Input nama */}
          <div className="flex flex-col gap-2">
            <label className="font-sans text-xs tracking-widest text-gold/70 uppercase">
              Nama Tamu
            </label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Contoh: Budi Santoso"
              className="bg-transparent border-b border-white/20 pb-2 text-white font-serif text-lg focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          {/* Generated link */}
          {generatedLink && (
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs tracking-widest text-gold/70 uppercase">
                Link Undangan
              </label>
              <div className="border border-gold/20 px-4 py-3 bg-bg-card">
                <p className="font-sans text-xs text-white/60 break-all">
                  {generatedLink}
                </p>
              </div>
            </div>
          )}

          {/* Tombol aksi */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              onClick={copyLink}
              disabled={!generatedLink}
              className="flex-1 py-3 font-sans text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold hover:bg-gold/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-300"
            >
              {copied ? "✓ Tersalin!" : "Copy Link"}
            </button>
            <button
              onClick={openWhatsApp}
              disabled={!generatedLink}
              className="flex-1 py-3 font-sans text-xs tracking-[0.2em] uppercase bg-gold text-bg-dark hover:bg-gold-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-300"
            >
              Kirim via WhatsApp
            </button>
          </div>

          {/* Preview pesan WA */}
          {generatedLink && (
            <div className="flex flex-col gap-2 mt-4">
              <label className="font-sans text-xs tracking-widest text-gold/70 uppercase">
                Preview Pesan WhatsApp
              </label>
              <div className="border border-white/10 px-4 py-4 bg-bg-card">
                <p className="font-sans text-xs text-white/40 leading-relaxed whitespace-pre-line">
                  {WA_MESSAGE(guestName, generatedLink)}
                </p>
              </div>
            </div>
          )}

        </div>
      )}

      {/* Tab: Data RSVP */}
      {tab === "rsvp" && (
        <div className="flex flex-col gap-6">

          {/* Summary */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gold/20 bg-bg-card p-4 text-center">
              <p className="font-serif text-3xl text-gold">{totalHadir}</p>
              <p className="font-sans text-xs text-white/40 uppercase tracking-widest mt-1">
                Tamu Hadir
              </p>
            </div>
            <div className="border border-gold/20 bg-bg-card p-4 text-center">
              <p className="font-serif text-3xl text-gold">{totalTamu}</p>
              <p className="font-sans text-xs text-white/40 uppercase tracking-widest mt-1">
                Total Orang
              </p>
            </div>
          </div>

          {/* Refresh button */}
          <button
            onClick={fetchRSVP}
            className="self-end font-sans text-xs tracking-widest text-gold/60 uppercase hover:text-gold transition-colors"
          >
            ↻ Refresh
          </button>

          {/* List RSVP */}
          {loading ? (
            <div className="flex justify-center py-8 opacity-40">
              <div className="flex items-end gap-[3px] h-4">
                <span className="w-[3px] bg-gold animate-[musicBar1_0.8s_ease-in-out_infinite]" />
                <span className="w-[3px] bg-gold animate-[musicBar2_0.8s_ease-in-out_infinite_0.2s]" />
                <span className="w-[3px] bg-gold animate-[musicBar3_0.8s_ease-in-out_infinite_0.4s]" />
              </div>
            </div>
          ) : rsvpData.length === 0 ? (
            <p className="text-center text-white/30 font-sans text-sm py-8">
              Belum ada RSVP masuk.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {rsvpData.map((r, i) => (
                <div
                  key={i}
                  className="border border-gold/15 bg-bg-card p-4 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-serif text-white">{r.nama}</p>
                    <span
                      className={`font-sans text-xs uppercase tracking-widest px-2 py-1 border ${r.kehadiran === "Hadir"
                          ? "border-gold/30 text-gold/70"
                          : "border-white/10 text-white/30"
                        }`}
                    >
                      {r.kehadiran === "Hadir"
                        ? `✦ Hadir · ${r.jumlah} orang`
                        : "Tidak Hadir"}
                    </span>
                  </div>
                  {r.ucapan && (
                    <p className="font-sans text-xs text-white/40 italic leading-relaxed">
                      "{r.ucapan}"
                    </p>
                  )}
                  <p className="font-sans text-xs text-white/20">
                    {new Date(r.timestamp).toLocaleString("id-ID")}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>
      )}

    </main>
  );
}