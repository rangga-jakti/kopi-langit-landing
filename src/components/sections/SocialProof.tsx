"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote, TrendingUp, Users, Award } from "lucide-react"

const stats = [
  { icon: Star, value: "4.6", label: "Rating Google", suffix: "/5" },
  { icon: Users, value: "47+", label: "Happy Customers", suffix: "" },
  { icon: TrendingUp, value: "3+", label: "Tahun Beroperasi", suffix: "" },
  { icon: Award, value: "100%", label: "Biji Pilihan", suffix: "" },
]

const testimonials = [
  { name: "Rina W.", role: "Food Blogger", content: "Kopi Langit itu hidden gem di Bandung. Kopinya nendang banget, suasananya cozy, dan harganya masuk akal. Wajib coba V60-nya!", rating: 5 },
  { name: "Budi K.", role: "Pengunjung Regular", content: "Saya datang tiap weekend. Staff-nya ramah, WiFi kencang, dan nasi gorengnya juara. Tempat WFC favorit saya di Bandung.", rating: 5 },
  { name: "Dewi S.", role: "Mahasiswa", content: "Nugas di sini enak banget. Colokan banyak, musiknya nggak ganggu, dan matcha lattenya creamy. Recommended buat anak kampus!", rating: 4 },
]

export function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-coffee-900 to-coffee-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 bg-coffee-950/50 border border-coffee-800/30 rounded-2xl">
              <stat.icon className="w-8 h-8 text-coffee-400 mx-auto mb-3" />
              <p className="font-display text-3xl md:text-4xl font-bold text-cream-100">{stat.value}<span className="text-coffee-400 text-xl">{stat.suffix}</span></p>
              <p className="text-cream-300/60 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mb-12">
          <span className="text-coffee-400 font-semibold text-sm uppercase tracking-wider mb-4 block">Testimoni Pelanggan</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream-100 mb-6">
            Apa Kata <span className="text-coffee-400">Mereka?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              className="bg-coffee-950/60 border border-coffee-800/30 rounded-2xl p-8 relative">
              <Quote className="w-10 h-10 text-coffee-800 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-coffee-400 fill-coffee-400" : "text-coffee-800"}`} />)}
              </div>
              <p className="text-cream-200 leading-relaxed mb-6 relative z-10">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-coffee-700 flex items-center justify-center">
                  <span className="text-cream-100 font-bold text-sm">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-cream-100 text-sm">{testimonial.name}</p>
                  <p className="text-cream-400/60 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
