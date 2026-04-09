"use client";

import { motion, Variants } from "framer-motion";

const TESTIMONIALS = [
  { quote: "Grace Mission has transformed our daughter. She comes home excited to learn every single day.", name: "Mrs. Chikwanda", role: "Parent of Grade 4 pupil" },
  { quote: "The teachers here genuinely care. My son's confidence has grown tremendously since joining.", name: "Mr. Sibanda", role: "Parent of Grade 2 pupil" },
  { quote: "Best decision we made. The Christian values taught here align perfectly with our family.", name: "Mrs. Moyo", role: "Parent of ECD B pupil" },
  { quote: "An outstanding environment that balances academics and character development flawlessly.", name: "Mr. Banda", role: "Parent of Grade 6 pupil" },
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
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
          <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">What parents say</h2>
        </motion.div>

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
    </section>
  );
}
