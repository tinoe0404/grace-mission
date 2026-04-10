"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { SCHOOL_DETAILS } from "@/lib/constants";

const FORM_1_DOCS = [
  "Grade 7 Results Certificate (Original + Copy)",
  "Birth Certificate (Original + Copy)",
  "Immunization / Health Record",
  "2 Passport-Sized Photographs",
  "Parent/Guardian National ID (Copy)",
  "Proof of Residence (Utility Bill)",
];

const FORM_5_DOCS = [
  "O-Level Results Certificate (Original + Copy)",
  "Birth Certificate (Original + Copy)",
  "2 Passport-Sized Photographs",
  "Parent/Guardian National ID (Copy)",
  "Proof of Residence",
];

const AGE_REQUIREMENTS = [
  { level: "Form 1", age: "~13 years (Grade 7 completers)" },
  { level: "Form 2", age: "~14 years" },
  { level: "Form 3", age: "~15 years (O-Level begins)" },
  { level: "Form 4", age: "~16 years (O-Level examination year)" },
  { level: "Form 5", age: "~17 years (A-Level begins, O-Level required)" },
  { level: "Form 6", age: "~18 years (A-Level examination year)" },
];

const FEES = [
  { item: "Registration Fee", amount: "$75", tag: "ONCE-OFF" },
  { item: "Form 1–2 Tuition", amount: "$250", tag: "PER TERM" },
  { item: "Form 3–4 Tuition / O-Level", amount: "$300", tag: "PER TERM" },
  { item: "Form 5–6 Tuition / A-Level", amount: "$350", tag: "PER TERM" },
  { item: "ZIMSEC Exam Registration (Form 4)", amount: "$120", tag: "ONCE-OFF" },
  { item: "ZIMSEC Exam Registration (Form 6)", amount: "$150", tag: "ONCE-OFF" },
  { item: "Sport & Activities Levy", amount: "$40", tag: "PER TERM" },
  { item: "Transport / Bus Levy (optional)", amount: "$60", tag: "PER TERM" },
];

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    childName: "", dob: "", gender: "", grade: "", parentName: "", phone: "", email: "", address: "", currentSchool: "", olevelResults: ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="Admissions" breadcrumb="Admissions" image="/images/hoyo/IMG_6966.JPG" objectPosition="center 30%" overlayIntensity="medium" />

      {/* How to Apply */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Simple Process</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">How to Apply</h2>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8 md:gap-0">
            {[
              { step: "01", title: "Submit Application", body: "Complete the inquiry form below. Our admissions office will contact you within 24 hours.", icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg> },
              { step: "02", title: "Submit Documents", body: "Bring Grade 7 results (Form 1 entry) or O-Level results (Form 5 entry) with certified copies to the administration office.", icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg> },
              { step: "03", title: "Assessment & Interview", body: "All Form 1 applicants write a placement assessment. A friendly interview follows.", icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> },
              { step: "04", title: "Offer & Acceptance", body: "Successful applicants receive a written offer letter. A non-refundable registration fee secures the place.", icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
            ].map((s, i) => (
              <div key={i} className="flex items-start md:flex-col md:items-center gap-4 md:gap-0 flex-1">
                <div className="relative">
                  <span className="font-mono text-5xl font-bold text-primary/10 absolute -top-8 -left-2 md:-top-10 md:left-1/2 md:-translate-x-1/2 select-none">{s.step}</span>
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center relative z-10">{s.icon}</div>
                </div>
                {i < 3 && <div className="hidden md:block flex-1 h-px bg-primary/20 mx-4 mt-7" />}
                <div className="md:text-center md:mt-4">
                  <h3 className="font-serif text-xl text-charcoal">{s.title}</h3>
                  <p className="font-sans text-sm text-muted mt-1 max-w-xs">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents + Age Requirements */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Checklist</span>
              <h2 className="font-serif text-3xl text-charcoal mb-8">Required Documents</h2>
              <div className="space-y-4 mb-8">
                <h3 className="font-sans font-bold text-sm text-charcoal">For Form 1 Entry:</h3>
                {FORM_1_DOCS.map((doc) => (
                  <div key={doc} className="flex items-start gap-3">
                    <span className="bg-primary-light text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <span className="font-sans text-[15px] text-charcoal leading-snug">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="font-sans font-bold text-sm text-charcoal">For Form 5 Entry (A-Level):</h3>
                {FORM_5_DOCS.map((doc) => (
                  <div key={doc} className="flex items-start gap-3">
                    <span className="bg-primary-light text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <span className="font-sans text-[15px] text-charcoal leading-snug">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="font-serif text-xl text-white mb-6">Age Requirements</h3>
              {AGE_REQUIREMENTS.map((req, i) => (
                <div key={i} className={`flex justify-between py-3 ${i < AGE_REQUIREMENTS.length - 1 ? "border-b border-white/10" : ""}`}>
                  <span className="font-sans text-sm text-white/80">{req.level}</span>
                  <span className="font-mono font-bold text-gold">{req.age}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fees Structure */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">Investment</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">Fee Structure</h2>
          </div>
          <div className="bg-white border border-primary-light rounded-2xl overflow-hidden shadow-card">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-sans text-sm font-semibold">Item</th>
                  <th className="px-6 py-4 text-right font-sans text-sm font-semibold">Amount (USD)</th>
                </tr>
              </thead>
              <tbody>
                {FEES.map((fee, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-primary-light/30" : "bg-white"}>
                    <td className="px-6 py-4 font-sans text-sm text-charcoal">{fee.item}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-mono font-bold text-primary">{fee.amount}</span>
                      <span className="bg-accent-light text-accent text-[10px] uppercase tracking-wide font-semibold px-2 py-0.5 rounded-full ml-2">{fee.tag}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-white border border-primary-light rounded-2xl p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-charcoal mb-2">Enrollment Inquiry</h2>
                <p className="font-sans text-sm text-muted mb-8">Fill in the details below and we&apos;ll get back to you within 48 hours.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-1">
                    <label className="font-sans text-sm font-medium text-charcoal mb-1 block">Child&apos;s Full Name</label>
                    <input type="text" value={formData.childName} onChange={(e) => handleChange("childName", e.target.value)} placeholder="e.g., John Doe" className="w-full border border-primary-light rounded-xl px-4 py-3 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-charcoal placeholder:text-muted/50" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="font-sans text-sm font-medium text-charcoal mb-1 block">Parent&apos;s Email</label>
                    <input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="parent@email.com" className="w-full border border-primary-light rounded-xl px-4 py-3 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-charcoal placeholder:text-muted/50" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="font-sans text-sm font-medium text-charcoal mb-1 block">Phone Number</label>
                    <input type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+263 77 000 0000" className="w-full border border-primary-light rounded-xl px-4 py-3 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-charcoal placeholder:text-muted/50" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="font-sans text-sm font-medium text-charcoal mb-1 block">Level Applying For</label>
                    <select value={formData.grade} onChange={(e) => handleChange("grade", e.target.value)} className="w-full border border-primary-light rounded-xl px-4 py-3 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-charcoal">
                      <option value="">Select level</option>
                      {["Form 1 (New Entry)", "Form 2 (Transfer)", "Form 3 (Transfer)", "Form 4 (Transfer)", "Form 5 / A-Level (New Entry)", "Form 6 (Transfer)"].map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-1">
                    <label className="font-sans text-sm font-medium text-charcoal mb-1 block">Current School</label>
                    <input type="text" value={formData.currentSchool} onChange={(e) => handleChange("currentSchool", e.target.value)} placeholder="Name of current school" className="w-full border border-primary-light rounded-xl px-4 py-3 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-charcoal placeholder:text-muted/50" />
                  </div>
                  {(formData.grade.includes("Form 5") || formData.grade.includes("Form 6")) && (
                    <div className="sm:col-span-2">
                      <label className="font-sans text-sm font-medium text-charcoal mb-1 block">O-Level Results (e.g. Maths A, English B)</label>
                      <textarea value={formData.olevelResults} onChange={(e) => handleChange("olevelResults", e.target.value)} placeholder="Please list subjects and grades" rows={3} className="w-full border border-primary-light rounded-xl px-4 py-3 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-charcoal placeholder:text-muted/50" />
                    </div>
                  )}
                </div>
                <button className="w-full bg-gold text-white font-sans font-semibold py-4 rounded-xl text-base hover:bg-[#b07d0b] active:scale-[0.99] mt-6 transition-all">
                  Submit Inquiry
                </button>
              </div>
            </div>

            {/* Info Card with Image */}
            <div className="md:col-span-2 space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-primary/5">
                <Image src="/images/hoyo/IMG_6966.JPG" alt="Students in uniform at school entrance" fill className="object-cover" style={{ objectPosition: "center 30%" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-serif text-lg text-white font-semibold">Join our family</p>
                  <p className="font-sans text-sm text-white/80 mt-1">Applications are open for the upcoming term.</p>
                </div>
              </div>
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="font-serif text-xl text-white mb-4">Need Help?</h3>
                <div className="space-y-2 font-sans text-sm text-white/70 mb-4">
                  <p>📞 {SCHOOL_DETAILS.phone}</p>
                  <p>📧 {SCHOOL_DETAILS.email}</p>
                  <p>📍 Marlborough, Harare</p>
                </div>
                <a
                  href={`https://wa.me/${SCHOOL_DETAILS.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-sans text-sm font-semibold flex items-center gap-2 w-fit hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
