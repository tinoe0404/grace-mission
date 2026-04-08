"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, CheckCircle2, Trophy, Music, Palette, Atom, BookOpen, Activity, ArrowRight } from "lucide-react";

const SUBJECTS = [
  "Mathematics",
  "English Language",
  "Shona (L1 & L2)",
  "Science & Technology",
  "Agriculture",
  "Information & Communication Technology (ICT)",
  "Physical Education & Sports",
  "Visual & Performing Arts",
];

const GRADE_LEVELS = [
  {
    id: "ecd",
    title: "ECD (A & B)",
    description: "Our Early Childhood Development program focuses on learning through play, socializing, and establishing foundational literacy and numeracy skills in a warm, nurturing environment.",
    subjects: ["Pre-Reading & Phonics", "Pre-Math", "Art & Craft", "Music & Movement", "Outdoor Play"],
    achievements: "Pupils develop fine and gross motor skills, emotional intelligence, and a confident love for learning.",
  },
  {
    id: "lower",
    title: "Lower Primary (Grades 1-3)",
    description: "Building on their ECD foundation, pupils in Grades 1 to 3 develop confident reading, independent writing, and strong numeracy skills through structured and engaging daily lessons.",
    subjects: ["English Language", "Mathematics", "Science & Technology", "Shona", "Art & Craft"],
    achievements: "Pupils read fluently and independently, write structured sentences and paragraphs, and demonstrate solid understanding of foundational maths concepts.",
  },
  {
    id: "upper",
    title: "Upper Primary (Grades 4-6)",
    description: "The upper primary years deepen subject knowledge and introduce critical thinking, research, and ICT skills to prepare pupils for the rigours of the Grade 7 examination year.",
    subjects: ["All core subjects", "ICT & Computing", "Agriculture", "Physical Education"],
    achievements: "Pupils develop analytical reasoning, independent research habits, and subject-specific confidence that sets them up for examination success.",
  },
  {
    id: "grade7",
    title: "Grade 7 (Final Year)",
    description: "Our final year programme is a focused, structured preparation for the national ZIMSEC Grade 7 examinations. Our track record speaks for itself - 98% pass rate consistently.",
    subjects: ["All ZIMSEC examination subjects", "Intensive revision", "Past paper practice", "Individual progress tracking"],
    achievements: "Pupils sit the national Grade 7 examinations with confidence and transition successfully to their chosen secondary schools.",
  },
];

const ACTIVITIES = [
  { name: "Soccer", icon: Trophy, color: "bg-green-50 text-green-600" },
  { name: "Netball", icon: Activity, color: "bg-pink-50 text-pink-600" },
  { name: "Chess", icon: Atom, color: "bg-blue-50 text-blue-600" },
  { name: "Drama", icon: Palette, color: "bg-purple-50 text-purple-600" },
  { name: "Choir", icon: Music, color: "bg-amber-50 text-amber-600" },
  { name: "Science Club", icon: BookOpen, color: "bg-cyan-50 text-cyan-600" },
];

const sectionAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState("ecd");
  const activeLevel = GRADE_LEVELS.find((l) => l.id === activeTab) || GRADE_LEVELS[0];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="bg-[#1A3A6B] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center">
            <h1 className="font-serif text-5xl md:text-[56px] text-white font-bold mb-4 tracking-tight">Academics</h1>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Academics</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[80px]">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* Curriculum Overview - bg-white */}
      <motion.section {...sectionAnim} className="py-24 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A6B] mb-6 tracking-tight font-serif">ZIMSEC-Aligned Curriculum</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                <p className="max-w-none">At Grace Mission Primary School, we fiercely commit to academic excellence. Our teaching framework is robustly aligned with the updated Zimbabwe School Examinations Council (ZIMSEC) syllabus, ensuring our students are nationally competitive.</p>
                <p className="max-w-none">We merge this national standard with 21st-century pedagogical methods - integrating technology, continuous assessment, and hands-on learning - so our learners memorize less and understand more.</p>
              </div>
            </div>
            <div className="bg-[#F7F8FA] rounded-3xl p-8 md:p-10 border border-gray-100">
              <h3 className="font-bold text-xl text-[#1A3A6B] mb-6">Core Subjects Offered</h3>
              <ul className="space-y-4">
                {SUBJECTS.map((subject, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-[15px]">
                    <CheckCircle2 className="w-5 h-5 text-[#1A3A6B] shrink-0" />
                    <span>{subject}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Grade Levels Tabs - bg-[#F7F8FA] */}
      <motion.section {...sectionAnim} className="py-24 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A6B] tracking-tight font-serif">Academic Progression</h2>
            <div className="w-16 h-1 bg-[#E8729A] mx-auto mt-6 rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Tab Buttons */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:gap-4 pb-4 lg:pb-0 lg:w-1/3 scrollbar-hide">
              {GRADE_LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setActiveTab(level.id)}
                  className={`relative text-left px-6 py-4 rounded-2xl font-medium transition-all duration-300 w-full whitespace-nowrap lg:whitespace-normal min-h-[48px] ${
                    activeTab === level.id
                      ? "bg-[#1A3A6B] text-white shadow-lg"
                      : "bg-white text-gray-500 hover:text-[#1A3A6B] border border-gray-200"
                  }`}
                >
                  {level.title}
                  {activeTab === level.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-[#1A3A6B] rounded-2xl -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:w-2/3 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLevel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <h3 className="text-3xl font-bold text-[#1A3A6B] mb-6 tracking-tight font-serif">{activeLevel.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-8">{activeLevel.description}</p>

                  <div className="grid md:grid-cols-2 gap-8 mt-auto pt-8 border-t border-gray-100">
                    <div>
                      <h4 className="font-bold text-[#1A3A6B] uppercase tracking-wider text-xs mb-4">Key Focus Areas</h4>
                      <ul className="space-y-2">
                        {activeLevel.subjects.map((sub, i) => (
                          <li key={i} className="flex items-center gap-2 text-[15px] text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E8729A] shrink-0" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#F7F8FA] rounded-2xl p-5 border border-gray-100">
                      <h4 className="font-bold text-[#1A3A6B] uppercase tracking-wider text-xs mb-3">Target Achievements</h4>
                      <p className="text-[15px] leading-relaxed text-gray-600 font-medium">{activeLevel.achievements}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Co-curricular Activities - bg-white */}
      <motion.section {...sectionAnim} className="py-24 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A6B] tracking-tight font-serif">Co-curricular Activities</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-[15px]">Education goes beyond the classroom. We offer a vibrant array of clubs and sports to develop well-rounded individuals.</p>
          </div>
          <motion.div 
            variants={staggerContainer}
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
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#F7F8FA] p-6 rounded-3xl flex flex-col items-center justify-center gap-4 text-center group cursor-pointer hover:bg-[#1A3A6B] transition-colors duration-300 border border-gray-50"
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm ${activity.color} group-hover:bg-white transition-colors`}>
                    <Icon className="w-6 h-6 group-hover:text-[#1A3A6B] transition-colors" />
                  </div>
                  <span className="font-bold text-[#1A3A6B] group-hover:text-white transition-colors">{activity.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Banner - bg-[#1A3A6B] */}
      <section className="bg-[#1A3A6B] py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 text-balance">Ready to join Grace Mission?</h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link 
                href="/admissions" 
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#E8729A] text-white rounded-full font-bold text-lg transition-all shadow-[0_4px_20px_rgba(232,114,154,0.4)] hover:shadow-[0_6px_25px_rgba(232,114,154,0.6)]"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
