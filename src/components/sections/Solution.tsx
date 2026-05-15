"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bean, Armchair, Navigation, ChefHat, Wifi, CreditCard } from "lucide-react"

const features = [
  { icon: Bean, title: "Biji Kopi Pilihan", description: "Kami gunakan biji arabika & robusta grade A dari petani lokal. Dipanggang fresh setiap minggu." },
  { icon: Armchair, title: "Suasana Homey", description: "Interior warm dengan pencahayaan lembut, musik chill, dan aroma kopi yang menggoda." },
  { icon: Navigation, title: "Lokasi Strategis", description: "Jl. Babakan No.36a — akses mudah, parkiran luas, dekat pusat kota Bandung." },
  { icon: ChefHat, title: "Makanan Homemade", description: "Gorengan renyah, nasi goreng spesial, dan aneka snack homemade yang nggak kalah enak." },
  { icon: Wifi, title: "WiFi Cepat + Colokan", description: "Cocok buat WFC (Work From Cafe). WiFi kencang dan colokan di setiap meja." },
  { icon: CreditCard, title: "Pembayaran Mudah", description: "Terima cash, transfer, QRIS, dan kartu kredit. Nggak perlu ribet cari ATM." },
]

export function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="profil" className="py-24 md:py-32 bg-gradient-to-b from-coffee-950 to-coffee-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-coffee-400 font-semibold text-sm uppercase tracking-wider mb-4 block">Kenapa Kopi Langit?</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream-100 mb-6">
            Kopi Berkualitas, <span className="text-coffee-400">Suasana Berkesan</span>
          </h2>
          <p className="text-cream-300/70 text-lg max-w-2xl mx-auto">Kami hadir bukan cuma buat jualan kopi, tapi buat ngasih pengalaman ngopi yang beda dari yang lain.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-coffee-950/60 border border-coffee-800/40 rounded-2xl p-6 hover:border-coffee-600/40 hover:bg-coffee-950/80 transition-all duration-300">
              <div className="w-12 h-12 bg-coffee-800/60 group-hover:bg-coffee-700/60 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <feature.icon className="w-6 h-6 text-coffee-400 group-hover:text-coffee-300 transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-cream-100 mb-2">{feature.title}</h3>
              <p className="text-cream-300/60 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
