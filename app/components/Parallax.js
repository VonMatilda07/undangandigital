"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ children, speed = 0.5, className = "" }) {
  // Ambil nilai scroll Y dari layar secara realtime
  const { scrollY } = useScroll();
  
  // Transformasikan nilai scroll dikali dengan speed
  // Speed positif = elemen turun
  // Speed negatif = elemen naik
  const y = useTransform(scrollY, (value) => value * speed);

  return (
    // Gunakan motion.div biar bisa ngebaca nilai animasi 'y'
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}