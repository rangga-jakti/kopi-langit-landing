"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, ArrowRight, Calendar, Users } from "lucide-react"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-coffee-950 to-coffee-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-coffee-800/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-coffee-800/60 border border-coffee-700/50 rounded-full px-4 py-2 mb-8">
            <Calendar className="w-4 h-4 text-coffee-400" />
            <span className="text-sm text-cream-300 font-medium">Reservasi Gratis — Tanpa DP</span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream-100 mb-6 leading-tight">
            Jangan Cuma Ngiler di <span className="text-coffee-400">Layar.</span><br />Mampir Sekarang!
          </h2>

          <p className="text-cream-300/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Meja terbatas, terutama di weekend. Reservasi sekarang biar nggak kehabisan tempat duduk favoritmu.
          </p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/6281234567890?text=Halo%20Kopi%20Langit%2C%20saya%20mau%20reservasi%20meja" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-green-900/30">
              <MessageCircle className="w-6 h-6" />
              Reservasi via WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+6281234567890" className="inline-flex items-center justify-center gap-2 text-cream-300 hover:text-cream-100 px-6 py-4 rounded-full font-medium transition-colors">
              <Users className="w-5 h-5" />Atau telepon: 0812-3456-7890
            </a>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="text-cream-400/50 text-sm mt-8">
            Respon cepat — biasanya dibalas dalam 5 menit
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
