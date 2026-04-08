"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#F4A7C0] text-[#1A3A6B] relative z-[60] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="hidden sm:inline">Term 2 2025 Enrollment Now Open</span>
              <span className="sm:hidden">Term 2 Enrollment Open</span>
              <span className="mx-2 text-[#1A3A6B]/40">|</span>
              <Link 
                href="/admissions" 
                className="font-bold underline underline-offset-2 hover:text-[#E8729A] transition-colors"
              >
                Apply Now
              </Link>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 p-1 hover:bg-[#1A3A6B]/10 rounded-full transition-colors"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
