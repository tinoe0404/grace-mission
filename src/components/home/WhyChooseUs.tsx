"use client";

import { motion } from "framer-motion";
import { Cross, Award, UsersRound } from "lucide-react";

const PILLARS = [
  {
    icon: Cross,
    title: "Faith",
    description: "Elegant coaldership and Faith.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Excellence hat the quality of facility.",
  },
  {
    icon: UsersRound,
    title: "Holistic",
    description: "Holistic the teeth of school of holistic.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
            Why parents choose us
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center gap-8 sm:gap-16"
        >
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center max-w-[140px]">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center mb-3 transition-all hover:border-primary/40 hover:bg-primary/10">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="font-bold text-primary text-sm sm:text-base mb-1">{pillar.title}</h3>
                <p className="text-textMuted text-xs sm:text-sm leading-snug">{pillar.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
