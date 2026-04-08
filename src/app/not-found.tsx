"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-surface text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-12 md:p-16 rounded-[3rem] border border-gray-100 shadow-xl"
      >
        <h1 className="font-serif text-8xl md:text-9xl text-primary font-bold mb-4 tracking-tight">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Page Not Found</h2>
        <p className="text-textMuted text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-[0_4px_20px_rgba(232,114,154,0.4)]"
        >
          <ChevronLeft className="w-5 h-5" />
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
