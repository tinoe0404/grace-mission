"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

/* ── WHY CHOOSE US DATA ───────────────────────── */
const WHY_IMAGES = [
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&q=80",
];

const WHY_FEATURES = [
  { title: "Faith-Centered Learning", desc: "Biblical values woven into every lesson, nurturing character alongside intellect." },
  { title: "Academic Excellence", desc: "Consistently outstanding ZIMSEC results with a 98% national exam pass rate." },
  { title: "Holistic Development", desc: "Sports, arts, and leadership programs that develop well-rounded individuals." },
  { title: "Experienced Educators", desc: "Qualified, passionate teachers with an average of 10+ years in primary education." },
];

/* ── VALUES DATA ──────────────────────────────── */
const VALUES = [
  { num: "01", title: "Faith", desc: "We ground every aspect of school life in Christian principles, teaching pupils to walk in integrity and love. Our morning devotions and chapel services nurture spiritual growth." },
  { num: "02", title: "Excellence", desc: "We pursue the highest standards in academics, sports, and character. Every child is challenged to reach their God-given potential in all they do." },
  { num: "03", title: "Discipline", desc: "We cultivate self-control, responsibility, and respect through consistent routines and clear expectations. Discipline builds a foundation for lifelong success." },
  { num: "04", title: "Community", desc: "We are a family. Parents, teachers, and pupils work together in partnership, creating a warm, supportive environment where everyone belongs." },
];

/* ── ACADEMICS DATA ───────────────────────────── */
const ACADEMICS = [
  { emoji: "🔢", title: "Mathematics", desc: "Building strong numeracy and problem-solving from ECD to Grade 7." },
  { emoji: "📖", title: "English & Literacy", desc: "Developing confident readers, writers, and communicators." },
  { emoji: "🔬", title: "Science & Tech", desc: "Hands-on exploration of the natural and physical world." },
  { emoji: "💻", title: "ICT & Computing", desc: "Modern computer lab with digital literacy from ECD upward." },
  { emoji: "⚽", title: "Sports & PE", desc: "Soccer, netball, athletics, and swimming for fitness and teamwork." },
  { emoji: "🎨", title: "Arts & Culture", desc: "Music, drama, visual arts, and cultural expression." },
];

/* ── TESTIMONIALS DATA ────────────────────────── */
const TESTIMONIALS = [
  { quote: "Grace Mission has transformed our daughter. She comes home excited to learn every single day.", name: "Mrs. Chikwanda", grade: "Parent of Grade 4 pupil" },
  { quote: "The teachers here genuinely care. My son's confidence has grown tremendously since joining.", name: "Mr. Sibanda", grade: "Parent of Grade 2 pupil" },
  { quote: "Best decision we made. The Christian values taught here align perfectly with our family.", name: "Mrs. Moyo", grade: "Parent of ECD B pupil" },
];

/* ── NEWS DATA ────────────────────────────────── */
const NEWS = [
  { img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80", date: "March 2025", title: "Grade 7 pupils achieve outstanding ZIMSEC results", excerpt: "Our final year class posted a remarkable 98% pass rate, with 15 pupils earning distinctions across all subjects." },
  { img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80", date: "February 2025", title: "New computer lab officially opened", excerpt: "The fully equipped ICT lab with 30 workstations was officially opened, bringing digital literacy to every student." },
  { img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80", date: "January 2025", title: "Annual Sports Day 2025 — a day to remember", excerpt: "Pupils from ECD to Grade 7 competed across 20 events in one of the most spirited Sports Days in our history." },
];

export default function Home() {
  return (
    <>
      {/* 1–2. Hero + Stats */}
      <Hero />
      <Stats />

      {/* 3. WHY CHOOSE US ────────────────────────── */}
      <motion.section {...sectionAnim} className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — 2×2 image grid */}
            <div className="grid grid-cols-2 gap-4">
              {WHY_IMAGES.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image src={src} alt={`School life ${i + 1}`} fill className="object-cover" />
                </motion.div>
              ))}
            </div>

            {/* Right — features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A6B] mb-4 tracking-tight font-serif">
                Why parents choose us
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
                For over two decades, families across Harare have trusted Grace Mission to provide a Christ-centered environment where children thrive.
              </p>
              <div className="space-y-6">
                {WHY_FEATURES.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#1A3A6B] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A3A6B] text-lg mb-0.5">{f.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. OUR VALUES ────────────────────────────── */}
      <motion.section {...sectionAnim} className="py-20 md:py-28 bg-[#1A3A6B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-serif">Our Values</h2>
            <div className="w-16 h-1 bg-[#E8729A] mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative p-8 rounded-2xl bg-[#1E4880] border border-white/10 group cursor-pointer hover:border-b-[3px] hover:border-b-[#E8729A]"
              >
                <span className="absolute top-4 right-6 text-[80px] font-bold text-[#E8729A] opacity-20 leading-none font-serif select-none pointer-events-none">
                  {v.num}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. ACADEMICS PREVIEW ─────────────────────── */}
      <motion.section {...sectionAnim} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A6B] tracking-tight font-serif">What we teach</h2>
            <div className="w-16 h-1 bg-[#E8729A] mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACADEMICS.map((a, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white p-6 rounded-xl border border-[#E5E7EB] group cursor-pointer hover:border-t-[3px] hover:border-t-[#1A3A6B] hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-[32px] mb-4 block">{a.emoji}</span>
                <h3 className="text-lg font-bold text-[#1A3A6B] mb-1">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{a.desc}</p>
                <Link href="/academics" className="text-[#E8729A] text-sm font-bold hover:text-[#1A3A6B] transition-colors inline-flex items-center gap-1">
                  Learn more <span aria-hidden>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. TESTIMONIALS ──────────────────────────── */}
      <motion.section {...sectionAnim} className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A6B] tracking-tight font-serif">What parents say</h2>
            <div className="w-16 h-1 bg-[#E8729A] mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 relative"
              >
                <span className="text-[#E8729A] text-[64px] leading-none font-serif absolute top-4 left-6 select-none pointer-events-none opacity-80">
                  &ldquo;
                </span>
                <div className="pt-12">
                  <p className="text-gray-600 italic text-base leading-relaxed mb-6">{t.quote}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-[#1A3A6B]">{t.name}</p>
                    <p className="text-gray-400 text-sm mt-0.5">{t.grade}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 7. LATEST NEWS ───────────────────────────── */}
      <motion.section {...sectionAnim} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A6B] tracking-tight font-serif">Latest from Grace Mission</h2>
            <div className="w-16 h-1 bg-[#E8729A] mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {NEWS.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image src={n.img} alt={n.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-[#1A3A6B] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10">
                    {n.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#1A3A6B] mb-2 leading-tight group-hover:text-[#E8729A] transition-colors">{n.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">{n.excerpt}</p>
                  <Link href="/news" className="text-[#E8729A] text-sm font-bold hover:text-[#1A3A6B] transition-colors inline-flex items-center gap-1">
                    Read more <span aria-hidden>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/news" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#1A3A6B] text-[#1A3A6B] rounded-full font-bold hover:bg-[#1A3A6B] hover:text-white transition-all duration-300">
              View all news <span className="ml-2" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 8. CTA BANNER ────────────────────────────── */}
      <motion.section {...sectionAnim} className="py-20 md:py-28 bg-[#1A3A6B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to be part of our family?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Applications for Term 2 2025 are now open.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#E8729A] text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_4px_20px_rgba(232,114,154,0.4)] hover:shadow-[0_6px_25px_rgba(232,114,154,0.6)]"
          >
            Apply for Admission
          </Link>
        </div>
      </motion.section>
    </>
  );
}
