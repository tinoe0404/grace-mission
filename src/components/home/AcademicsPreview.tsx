"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { Baby, Palette, BookOpen, GraduationCap, Shapes, ArrowRight, NotebookPen } from "lucide-react";

const GRADES = [
  {
    title: "ECD (Early Childhood)",
    description: "Laying a strong, faith-based foundation through play, discovery, and structured early learning.",
    icon: <Baby className="w-8 h-8 text-primary" />,
    href: "/academics/ecd",
  },
  {
    title: "Grade 1–2",
    description: "Building core literacy and numeracy skills while fostering a love for active learning.",
    icon: <Shapes className="w-8 h-8 text-primary" />,
    href: "/academics/grade-1-2",
  },
  {
    title: "Grade 3–4",
    description: "Expanding knowledge boundaries with project-based learning and early critical thinking.",
    icon: <NotebookPen className="w-8 h-8 text-primary" />,
    href: "/academics/grade-3-4",
  },
  {
    title: "Grade 5–6",
    description: "Preparing students for senior milestones through rigorous coursework and regular assessments.",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    href: "/academics/grade-5-6",
  },
  {
    title: "Grade 7",
    description: "Final preparatory year focusing on Zimsec examinations and high school readiness.",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    href: "/academics/grade-7",
  },
  {
    title: "Co-Curricular",
    description: "Developing well-rounded pupils through athletics, music, debate, and creative arts.",
    icon: <Palette className="w-8 h-8 text-primary" />,
    href: "/academics/co-curricular",
  },
];

export default function AcademicsPreview() {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Our Curriculum</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-textPrimary leading-tight mb-6">
            A Journey of Excellence
          </h2>
          <p className="text-textMuted text-lg leading-relaxed">
            From the joyful discovery of early childhood to the rigorous preparation of Grade 7, our academic program builds confidence, faith, and intellect at every stage.
          </p>
        </div>

        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {GRADES.map((grade) => (
            <motion.div
              key={grade.title}
              variants={fadeUp as any}
              whileHover={{ y: -6 }}
              className="group bg-surface rounded-2xl p-8 relative overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100 flex flex-col"
            >
              {/* Top Accent Border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              
              <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                {grade.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-textPrimary mb-3">
                {grade.title}
              </h3>
              
              <p className="text-textMuted leading-relaxed mb-8 flex-grow">
                {grade.description}
              </p>

              <Link 
                href={grade.href}
                className="text-secondary font-semibold flex items-center gap-2 group-hover:text-primary transition-colors mt-auto"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/academics" 
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white hover:bg-secondary transition-colors rounded-full font-medium shadow-[0_4px_14px_rgba(26,58,107,0.3)] hover:shadow-md group"
          >
            View Full Curriculum
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
