"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

const CORE_SUBJECTS = ["Mathematics", "English Language", "Indigenous Language & Literature (Shona/Ndebele)", "Combined Science", "Heritage Studies", "+ 3 elective subjects from chosen pathway"];

const STAGES = [
  {
    label: "Form 1 & 2",
    focus: ["Core subject grounding", "Study skills and discipline", "Identification of strengths", "Sports and co-curricular foundation"],
    achievement: "Strong base for O-Level tracking.",
  },
  {
    label: "Form 3 & 4 (O-Level)",
    focus: ["8 subjects (5 core + 3 electives)", "ZIMSEC O-Level examination", "School-Based Projects", "Elective pathways: Sciences, Commercials, Humanities"],
    achievement: "Minimum 5 passes (A–C) for A-Level progression.",
  },
  {
    label: "Form 5 & 6 (A-Level)",
    focus: ["3–4 subjects in chosen pathway", "5 MoPSE Pathways (STEAM, Arts, etc.)", "English for Communication", "ZIMSEC A-Level examination"],
    achievement: "University entry — UZ, NUST, MSU, abroad.",
  },
  {
    label: "University Pathways",
    focus: ["University of Zimbabwe (UZ)", "National University of Science & Technology (NUST)", "Midlands State University (MSU)", "Harare Institute of Technology (HIT)", "International universities"],
    achievement: "Top tier tertiary placements for our graduates.",
  },
];

const ACTIVITIES = [
  { name: "Debate", icon: "🗣️" },
  { name: "Science Club", icon: "🔬" },
  { name: "Drama", icon: "🎭" },
  { name: "Chess", icon: "♟️" },
  { name: "Christian Union", icon: "✝️" },
  { name: "Entrepreneurship", icon: "💼" },
  { name: "Soccer", icon: "⚽" },
  { name: "Netball", icon: "🏐" },
  { name: "Athletics", icon: "🏃" },
  { name: "Basketball", icon: "🏀" },
];

const PATHWAYS = [
  { title: "STEAM", subjects: "Biology, Chemistry, Physics, Mathematics, Computer Science, Agriculture" },
  { title: "Commercials", subjects: "Accounting, Business Studies, Economics, Commerce, Business Enterprise & Skills" },
  { title: "Humanities", subjects: "History, Geography, Divinity, Sociology, Literature" },
  { title: "Design & Tech", subjects: "Technical Drawing, Woodwork, Metalwork, Food & Nutrition" },
  { title: "Arts", subjects: "Music, Theatre Arts, Physical Education, Fine Art" }
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
              <span className="inline-block bg-gold-light text-gold font-sans text-xs font-semibold px-4 py-1.5 rounded-full mb-4">O-Level & A-Level Curriculum</span>
              <h2 className="font-serif text-4xl text-charcoal leading-snug mb-6">
                ZIMSEC-Aligned.<br />University-Ready.
              </h2>
              <p className="font-sans text-[15px] text-muted leading-relaxed">
                At Grace Missions High School, every lesson is designed with one goal: to produce graduates who are ready for Zimbabwe's top universities and competitive global careers. Our curriculum follows the Ministry of Primary and Secondary Education (MoPSE) Heritage-Based framework, while maintaining the high standards demanded by ZIMSEC O-Level and A-Level examinations.
              </p>
            </div>
            <div className="bg-primary rounded-2xl p-10 text-white">
              <h3 className="font-serif text-xl text-white mb-6">Compulsory Learning Areas (Form 1–4)</h3>
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
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mt-4 bg-primary/5">
                      <Image src="/images/hoyo/IMG_6980.JPG" alt="ECD Graduate receiving certificate" fill className="object-cover" />
                      <Image src="/images/hoyo/IMG_6980.JPG" alt="Student learning" fill className="object-cover" />
                      <div className="absolute bottom-3 left-3 bg-gold text-white font-sans text-xs px-3 py-1.5 rounded-full">Academic Excellence</div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Subject Electives */}
      <section className="section-padding bg-white pb-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Pathways</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">Choose Your Pathway</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PATHWAYS.map((pathway, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-primary-light border-l-4 border-l-gold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <h3 className="font-serif text-lg text-charcoal mb-3 group-hover:text-white">{pathway.title}</h3>
                <p className="font-sans text-sm text-muted group-hover:text-white/80 leading-relaxed">{pathway.subjects}</p>
              </div>
            ))}
          </div>
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
            <p className="font-sans text-muted mt-3">Give your child the gift of a world-class, Christ-centered high school education.</p>
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
