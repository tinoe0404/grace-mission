"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";

const TEAM = [
  { name: "Mrs. Sarah Mutasa", role: "Headmistress", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop" },
  { name: "Mr. David Banda", role: "Deputy Head", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop" },
  { name: "Ms. Grace Ncube", role: "Senior Teacher", image: "https://images.unsplash.com/photo-1580894732444-8ecbef79bd14?w=400&q=80&auto=format&fit=crop" },
  { name: "Mr. John Moyo", role: "Sports Director", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop" },
];

const STATS = [
  { value: "20+", label: "Years of Excellence" },
  { value: "2,500+", label: "Graduates" },
  { value: "98%", label: "Pass Rate" },
  { value: "15+", label: "Extracurriculars" },
];

const sectionAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="About Us" breadcrumb="About" image="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&auto=format&fit=crop" />

      {/* Our Story */}
      <motion.section {...sectionAnim} className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop" alt="School Building" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 bg-primary text-white font-sans text-sm px-4 py-2 rounded-full">
                Est. 2005 · Harare, Zimbabwe
              </div>
            </div>
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Our Heritage</span>
              <h2 className="font-serif text-4xl text-charcoal leading-snug mb-6">Our Story</h2>
              <div className="space-y-4 text-muted leading-[1.8] text-[15px] font-sans">
                <p>Founded in 2005, Grace Mission Primary School began with a simple but profound vision: to provide a nurturing, high-quality education rooted in Christian values. Located in the heart of Harare, we started with just two classrooms and a handful of dedicated staff members.</p>
                <p>Over the past two decades, our community has flourished. We have grown to serve over 500 pupils from ECD up to Grade 7, continuously expanding our facilities and curriculum to meet the demands of a modern, rapidly changing world.</p>
                <p>At our core, we remain a closely-knit family. We treat every child as an individual gift from God, focusing not just on academic excellence, but on shaping character, fostering compassion, and preparing them for a life of purpose.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Mission-Driven", "Christ-Centered", "Community-Built"].map((pill) => (
                  <span key={pill} className="bg-primary-light text-primary font-sans text-xs font-medium px-4 py-1.5 rounded-full">{pill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Headmistress Quote */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionAnim} className="bg-primary text-white rounded-2xl p-10 md:p-16 relative overflow-hidden">
            <span className="absolute top-4 left-6 font-serif text-[120px] text-white/10 leading-none select-none pointer-events-none" aria-hidden="true">&ldquo;</span>
            <blockquote className="font-serif italic text-xl md:text-2xl text-white leading-relaxed max-w-3xl relative z-10">
              Education is not merely about accumulating facts; it is the awakening of potential, the shaping of character, and the inspiring of a lifelong love for learning in the light of God&apos;s grace.
            </blockquote>
            <div className="mt-6 flex items-center gap-4 relative z-10">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold">
                <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop" alt="Mrs. Sarah Mutasa" fill className="object-cover" />
              </div>
              <div>
                <p className="font-sans font-semibold text-white text-sm">Mrs. Sarah Mutasa</p>
                <p className="font-sans text-white/60 text-sm">Headmistress</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values Cards */}
      <motion.section {...sectionAnim} className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Our Mission", body: "To provide a holistic, Christ-centered education that empowers students to achieve maximum academic potential.", icon: <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg> },
              { title: "Our Vision", body: "To be the leading primary school in Zimbabwe, known for academic excellence and developing future leaders.", icon: <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              { title: "Our Values", body: "Integrity, Compassion, Respect, and Excellence. We instill these biblical principles into everyday school life.", icon: <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg> },
            ].map((card, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="bg-white p-8 rounded-2xl border border-primary-light shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mb-5">{card.icon}</div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{card.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Meet the Team */}
      <motion.section {...sectionAnim} className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Our People</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">Meet our team</h2>
            <div className="w-16 h-1.5 bg-gold mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((staff, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <Image src={staff.image} alt={staff.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
                    <span className="font-sans text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Profile</span>
                  </div>
                </div>
                <h3 className="font-serif text-base text-charcoal mt-3 group-hover:text-primary transition-colors">{staff.name}</h3>
                <p className="font-sans text-sm text-muted">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stat Strip */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-primary-light rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-primary/10">
            {STATS.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="py-10 px-8 text-center">
                <span className="font-mono text-4xl font-bold text-primary leading-none">{stat.value}</span>
                <span className="font-sans text-xs uppercase tracking-widest text-muted mt-1 block">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
