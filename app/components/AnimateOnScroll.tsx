"use client";

import { motion } from "framer-motion";

export default function AnimateOnScroll({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      // Posisi awal sebelum masuk layar (transparan & turun 30px)
      initial={{ opacity: 0, y: 30 }}
      // Posisi pas masuk layar (jelas & balik ke posisi asli)
      whileInView={{ opacity: 1, y: 0 }}
      // once: true -> animasinya cuma jalan sekali. amount: 0.15 -> trigger pas 15% elemen kelihatan
      viewport={{ once: true, amount: 0.15 }}
      // Konversi delay dari milisecond (misal 100) ke second (0.1) buat framer motion
      transition={{ 
        duration: 0.7, 
        delay: delay / 1000, 
        ease: [0.4, 0, 0.2, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}