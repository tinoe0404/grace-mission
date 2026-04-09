"use client";

import { motion } from "framer-motion";
import { Leaf, Star, User } from "lucide-react";

const PILLARS = [
  {
    icon: Leaf,
    title: "Faith",
    description: "Every school day begins with devotion, grounding pupils in Christian values and integrity.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Our ZIMSEC results consistently rank among the top in Harare's primary schools.",
  },
  {
    icon: User,
    title: "Holistic",
    description: "Beyond academics — sports, arts, music, and leadership shape the whole child.",
  },
];

export default function WhyChooseUs() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Why Parents Choose Us
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div 
                variants={item}
                key={i} 
                className="flex flex-col items-start bg-white border border-primary-light rounded-2xl p-8 transition-shadow hover:shadow-card-hover"
              >
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-primary mb-3 leading-tight">{pillar.title}</h3>
                <p className="font-sans text-[15px] text-muted leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
