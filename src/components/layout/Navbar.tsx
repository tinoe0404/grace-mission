"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SCHOOL_DETAILS } from "@/lib/constants";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Academics", 
    href: "/academics",
    sublinks: [
      { name: "Academics Overview", href: "/academics" },
      { name: "O-Level (Form 1–4)", href: "/academics/o-level" },
      { name: "A-Level (Form 5–6)", href: "/academics/a-level" },
    ]
  },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // FIX 8: Inner pages always use scrolled/solid state
  const isHomePage = pathname === "/";
  const isScrolled = !isHomePage || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* FIX 1 — Two distinct background states */}
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-[#3D1A6E] shadow-lg shadow-black/25 border-b-2 border-[#C9920E]"
            : "bg-[rgba(15,5,35,0.75)] backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] border-b border-white/10"
        }`}
        style={{ marginBottom: isHomePage ? "-70px" : "0" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-[70px]">

            {/* FIX 2 — Logo with white background badge */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="bg-white rounded-xl p-1.5 flex items-center justify-center flex-shrink-0 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="Grace Missions High School Crest"
                  width={38}
                  height={38}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif font-bold text-white text-[17px] leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                  Grace Missions
                </span>
                <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-white/80 mt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  High School
                </span>
              </div>
            </Link>

            {/* FIX 3 — Desktop Navigation with gold active dot */}
            <div className="hidden lg:flex items-center space-x-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className="relative px-1 py-2 font-sans text-[14px] font-medium tracking-[0.01em] text-white hover:text-[#C9920E] transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                    >
                      {link.name}
                      {/* Gold dot active indicator */}
                      {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C9920E]" />
                      )}
                    </Link>
                    {link.sublinks && (
                      <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-xl rounded-xl border border-primary-light opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden flex flex-col py-2 z-50">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="px-4 py-2.5 text-sm font-sans text-charcoal hover:bg-primary-light hover:text-primary transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* FIX 4 — Gold "Apply Now" CTA */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <Link 
                href="/admissions"
                className="bg-[#C9920E] text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#b07d0b] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-black/30 flex-shrink-0"
              >
                Apply Now
              </Link>
            </div>

            {/* FIX 7 — Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* FIX 7 — Mobile Menu Drawer (solid purple theme) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-[#3D1A6E] z-[70] shadow-2xl flex flex-col border-l border-[#C9920E]"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="bg-white rounded-xl p-1.5 flex items-center justify-center shadow-md">
                    <Image src="/images/logo.png" alt="Grace Missions School Crest" width={32} height={32} className="object-contain" />
                  </div>
                  <span className="font-bold text-lg text-white font-serif">Grace Missions</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-white/70 hover:text-white transition-colors hover:bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C9920E]"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Nav Links with stagger animation */}
              <div className="flex flex-col p-6 space-y-1 overflow-y-auto flex-grow">
                {NAV_LINKS.map((link, index) => {
                  const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 px-4 rounded-xl text-base font-sans transition-all border-b border-white/10 ${
                          isActive 
                            ? "text-[#C9920E] font-semibold bg-white/10" 
                            : "text-white hover:text-[#C9920E] hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Actions */}
              <div className="mt-auto p-6 flex flex-col gap-4 border-t border-[#C9920E]">
                <Link 
                  href="/admissions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-[#C9920E] text-white py-3.5 rounded-full font-semibold transition-all hover:bg-[#b07d0b] hover:scale-[1.02] active:scale-[0.98] shadow-md min-h-[48px] flex items-center justify-center font-sans"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
