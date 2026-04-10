"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

const CORE_SUBJECTS = ["Mathematics", "English Language", "Shona / Ndebele", "Environmental Science", "Social Studies", "Religious & Moral Education", "ICT & Computing", "Physical Education"];

const STAGES = [
  {
    label: "ECD A & B",
    focus: ["Play-based learning", "Motor skill development", "Early literacy & numeracy", "Social interaction"],
    achievement: "Confident, school-ready learners prepared for formal education.",
  },
  {
    label: "Lower Primary",
    focus: ["Core literacy & numeracy", "Science exploration", "Creative arts", "Sports introduction"],
    achievement: "Strong foundational skills in reading, writing, and arithmetic.",
  },
  {
    label: "Upper Primary",
    focus: ["Advanced problem-solving", "Research projects", "Leadership development", "Competitive sports"],
    achievement: "Independent learners ready for secondary education challenges.",
  },
  {
    label: "Grade 7",
    focus: ["ZIMSEC exam preparation", "Study skills mastery", "Career awareness", "Character refinement"],
    achievement: "Outstanding ZIMSEC results and well-rounded graduates.",
  },
];

const ACTIVITIES = [
  { name: "Soccer", icon: "⚽" },
  { name: "Netball", icon: "🏐" },
  { name: "Chess", icon: "♟️" },
  { name: "Drama", icon: "🎭" },
  { name: "Choir", icon: "🎵" },
  { name: "Science Club", icon: "🔬" },
];

export default function AcademicsPage() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="Academics" breadcrumb="Academics" image="/images/hoyo/IMG_6968.JPG" />

      {/* Curriculum Intro */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block bg-gold-light text-gold font-sans text-xs font-semibold px-4 py-1.5 rounded-full mb-4">ZIMSEC-Aligned Curriculum</span>
              <h2 className="font-serif text-4xl text-charcoal leading-snug mb-6">
                Academic Excellence,<br />Zimbabwe Standard.
              </h2>
              <p className="font-sans text-[15px] text-muted leading-relaxed">
                Our curriculum is fully aligned with the Zimbabwe School Examinations Council (ZIMSEC) standards. We provide a comprehensive education covering all core and elective subjects, ensuring every child is well-prepared for national examinations and beyond.
              </p>
            </div>
            <div className="bg-primary rounded-2xl p-10 text-white">
              <h3 className="font-serif text-xl text-white mb-6">Core Subjects</h3>
              <ul className="space-y-3">
                {CORE_SUBJECTS.map((subject) => (
                  <li key={subject} className="flex items-center gap-3 font-sans text-[15px] leading-loose">
                    <span className="text-gold font-bold">✓</span>
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Progression */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Learning Pathway</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">Academic Progression</h2>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center gap-0 mb-8 overflow-x-auto no-scrollbar">
            {STAGES.map((stage, i) => (
              <div key={i} className="flex items-center shrink-0">
                <button
                  onClick={() => setActiveStage(i)}
                  className={`px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-all whitespace-nowrap ${
                    activeStage === i
                      ? "bg-primary text-white"
                      : "border border-primary/30 text-primary hover:bg-primary-light"
                  }`}
                >
                  {stage.label}
                </button>
                {i < STAGES.length - 1 && <div className="h-px w-8 bg-primary/20 hidden sm:block" />}
              </div>
            ))}
          </div>

          {/* Content Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-primary-light rounded-2xl p-10"
            >
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-4">Key Focus Areas</h3>
                  <ul className="space-y-3">
                    {STAGES[activeStage].focus.map((f) => (
                      <li key={f} className="flex items-center gap-2 font-sans text-[15px] text-charcoal">
                        <span className="inline-block w-2 h-2 rounded-full bg-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-4">Target Achievement</h3>
                  <p className="font-serif italic text-lg text-primary leading-relaxed mb-4">{STAGES[activeStage].achievement}</p>
                  {activeStage === 0 && (
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mt-4">
                      <Image src="/images/hoyo/IMG_6980.JPG" alt="ECD Graduate receiving certificate" fill className="object-cover" />
                      <div className="absolute bottom-3 left-3 bg-gold text-white font-sans text-xs px-3 py-1.5 rounded-full">ECD Graduation 2025</div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Co-Curricular Activities */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Beyond the Classroom</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">Co-Curricular Activities</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ACTIVITIES.map((act) => (
              <div
                key={act.name}
                className="bg-white border border-primary-light rounded-xl py-6 px-4 text-center hover:bg-primary hover:text-white hover:border-primary cursor-pointer group transition-all duration-200"
              >
                <span className="text-2xl block mb-2">{act.icon}</span>
                <span className="font-sans text-sm font-medium text-charcoal group-hover:text-white transition-colors">{act.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-primary-light rounded-2xl py-14 px-10 text-center">
            <h3 className="font-serif text-3xl text-primary">Ready to start the journey?</h3>
            <p className="font-sans text-muted mt-3">Give your child the gift of a world-class, Christ-centered education.</p>
            <div className="flex justify-center flex-wrap gap-4 mt-8">
              <Link href="/admissions" className="bg-gold text-white font-sans font-semibold px-8 py-3 rounded-full hover:bg-[#b07d0b] hover:scale-[1.02] active:scale-[0.98] transition-all">
                Apply Now
              </Link>
              <Link href="/contact" className="border border-primary text-primary font-sans font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
