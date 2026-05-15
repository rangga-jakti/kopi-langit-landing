"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  { question: "Apakah perlu reservasi sebelum datang?", answer: "Untuk hari biasa (Selasa-Jumat), walk-in biasanya masih tersedia. Tapi untuk weekend dan hari libur, kami sangat menyarankan reservasi via WhatsApp agar tidak kehabisan tempat duduk. Reservasi gratis dan tanpa DP." },
  { question: "Apakah ada WiFi dan colokan untuk kerja?", answer: "Ya, kami menyediakan WiFi gratis dengan kecepatan tinggi dan colokan listrik tersedia di hampir setiap meja. Cocok banget buat WFC (Work From Cafe) atau nugas." },
  { question: "Bisa bawa hewan peliharaan?", answer: "Sayangnya untuk saat ini kami belum bisa menerima hewan peliharaan di dalam ruangan. Tapi kami punya area outdoor yang nyaman kalau mau duduk di luar." },
  { question: "Apakah menerima pembayaran non-tunai?", answer: "Tentu! Kami menerima pembayaran via QRIS (GoPay, OVO, DANA, LinkAja), transfer bank, dan kartu kredit/debit. Jadi nggak perlu ribet cari ATM." },
  { question: "Bisa pesan delivery atau takeaway?", answer: "Bisa! Kami tersedia di GoFood dan GrabFood untuk delivery. Untuk takeaway, bisa langsung pesan di kedai atau via WhatsApp. Pesanan takeaway biasanya siap dalam 10-15 menit." },
  { question: "Ada paket meeting atau event?", answer: "Ya, kami menyediakan paket private event untuk grup 10-30 orang. Termasuk reserved area, menu custom, dan sound system. Hubungi kami via WhatsApp untuk detail dan harga spesial." },
]

function FAQItem({ faq, index, isOpen, onToggle }: { faq: typeof faqs[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} className="border-b border-coffee-800/30 last:border-0">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-5 text-left group" aria-expanded={isOpen}>
        <span className="font-display font-semibold text-cream-100 pr-4 group-hover:text-coffee-300 transition-colors">{faq.question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
          <ChevronDown className="w-5 h-5 text-coffee-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="text-cream-300/70 pb-5 leading-relaxed pr-8">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 bg-coffee-950 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-coffee-400 font-semibold text-sm uppercase tracking-wider mb-4 block">Pertanyaan Umum</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream-100 mb-6">
            Yang Sering <span className="text-coffee-400">Ditanyain</span>
          </h2>
          <p className="text-cream-300/70 text-lg">Masih ada pertanyaan? Langsung chat kami aja via WhatsApp.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="bg-coffee-900/30 border border-coffee-800/30 rounded-2xl p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? null : index)} />
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.6 }} className="text-center mt-10">
          <div className="inline-flex items-center gap-3 bg-coffee-800/40 border border-coffee-700/30 rounded-full px-6 py-3">
            <HelpCircle className="w-5 h-5 text-coffee-400" />
            <span className="text-cream-300 text-sm">Ada pertanyaan lain? <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-coffee-400 hover:text-coffee-300 font-semibold underline underline-offset-2">Tanya via WhatsApp</a></span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
