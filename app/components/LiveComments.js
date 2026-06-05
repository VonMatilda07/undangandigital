"use client";

import { useEffect, useState, useRef } from "react";

function CommentCard({ nama, kehadiran, ucapan, timestamp }) {
  const date = new Date(timestamp);
  const formatted = date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="border border-gold/15 bg-bg-card p-6 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar inisial */}
          <div
            className="w-8 h-8 flex items-center justify-center border border-gold/30 font-serif text-gold text-sm"
          >
            {nama?.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col">
            <p className="font-serif text-white text-sm">{nama}</p>
            <p className="font-sans text-xs text-white/30">{formatted}</p>
          </div>
        </div>

        {/* Badge kehadiran */}
        <span
          className={`font-sans text-xs tracking-widest uppercase px-3 py-1 border ${
            kehadiran === "Hadir"
              ? "border-gold/30 text-gold/70"
              : "border-white/10 text-white/30"
          }`}
        >
          {kehadiran === "Hadir" ? "✦ Hadir" : "Tidak Hadir"}
        </span>
      </div>

      {/* Ucapan */}
      <p className="font-serif text-white/60 text-sm leading-relaxed italic">
        "{ucapan}"
      </p>
    </div>
  );
}

export default function LiveComments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const commentsRef = useRef([]);

  useEffect(() => {
    commentsRef.current = comments;
  }, [comments]);

  async function fetchComments() {
    try {
      const res = await fetch("/api/comments", { cache: "no-store" });
      const json = await res.json();
      if (json.success) {
        setComments(json.data);
        setError(null);
      } else {
        if (commentsRef.current.length === 0) {
          setError("Gagal memuat ucapan.");
        }
      }
    } catch {
      if (commentsRef.current.length === 0) {
        setError("Gagal memuat ucapan.");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchComments();

    // Auto refresh tiap 30 detik
    const interval = setInterval(fetchComments, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-6 flex flex-col items-center">
        <div className="flex items-center gap-2 opacity-40">
          <div className="w-1 h-1 rounded-full bg-gold animate-bounce" />
          <div className="w-1 h-1 rounded-full bg-gold animate-bounce [animation-delay:0.2s]" />
          <div className="w-1 h-1 rounded-full bg-gold animate-bounce [animation-delay:0.4s]" />
        </div>
      </section>
    );
  }

  if (error) return null;
  if (comments.length === 0) return null;

  return (
    <section className="py-16 px-6 flex flex-col items-center">

      {/* Label */}
      <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase opacity-80 mb-4 text-center">
        Ucapan & Doa
      </p>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px w-12 bg-gold opacity-30" />
        <span className="text-gold opacity-50 text-sm">✦</span>
        <div className="h-px w-12 bg-gold opacity-30" />
      </div>

      {/* Comments */}
      <div className="w-full max-w-xl flex flex-col gap-4">
        {comments.map((c, i) => (
          <CommentCard key={i} {...c} />
        ))}
      </div>

    </section>
  );
}