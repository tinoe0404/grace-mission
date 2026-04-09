"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-accent text-white relative z-[60] overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-center gap-3 text-[13px] font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">Term 2 2025 Enrollment Now Open</span>
              <span className="sm:hidden">Term 2 Enrollment Open</span>
              <span className="mx-2 text-white/50">|</span>
              <Link 
                href="/admissions" 
                className="font-bold underline underline-offset-2 hover:text-white/80 transition-colors"
              >
                Apply Now
              </Link>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss announcement"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
