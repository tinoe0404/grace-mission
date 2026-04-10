"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";

const COMPULSORY = [
  "English Language",
  "Mathematics",
  "Combined Science",
  "Heritage Studies",
  "Indigenous Language"
];

const ELECTIVES = [
  "Geography",
  "History",
  "Accounts",
  "Business Enterprise",
  "Computer Science",
  "Agriculture",
  "Fine Art"
];

export default function OLevelPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="Ordinary Level" breadcrumb="O-Level" image="/images/hoyo/IMG_6968.JPG" />

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block bg-gold-light text-gold font-sans text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Form 1–4</span>
              <h2 className="font-serif text-4xl text-charcoal leading-snug mb-6">
                Building a Strong Foundation
              </h2>
              <p className="font-sans text-[15px] text-muted leading-relaxed mb-6">
                Our O-Level program is a rigorous 4-year journey culminating in the ZIMSEC examinations. We focus on building a strong foundation in core subjects while allowing students to explore their passions through a wide range of electives.
              </p>
              <p className="font-sans text-[15px] text-muted leading-relaxed mb-8">
                Students are guided closely by our dedicated teaching staff, ensuring they are fully prepared not just for exams, but for the specialized demands of A-Level study.
              </p>
              
              <Link href="/admissions" className="bg-gold text-white font-sans font-semibold px-8 py-3 rounded-full hover:bg-[#b07d0b] transition-all inline-block hover:scale-[1.02]">
                View Admissions for Form 1
              </Link>
            </div>
            
            <div className="space-y-8">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-lg">
                <h3 className="font-serif text-xl text-white mb-6">Compulsory Subjects</h3>
                <ul className="space-y-3">
                  {COMPULSORY.map((subject) => (
                    <li key={subject} className="flex items-center gap-3 font-sans text-[15px]">
                      <span className="bg-gold/20 text-gold w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-primary-light rounded-2xl p-8 shadow-sm">
                <h3 className="font-serif text-xl text-primary mb-6">Elective Options</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {ELECTIVES.map((subject) => (
                    <li key={subject} className="flex items-center gap-3 font-sans text-[15px] text-charcoal">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
