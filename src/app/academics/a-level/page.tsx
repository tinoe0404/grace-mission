"use client";

import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";

const PATHWAYS = [
  {
    title: "STEAM",
    subjects: "Mathematics, Physics, Chemistry, Biology, Computer Science, Agriculture",
    description: "For future engineers, doctors, software developers, and scientists.",
  },
  {
    title: "Commercials",
    subjects: "Accounting, Business Studies, Economics, Mathematics",
    description: "For future entrepreneurs, accountants, and business leaders.",
  },
  {
    title: "Humanities",
    subjects: "History, Geography, Divinity, Sociology, Literature",
    description: "For future lawyers, diplomats, and social scientists.",
  },
  {
    title: "Arts",
    subjects: "Music, Fine Art, Theatre Arts",
    description: "For future creatives, designers, and performers.",
  }
];

export default function ALevelPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="Advanced Level" breadcrumb="A-Level" image="/images/hoyo/IMG_6977.JPG" />

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <span className="inline-block bg-gold-light text-gold font-sans text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Form 5–6</span>
              <h2 className="font-serif text-4xl text-charcoal leading-snug mb-6">
                University Preparation
              </h2>
              <p className="font-sans text-[15px] text-muted leading-relaxed mb-6">
                Our A-Level program prepares students for top-tier university entrance. With specialized pathways and dedicated faculty, we offer a focused, pre-university environment.
              </p>
              <p className="font-sans text-[15px] text-muted leading-relaxed mb-8">
                Students are encouraged to develop critical thinking, independent research skills, and leadership qualities that will serve them well in higher education and their future careers.
              </p>
              
              <Link href="/admissions" className="bg-primary text-white font-sans font-semibold px-8 py-3 rounded-full hover:bg-primary-mid transition-all inline-block hover:scale-[1.02]">
                View Admissions for Form 5
              </Link>
            </div>
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-primary/5">
              {/* Note: This image path is a placeholder to show students, use any nice image available */}
              <Image src="/images/hoyo/IMG_6965.JPG" alt="Advanced Level students" fill className="object-cover" />
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Specialization</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">Academic Pathways</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PATHWAYS.map((pathway, i) => (
              <div key={i} className="bg-cream border border-primary-light rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-serif text-2xl text-primary mb-3">{pathway.title}</h3>
                <p className="font-sans text-sm text-charcoal font-semibold mb-3">{pathway.subjects}</p>
                <p className="font-sans text-[15px] text-muted">{pathway.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
