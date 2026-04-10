"use client";

import { motion } from "framer-motion";
import { Users, User, GraduationCap, Flag } from "lucide-react";

const STATS = [
  {
    icon: Users,
    value: "600+",
    label: "STUDENTS",
  },
  {
    icon: User,
    value: "40+",
    label: "STAFF",
  },
  {
    icon: GraduationCap,
    value: "FORM 1–6",
    label: "O & A LEVEL",
  },
  {
    icon: Flag,
    value: "EST. 2005",
    label: "ESTABLISHED",
  },
];

export default function Stats() {
  return (
    <section className="relative z-20 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 -mt-8 md:-mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-stats border border-gray-100 overflow-hidden"
        >
          <div className="grid grid-cols-2">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-5 py-5 sm:px-6 sm:py-6 ${
                    i < 2 ? "border-b border-gray-100" : ""
                  } ${i % 2 === 0 ? "border-r border-gray-100" : ""}`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-gold text-base sm:text-lg leading-tight truncate">
                      {stat.value}
                    </div>
                    <div className="text-textMuted text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
