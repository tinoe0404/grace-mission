"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";
import { SCHOOL_DETAILS } from "@/lib/constants";

export default function ContactPage() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const CONTACT_INFO = [
    { icon: Phone, title: "Phone", detail: SCHOOL_DETAILS.phone, link: `tel:${SCHOOL_DETAILS.phone.replace(/[^0-9+]/g, "")}` },
    { icon: Mail, title: "Email", detail: SCHOOL_DETAILS.email, link: `mailto:${SCHOOL_DETAILS.email}` },
    { icon: MapPin, title: "Location", detail: SCHOOL_DETAILS.location, link: "#map" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface overflow-hidden">
      {/* 1. Page Hero */}
      <section className="bg-primary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeUp as any}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-4 tracking-tight">Contact Us</h1>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-secondary font-medium">Contact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="pt-20 pb-10 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {CONTACT_INFO.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a 
                  key={i}
                  href={info.link}
                  variants={fadeUp as any}
                  className="bg-white rounded-3xl p-8 flex flex-col items-center text-center text-primary group border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  <p className="text-textMuted font-medium group-hover:text-secondary transition-colors duration-300">{info.detail}</p>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. Split Layout: Form and Map */}
      <section className="py-10 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Contact Form */}
            <motion.div
              variants={slideInLeft as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-primary mb-2 tracking-tight">Send a Message</h2>
              <p className="text-textMuted mb-8 text-sm">We'd love to hear from you. Fill out the form below and we'll be in touch shortly.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <label className={`block text-sm font-semibold mb-2 transition-colors ${focusedField === "name" ? "text-primary" : "text-textMuted"}`}>Full Name</label>
                  <div className="relative overflow-hidden rounded-xl bg-gray-50 border border-gray-200">
                    <input 
                      type="text" 
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent px-4 py-3.5 text-textPrimary placeholder-gray-400 focus:outline-none focus:ring-0"
                      placeholder="Jane Doe"
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className={`block text-sm font-semibold mb-2 transition-colors ${focusedField === "email" ? "text-primary" : "text-textMuted"}`}>Email Address</label>
                    <div className="relative overflow-hidden rounded-xl bg-gray-50 border border-gray-200">
                      <input 
                        type="email" 
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent px-4 py-3.5 text-textPrimary placeholder-gray-400 focus:outline-none focus:ring-0"
                        placeholder="jane@example.com"
                      />
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className={`block text-sm font-semibold mb-2 transition-colors ${focusedField === "phone" ? "text-primary" : "text-textMuted"}`}>Phone Number</label>
                    <div className="relative overflow-hidden rounded-xl bg-gray-50 border border-gray-200">
                      <input 
                        type="tel" 
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent px-4 py-3.5 text-textPrimary placeholder-gray-400 focus:outline-none focus:ring-0"
                        placeholder="+263 77 000 0000"
                      />
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === "phone" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className={`block text-sm font-semibold mb-2 transition-colors ${focusedField === "subject" ? "text-primary" : "text-textMuted"}`}>Subject</label>
                  <div className="relative overflow-hidden rounded-xl bg-gray-50 border border-gray-200">
                    <input 
                      type="text" 
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent px-4 py-3.5 text-textPrimary placeholder-gray-400 focus:outline-none focus:ring-0"
                      placeholder="How can we help you?"
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === "subject" ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className={`block text-sm font-semibold mb-2 transition-colors ${focusedField === "message" ? "text-primary" : "text-textMuted"}`}>Message</label>
                  <div className="relative overflow-hidden rounded-xl bg-gray-50 border border-gray-200">
                    <textarea 
                      rows={5}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent px-4 py-3.5 text-textPrimary placeholder-gray-400 focus:outline-none focus:ring-0 resize-none"
                      placeholder="Type your message here..."
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#11284d] transition-colors group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Right Side: Map and Office Hours */}
            <div className="flex flex-col gap-8 h-full">
              <motion.div
                variants={slideInRight as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-start gap-5"
              >
                <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-3">Office Hours</h3>
                  <ul className="space-y-2 text-textPrimary/80 font-medium">
                    <li className="flex justify-between border-b border-gray-50 pb-2">
                      <span>Monday - Friday</span>
                      <span className="text-primary font-bold">07:30 - 16:30</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-50 py-2">
                      <span>Saturday</span>
                      <span className="text-textMuted">Closed</span>
                    </li>
                    <li className="flex justify-between pt-2">
                      <span>Sunday</span>
                      <span className="text-textMuted">Closed</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <p className="text-sm font-medium text-primary">
                      <span className="font-bold text-secondary">Note:</span> We are highly responsive on WhatsApp during working hours. Please use the floating icon to chat with us immediately!
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                id="map"
                variants={slideInRight as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative w-full flex-grow min-h-[350px] bg-gray-200 rounded-3xl overflow-hidden shadow-sm group"
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10 pointer-events-none" />
                {/* Mocking a Google Map Embed with a styling overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <MapPin className="text-secondary w-12 h-12 mb-2 z-10" />
                  <p className="font-bold text-primary font-mono text-xs uppercase tracking-widest bg-white/80 px-3 py-1 rounded backdrop-blur-sm z-10">Map Placeholder</p>
                </div>
                <div className="absolute inset-0 bg-[#e5e3df] z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M29.5 0.5V29.5H0.5\" stroke=\"%23cccccc\" stroke-width=\"1\"/%3E%3C/svg%3E')", backgroundSize: "30px 30px" }} />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Bottom Banner block */}
      <section className="bg-primary py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
            <span className="text-secondary font-bold text-2xl font-serif">GM</span>
          </div>
          <h2 className="text-3xl font-bold mb-8 tracking-tight">Grace Mission Primary School</h2>
          
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-12 text-white/80 font-medium mb-10 w-full max-w-4xl mx-auto">
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-secondary" /> {SCHOOL_DETAILS.location}</span>
            <span className="flex items-center gap-2"><Phone className="w-5 h-5 text-secondary" /> {SCHOOL_DETAILS.phone}</span>
            <span className="flex items-center gap-2"><Mail className="w-5 h-5 text-secondary" /> {SCHOOL_DETAILS.email}</span>
          </div>

          <div className="flex items-center gap-5">
            <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:scale-110 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="#" aria-label="Twitter" className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:scale-110 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:scale-110 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
