"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, FileText, Send, UserCheck, CheckCircle2, Loader2 } from "lucide-react";
import { slideInLeft, slideInRight, fadeUp, staggerContainer } from "@/lib/motion";

const STEPS = [
  { id: "01", title: "Apply Online", description: "Fill out the simple digital inquiry form below to register your initial interest.", icon: Send },
  { id: "02", title: "Submit Documents", description: "Bring the required birth, medical, and previous academic records to the administration office.", icon: FileText },
  { id: "03", title: "Interview & Placement", description: "A brief, friendly assessment of the child helps us place them in the optimal class environment.", icon: UserCheck },
];

const REQUIREMENTS = [
  "Child's Birth Certificate (Original & Copy)",
  "Child's Immunization/Health Record",
  "Latest School Report (for Grades 1-7 transfers)",
  "2 Passport-Sized Photographs",
  "Parent/Guardian National ID (Copy)",
  "Proof of Residence (e.g. Utility Bill)"
];

const AGE_REQS = [
  { grade: "ECD A", age: "3 - 4 Years" },
  { grade: "ECD B", age: "4 - 5 Years" },
  { grade: "Grade 1", age: "5.5 - 6.5 Years" },
];

const FEES = [
  { description: "Registration Fee (Once-off)", amount: "$50", type: "fixed" },
  { description: "ECD Tuition (Per Term)", amount: "$150", type: "term" },
  { description: "Primary Tuition (Grades 1-7, Per Term)", amount: "$200", type: "term" },
  { description: "Transport / Bus Levy (Optional)", amount: "$60", type: "term" },
];

// Custom animation variants
const stepVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

const feeRowVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function AdmissionsPage() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface overflow-hidden">
      {/* 1. Page Hero */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-5xl md:text-[56px] text-white font-bold mb-4 tracking-tight"
            >
              Admissions
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-sm text-white/60"
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Admissions</span>
            </motion.div>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[80px]">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* 2. How to apply */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">How to Apply</h2>
            <p className="text-textMuted mt-4 max-w-2xl mx-auto">Our admissions process is designed to be straightforward and welcoming for parents and pupils alike.</p>
          </motion.div>

          <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-4">
            {/* Animated connecting line (desktop) */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block absolute top-[4rem] left-[10%] right-[10%] h-[2px] border-b-2 border-dashed border-gray-200 z-0 origin-left" 
            />

            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={i} 
                  custom={i}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="relative z-10 flex-1 flex flex-col items-center text-center group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-white rounded-full border-4 border-surface shadow-md flex items-center justify-center mb-6 text-primary group-hover:border-secondary/30 group-hover:text-secondary transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <div className="bg-surface w-10 h-10 rounded-full flex items-center justify-center font-bold text-primary text-sm absolute top-12 md:top-12 -ml-20 md:ml-0 translate-y-[-50%] border-2 border-white shadow-sm font-mono">
                    {step.id}
                  </div>
                  <h3 className="font-bold text-xl text-primary mb-3 mt-4 md:mt-0">{step.title}</h3>
                  <p className="text-textMuted text-sm font-medium leading-relaxed max-w-xs">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Requirements */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              variants={slideInLeft as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Required Documents</h2>
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100">
                <ul className="space-y-5">
                  {REQUIREMENTS.map((req, i) => (
                    <motion.li 
                      key={i} 
                      custom={i}
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ x: 8 }}
                      className="flex items-start gap-4 text-textPrimary font-medium"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="mt-0.5 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                      </motion.div>
                      <span className="leading-tight pt-0.5">{req}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Age Requirements</h2>
              <div className="space-y-4">
                {AGE_REQS.map((req, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ scale: 1.02, x: 8 }}
                    className="flex items-center justify-between bg-white p-6 rounded-2xl border border-gray-200 shadow-sm cursor-default"
                  >
                    <span className="font-bold text-primary text-lg">{req.grade}</span>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="bg-primary/5 text-primary px-4 py-1.5 rounded-full font-medium text-sm border border-primary/10"
                    >
                      {req.age}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-sm text-textMuted leading-relaxed max-w-sm">
                * Please note that age cut-offs are strictly observed for Grade 1 intake to comply with national guidelines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Fees Structure */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Fees Structure</h2>
            <p className="text-textMuted mt-4">Transparent tuition fees with no hidden costs.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200"
          >
            <div className="grid grid-cols-4 bg-primary text-white p-6 md:p-8">
              <div className="col-span-3 font-bold text-lg tracking-wide uppercase text-sm">Description</div>
              <div className="col-span-1 text-right font-bold text-lg tracking-wide uppercase text-sm">Amount</div>
            </div>
            <div className="divide-y divide-gray-100">
              {FEES.map((fee, i) => (
                <motion.div 
                  key={i} 
                  custom={i}
                  variants={feeRowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ backgroundColor: "rgba(247, 248, 250, 0.8)" }}
                  className="grid grid-cols-4 p-6 md:p-8 pb-5 transition-colors"
                >
                  <div className="col-span-3">
                    <span className="block font-bold text-primary md:text-lg mb-1">{fee.description}</span>
                    <span className="text-xs uppercase tracking-wider text-textMuted font-bold">{fee.type === "fixed" ? "ONCE-OFF" : "PER TERM"}</span>
                  </div>
                  <div className="col-span-1 text-right flex items-center justify-end">
                    <motion.span 
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                      className="font-bold text-2xl text-secondary"
                    >
                      {fee.amount}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Inquiry Form */}
      <section className="py-20 md:py-28 bg-[#1A3A6B] text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #ffffff 0%, transparent 50%)' }} />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 font-bold tracking-tight">Start Your Enrollment</h2>
            <p className="text-white/70 text-lg">Send us a direct inquiry and our admissions office will contact you within 24 hours.</p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6" 
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                animate={{ scale: focusedField === "parentName" ? 1.02 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-white/80 mb-2 ml-1">Parent&apos;s Full Name</label>
                <input 
                  type="text" 
                  onFocus={() => setFocusedField("parentName")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === "parentName" ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              <motion.div 
                animate={{ scale: focusedField === "childName" ? 1.02 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-white/80 mb-2 ml-1">Child&apos;s Full Name</label>
                <input 
                  type="text" 
                  onFocus={() => setFocusedField("childName")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="Jane Doe"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === "childName" ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                animate={{ scale: focusedField === "grade" ? 1.02 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-white/80 mb-2 ml-1">Grade Applying For</label>
                <select 
                  onFocus={() => setFocusedField("grade")}
                  onBlur={() => setFocusedField(null)}
                  defaultValue=""
                  className="w-full bg-[#1e447d] border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none"
                >
                  <option value="" disabled>Select a grade</option>
                  <option value="ecd-a">ECD A</option>
                  <option value="ecd-b">ECD B</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="transfer">Grade 3-7 Transfer</option>
                </select>
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === "grade" ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div 
                animate={{ scale: focusedField === "phone" ? 1.02 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-white/80 mb-2 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="+263 77 000 0000"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === "phone" ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </div>

            <motion.div 
              animate={{ scale: focusedField === "message" ? 1.01 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <label className="block text-sm font-medium text-white/80 mb-2 ml-1">Additional Message (Optional)</label>
              <textarea 
                rows={4}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                placeholder="Any special inquiries?"
              />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <div className="pt-4 text-center">
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-white font-bold text-lg px-12 py-4 rounded-full shadow-[0_4px_20px_rgba(232,114,154,0.4)] hover:shadow-[0_6px_25px_rgba(232,114,154,0.6)] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Inquiry"
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

    </div>
  );
}
