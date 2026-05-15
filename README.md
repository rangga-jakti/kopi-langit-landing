# ☕ Kopi Langit — Landing Page

Landing page komersial premium untuk kedai kopi **Kopi Langit** di Bandung. Dibangun dengan performa tinggi, desain elegan, dan optimasi konversi.

---

## 🌐 Live Demo

**URL:** [https://kopi-langit-landing-v2.vercel.app](https://kopi-langit-landing-v2.vercel.app)

---

## ✨ Fitur

| Fitur | Deskripsi |
|-------|-----------|
| 🎨 **Desain Premium** | Dark coffee aesthetic dengan palet coklat gelap + cream |
| 📱 **Responsive** | Mobile-first, optimal di semua device |
| ⚡ **Performa** | Static export, Core Web Vitals optimized |
| 🎯 **CRO** | CTA kuat, trust signals, social proof |
| 🔗 **WhatsApp** | Floating button + reservasi langsung |
| 🗺️ **Lokasi** | Info lengkap + jam operasional |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static Export)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + CSS Variables
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Playfair Display (heading) + Lora (body)
- **Hosting:** [Vercel](https://vercel.com)

---

## 📁 Struktur Folder
D:\Projects\Landing Page
├── 📁 out/                 ← Output build (deploy ini ke Vercel)
├── 📁 public/
│   └── 📁 images/          ← Taruh foto asli di sini
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📄 page.tsx       ← Halaman utama
│   │   ├── 📄 layout.tsx     ← Root layout + metadata
│   │   └── 📄 globals.css    ← CSS variables + custom styles
│   ├── 📁 components/
│   │   ├── 📁 ui/            ← shadcn/ui base (Button, Card, Badge)
│   │   ├── 📁 shared/        ← Navbar, WhatsAppButton
│   │   └── 📁 sections/      ← Landing page sections
│   │       ├── 📄 Hero.tsx
│   │       ├── 📄 Problem.tsx
│   │       ├── 📄 Solution.tsx
│   │       ├── 📄 Menu.tsx
│   │       ├── 📄 SocialProof.tsx
│   │       ├── 📄 Location.tsx
│   │       ├── 📄 CTA.tsx
│   │       ├── 📄 FAQ.tsx
│   │       └── 📄 Footer.tsx
│   └── 📁 lib/
│       └── 📄 utils.ts       ← cn() helper
├── 📄 next.config.js         ← Config static export
├── 📄 tailwind.config.ts     ← Custom colors + fonts
├── 📄 tsconfig.json
└── 📄 package.json


---

## 🚀 Cara Menjalankan

### Prasyarat
- [Node.js](https://nodejs.org/) (versi LTS)
- [npm](https://www.npmjs.com/) (sudah include dengan Node.js)

### Install & Build

```powershell
# 1. Masuk ke folder project
cd "D:\Projects\Landing Page"

# 2. Install dependencies
npm install

# 3. Build untuk production
npm run build

# 4. Output ada di folder out/

## 📄 License

© 2024 Kopi Langit Bandung. All Rights Reserved.

Project ini dibuat secara eksklusif untuk Kopi Langit.
Dilarang menyalin, memodifikasi, atau mendistribusikan tanpa izin.

Developer: Mirangga Jakti
Email: miranggajakti@gmail.com