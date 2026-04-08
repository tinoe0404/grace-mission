"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { SCHOOL_DETAILS } from "@/lib/constants";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      type: "spring" as const,
      stiffness: 200,
    },
  }),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      label: "Facebook", 
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    { 
      label: "Twitter", 
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      )
    },
    { 
      label: "Instagram", 
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Academics", href: "/academics" },
    { label: "Admissions Info", href: "/admissions" },
    { label: "Gallery", href: "/gallery" },
    { label: "Latest News", href: "/news" },
  ];

  return (
    <footer className="bg-[#1A1A2E] text-white pt-16 lg:pt-20 border-t-[3px] border-secondary overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'#ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Column 1: School Info */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg border border-white/10 ring-4 ring-white/5"
              >
                <span className="text-secondary font-bold text-xl font-serif">GM</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl leading-tight text-white tracking-tight">Grace Mission</span>
                <span className="text-sm font-medium text-white/80 tracking-wide text-secondary/90">Primary School</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              &quot;{SCHOOL_DETAILS.tagline}&quot;. Providing a Christ-centered, excellent education that prepares students for a life of purpose, leadership, and service.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={social.label}
                  href={social.href} 
                  aria-label={social.label} 
                  custom={i}
                  variants={socialIconVariants}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-4 lg:pl-12">
            <h3 className="text-xl font-bold mb-6 text-white tracking-wide">Quick Links</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link, i) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={link.href} className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center gap-3 group">
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-secondary transition-colors"
                      whileHover={{ scale: 2 }}
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Details */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <h3 className="text-xl font-bold mb-6 text-white tracking-wide">Contact Us</h3>
            <ul className="space-y-5">
              <motion.li 
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 text-gray-400 text-sm"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <span className="leading-relaxed pt-1">{SCHOOL_DETAILS.location}</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 text-gray-400 text-sm"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <span className="pt-0.5">{SCHOOL_DETAILS.phone}</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 text-gray-400 text-sm"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <a href={`mailto:${SCHOOL_DETAILS.email}`} className="hover:text-white transition-colors pt-0.5">{SCHOOL_DETAILS.email}</a>
              </motion.li>
            </ul>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-secondary text-white border border-white/10 hover:border-secondary px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group"
              >
                Send a Message
                <motion.svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/10 bg-black/40 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} {SCHOOL_DETAILS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
