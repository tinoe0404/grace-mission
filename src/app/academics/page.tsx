"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, CheckCircle2, Trophy, Music, Palette, Atom, BookOpen, Activity, ArrowRight } from "lucide-react";
import { slideInLeft, slideInRight, fadeUp, staggerContainer, fadeIn } from "@/lib/motion";

const SUBJECTS = [
  "Mathematics", 
  "English Language", 
  "Shona (L1 & L2)", 
  "Science & Technology", 
  "Agriculture", 
  "Information & Communication Technology (ICT)", 
  "Physical Education & Sports",
  "Visual & Performing Arts"
];

const GRADE_LEVELS = [
  {
    id: "ecd",
    title: "ECD (A & B)",
    description: "Our Early Childhood Development program focuses on learning through play, socializing, and establishing foundational literacy and numeracy skills in a warm, nurturing environment.",
    subjects: ["Pre-Reading & Phonics", "Pre-Math", "Art & Craft", "Music & Movement", "Outdoor Play"],
    achievements: "Pupils develop fine and gross motor skills, emotional intelligence, and a confident love for learning."
  },
  {
    id: "lower",
    title: "Lower Primary (Grades 1–3)",
    description: "Our Lower Primary program focuses on foundational literacy, numeracy, and science. We build strong academic foundations with a heavy emphasis on reading comprehension, fundamental arithmetic, and structured critical thinking.",
    subjects: ["English", "Maths", "Science & Tech", "Shona", "Art"],
    achievements: "Pupils read fluently, write independently, and build strong numeracy foundations."
  },
  {
    id: "upper",
    title: "Upper Primary (Grades 4–6)",
    description: "The Upper Primary curriculum focuses on deepening subject knowledge and critical thinking. The curriculum broadens to tackle more complex logic and robust scientific concepts, preparing students for the rigorous expectations of their final year.",
    subjects: ["Mathematics", "English Language", "Shona", "Science & Technology", "ICT", "Agriculture", "Visual Arts"],
    achievements: "Pupils develop analytical skills, research habits, and subject specialization readiness."
  },
  {
    id: "grade7",
    title: "Grade 7 (Final Year)",
    description: "Our Grade 7 capstone class focuses on ZIMSEC examination preparation and secondary school readiness. It is intensely focused on consolidating seven years of knowledge and preparing students for extraordinary success in the national examinations.",
    subjects: ["Intensive Mathematics", "English Comprehension & Composition", "Shona", "General Paper (Science & Agriculture)", "All subjects with exam emphasis"],
    achievements: "Pupils sit national Grade 7 exams and transition confidently to secondary school. Exceptional pass rates and foundational leadership capabilities."
  }
];

const ACTIVITIES = [
  { name: "Soccer", icon: Trophy },
  { name: "Netball", icon: Activity },
  { name: "Chess", icon: Atom },
  { name: "Drama", icon: Palette },
  { name: "Choir", icon: Music },
  { name: "Science Club", icon: BookOpen },
];

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState(GRADE_LEVELS[0].id);

  const activeLevel = GRADE_LEVELS.find(l => l.id === activeTab) || GRADE_LEVELS[0];

  return (
    <div className="flex flex-col min-h-screen bg-surface overflow-hidden">
      {/* 1. Page Hero */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeUp as any}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            <h1 className="font-serif text-5xl md:text-[56px] text-white font-bold mb-4 tracking-tight">Academics</h1>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Academics</span>
            </div>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[80px]">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* 2. Curriculum Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              variants={slideInLeft as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">ZIMSEC-Aligned Curriculum</h2>
              <div className="space-y-4 text-textPrimary/80 leading-relaxed text-lg font-light mb-8">
                <p>
                  At Grace Mission Primary School, we fiercely commit to academic excellence. Our teaching framework is robustly aligned with the updated Zimbabwe School Examinations Council (ZIMSEC) syllabus, ensuring our students are nationally competitive.
                </p>
                <p>
                  We merge this national standard with 21st-century pedagogical methods—integrating technology, continuous assessment, and hands-on learning—so our learners memorize less and understand more.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-surface rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm"
            >
              <h3 className="font-bold text-xl text-primary mb-6">Core Subjects Offered</h3>
              <ul className="space-y-4">
                {SUBJECTS.map((subject, i) => (
                  <motion.li 
                    key={i} 
                    custom={i}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: (idx: number) => ({ opacity: 1, x: 0, transition: { delay: idx * 0.1, duration: 0.5 } })
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-textPrimary font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{subject}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Grade Levels (Tabs) */}
      <section className="py-20 md:py-28 bg-[#EBF2FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Academic Progression</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-6 rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Tab Triggers */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:gap-4 pb-4 lg:pb-0 lg:w-1/3 min-w-max sticky top-24 self-start hidden-scrollbar">
              {GRADE_LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setActiveTab(level.id)}
                  className={`relative text-left px-6 py-4 rounded-2xl font-medium transition-all duration-300 w-full group ${
                    activeTab === level.id 
                      ? "bg-primary text-white shadow-lg" 
                      : "bg-white text-textPrimary hover:bg-white/60 text-gray-500 hover:text-primary border border-white/50"
                  }`}
                >
                  <span className="relative z-10">{level.title}</span>
                  {activeTab === level.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-primary rounded-2xl -z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content — Fixed with AnimatePresence */}
            <div className="lg:w-2/3 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLevel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="h-full flex flex-col"
                >
                  <h3 className="text-3xl font-bold text-primary mb-6 tracking-tight">{activeLevel.title}</h3>
                  <p className="text-textPrimary/80 text-lg leading-relaxed mb-8">
                    {activeLevel.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-auto pt-8 border-t border-gray-100">
                    <div>
                      <h4 className="font-bold text-primary uppercase tracking-wider text-xs mb-4">Key Focus Areas</h4>
                      <ul className="space-y-2">
                        {activeLevel.subjects.map((sub, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-textPrimary/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-surface rounded-2xl p-5 border border-gray-100">
                      <h4 className="font-bold text-primary uppercase tracking-wider text-xs mb-3">Target Achievements</h4>
                      <p className="text-sm leading-relaxed text-textPrimary/80 font-medium">
                        {activeLevel.achievements}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Co-curricular Activities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Co-curricular Activities</h2>
            <p className="text-textMuted mt-4 max-w-2xl mx-auto">Education goes beyond the classroom. We offer a vibrant array of clubs and sports to develop well-rounded individuals.</p>
          </div>

          <motion.div 
            variants={staggerContainer as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {ACTIVITIES.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <motion.div 
                  key={i}
                  variants={fadeUp as any}
                  className="bg-surface p-6 rounded-3xl flex flex-col items-center justify-center gap-4 text-center group cursor-pointer hover:bg-primary transition-colors duration-300 shadow-sm border border-gray-50"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <span className="font-bold text-primary group-hover:text-white transition-colors">{activity.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="bg-primary py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f4a7c0\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Ready to join Grace Mission?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/admissions" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-secondary text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-[0_8px_30px_rgba(232,114,154,0.4)]"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
