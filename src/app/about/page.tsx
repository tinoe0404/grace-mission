"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";

const TEAM = [
  { name: "Mrs. Sarah Mutasa", role: "Principal", image: "/images/hoyo/IMG_6981.JPG", objectPosition: "center 12%", initials: "" },
  { name: "Mr. David Banda", role: "Deputy Principal (Academics)", image: "", objectPosition: "", initials: "DB" },
  { name: "Ms. Grace Ncube", role: "Head of O-Level Department", image: "", objectPosition: "", initials: "GN" },
  { name: "Mr. John Moyo", role: "Head of Sport & Co-curriculars", image: "", objectPosition: "", initials: "JM" },
];

const STATS = [
  { value: "20+", label: "Years of Excellence" },
  { value: "1,000+", label: "Graduates" },
  { value: "95%+", label: "O-Level Pass Rate" },
  { value: "10+", label: "A-Level Pathways" },
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
      <PageHero title="About Us" breadcrumb="About" image="/images/hoyo/IMG_6969.JPG" objectPosition="center 30%" overlayIntensity="medium" />

      {/* Our Story */}
      <motion.section {...sectionAnim} className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Story Image — fixed height, proper crop */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
              <Image
                src="/images/hoyo/IMG_6969.JPG"
                alt="Grace Missions High School building with students in uniform"
                fill
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
              />
              <div className="absolute bottom-4 left-4 bg-[#3D1A6E] text-white font-sans text-sm px-4 py-2 rounded-full font-medium">
                Est. 2005 · Victoria Falls, Zimbabwe
              </div>
            </div>
            <div>
              <Image src="/images/logo.png" alt="Grace Missions Crest" width={64} height={64} className="object-contain mb-4" />
              <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Our Heritage</span>
              <h2 className="font-serif text-4xl text-charcoal leading-snug mb-6">Our Story</h2>
              <div className="space-y-4 text-muted leading-[1.8] text-[15px] font-sans">
                <p>Founded in 2005, Grace Missions High School was established with a bold vision: to provide Zimbabwe with a Christ-centered secondary school that produces academically excellent, spiritually grounded, and socially responsible young leaders.</p>
                <p>From our first cohort of Form 1 students, we have grown to serve over 600 learners across Form 1 to Form 6. Our O-Level and A-Level results consistently place us among the top performing schools in the province, and our alumni go on to study at the University of Zimbabwe, NUST, MSU, and universities abroad.</p>
                <p>At our core, we remain a family — a community where teachers know every student by name, where faith is lived not just taught, and where every young person is challenged to fly higher than they ever imagined.</p>
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
            <div className="absolute top-6 right-8 opacity-15 pointer-events-none">
              <Image src="/images/logo.png" alt="" aria-hidden="true" width={100} height={100} className="object-contain brightness-0 invert" />
            </div>
            <span className="absolute top-4 left-6 font-serif text-[120px] text-accent/20 leading-none select-none pointer-events-none" aria-hidden="true">&ldquo;</span>
            <blockquote className="font-serif italic text-xl md:text-2xl text-white leading-relaxed max-w-3xl relative z-10">
              Education is not merely about accumulating facts; it is the awakening of potential, the shaping of character, and the inspiring of a lifelong love for learning in the light of God&apos;s grace.
            </blockquote>
            <div className="mt-6 flex items-center gap-4 relative z-10">
              {/* Headmistress photo — tight face crop */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#C9920E] flex-shrink-0">
                <Image src="/images/hoyo/IMG_6981.JPG" alt="Mrs. Sarah Mutasa" fill className="object-cover" style={{ objectPosition: "center 15%" }} />
              </div>
              <div>
                <p className="font-sans font-semibold text-white text-sm">Mrs. Sarah Mutasa</p>
                <p className="font-sans text-white/60 text-sm">Principal</p>
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
              { title: "Our Mission", body: "To provide a holistic, Christ-centered O-Level and A-Level education that empowers students to achieve their maximum academic potential and become servant leaders.", icon: <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg> },
              { title: "Our Vision", body: "To be the leading high school in Zimbabwe, known for ZIMSEC excellence, spiritual formation, and producing future national leaders.", icon: <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              { title: "Our Values", body: "Integrity, Discipline, Faith, and Excellence — lived daily in every classroom, sports field, and chapel service.", icon: <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg> },
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
                  {/* Use real photo if available, otherwise initials avatar */}
                  {staff.image ? (
                    <Image
                      src={staff.image}
                      alt={staff.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: staff.objectPosition }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#3D1A6E] to-[#5C2D9E] flex items-center justify-center">
                      <span className="font-serif text-4xl md:text-5xl text-white/90 font-bold select-none">
                        {staff.initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex items-center justify-center">
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
                <span className="font-mono text-4xl font-bold text-accent leading-none">{stat.value}</span>
                <span className="font-sans text-xs uppercase tracking-widest text-muted mt-1 block">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
