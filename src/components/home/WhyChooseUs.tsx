"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 4v16" /><path d="M8 9h8" /></svg>
    ),
    title: "Faith",
    description: "Every school day begins with devotion, grounding students in Christian values, integrity, and servant leadership.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 9 8 12 8s5-4 7.5-4a2.5 2.5 0 010 5H18" /><path d="M12 8v13" /><path d="M6 12a5.2 5.2 0 006 5 5.2 5.2 0 006-5" /></svg>
    ),
    title: "Excellence",
    description: "Our ZIMSEC O-Level and A-Level results consistently rank among the top in the province, preparing students for university and career success.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" /><path d="M2 12h20" /></svg>
    ),
    title: "Holistic",
    description: "Beyond academics — sport, arts, debate, and leadership clubs shape confident young leaders ready for the modern world.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Our Pillars</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">
            Why parents choose us
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto"
        >
          {PILLARS.map((pillar, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border-2 border-primary/20 bg-primary-light flex items-center justify-center mb-4 text-primary transition-all hover:border-primary/40 hover:bg-primary/10">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-2">{pillar.title}</h3>
              <p className="text-muted text-sm leading-relaxed font-sans">{pillar.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
