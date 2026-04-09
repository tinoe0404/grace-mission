"use client";

import Image from "next/image";
import { BookOpen, Compass, Trophy, Library, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pb-24 md:pb-12 text-[#1A2E44]">
      {/* 1. Hero Image */}
      <div className="relative h-[260px] w-full">
        <Image 
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&q=80&auto=format&fit=crop" 
          alt="School Campus" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center pt-8">
          <h1 className="font-serif text-[44px] leading-[1.1] text-white tracking-tight text-center max-w-[320px]">
            Our Legacy of<br />Excellence
          </h1>
        </div>
      </div>

      <div className="max-w-md mx-auto w-full px-5 pt-10 flex flex-col gap-10">
        {/* 2. Who We Are */}
        <section>
          <h2 className="font-serif text-[34px] mb-3 tracking-tight">Who We Are</h2>
          <p className="text-[15px] leading-relaxed">
            Grace Mission Primary School is dedicated to nurturing young minds in a supportive and intellectually stimulating environment. We foster a community where curiosity is celebrated and character is developed through holistic education.
          </p>
        </section>

        {/* 3. Meet Our Leadership */}
        <section>
          <h2 className="font-serif text-[24px] mb-5 tracking-tight">Meet Our Leadership</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-5 px-5">
            {[
              { name: "Dr. Eleanor Vance", role: "Principal", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop" },
              { name: "Mr. James Chen", role: "Board Chair", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80&auto=format&fit=crop" },
              { name: "Mrs. Alara Croft", role: "Vice Principal", img: "https://images.unsplash.com/photo-1580894732444-8ecbef79bd14?w=200&q=80&auto=format&fit=crop" },
              { name: "Mr. David Lee", role: "Board Member", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop" },
            ].map((leader, i) => (
              <div key={i} className="flex flex-col items-center flex-shrink-0 w-[95px]">
                <div className="relative w-[85px] h-[85px] rounded-full overflow-hidden mb-2 shadow-sm">
                  <Image src={leader.img} alt={leader.name} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-[12px] text-center mb-0.5 leading-tight">{leader.name}</h3>
                <p className="text-[11px] text-gray-600 text-center">{leader.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Mission & Vision */}
        <section>
          <div className="bg-[#DFACAD]/60 rounded-3xl p-5 flex gap-4">
            <div className="flex-1 flex flex-col items-start pr-2">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-8 h-8 text-[#1A2E44]" strokeWidth={1.5} />
                <h3 className="font-serif text-[20px] tracking-tight">Our Mission</h3>
              </div>
              <p className="text-[13px] leading-snug font-medium">
                To empower students with knowledge, integrity, and a passion for lifelong learning.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3">
                <Compass className="w-8 h-8 text-[#1A2E44]" strokeWidth={1.5} />
                <h3 className="font-serif text-[20px] tracking-tight">Our Vision</h3>
              </div>
              <p className="text-[13px] leading-snug font-medium">
                To be a beacon of educational excellence, inspiring future leaders and innovators.
              </p>
            </div>
          </div>
        </section>

        {/* 5. School History */}
        <section>
          <h2 className="font-serif text-[24px] mb-5 tracking-tight">School History</h2>
          <div className="relative pl-[18px] ml-2 border-l-[3px] border-[#DFACAD]/60">
            {/* Timeline Items */}
            {[
              { year: "1998 Founding", desc: "Established with a vision for holistic education." },
              { year: "2008 Campus Expansion", desc: "Added new academic wing and library." },
              { year: "2018 Modernization", desc: "Integrated technology and new facilities." },
              { year: "Present", desc: "Continuing the legacy of excellence." },
            ].map((item, i) => (
              <div key={i} className="mb-6 relative last:mb-0">
                <div className="absolute -left-[27.5px] top-1 w-[16px] h-[16px] rounded-full bg-[#DFACAD] shadow-sm" />
                <p className="text-[15px] leading-snug">
                  <span className="font-bold">{item.year}: </span>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Core Values */}
        <section>
          <h2 className="font-serif text-[24px] mb-4 tracking-tight">Core Values</h2>
          <div className="grid grid-cols-2 gap-3">
            {/* Faith */}
            <div className="bg-[#DFACAD]/60 rounded-xl p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#1A2E44]">
                  <path d="M12 4v16" />
                  <path d="M8 9h8" />
                </svg>
                <h3 className="font-serif text-[20px]">Faith</h3>
              </div>
              <p className="text-[12px] font-medium leading-snug">Nurturing spiritual growth and moral compass.</p>
            </div>
            {/* Excellence */}
            <div className="bg-[#DFACAD]/60 rounded-xl p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-6 h-6 text-[#1A2E44]" strokeWidth={1.5} />
                <h3 className="font-serif text-[20px]">Excellence</h3>
              </div>
              <p className="text-[12px] font-medium leading-snug">Pursuing academic and personal high standards.</p>
            </div>
            {/* Discipline */}
            <div className="bg-[#DFACAD]/60 rounded-xl p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Library className="w-6 h-6 text-[#1A2E44]" strokeWidth={1.5} />
                <h3 className="font-serif text-[20px]">Discipline</h3>
              </div>
              <p className="text-[12px] font-medium leading-snug">Fostering self-control and responsibility.</p>
            </div>
            {/* Community */}
            <div className="bg-[#DFACAD]/60 rounded-xl p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-6 h-6 text-[#1A2E44]" strokeWidth={1.5} />
                <h3 className="font-serif text-[20px]">Community</h3>
              </div>
              <p className="text-[12px] font-medium leading-snug">Building strong relationships and service.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
