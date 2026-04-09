"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, BookOpen, FlaskConical, Pi, Feather } from "lucide-react";

const TABS = ["Curriculum", "Extra-Curricular", "Calendar"];

const CURRICULUM = [
  {
    id: "mathematics",
    title: "Mathematics",
    description: "Building a strong foundation in numbers and problem-solving.",
    Icon: () => (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <Calculator className="w-[30px] h-[30px] text-[#1A2E44] z-10" strokeWidth={1.5} />
        <div className="absolute top-0 right-0 bg-white rounded-full p-0.5">
          <Pi className="w-5 h-5 text-[#1A2E44]" strokeWidth={2.5} />
        </div>
      </div>
    )
  },
  {
    id: "literacy",
    title: "Literacy",
    description: "Developing critical reading, writing, and communication skills.",
    Icon: () => (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <BookOpen className="w-[30px] h-[30px] text-[#1A2E44] z-10" strokeWidth={1.5} />
        <Feather className="w-5 h-5 text-[#1A2E44] absolute -top-1 -right-1 transform rotate-12 bg-white rounded-full" strokeWidth={2} />
      </div>
    )
  },
  {
    id: "science",
    title: "Science",
    description: "Exploring the natural world through hands-on experiments.",
    Icon: () => (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <FlaskConical className="w-[30px] h-[30px] text-[#1A2E44] z-10" strokeWidth={1.5} />
        <div className="absolute top-2 right-1 flex space-x-0.5">
          <div className="w-1.5 h-1.5 rounded-full border border-[#1A2E44] bg-white" />
        </div>
      </div>
    )
  }
];

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState("Curriculum");

  return (
    <div className="flex flex-col min-h-screen bg-white pb-24 md:pb-12 relative overflow-hidden">
      {/* Solid pink header block */}
      <div className="absolute top-0 left-0 right-0 h-[260px] bg-[#F7D8D9]" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-md mx-auto pt-14 px-5 flex flex-col min-h-screen">
        {/* Header Text */}
        <div className="text-center mb-6">
          <p className="text-sm font-semibold text-[#1A2E44] mb-5 tracking-wide">Grace Mission - Academics</p>
          <h1 className="font-serif text-[42px] leading-[1.1] text-[#1A2E44] tracking-tight mb-8">
            Primary<br />Excellence
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide border-b border-white/40 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 text-[14px] font-medium whitespace-nowrap transition-colors ${
                activeTab === tab ? "text-[#1A2E44]" : "text-[#1A2E44]/60"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="academicsTab"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#E1AFA8]"
                  style={{ borderRadius: "2px" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "Curriculum" && (
            <motion.div
              key="curriculum"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col gap-4 pb-20"
            >
              {CURRICULUM.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-[20px] p-5 flex items-start gap-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100/50"
                >
                  <div className="shrink-0 mt-1">
                    <item.Icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[17px] text-[#1A2E44] mb-1">{item.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-snug mb-3">
                      {item.description}
                    </p>
                    <button className="bg-[#F7D8D9]/70 hover:bg-[#F7D8D9] transition-colors text-[#1A2E44] text-[11px] font-bold px-3 py-1.5 rounded-lg inline-flex">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab !== "Curriculum" && (
            <motion.div
              key="other"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-white/50 rounded-[20px] border border-gray-100"
            >
              <p className="text-gray-500 font-medium">{activeTab} section coming soon.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Download Prospectus Sticky Floating Button */}
        <div className="fixed bottom-[88px] left-0 right-0 px-5 max-w-md mx-auto z-20 md:absolute md:bottom-6">
          <button className="w-full bg-[#F7D8D9] hover:bg-[#F0C9CB] transition-colors text-[#1A2E44] font-semibold py-3.5 rounded-[14px] shadow-sm text-[14px]">
            Download Prospectus
          </button>
        </div>
      </div>
    </div>
  );
}
