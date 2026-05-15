"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Clock, Phone, Navigation, Car, CreditCard } from "lucide-react"

const schedule = [
  { day: "Senin", hours: "Tutup", isClosed: true },
  { day: "Selasa — Jumat", hours: "09.00 — 18.00", isClosed: false },
  { day: "Sabtu", hours: "08.00 — 19.00", isClosed: false },
  { day: "Minggu", hours: "08.00 — 18.00", isClosed: false },
]

const facilities = [
  { icon: Car, label: "Parkiran Luas" },
  { icon: CreditCard, label: "QRIS & Kartu" },
  { icon: Navigation, label: "Akses Mudah" },
]

export function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="lokasi" className="py-24 md:py-32 bg-coffee-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-coffee-400 font-semibold text-sm uppercase tracking-wider mb-4 block">Kunjungi Kami</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream-100 mb-6">
            Lokasi & <span className="text-coffee-400">Jam Operasional</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
            <div className="bg-coffee-900/50 border border-coffee-800/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coffee-800/60 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-coffee-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-cream-100 text-lg mb-1">Alamat</h3>
                  <p className="text-cream-300/70 leading-relaxed">Jl. Babakan No.36a<br />Bandung, Jawa Barat 40191</p>
                  <a href="https://maps.google.com/?q=Jl.+Babakan+No.36a+Bandung" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-coffee-400 hover:text-coffee-300 text-sm font-medium mt-3 transition-colors">
                    <Navigation className="w-4 h-4" />Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-coffee-900/50 border border-coffee-800/30 rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-coffee-800/60 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-coffee-400" />
                </div>
                <div><h3 className="font-display font-bold text-cream-100 text-lg">Jam Buka</h3></div>
              </div>
              <div className="space-y-3 ml-16">
                {schedule.map((item) => (
                  <div key={item.day} className="flex justify-between items-center py-2 border-b border-coffee-800/20 last:border-0">
                    <span className="text-cream-300/80 text-sm">{item.day}</span>
                    <span className={`text-sm font-semibold ${item.isClosed ? "text-red-400" : "text-coffee-300"}`}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-coffee-900/50 border border-coffee-800/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coffee-800/60 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-coffee-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-cream-100 text-lg mb-1">Kontak</h3>
                  <p className="text-cream-300/70 text-sm mb-3">Reservasi & pertanyaan via WhatsApp</p>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                    <Phone className="w-4 h-4" />0812-3456-7890
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {facilities.map((facility) => (
                <div key={facility.label} className="flex items-center gap-2 bg-coffee-800/40 border border-coffee-700/30 rounded-full px-4 py-2">
                  <facility.icon className="w-4 h-4 text-coffee-400" />
                  <span className="text-cream-300 text-sm">{facility.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="relative">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] bg-coffee-900/50 border border-coffee-800/30 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-coffee-800/50 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-coffee-400" />
                </div>
                <p className="text-cream-200 font-display font-bold text-lg mb-2">Peta Lokasi</p>
                <p className="text-cream-400/60 text-sm mb-4">Embed Google Maps di sini<br />(Ganti dengan iframe maps aktual)</p>
                <a href="https://maps.google.com/?q=Jl.+Babakan+No.36a+Bandung" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-coffee-700 hover:bg-coffee-600 text-cream-100 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
                  <Navigation className="w-4 h-4" />Lihat di Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
