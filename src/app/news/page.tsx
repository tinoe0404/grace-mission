"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Clock } from "lucide-react";

export default function NewsPage() {
  const EVENTS = [
    {
      month: "OCT",
      day: "25",
      title: "Inter-house Sports Day",
      desc: "This Inter-house Sports Day bun will be comented on regional school.",
      time: "12:00",
    },
    {
      month: "NOV",
      day: "10",
      title: "Parents Evening - Years 3-6",
      desc: "The eventing and students and cave that parents Evening - Years 3-6.",
      time: "12:00",
    },
    {
      month: "NOV",
      day: "21",
      title: "School Play Auditions",
      desc: "School play auditions to react completing, auditions & place.",
      time: "12:00",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7] pb-24 md:pb-12 text-[#1A2E44]">
      {/* 1. Header Area with Pink Background */}
      <div className="bg-[#F7D8D9] pt-12 pb-6 px-5 rounded-b-2xl md:rounded-none z-10 w-full shrink-0">
        <div className="w-full max-w-md mx-auto flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="p-1 -ml-1 hover:bg-white/20 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6 text-[#1A2E44]" strokeWidth={2.5} />
            </Link>
            <div className="font-serif text-[22px] italic font-bold text-[#1A2E44] leading-none tracking-tight text-right">
              Grace
              <br />
              <span className="text-[14px]">Mission</span>
            </div>
          </div>
          <h1 className="font-serif text-[38px] font-bold text-[#1A2E44] tracking-tight leading-none mt-2">
            Latest News & Events
          </h1>
        </div>
      </div>

      <div className="max-w-md mx-auto w-full px-5 pt-8 flex flex-col gap-8 flex-1">
        
        {/* 2. Featured News Overlay */}
        <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white">
          <div className="w-full h-[180px] relative">
            <Image 
              src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=800&q=80&fit=crop" 
              alt="Annual Spring Concert" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="p-6 flex flex-col gap-3">
            <h2 className="font-bold text-[22px] text-[#1A2E44] leading-[1.2] tracking-tight">
              Annual Spring Concert a Resounding Success!
            </h2>
            <p className="text-[14px] text-[#1A2E44]/80 leading-snug">
              The school&apos;s musical talent shone brilliantly last night... eventt a annual spring concert...
            </p>
            <button className="mt-2 bg-[#1A2E44] hover:bg-[#112030] text-[#F7D8D9] px-6 py-2.5 rounded-full text-[14px] font-bold shadow-md transition-colors w-fit">
              Read More
            </button>
          </div>
        </div>

        {/* 3. Upcoming Events List */}
        <div>
          <h2 className="font-bold text-[22px] text-[#1A2E44] mb-5 tracking-tight">
            Upcoming Events
          </h2>
          <div className="flex flex-col gap-4">
            {EVENTS.map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[20px] p-4 flex items-center gap-4 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100"
              >
                {/* Date Circle */}
                <div className="w-[66px] h-[66px] rounded-full bg-[#F7D8D9] flex flex-col items-center justify-center shrink-0">
                  <span className="text-[#1A2E44] text-[13px] font-bold tracking-widest">{item.month}</span>
                  <span className="text-[#1A2E44] text-[24px] font-bold leading-none">{item.day}</span>
                </div>
                
                {/* Details */}
                <div className="flex flex-col gap-1 pr-2">
                  <h3 className="font-bold text-[16px] text-[#1A2E44] leading-tight w-full truncate mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-[#1A2E44]/70 leading-snug">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Clock className="w-4 h-4 text-[#1A2E44]" />
                    <span className="text-[12px] font-bold text-[#1A2E44]">{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
