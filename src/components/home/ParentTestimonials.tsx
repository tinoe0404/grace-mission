"use client";

import { motion, Variants } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Grace Mission has transformed our daughter. She comes home excited to learn every single day.",
    name: "Mrs. Chikwanda",
    role: "Parent of Grade 4 pupil",
  },
  {
    quote: "The teachers here genuinely care. My son's confidence has grown tremendously since joining.",
    name: "Mr. Sibanda",
    role: "Parent of Grade 2 pupil",
  },
  {
    quote: "Best decision we made. The Christian values taught here align perfectly with our family.",
    name: "Mrs. Moyo",
    role: "Parent of ECD B pupil",
  },
  {
    quote: "An outstanding environment that balances academics and character development flawlessly. Highly recommended!",
    name: "Mr. Banda",
    role: "Parent of Grade 6 pupil",
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

export default function ParentTestimonials() {
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
            Hear from Our Parents
          </h2>
        </motion.div>

        {/* Grid layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative bg-white border border-primary-light rounded-2xl p-8 shadow-sm flex flex-col items-start overflow-hidden hover:shadow-card-hover transition-shadow"
            >
              {/* Decorative Quote */}
              <span className="absolute -top-4 -left-2 text-[80px] font-serif leading-none font-bold text-gold opacity-20 select-none pointer-events-none">
                "
              </span>

              {/* 5 Filled Stars */}
              <div className="flex items-center gap-1 mb-4 relative z-10 text-gold">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="font-sans text-[15px] text-charcoal/90 leading-relaxed mb-6 font-medium relative z-10 flex-grow">
                {testimonial.quote}
              </p>

              <div className="mt-auto relative z-10">
                <p className="font-sans font-bold text-[14px] text-primary">{testimonial.name}</p>
                <p className="font-sans text-[12px] text-muted mt-0.5">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
