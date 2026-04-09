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
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
            What parents say
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-3 sm:gap-4"
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
            >
              {/* Pink quotation mark */}
              <span className="text-secondary text-3xl sm:text-4xl leading-none font-serif select-none mb-2 block font-bold">
                &ldquo;&ldquo;
              </span>

              <p className="text-textPrimary/80 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                {testimonial.quote}
              </p>

              <div className="mt-auto">
                <p className="font-bold text-primary text-xs sm:text-sm">{testimonial.name}</p>
                <p className="text-textMuted text-[10px] sm:text-xs mt-0.5">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
