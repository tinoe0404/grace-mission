"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, ArrowRight, Clock, MapPin, CalendarPlus } from "lucide-react";
import { fadeUp, staggerContainer, fadeIn } from "@/lib/motion";

const FEATURED_NEWS = {
  id: 1,
  date: "October 12, 2025",
  headline: "Grace Mission Wins Regional Debate Championship",
  excerpt: "Our senior debate team showcased incredible critical thinking and public speaking skills, bringing home the trophy against 20 other primary schools across the province.",
  image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=80&auto=format&fit=crop"
};

const NEWS_ARTICLES = [
  { id: 2, date: "September 28, 2025", headline: "New Science Lab Facility Officially Opened", excerpt: "The state-of-the-art laboratory features interactive boards and modern equipment to foster a deeper understanding of STEM subjects.", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80&auto=format&fit=crop" },
  { id: 3, date: "September 15, 2025", headline: "Cultural Day Highlights: A Celebration of Diversity", excerpt: "Students arrived in vibrant traditional wear, sharing food, music, and dances from deeply rooted heritages.", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80&auto=format&fit=crop" },
  { id: 4, date: "August 30, 2025", headline: "Grade 7 National Exam Preparation Strategies", excerpt: "An overview of how our final year students are currently brushing up for the ZIMSEC exams in the coming term.", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&auto=format&fit=crop" },
  { id: 5, date: "August 12, 2025", headline: "Under-10 Netball Team Completes Unbeaten Season", excerpt: "A massive congratulations to our junior netball girls who remained entirely undefeated this season.", image: "https://images.unsplash.com/photo-1546410531-b6a6552a9042?w=600&q=80&auto=format&fit=crop" },
];

const UPCOMING_EVENTS = [
  { id: 1, date: "Oct 20", day: "Friday", time: "14:00 - 16:30", title: "End of Term Consultation Day", location: "School Main Hall" },
  { id: 2, date: "Nov 02", day: "Thursday", time: "08:00 - 12:00", title: "Inter-House Athletics Tourney", location: "Sports Field" },
  { id: 3, date: "Nov 15", day: "Wednesday", time: "18:00 - 20:00", title: "School Choir Christmas Concert", location: "Chapel" },
];

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface overflow-hidden">
      {/* 1. Page Hero */}
      <section className="bg-primary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeUp as any}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-4 tracking-tight">News & Events</h1>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-secondary font-medium">News & Events</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Column: News Section */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              
              {/* 2. Featured Article */}
              <motion.div
                variants={fadeUp as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video w-full bg-gray-200 relative overflow-hidden flex items-center justify-center">
                  <Image src={FEATURED_NEWS.image} alt="Featured News" fill className="object-cover group-hover:scale-105 transition-transform duration-500 z-0" />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-2 text-secondary font-semibold text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    {FEATURED_NEWS.date}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors tracking-tight">
                    {FEATURED_NEWS.headline}
                  </h2>
                  <p className="text-textPrimary/70 text-lg leading-relaxed mb-6">
                    {FEATURED_NEWS.excerpt}
                  </p>
                  <Link href={`/news/${FEATURED_NEWS.id}`} className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
                    Read full article
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* 3. News Grid */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-primary mb-8 border-b-2 border-gray-100 pb-4 tracking-tight">Latest Updates</h3>
                <motion.div 
                  variants={staggerContainer as any}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="grid sm:grid-cols-2 gap-8"
                >
                  {NEWS_ARTICLES.map((article) => (
                    <motion.div 
                      key={article.id} 
                      variants={fadeUp as any}
                      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                    >
                      <div className="aspect-[3/2] w-full bg-gray-100 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
                        <div className="absolute top-4 left-4 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
                          {article.date}
                        </div>
                        <Image src={article.image!} alt={article.headline} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                          {article.headline}
                        </h4>
                        <p className="text-textPrimary/70 text-sm leading-relaxed mb-6 flex-grow">
                          {article.excerpt}
                        </p>
                        <Link href={`/news/${article.id}`} className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:text-secondary transition-colors mt-auto">
                          Read more
                          <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Right Column: Events Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                variants={fadeUp as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm sticky top-32"
              >
                <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-100">
                  <h3 className="text-2xl font-bold text-primary tracking-tight">Upcoming Events</h3>
                </div>

                <div className="space-y-6">
                  {UPCOMING_EVENTS.map((event) => (
                    <div key={event.id} className="group relative pl-4 border-l-2 border-gray-100 hover:border-secondary transition-colors duration-300">
                      {/* Date Indicator bubble */}
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-200 group-hover:bg-secondary transition-colors" />
                      
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="text-secondary font-bold text-lg">{event.date}</span>
                          <button className="flex items-center gap-1.5 bg-primary/5 hover:bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm transition-colors cursor-pointer border border-primary/10">
                            <CalendarPlus className="w-3 h-3" /> Add
                          </button>
                        </div>
                        <h4 className="font-bold text-primary group-hover:text-secondary transition-colors text-base leading-tight mt-1">{event.title}</h4>
                        
                        <div className="flex items-center gap-4 mt-2 text-xs text-textMuted font-medium">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link href="/events" className="block text-center w-full py-3 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-colors">
                    View Full Calendar
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
