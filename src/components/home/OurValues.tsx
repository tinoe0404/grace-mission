"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const VALUES = [
  {
    number: "01",
    title: "Faith",
    description: "We ground every aspect of school life in Christian principles, teaching pupils to walk in integrity and love. Our morning devotions and chapel services nurture spiritual growth.",
  },
  {
    number: "02",
    title: "Excellence",
    description: "We pursue the highest standards in academics, sports, and character. Mediocrity is never an option — every child is challenged to reach their God-given potential.",
  },
  {
    number: "03",
    title: "Discipline",
    description: "We cultivate self-control, responsibility, and respect through consistent routines and clear expectations. Discipline builds the foundation for lifelong success.",
  },
  {
    number: "04",
    title: "Community",
    description: "We are a family. Parents, teachers, and pupils work together in partnership, creating a warm, supportive environment where everyone belongs.",
  },
];

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

export default function OurValues() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Values</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {VALUES.map((value, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group cursor-pointer hover:border-b-2 hover:border-b-secondary"
            >
              {/* Large faded number */}
              <span className="absolute top-4 right-6 text-[80px] font-bold text-secondary/[0.15] leading-none font-serif select-none pointer-events-none">
                {value.number}
              </span>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
