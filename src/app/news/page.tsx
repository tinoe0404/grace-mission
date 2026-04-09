"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

const ARTICLES = [
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format&fit=crop",
    date: "March 15, 2025",
    title: "Grade 7 Pupils Achieve Outstanding ZIMSEC Results",
    excerpt: "Our Grade 7 class recorded a 98% pass rate, with 15 pupils achieving distinctions across all subjects.",
  },
  {
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80&auto=format&fit=crop",
    date: "February 28, 2025",
    title: "New Computer Lab Officially Opened",
    excerpt: "The state-of-the-art ICT lab was inaugurated, bringing modern computing to all students.",
  },
  {
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80&auto=format&fit=crop",
    date: "January 20, 2025",
    title: "Annual Sports Day 2025 — A Day to Remember",
    excerpt: "Athletes from all houses competed in track, field, and swimming events.",
  },
  {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80&auto=format&fit=crop",
    date: "December 5, 2024",
    title: "Art Exhibition Showcases Student Creativity",
    excerpt: "The annual art exhibition showcased paintings, sculptures, and installations from Grades 3 to 7.",
  },
];

const EVENTS = [
  { day: "25", month: "OCT", title: "Inter-house Sports Day", time: "8:00 AM", location: "School Grounds" },
  { day: "10", month: "NOV", title: "Parents Evening — Years 3–6", time: "5:30 PM", location: "Main Hall" },
  { day: "21", month: "NOV", title: "School Play Auditions", time: "2:00 PM", location: "Drama Studio" },
  { day: "05", month: "DEC", title: "Prize Giving Ceremony", time: "10:00 AM", location: "Main Hall" },
];

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="News & Events" breadcrumb="News" image="https://images.unsplash.com/photo-1523580494863-6ead3f259519?w=1200&q=80&auto=format&fit=crop" />

      {/* Featured Article */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden h-[420px] mb-16 group cursor-pointer">
            <Image src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=1200&q=80&auto=format&fit=crop" alt="Annual Spring Concert" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <span className="bg-gold text-white font-sans text-xs uppercase tracking-wide px-3 py-1 rounded-full mb-4 inline-block">Featured</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-bold leading-snug">Annual Spring Concert a Resounding Success</h2>
              <p className="font-sans text-white/80 text-[15px] mt-3 max-w-2xl line-clamp-2">
                The school&apos;s musical talent shone brilliantly as pupils from ECD to Grade 7 performed to a packed auditorium of parents and community members.
              </p>
              <span className="font-sans text-sm font-semibold text-gold hover:underline mt-5 inline-flex items-center gap-1 cursor-pointer">
                Read full article →
              </span>
            </div>
          </div>

          {/* Latest Updates Grid */}
          <div className="mb-6">
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Latest</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight mb-10">Latest Updates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {ARTICLES.map((article, i) => (
              <div key={i} className="bg-white border border-primary-light rounded-2xl overflow-hidden group cursor-pointer hover:shadow-md hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-200">
                <div className="relative h-48 overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="font-sans text-xs text-muted mb-2">{article.date}</p>
                  <h3 className="font-serif text-lg text-charcoal leading-snug group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="font-sans text-sm text-muted mt-2 line-clamp-2">{article.excerpt}</p>
                  <span className="font-sans text-sm font-semibold text-primary mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                    Read more →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <div className="bg-primary-light rounded-2xl p-8">
            <h2 className="font-serif text-2xl text-primary mb-6">Upcoming Events</h2>
            <div className="space-y-0">
              {EVENTS.map((event, i) => (
                <div key={i} className={`flex items-start gap-5 py-5 ${i < EVENTS.length - 1 ? "border-b border-primary/10" : ""}`}>
                  <div className="bg-primary text-white rounded-xl px-3 py-2 text-center w-16 shrink-0">
                    <span className="font-mono font-bold text-lg leading-none block">{event.day}</span>
                    <span className="font-sans text-[10px] uppercase tracking-wide mt-1 text-white/70 block">{event.month}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-sans font-semibold text-charcoal text-sm">{event.title}</h4>
                    <p className="font-sans text-xs text-muted mt-0.5">{event.time} · {event.location}</p>
                  </div>
                  <button className="border border-primary/30 text-primary text-xs px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-all shrink-0 self-center font-sans">
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
