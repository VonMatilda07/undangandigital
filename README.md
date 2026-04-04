# 💍 Undangan Digital — Putra & Jia

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-EF008F?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Google Sheets](https://img.shields.io/badge/Google_Sheets-Backend-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)

> Website undangan pernikahan digital — Muhammad Athfal Aulia Putra & Aji Syarifah Kayla Fauziatul Khairiyah  
> **28 Juni 2026 · Gedung Dewan Masjid Indonesia, Tenggarong, Kutai Kartanegara**

---

## ✨ Fitur

- 💌 **Envelope Opening** — animasi amplop interaktif dengan confetti emas
- 👤 **Personalisasi Tamu** — sapaan personal via URL `?to=NamaTamu`
- ⏳ **Countdown Timer** — hitung mundur realtime menuju hari H
- 🕌 **Ayat Al-Quran** — QS. Ar-Rum: 21 dengan tulisan Arab
- 📍 **Detail Acara** — embed Google Maps lokasi venue
- 📝 **RSVP Form** — konfirmasi kehadiran tersimpan ke Google Sheets
- 💬 **Live Comments** — ucapan & doa tamu tampil realtime
- 🎵 **Background Music** — auto play saat undangan dibuka
- ✨ **Particle Background** — langit berbintang emas 3 layer parallax
- 🖱️ **Custom Cursor** — cursor elegan dengan trailing effect
- 📱 **Mobile-first** — responsive di semua device

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0B0B0B` / `#111111` |
| Gold Accent | `#D4AF37` |
| Font Serif | Cormorant Garamond |
| Font Sans | Inter |
| Font Arabic | Scheherazade New |

**Konsep:** Modern Tech × Elegant Black Gold

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn

### Installation
```bash
# Clone repo
git clone https://github.com/USERNAME/undangandigital.git
cd undangandigital

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local sesuai konfigurasi

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## ⚙️ Environment Variables

Buat file `.env.local` di root project:
```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
NEXT_PUBLIC_BASE_URL=https://undangandigital-beta.vercel.app
```

| Variable | Deskripsi |
|----------|-----------|
| `GOOGLE_SCRIPT_URL` | URL Google Apps Script untuk RSVP & comments |
| `NEXT_PUBLIC_BASE_URL` | Base URL deployment untuk generator link |

---

## 📁 Struktur Project
app/
├── admin/              # Halaman admin — generator link & data RSVP
├── api/
│   ├── comments/       # GET — fetch ucapan dari Google Sheets
│   └── rsvp/           # POST — kirim data RSVP ke Google Sheets
├── components/
│   ├── AnimateOnScroll.tsx
│   ├── CountdownTimer.js
│   ├── CustomCursor.js
│   ├── EnvelopeOpening.js
│   ├── EventDetails.js
│   ├── HeroSection.tsx
│   ├── LiveComments.js
│   ├── MusicPlayer.tsx
│   ├── OpeningMessage.js
│   ├── ParticleBackground.js
│   ├── Parallax.js
│   ├── QuranVerse.tsx
│   ├── RSVPForm.js
│   └── TurutMengundang.js
└── page.tsx            # Root page

---

## 🔧 Backend — Google Apps Script

RSVP dan Live Comments menggunakan Google Sheets sebagai database via Google Apps Script.

**Flow:**
Tamu isi RSVP → POST /api/rsvp → Google Apps Script → Google Sheets
Halaman load   → GET /api/comments → Google Apps Script → Google Sheets

**Setup:**
1. Buat Google Spreadsheet baru
2. Buka **Extensions → Apps Script**
3. Copy paste script dari `docs/apps-script.gs`
4. Deploy sebagai **Web App** → Execute as: Me → Access: Anyone
5. Copy URL deployment → paste ke `GOOGLE_SCRIPT_URL`

---

## 📱 Admin Panel

Akses di `/admin` untuk:
- **Generator Link** — buat link undangan personal per tamu + kirim via WhatsApp
- **Data RSVP** — pantau konfirmasi kehadiran & ucapan tamu

---

## 🌐 Deployment

Project ini di-deploy di **Vercel**.
```bash
# Build production
npm run build

# Deploy via Git push (auto-deploy)
git push origin main
```

Pastikan environment variables sudah di-set di **Vercel Dashboard → Settings → Environment Variables**.

---

## 📄 License

Private project — All rights reserved © 2026 Muhammad Athfal Aulia Putra & Aji Syarifah Kayla Fauziatul Khairiyah
