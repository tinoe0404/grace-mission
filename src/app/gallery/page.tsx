"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("Photos");

  // Simulating Masonry items based on the provided screenshot
  // Each category is split into left and right columns
  const leftColumn = [
    { title: "Classroom Learning", url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80&fit=crop", aspect: "aspect-[4/5]" },
    { title: "Choir Performance", url: "https://images.unsplash.com/photo-1549646440-ae74c86add5f?w=600&q=80&fit=crop", aspect: "aspect-[3/4]" },
    { title: "Junior Play", url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&fit=crop", aspect: "aspect-[2/1]" }
  ];
  
  const rightColumn = [
    { title: "Sports Day", url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80&fit=crop", aspect: "aspect-[3/4]" },
    { title: "Science Lab", url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80&fit=crop", aspect: "aspect-[4/5]" },
    { title: "Art Class", url: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=600&q=80&fit=crop", aspect: "aspect-[3/2]" }
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
          <h1 className="font-serif text-[40px] font-bold text-[#1A2E44] tracking-tight leading-none mt-2">
            Gallery
          </h1>
        </div>
      </div>

      <div className="max-w-md mx-auto w-full px-5 pt-6 flex flex-col gap-6 flex-1">
        {/* 2. Top Slider Tab */}
        <div className="bg-[#1A2E44] rounded-full p-1.5 flex shadow-sm shrink-0">
          <button 
            onClick={() => setActiveTab("Photos")}
            className={`flex-1 py-2.5 rounded-full text-[15px] font-semibold transition-all ${
              activeTab === "Photos" 
                ? "bg-[#F7D8D9] text-[#1A2E44] shadow-sm transform scale-[1.02]" 
                : "text-white/80 hover:text-white"
            }`}
          >
            Photos
          </button>
          <button 
            onClick={() => setActiveTab("Videos")}
            className={`flex-1 py-2.5 rounded-full text-[15px] font-semibold transition-all ${
              activeTab === "Videos" 
                ? "bg-[#F7D8D9] text-[#1A2E44] shadow-sm transform scale-[1.02]" 
                : "text-[#F7D8D9] hover:text-white"
            }`}
          >
            Videos
          </button>
        </div>

        {/* 3. Masonry Layout using Flex Columns */}
        {activeTab === "Photos" ? (
          <div className="flex gap-4 items-start pb-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4 flex-1">
              {leftColumn.map((item, i) => (
                <div key={i} className={`relative w-full ${item.aspect} rounded-[16px] overflow-hidden shadow-sm group`}>
                  <Image src={item.url} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-[15px] font-medium leading-tight text-balance shadow-black drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-4 flex-1 mt-6">
              {rightColumn.map((item, i) => (
                <div key={i} className={`relative w-full ${item.aspect} rounded-[16px] overflow-hidden shadow-sm group`}>
                  <Image src={item.url} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-[15px] font-medium leading-tight text-balance shadow-black drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-[#1A2E44]/20 rounded-3xl opacity-60">
            <h3 className="font-serif text-[24px] text-[#1A2E44] mb-2">Coming Soon</h3>
            <p className="text-[14px]">Video content will be available shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
}
