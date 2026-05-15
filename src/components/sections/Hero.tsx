"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Star, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900 via-coffee-950 to-coffee-950" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coffee-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-coffee-700/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-coffee-800/60 border border-coffee-700/50 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-coffee-400 fill-coffee-400" />
              <span className="text-sm text-cream-300 font-medium">Rating Google 4.6/5 — 47 Reviews</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-100 leading-tight mb-6">
              Di Atas Sini, <span className="text-coffee-400">Kopinya</span> Beda.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-cream-300/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Kedai kopi premium di Bandung dengan biji pilihan, suasana hangat, dan pelayanan yang bikin betah berlama-lama.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="https://wa.me/6281234567890?text=Halo%20Kopi%20Langit%2C%20saya%20mau%20reservasi%20meja" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-coffee-600 hover:bg-coffee-500 text-cream-100 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-coffee-900/50">
                Reservasi Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#menu" className="inline-flex items-center justify-center gap-2 border border-coffee-700 hover:border-coffee-500 text-cream-200 hover:text-cream-100 px-8 py-4 rounded-full font-semibold text-lg transition-all">
                Lihat Menu
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-cream-400">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-coffee-400" /><span>Jl. Babakan No.36a, Bandung</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-coffee-400" /><span>Buka 08.00 — 19.00</span></div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative hidden lg:block">
            <div className="relative aspect-square max-w-lg mx-auto">
             <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-coffee-800 to-coffee-900 border border-coffee-700/50 shadow-2xl">
                <img
                  src="/images/kopi.jpg"
                  alt="Kedai Kopi Langit Bandung"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-coffee-800 border border-coffee-700 rounded-2xl p-4 shadow-xl">
                <p className="text-cream-100 font-display font-bold text-2xl">4.6</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < 4 ? "text-coffee-400 fill-coffee-400" : "text-coffee-600"}`} />)}
                </div>
                <p className="text-cream-400 text-xs mt-1">47 Google Reviews</p>
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-cream-100 text-coffee-900 rounded-2xl p-4 shadow-xl">
                <p className="font-display font-bold text-lg">Rp25rb — 50rb</p>
                <p className="text-coffee-600 text-xs">per orang</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-coffee-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-coffee-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
