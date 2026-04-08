"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Stats from "@/components/home/Stats";

const ABOUT_STATS = [
  { label: "Years of Excellence", value: "20+" },
  { label: "Graduates", value: "2,500+" },
  { label: "Pass Rate", value: "98%" },
  { label: "Extracurriculars", value: "15+" },
];

const TEAM = [
  { name: "Mrs. Sarah Mutasa", role: "Headmistress", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop" },
  { name: "Mr. David Banda", role: "Deputy Head", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop" },
  { name: "Ms. Grace Ncube", role: "Senior Teacher", image: "https://images.unsplash.com/photo-1580894732444-8ecbef79bd14?w=400&q=80&auto=format&fit=crop" },
  { name: "Mr. John Moyo", role: "Sports Director", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop" },
];

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Page Hero */}
      <section className="bg-[#1A3A6B] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center">
            <h1 className="font-serif text-5xl md:text-[56px] text-white font-bold mb-4 tracking-tight">About Us</h1>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">About</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[80px]">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* 2. Our Story */}
      <motion.section {...sectionAnim} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop" alt="School Building" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1A3A6B] mb-6 tracking-tight font-serif">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>Founded in 2005, Grace Mission Primary School began with a simple but profound vision: to provide a nurturing, high-quality education rooted in Christian values. Located in the heart of Harare, we started with just two classrooms and a handful of dedicated staff members.</p>
                <p>Over the past two decades, our community has flourished. We have grown to serve over 500 pupils from ECD up to Grade 7, continuously expanding our facilities and curriculum to meet the demands of a modern, rapidly changing world.</p>
                <p>At our core, we remain a closely-knit family. We treat every child as an individual gift from God, focusing not just on academic excellence, but on shaping character, fostering compassion, and preparing them for a life of purpose.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Head Teacher Quote — editorial style */}
      <section className="py-24 md:py-32 bg-[#EBF2FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="flex flex-col items-center">
            {/* Large decorative pink quote mark */}
            <span className="text-[#E8729A] text-[100px] md:text-[120px] leading-none font-serif select-none pointer-events-none -mb-6">&ldquo;</span>

            <blockquote className="font-serif text-2xl md:text-[28px] leading-[1.5] text-[#1A3A6B] italic font-medium mb-10 max-w-3xl">
              Education is not merely about accumulating facts; it is the awakening of potential, the shaping of character, and the inspiring of a lifelong love for learning in the light of God&apos;s grace.
            </blockquote>

            <div className="relative w-20 h-20 rounded-full bg-white shadow-md border border-gray-200 mb-6 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop" alt="Mrs. Sarah Mutasa" fill className="object-cover" />
            </div>
            <p className="font-semibold text-lg text-[#1A3A6B] mb-1">Mrs. Sarah Mutasa</p>
            <p className="text-gray-500 text-sm">Headmistress</p>
          </motion.div>
        </div>
      </section>

      {/* 4. Mission / Vision / Values — card grid */}
      <motion.section {...sectionAnim} className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1A3A6B] flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A3A6B] mb-3 tracking-tight">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">To provide a holistic, Christ-centered education that empowers students to achieve maximum academic potential.</p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1A3A6B] flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A3A6B] mb-3 tracking-tight">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">To be the leading primary school in Zimbabwe, known for academic excellence and developing future leaders.</p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1A3A6B] flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A3A6B] mb-3 tracking-tight">Our Values</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">Integrity, Compassion, Respect, and Excellence. We instill these biblical principles into everyday school life.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. Staff Section */}
      <motion.section {...sectionAnim} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A3A6B] tracking-tight font-serif">Meet our team</h2>
            <div className="w-16 h-1.5 bg-[#E8729A] mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {TEAM.map((staff, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-48 h-48 rounded-full mb-6 overflow-hidden ring-4 ring-gray-50 group-hover:ring-[#E8729A]/20 transition-all duration-300">
                  <Image src={staff.image} alt={staff.name} fill className="object-cover" />
                  {/* Hover overlay — ONLY visible on hover */}
                  <div className="absolute inset-0 bg-[#E8729A]/0 group-hover:bg-[#E8729A]/90 transition-all duration-300 z-10 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold tracking-wide uppercase translate-y-4 group-hover:translate-y-0">
                      View Profile
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-[#1A3A6B] transition-colors group-hover:text-[#E8729A]">{staff.name}</h3>
                <p className="text-gray-500 text-[15px] mt-1 font-medium">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. Stats */}
      <Stats stats={ABOUT_STATS} />
    </div>
  );
}
