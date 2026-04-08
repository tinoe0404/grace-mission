"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight, fadeUp, staggerContainer } from "@/lib/motion";

const FEATURES = [
  {
    title: "Faith-Centered Learning",
    description: "Biblical values woven into every lesson, nurturing character alongside intellect.",
  },
  {
    title: "Academic Excellence",
    description: "Consistently outstanding ZIMSEC results with a 98% national exam pass rate.",
  },
  {
    title: "Holistic Development",
    description: "Sports, arts, and leadership programs that develop well-rounded individuals.",
  },
  {
    title: "Experienced Educators",
    description: "Qualified, passionate teachers with an average of 10+ years in primary education.",
  },
];

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&auto=format&fit=crop", alt: "Students learning together" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80&auto=format&fit=crop", alt: "Classroom activities" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80&auto=format&fit=crop", alt: "Children reading" },
  { src: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=600&q=80&auto=format&fit=crop", alt: "Art and creativity" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Grid */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {IMAGES.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
              Why parents choose us
            </h2>
            <p className="text-textPrimary/70 text-lg leading-relaxed mb-10 max-w-lg">
              For over two decades, families across Harare have trusted Grace Mission to provide a safe, enriching, and Christ-centered environment where children thrive academically, spiritually, and socially.
            </p>

            <div className="space-y-6">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-1">{feature.title}</h3>
                    <p className="text-textPrimary/60 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
