"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

const PILLARS = [
  {
    id: "01",
    title: "Faith",
    description: "We are deeply rooted in Christian principles. Our students learn to navigate the world through a lens of compassion, integrity, and faith in God.",
  },
  {
    id: "02",
    title: "Excellence",
    description: "Academic rigor is at our core. We challenge our pupils to stretch their capabilities, think critically, and strive for their absolute best inside and outside the classroom.",
  },
  {
    id: "03",
    title: "Discipline",
    description: "We cultivate a respectful and orderly environment. Good habits and self-regulation are developed early, providing a foundation for lifelong success.",
  },
  {
    id: "04",
    title: "Community",
    description: "School is family. We foster an inclusive, supportive environment where every child feels known, valued, and safe to confidently express themselves.",
  },
];

export default function OurValues() {
  return (
    <section className="bg-primary py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 0% 0%, #ffffff 0%, transparent 40%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Our Foundation</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
            The Pillars We Stand On
          </h2>
        </div>

        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={fadeUp as any}
              whileHover={{ y: -8 }}
              className="group bg-white/[0.03] border border-white/10 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:bg-white/[0.06] flex flex-col h-full"
            >
              {/* Animated Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              
              <div className="mb-8">
                <span className="text-5xl font-serif font-black text-transparent text-stroke-2" style={{ WebkitTextStroke: "1px rgba(232,114,154,0.3)" }}>
                  {pillar.id}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                {pillar.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed font-light text-sm flex-grow">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
