"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

const ARTICLES = [
  {
    image: "/images/hoyo/IMG_6965.JPG",
    date: "March 15, 2025",
    title: "Athletics: Trophy Win at Provincial Championships",
    excerpt: "Our student returned with the championship trophy and two gold medals from the provincial athletics competition.",
  },
  {
    image: "/images/hoyo/IMG_6977.JPG",
    date: "February 28, 2025",
    title: "ECD Graduation Banquet: A Night to Remember",
    excerpt: "Parents, graduates, and staff gathered for a beautiful evening celebrating the ECD Class of 2025.",
  },
  {
    image: "/images/hoyo/IMG_6969.JPG",
    date: "January 20, 2025",
    title: "New Academic Wing: State-of-the-Art Facilities",
    excerpt: "Our distinctive red brick and green roof campus continues to grow with new classrooms and learning spaces.",
  },
  {
    image: "/images/hoyo/IMG_6947.JPG",
    date: "December 5, 2024",
    title: "Football Team Wins Regional Tournament",
    excerpt: "Our football team brought home the trophy after an outstanding performance at the regional championships.",
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
      <PageHero title="News & Events" breadcrumb="News" image="/images/hoyo/IMG_6976.JPG" />

      {/* Featured Article */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden h-[420px] mb-16 group cursor-pointer">
            <Image src="/images/hoyo/IMG_6976.JPG" alt="ECD Graduation Ceremony" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <span className="bg-accent-light text-accent font-sans text-xs uppercase tracking-wide px-3 py-1 rounded-full mb-4 inline-block font-semibold">Featured</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-bold leading-snug">ECD Class of 2025 Celebrates Graduation — Little Steps, Greater Dreams</h2>
              <p className="font-sans text-white/80 text-[15px] mt-3 max-w-2xl line-clamp-2">
                The Grace Missions Junior School ECD graduation ceremony saw our youngest learners cross the stage in their blue gowns, marking the first milestone of their academic journey.
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
                    <span className="font-sans text-[10px] uppercase tracking-wide mt-1 text-accent/80 block">{event.month}</span>
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
