"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Moving our son to Grace Mission was the best decision we made. His academic growth has skyrocketed, and he comes home happy everyday. The teachers genuinely care.",
    name: "Tendai M.",
    label: "Parent of Grade 3 pupil",
  },
  {
    quote: "The distinct Christian ethos combined with excellent academics sets this school apart. They don't just teach the syllabus, they mold the character of the child.",
    name: "Shamiso R.",
    label: "Parent of ECD & Grade 5 pupils",
  },
  {
    quote: "Incredible environment for learning! The discipline is remarkable, and my daughter's confidence in mathematics and reading has improved significantly since term one.",
    name: "Dr. Farai N.",
    label: "Parent of Grade 7 pupil",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F7F8FA] py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">From Our Community</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-textPrimary leading-tight">
            What Parents Say
          </h2>
        </div>

        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp as any}
              className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col relative"
            >
              {/* Huge Pink Quotation Mark */}
              <div className="absolute top-6 left-6 text-7xl font-serif text-secondary/10 leading-none select-none pointer-events-none">
                "
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-textPrimary/80 text-lg leading-relaxed flex-grow italic mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-serif text-xl select-none">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-textPrimary">{testimonial.name}</h4>
                  <p className="text-textMuted text-sm">{testimonial.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
