"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WeddingGift() {
    const [showGift, setShowGift] = useState(false);
    const [copiedId, setCopiedId] = useState("");

    const accounts = [
        {
            id: "bca-putra",
            bank: "BCA",
            number: "8145236220",
            holder: "Muhammad Athfal Aulia Putra",
        },
        {
            id: "dana-jia",
            bank: "DANA",
            number: "089531916444",
            holder: "Aji Syarifah Kayla Fauziatul Khairiyah",
        },
    ];

    const address = {
        title: "Alamat Pengiriman Kado Fisik",
        receiver: "Putra & Jia",
        detail: "Jl.Patin Kuning No 66, RT 06, Kel. Timbau, Kec. Tenggarong, Kutai Kartanegara, Kalimantan Timur",
    };

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(""), 2000);
    };

    return (
        <section className="py-24 px-6 flex flex-col items-center text-center max-w-2xl mx-auto w-full">
            <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase opacity-80 mb-4">
                Amplop Digital & Kado
            </p>

            <div className="flex items-center gap-4 mb-12">
                <div className="h-px w-12 bg-gold opacity-30" />
                <span className="text-gold opacity-50 text-sm">✦</span>
                <div className="h-px w-12 bg-gold opacity-30" />
            </div>

            <p className="font-serif text-lg md:text-xl text-white/70 leading-relaxed italic mb-8 max-w-md">
                "Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih untuk kedua mempelai, dapat mengirimkannya melalui amplop digital di bawah ini."
            </p>

            <button
                onClick={() => setShowGift(!showGift)}
                className="font-sans text-xs tracking-[0.2em] uppercase text-gold border border-gold/40 px-8 py-4 hover:bg-gold/10 transition-colors duration-300 cursor-pointer"
            >
                {showGift ? "Tutup Detail" : "Kirim Kado / Amplop"}
            </button>

            <AnimatePresence>
                {showGift && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full overflow-hidden flex flex-col gap-6 mt-12"
                    >
                        {/* Loop Kartu Rekening */}
                        {accounts.map((acc) => (
                            <div key={acc.id} className="border border-gold/15 bg-bg-card p-6 flex flex-col gap-4 text-left">
                                <div>
                                    <p className="font-sans text-xs text-gold/60 uppercase tracking-widest">{acc.bank}</p>
                                    <p className="font-serif text-xl text-white mt-1">{acc.holder}</p>
                                </div>

                                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                    <span className="font-mono text-lg text-white/80">{acc.number}</span>
                                    <button
                                        onClick={() => handleCopy(acc.number, acc.id)}
                                        className="font-sans text-xs tracking-widest text-gold hover:text-gold-muted transition-colors uppercase cursor-pointer"
                                    >
                                        {copiedId === acc.id ? "✓ Tersalin!" : "Salin No. Rek"}
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Kartu Alamat Fisik */}
                        <div className="border border-gold/15 bg-bg-card p-6 flex flex-col gap-4 text-left">
                            <div>
                                <p className="font-sans text-xs text-gold/60 uppercase tracking-widest">{address.title}</p>
                                <p className="font-serif text-xl text-white mt-1">Penerima: {address.receiver}</p>
                                <p className="font-sans text-xs text-white/50 leading-relaxed mt-2">{address.detail}</p>
                            </div>
                            <div className="border-t border-white/10 pt-4 flex justify-end">
                                <button
                                    onClick={() => handleCopy(`${address.receiver} - ${address.detail}`, "address")}
                                    className="font-sans text-xs tracking-widest text-gold hover:text-gold-muted transition-colors uppercase cursor-pointer"
                                >
                                    {copiedId === "address" ? "✓ Alamat Tersalin!" : "Salin Alamat"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}