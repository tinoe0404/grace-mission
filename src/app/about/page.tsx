"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Target, Lightbulb, Heart } from "lucide-react";
import Stats from "@/components/home/Stats";
import { slideInLeft, slideInRight, fadeUp, staggerContainer, fadeIn } from "@/lib/motion";

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

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
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
            <h1 className="font-serif text-5xl md:text-[56px] text-white font-bold mb-4 tracking-tight">About Us</h1>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">About</span>
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

      {/* 2. Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center border border-gray-200"
            >
              <Image src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop" alt="School Building" fill className="object-cover" />
            </motion.div>
            
            <motion.div
              variants={slideInRight as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6 tracking-tight">Our Story</h2>
              <div className="space-y-4 text-textPrimary/80 leading-relaxed text-lg font-light">
                <p>
                  Founded in 2005, Grace Mission Primary School began with a simple but profound vision: to provide a nurturing, high-quality education rooted in Christian values. Located in the heart of Harare, we started with just two classrooms and a handful of dedicated staff members.
                </p>
                <p>
                  Over the past two decades, our community has flourished. We have grown to serve over 500 pupils from ECD up to Grade 7, continuously expanding our facilities and curriculum to meet the demands of a modern, rapidly changing world.
                </p>
                <p>
                  At our core, we remain a closely-knit family. We treat every child as an individual gift from God, focusing not just on academic excellence, but on shaping character, fostering compassion, and preparing them for a life of purpose.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Head Teacher's Message — editorial style */}
      <section className="py-24 md:py-32 bg-[#EBF2FA] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Large decorative pink quotation mark */}
            <span className="text-secondary text-[100px] md:text-[120px] leading-none font-serif select-none pointer-events-none -mb-8">
              &ldquo;
            </span>

            <blockquote className="font-serif text-[24px] md:text-[28px] leading-[1.5] text-primary font-medium mb-10 max-w-3xl">
              Education is not merely about accumulating facts; it is the awakening of potential, the shaping of character, and the inspiring of a lifelong love for learning in the light of God&apos;s grace.
            </blockquote>

            <div className="relative w-20 h-20 rounded-full bg-white shadow-md border border-gray-200 mb-6 overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop" alt="Mrs. Sarah Mutasa" fill className="object-cover" />
            </div>
            <div>
              <p className="font-bold text-lg text-primary mb-1 tracking-tight">Mrs. Sarah Mutasa</p>
              <p className="text-secondary text-xs font-bold uppercase tracking-[0.2em]">Headmistress</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Mission, Vision, Values - card style */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "Our Mission", icon: Target, desc: "To provide a holistic, Christ-centered education that empowers students to achieve maximum academic potential." },
              { title: "Our Vision", icon: Lightbulb, desc: "To be the leading primary school in Zimbabwe, known for academic excellence and developing future leaders." },
              { title: "Our Values", icon: Heart, desc: "Integrity, Compassion, Respect, and Excellence. We instill these biblical principles into everyday school life." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  variants={fadeUp as any}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-textPrimary/70 leading-relaxed text-[15px]">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. Staff Section */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">Meet our team</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mt-6 rounded-full" />
          </div>

          <motion.div 
            variants={staggerContainer as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {TEAM.map((staff, i) => (
              <motion.div key={i} variants={fadeIn as any} className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-48 h-48 rounded-full mb-6 overflow-hidden bg-gray-50 flex items-center justify-center ring-4 ring-gray-50 group-hover:ring-secondary/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/90 transition-all duration-300 z-10 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-sm font-semibold tracking-wide uppercase">View Profile</span>
                  </div>
                  <Image src={staff.image} alt={staff.name} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-xl text-primary transition-colors group-hover:text-secondary">{staff.name}</h3>
                <p className="text-textMuted text-[15px] mt-1 font-medium">{staff.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. School by the numbers */}
      <Stats stats={ABOUT_STATS} />

    </div>
  );
}
