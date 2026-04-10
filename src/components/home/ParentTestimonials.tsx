"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const TESTIMONIALS = [
  { quote: "Grace Missions prepared my son for university. His A-Level results exceeded all expectations.", name: "Mrs. Chikwanda", role: "Parent of A-Level student" },
  { quote: "The teachers here don't just teach — they mentor. My daughter's confidence has soared.", name: "Mr. Sibanda", role: "Parent of Form 2 student" },
  { quote: "The Christian foundation here is genuine. Our family values are reinforced, not undermined.", name: "Mrs. Moyo", role: "Parent of Form 1 student" },
  { quote: "Best academic school in the region. The O-Level pass rate speaks for itself.", name: "Mr. Banda", role: "Parent of Form 4 student" },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ParentTestimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
          <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">What parents say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonials Grid */}
          <div className="md:col-span-2">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-primary-light shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                >
                  <span className="text-accent/20 text-4xl leading-none font-serif select-none mb-2 block">&ldquo;</span>
                  <p className="text-charcoal/80 text-sm leading-relaxed mb-4 flex-grow font-sans">{t.quote}</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-charcoal text-sm font-sans">{t.name}</p>
                    <p className="text-muted text-xs mt-0.5 font-sans">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Achievement Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden hidden md:block bg-primary/5"
          >
            <Image src="/images/hoyo/IMG_6965.JPG" alt="Student with trophy and gold medals" fill className="object-cover" style={{ objectPosition: "center 15%" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-serif text-lg text-white font-bold">Provincial Champions</p>
              <p className="font-sans text-sm text-white/80 mt-1">Excellence beyond the classroom</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

