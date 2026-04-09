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
    <section className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Our Core Values
          </h2>
        </motion.div>

        {/* Value cards — grid layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
        >
          {VALUES.map((value, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative flex flex-col items-start p-2"
            >
              {/* Decorative Number */}
              <span className="absolute -top-3 -left-2 text-[48px] font-mono font-bold text-gold opacity-20 pointer-events-none select-none z-0">
                {value.number}
              </span>

              <div className="relative z-10 pl-4 border-l-2 border-gold/30">
                <h3 className="font-serif text-[22px] text-white mb-2">{value.title}</h3>
                <p className="font-sans text-[15px] text-white/75 leading-[1.7] max-w-lg">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
