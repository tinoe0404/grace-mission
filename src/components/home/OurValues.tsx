"use client";

import { motion, Variants } from "framer-motion";

const VALUES = [
  {
    number: "01",
    title: "Faith",
    description: "We ground every aspect of school life in Christian principles, teaching pupils to walk in integrity and love. Our morning devotions and chapel services nurture spiritual growth.",
  },
  {
    number: "02",
    title: "Excellence",
    description: "We pursue the highest standards in academics, sports, and character. Every child is challenged to reach their God-given potential in all they do.",
  },
  {
    number: "03",
    title: "Discipline",
    description: "We cultivate self-control, responsibility, and respect through consistent routines and clear expectations. Discipline builds a foundation for lifelong success.",
  },
  {
    number: "04",
    title: "Community",
    description: "We are a family. Parents, teachers, and pupils work together in partnership, creating a warm, supportive environment where everyone belongs.",
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as any,
    },
  },
};

export default function OurValues() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
            Our Values
          </h2>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Value cards — vertical stack */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-4"
        >
          {VALUES.map((value, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative bg-primary rounded-xl p-6 sm:p-8 overflow-hidden group hover:bg-[#1e3654] transition-colors duration-300"
            >
              {/* Large faded number */}
              <span className="absolute top-3 right-5 text-[72px] sm:text-[80px] font-bold text-white/[0.06] leading-none font-serif select-none pointer-events-none">
                {value.number}
              </span>

              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-lg">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
