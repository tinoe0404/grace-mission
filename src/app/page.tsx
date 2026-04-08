"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";

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

/* -- WHY CHOOSE US DATA -- */
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

/* -- VALUES DATA -- */
const VALUES = [
  { num: "01", title: "Faith", desc: "We ground every aspect of school life in Christian principles, teaching pupils to walk in integrity and love. Our morning devotions and chapel services nurture spiritual growth." },
  { num: "02", title: "Excellence", desc: "We pursue the highest standards in academics, sports, and character. Every child is challenged to reach their God-given potential in all they do." },
  { num: "03", title: "Discipline", desc: "We cultivate self-control, responsibility, and respect through consistent routines and clear expectations. Discipline builds a foundation for lifelong success." },
  { num: "04", title: "Community", desc: "We are a family. Parents, teachers, and pupils work together in partnership, creating a warm, supportive environment where everyone belongs." },
];

/* -- ACADEMICS DATA -- */
const ACADEMICS = [
  { icon: "calculator", title: "Mathematics", desc: "Building strong numeracy and problem-solving from ECD to Grade 7." },
  { icon: "book-open", title: "English & Literacy", desc: "Developing confident readers, writers, and communicators." },
  { icon: "flask", title: "Science & Tech", desc: "Hands-on exploration of the natural and physical world." },
  { icon: "monitor", title: "ICT & Computing", desc: "Modern computer lab with digital literacy from ECD upward." },
  { icon: "trophy", title: "Sports & PE", desc: "Soccer, netball, athletics, and swimming for fitness and teamwork." },
  { icon: "palette", title: "Arts & Culture", desc: "Music, drama, visual arts, and cultural expression." },
];

const getIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    calculator: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
    "book-open": (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    flask: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.417.069A48.457 48.457 0 0112 21c-2.937 0-5.834-.33-8.718-.978l-.417-.069c-1.717-.293-2.3-2.379-1.067-3.611L5 14.5" />
      </svg>
    ),
    monitor: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    trophy: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m3.044-1.35a6.726 6.726 0 01-2.748 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
    palette: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
  };
  return icons[name] || null;
};

/* -- TESTIMONIALS DATA -- */
const TESTIMONIALS = [
  { quote: "Grace Mission has transformed our daughter. She comes home excited to learn every single day.", name: "Mrs. Chikwanda", grade: "Parent of Grade 4 pupil" },
  { quote: "The teachers here genuinely care. My son's confidence has grown tremendously since joining.", name: "Mr. Sibanda", grade: "Parent of Grade 2 pupil" },
  { quote: "Best decision we made. The Christian values taught here align perfectly with our family.", name: "Mrs. Moyo", grade: "Parent of ECD B pupil" },
];

/* -- NEWS DATA -- */
const NEWS = [
  { img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80", date: "March 2025", title: "Grade 7 pupils achieve outstanding ZIMSEC results", excerpt: "Our final year class posted a remarkable 98% pass rate, with 15 pupils earning distinctions across all subjects." },
  { img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80", date: "February 2025", title: "New computer lab officially opened", excerpt: "The fully equipped ICT lab with 30 workstations was officially opened, bringing digital literacy to every student." },
  { img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80", date: "January 2025", title: "Annual Sports Day 2025 — a day to remember", excerpt: "Pupils from ECD to Grade 7 competed across 20 events in one of the most spirited Sports Days in our history." },
];

export default function Home() {
  return (
    <>
      {/* 1. Navbar is in layout */}
      {/* 2. Hero */}
      <Hero />
      
      {/* 3. Stats bar - bg-white */}
      <Stats />

      {/* 4. WHY CHOOSE US - bg-[#F7F8FA] */}
      <motion.section {...sectionAnim} className="py-24 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: 2x2 image grid */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {WHY_IMAGES.map((src, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image src={src} alt={`School life ${i + 1}`} fill className="object-cover" />
                </motion.div>
              ))}
            </motion.div>

            {/* Right: features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A6B] mb-4 tracking-tight font-serif text-balance">
                Why parents choose us
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
                For over two decades, families across Harare have trusted Grace Mission to provide a Christ-centered environment where children thrive.
              </p>
              <div className="space-y-6">
                {WHY_FEATURES.map((f, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#1A3A6B] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E8729A] transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A3A6B] text-lg mb-0.5">{f.title}</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. OUR VALUES - bg-[#1A3A6B] */}
      <motion.section {...sectionAnim} className="py-24 md:py-28 bg-[#1A3A6B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-serif">Our Values</h2>
            <div className="w-16 h-1 bg-[#E8729A] mx-auto mt-6 rounded-full" />
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative p-8 rounded-2xl bg-[#1E4880] border border-white/10 group cursor-pointer hover:border-b-[3px] hover:border-b-[#E8729A]"
              >
                <span className="absolute top-4 right-6 text-[80px] font-bold text-[#E8729A] opacity-20 leading-none font-serif select-none pointer-events-none">
                  {v.num}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-white/70 text-[15px] leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 6. ACADEMICS PREVIEW - bg-white */}
      <motion.section {...sectionAnim} className="py-24 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A6B] tracking-tight font-serif">What we teach</h2>
            <div className="w-16 h-1 bg-[#E8729A] mx-auto mt-6 rounded-full" />
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ACADEMICS.map((a, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white p-6 rounded-xl border border-[#E5E7EB] group cursor-pointer hover:border-t-[3px] hover:border-t-[#1A3A6B] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1A3A6B]/5 flex items-center justify-center mb-4 text-[#1A3A6B] group-hover:bg-[#1A3A6B] group-hover:text-white transition-colors">
                  {getIcon(a.icon)}
                </div>
                <h3 className="text-lg font-bold text-[#1A3A6B] mb-1">{a.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-3">{a.desc}</p>
                <Link href="/academics" className="text-[#E8729A] text-sm font-bold hover:text-[#1A3A6B] transition-colors inline-flex items-center gap-1">
                  Learn more <span aria-hidden>→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 7. TESTIMONIALS - bg-[#F7F8FA] */}
      <motion.section {...sectionAnim} className="py-24 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A6B] tracking-tight font-serif">What parents say</h2>
            <div className="w-16 h-1 bg-[#E8729A] mx-auto mt-6 rounded-full" />
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
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
          </motion.div>
        </div>
      </motion.section>

      {/* 8. LATEST NEWS - bg-white */}
      <motion.section {...sectionAnim} className="py-24 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A6B] tracking-tight font-serif">Latest from Grace Mission</h2>
            <div className="w-16 h-1 bg-[#E8729A] mx-auto mt-6 rounded-full" />
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {NEWS.map((n, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
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
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-4 flex-grow">{n.excerpt}</p>
                  <Link href="/news" className="text-[#E8729A] text-sm font-bold hover:text-[#1A3A6B] transition-colors inline-flex items-center gap-1">
                    Read more <span aria-hidden>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center">
            <Link href="/news" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#1A3A6B] text-[#1A3A6B] rounded-full font-bold hover:bg-[#1A3A6B] hover:text-white transition-all duration-300">
              View all news <span className="ml-2" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 9. CTA BANNER - bg-[#1A3A6B] */}
      <motion.section {...sectionAnim} className="py-24 md:py-28 bg-[#1A3A6B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
            Ready to be part of our family?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Applications for Term 2 2025 are now open.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#E8729A] text-white rounded-full font-bold text-lg transition-all shadow-[0_4px_20px_rgba(232,114,154,0.4)] hover:shadow-[0_6px_25px_rgba(232,114,154,0.6)]"
            >
              Apply for Admission
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 10. Footer is in layout */}
    </>
  );
}
