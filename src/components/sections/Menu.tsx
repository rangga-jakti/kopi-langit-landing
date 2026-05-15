"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Flame } from "lucide-react"

const menuCategories = [
  {
    name: "Kopi Spesial",
    items: [
      { name: "Kopi Langit Signature", price: "Rp28.000", desc: "Espresso + susu steamed + caramel drizzle", badge: "Best Seller", hot: true },
      { name: "V60 Pour Over", price: "Rp32.000", desc: "Single origin arabika, manual brew", badge: null, hot: false },
      { name: "Espresso Tonic", price: "Rp26.000", desc: "Double shot espresso + tonic water + lemon", badge: "Favorit", hot: false },
      { name: "Cappuccino Classic", price: "Rp24.000", desc: "Espresso + steamed milk + foam art", badge: null, hot: true },
    ],
  },
  {
    name: "Non-Kopi & Teh",
    items: [
      { name: "Chocolate Hazelnut", price: "Rp30.000", desc: "Dark chocolate + hazelnut paste + whipped cream", badge: "Best Seller", hot: true },
      { name: "Matcha Latte", price: "Rp28.000", desc: "Japanese matcha + susu segar", badge: null, hot: true },
      { name: "Lemon Tea", price: "Rp18.000", desc: "Teh hitam + lemon segar + madu", badge: null, hot: false },
      { name: "Red Velvet", price: "Rp27.000", desc: "Red velvet base + cream cheese foam", badge: null, hot: false },
    ],
  },
  {
    name: "Makanan",
    items: [
      { name: "Nasi Goreng Kopi Langit", price: "Rp35.000", desc: "Nasi goreng spesial dengan topping ayam suwir + telur", badge: "Best Seller", hot: true },
      { name: "Pisang Goreng Crispy", price: "Rp15.000", desc: "Pisang kepok + tepung renyah + coklat keju", badge: "Favorit", hot: true },
      { name: "Kentang Goreng", price: "Rp18.000", desc: "Kentang segar + bumbu rahasia", badge: null, hot: true },
      { name: "Roti Bakar Coklat", price: "Rp20.000", desc: "Roti tebal + coklat meleleh + kacang", badge: null, hot: true },
    ],
  },
]

export function Menu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="menu" className="py-24 md:py-32 bg-coffee-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-coffee-400 font-semibold text-sm uppercase tracking-wider mb-4 block">Menu Unggulan</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream-100 mb-6">
            Dari Biji Sampai <span className="text-coffee-400">Ke Meja</span>
          </h2>
          <p className="text-cream-300/70 text-lg max-w-2xl mx-auto">Setiap item dibuat dengan bahan berkualitas dan penuh perhatian. Cobain, nyesel nggak mampir.</p>
        </motion.div>

        <div className="space-y-16">
          {menuCategories.map((category, catIndex) => (
            <div key={category.name}>
              <motion.h3 initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                className="font-display text-2xl font-bold text-cream-100 mb-8 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-coffee-500" />{category.name}
              </motion.h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: (catIndex * 0.2) + (itemIndex * 0.1) }}
                    whileHover={{ y: -5 }}
                    className="group bg-coffee-900/40 border border-coffee-800/30 rounded-xl p-5 hover:border-coffee-600/40 hover:bg-coffee-900/60 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span className="inline-flex items-center gap-1 bg-coffee-700/60 text-coffee-200 text-xs font-semibold px-2 py-1 rounded-full">
                            <Star className="w-3 h-3 fill-coffee-300" />{item.badge}
                          </span>
                        )}
                        {item.hot && <Flame className="w-4 h-4 text-orange-400" />}
                      </div>
                      <span className="font-display font-bold text-coffee-300 text-lg">{item.price}</span>
                    </div>
                    <h4 className="font-display font-bold text-cream-100 mb-2 group-hover:text-coffee-300 transition-colors">{item.name}</h4>
                    <p className="text-cream-300/50 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-center mt-12">
          <p className="text-cream-400/60 text-sm italic">* Harga dapat berubah sewaktu-waktu. Menu lengkap tersedia di kedai.</p>
        </motion.div>
      </div>
    </section>
  )
}
