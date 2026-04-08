"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface StatItem {
  label: string;
  value: string;
}

const DEFAULT_STATS: StatItem[] = [
  { label: "Pupils", value: "500+" },
  { label: "Teachers", value: "30+" },
  { label: "Learning", value: "ECD–Grade 7" },
  { label: "Established", value: "Est. 2005" },
];

export default function Stats({ stats = DEFAULT_STATS }: { stats?: StatItem[] }) {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="bg-white py-12 md:py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`flex flex-col pl-6 md:pl-8 border-l-2 border-secondary/20 first:border-0 md:first:border-l-2 pt-6 md:pt-0 border-t-0 hover:border-secondary transition-colors duration-300 ${
                index === 0 ? "pt-0 border-t-0 border-l-2 !border-secondary" : ""
              }`}
            >
              <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 block tracking-tight">
                {stat.value}
              </span>
              <span className="text-textMuted text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
