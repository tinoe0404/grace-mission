"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SCHOOL_DETAILS } from "@/lib/constants";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
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
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
          boxShadow: isScrolled ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" : "none",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? "backdrop-blur-md" : ""}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex flex-col group shrink-0">
              <span className={`font-bold text-2xl font-serif tracking-tight leading-none transition-colors duration-300 ${isScrolled ? "text-primary" : "text-white"}`}>
                Grace Mission
              </span>
              <span className={`text-[11px] font-sans uppercase tracking-wide mt-1 transition-colors duration-300 ${isScrolled ? "text-primary" : "text-white/80"}`}>
                Primary School
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-1 py-2 font-sans text-[14px] transition-colors group"
                  >
                    <span className={`transition-colors duration-300 ${
                      isScrolled 
                        ? (isActive ? "text-primary font-medium underline underline-offset-4" : "text-muted hover:text-primary") 
                        : (isActive ? "text-white font-medium underline underline-offset-4" : "text-white/80 hover:text-white drop-shadow-sm")
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <Link 
                href="/admissions"
                className="bg-gold text-white px-5 py-2 rounded-full font-sans transition-all duration-200 hover:scale-[1.02] hover:bg-[#b0800c]"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2 -mr-2 rounded-md transition-colors duration-300 ${isScrolled ? "text-primary" : "text-white"}`}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
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
              className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[60]"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <span className="font-bold text-xl text-primary font-serif">Grace Mission</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-muted hover:text-primary transition-colors hover:bg-cream rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className={`block py-3 px-4 rounded-xl text-lg font-sans transition-all ${
                          isActive 
                            ? "text-primary font-medium underline underline-offset-4 bg-primary-light/50" 
                            : "text-charcoal hover:text-primary hover:bg-cream"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Actions */}
              <div className="mt-auto p-6 flex flex-col gap-4 border-t border-gray-100 bg-cream">
                <Link 
                  href="/admissions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-gold text-white py-3.5 rounded-full font-semibold transition-transform hover:scale-[1.02] shadow-sm min-h-[48px] flex items-center justify-center font-sans"
                >
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
