"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  // A template file is inherently re-mounted by Next.js App Router on every navigation,
  // making it the perfect boundary for entry transition animations.
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(5px)", y: 15 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
