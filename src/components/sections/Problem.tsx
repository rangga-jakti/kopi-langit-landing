"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Frown, Clock, MapPinOff } from "lucide-react"

const problems = [
  { icon: Frown, title: "Kopi yang Biasa Saja", description: "Banyak kedai kopi pakai biji murahan. Rasanya hambar, aromanya nggak nendang." },
  { icon: Clock, title: "Suasana Tidak Nyaman", description: "Tempat berisik, kursi nggak enak, atau AC terlalu dingin. Susah buat betah." },
  { icon: MapPinOff, title: "Lokasi Susah Dijangkau", description: "Parkiran sempit, jalannya macet, atau lokasi tersembunyi bikin males mampir." },
]

export function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-coffee-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-coffee-400 font-semibold text-sm uppercase tracking-wider mb-4 block">Pernah Mengalami Ini?</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream-100 mb-6">
            Nyari Tempat Ngopi yang <span className="text-coffee-400">Beneran Enak</span> Itu Susah.
          </h2>
          <p className="text-cream-300/70 text-lg max-w-2xl mx-auto">Kita ngerti perjuangan para pecinta kopi. Nggak semua kedai bisa kasih pengalaman yang memuaskan.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div key={problem.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-coffee-900/50 border border-coffee-800/50 rounded-2xl p-8 hover:border-coffee-700/50 transition-colors">
              <div className="w-14 h-14 bg-coffee-800/80 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-coffee-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-cream-100 mb-3">{problem.title}</h3>
              <p className="text-cream-300/60 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
