"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

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

export default function ParentTestimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            What parents say about us
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 relative group"
            >
              {/* Large pink quotation mark */}
              <span className="text-secondary text-[72px] leading-none font-serif absolute top-4 left-6 select-none pointer-events-none opacity-80">
                &ldquo;
              </span>

              <div className="relative z-10 pt-10">
                <p className="text-textPrimary/80 italic text-lg leading-relaxed mb-8">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-100 pt-6">
                  <p className="font-bold text-primary text-base">{testimonial.name}</p>
                  <p className="text-textMuted text-sm mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
