"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { SCHOOL_DETAILS } from "@/lib/constants";

const OFFICE_HOURS = [
  { day: "Monday – Friday", hours: "7:30 AM – 4:30 PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="Contact Us" breadcrumb="Contact" image="https://images.unsplash.com/photo-1580894732444-8ecbef79bd14?w=1200&q=80&auto=format&fit=crop" />

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { label: "PHONE", value: SCHOOL_DETAILS.phone, href: `tel:${SCHOOL_DETAILS.phone.replace(/\s/g, "")}`, icon: <svg className="w-[22px] h-[22px] text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg> },
              { label: "EMAIL", value: SCHOOL_DETAILS.email, href: `mailto:${SCHOOL_DETAILS.email}`, icon: <svg className="w-[22px] h-[22px] text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg> },
              { label: "LOCATION", value: "Marlborough, Harare, Zimbabwe", href: "#map", icon: <svg className="w-[22px] h-[22px] text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" /></svg> },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-primary-light rounded-2xl p-8 text-center hover:shadow-md hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-14 h-14 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">{card.icon}</div>
                <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted mb-2">{card.label}</p>
                <a href={card.href} className="font-serif text-lg text-charcoal hover:text-primary transition-colors">{card.value}</a>
              </div>
            ))}
          </div>

          {/* Contact Form + Info */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-white border border-primary-light rounded-2xl p-10 shadow-sm">
                <h2 className="font-serif text-2xl text-charcoal mb-2">Send us a message</h2>
                <p className="font-sans text-sm text-muted mb-8">We&apos;ll respond within 24-48 business hours.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-sm font-medium text-charcoal mb-1 block">Full Name</label>
                    <input type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Jane Doe" className="w-full border border-primary-light rounded-xl px-4 py-3 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-charcoal placeholder:text-muted/50" />
                  </div>
                  <div>
                    <label className="font-sans text-sm font-medium text-charcoal mb-1 block">Email Address</label>
                    <input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="you@example.com" className="w-full border border-primary-light rounded-xl px-4 py-3 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-charcoal placeholder:text-muted/50" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="font-sans text-sm font-medium text-charcoal mb-1 block">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+263 77 000 0000" className="w-full border border-primary-light rounded-xl px-4 py-3 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-charcoal placeholder:text-muted/50" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="font-sans text-sm font-medium text-charcoal mb-1 block">Subject</label>
                    <input type="text" value={form.subject} onChange={(e) => handleChange("subject", e.target.value)} placeholder="What is this about?" className="w-full border border-primary-light rounded-xl px-4 py-3 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-charcoal placeholder:text-muted/50" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="font-sans text-sm font-medium text-charcoal mb-1 block">Message</label>
                    <textarea rows={5} value={form.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Tell us more..." className="w-full border border-primary-light rounded-xl px-4 py-3 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-charcoal placeholder:text-muted/50 resize-none min-h-[140px]" />
                  </div>
                </div>
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-sans font-semibold hover:bg-primary-mid active:scale-[0.99] mt-4 transition-all inline-flex items-center gap-2">
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                </button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="md:col-span-2 space-y-6">
              {/* Office Hours */}
              <div className="bg-primary-light rounded-2xl p-8">
                <h3 className="font-serif text-xl text-primary mb-5">Office Hours</h3>
                {OFFICE_HOURS.map((row, i) => (
                  <div key={i} className={`flex justify-between font-sans text-sm py-3 ${i < OFFICE_HOURS.length - 1 ? "border-b border-primary/10" : ""}`}>
                    <span className="text-charcoal font-medium">{row.day}</span>
                    <span className={row.hours === "Closed" ? "text-muted/50 italic" : "text-muted"}>{row.hours}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp Card */}
              <div className="bg-[#25D366] rounded-2xl p-8 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white mb-3"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                <h3 className="font-serif text-xl text-white">Chat with us</h3>
                <p className="font-sans text-sm text-white/80 mt-2">Get instant answers to your questions via WhatsApp during office hours.</p>
                <a
                  href={`https://wa.me/${SCHOOL_DETAILS.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#128C7E] font-sans font-semibold px-6 py-3 rounded-full text-sm mt-5 inline-block hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div id="map" className="mt-12">
            <div className="bg-primary-light rounded-2xl h-[300px] w-full flex flex-col items-center justify-center">
              <svg className="w-12 h-12 text-primary/40 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" /></svg>
              <p className="font-serif text-lg text-primary">Grace Mission Primary School</p>
              <p className="font-sans text-sm text-muted mt-1">123 Grace Mission Road, Marlborough, Harare</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
