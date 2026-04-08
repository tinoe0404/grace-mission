"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to be part of our family?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Give your child the gift of a Christ-centered, world-class education. Applications for the upcoming term are now open.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center px-10 py-4 bg-secondary text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_4px_20px_rgba(232,114,154,0.4)] hover:shadow-[0_6px_25px_rgba(232,114,154,0.6)]"
          >
            Apply for Admission
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
