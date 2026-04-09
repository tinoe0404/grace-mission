"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ChevronLeft, CheckCircle2, Download, Home, Calendar } from "lucide-react";

// ─── TYPES ───
type FormData = {
  fullName: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "";
  grade: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  address: string;
};

const INITIAL_FORM: FormData = {
  fullName: "",
  dateOfBirth: "",
  gender: "",
  grade: "",
  parentName: "",
  parentPhone: "",
  parentEmail: "",
  address: "",
};

const GRADES = ["ECD A", "ECD B", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7"];

// ─── PROGRESS BAR ───
function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-1 w-full max-w-sm mx-auto mb-8">
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          className={`flex-1 h-2 rounded-full transition-colors duration-300 ${
            s < step
              ? "bg-secondary"
              : s === step
              ? "bg-primary"
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

// ─── STEP 1: Child's Information ───
function Step1({
  data,
  onChange,
  onNext,
}: {
  data: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-primary text-center mb-1">
        Step 1 of 3: Child&apos;s Information
      </h2>
      <ProgressBar step={1} />

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-textPrimary mb-1.5">Full Name</label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="e.g., John Doe"
            className="w-full border-2 border-secondary/30 rounded-xl px-4 py-3 text-textPrimary placeholder:text-textMuted/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all bg-white"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-textPrimary mb-1.5">Date of Birth</label>
          <div className="relative">
            <input
              type="date"
              value={data.dateOfBirth}
              onChange={(e) => onChange("dateOfBirth", e.target.value)}
              className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 text-textPrimary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all bg-white appearance-none"
            />
            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40 pointer-events-none" />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-textPrimary mb-1.5">Gender</label>
          <div className="flex rounded-xl overflow-hidden border-2 border-primary/20">
            <button
              type="button"
              onClick={() => onChange("gender", "Male")}
              className={`flex-1 py-3 text-sm font-semibold transition-all ${
                data.gender === "Male"
                  ? "bg-secondary text-white"
                  : "bg-white text-textPrimary hover:bg-gray-50"
              }`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => onChange("gender", "Female")}
              className={`flex-1 py-3 text-sm font-semibold transition-all border-l-2 border-primary/20 ${
                data.gender === "Female"
                  ? "bg-secondary text-white"
                  : "bg-white text-textPrimary hover:bg-gray-50"
              }`}
            >
              Female
            </button>
          </div>
        </div>

        {/* Grade */}
        <div>
          <label className="block text-sm font-medium text-textPrimary mb-1.5">Applying for Grade</label>
          <input
            type="text"
            value={data.grade}
            onChange={(e) => onChange("grade", e.target.value)}
            placeholder="e.g., Grade 1"
            list="grades"
            className="w-full border-2 border-secondary/30 rounded-xl px-4 py-3 text-textPrimary placeholder:text-textMuted/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all bg-white"
          />
          <datalist id="grades">
            {GRADES.map((g) => (
              <option key={g} value={g} />
            ))}
          </datalist>
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!data.fullName || !data.gender || !data.grade}
        className="w-full mt-8 py-3.5 bg-secondary text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
      >
        Continue
      </button>
    </motion.div>
  );
}

// ─── STEP 2: Parent/Guardian Information ───
function Step2({
  data,
  onChange,
  onNext,
  onBack,
}: {
  data: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-primary text-center mb-1">
        Step 2 of 3: Parent/Guardian
      </h2>
      <ProgressBar step={2} />

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-textPrimary mb-1.5">Parent/Guardian Name</label>
          <input
            type="text"
            value={data.parentName}
            onChange={(e) => onChange("parentName", e.target.value)}
            placeholder="e.g., Jane Doe"
            className="w-full border-2 border-secondary/30 rounded-xl px-4 py-3 text-textPrimary placeholder:text-textMuted/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-textPrimary mb-1.5">Phone Number</label>
          <input
            type="tel"
            value={data.parentPhone}
            onChange={(e) => onChange("parentPhone", e.target.value)}
            placeholder="+263 77 000 0000"
            className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 text-textPrimary placeholder:text-textMuted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-textPrimary mb-1.5">Email Address</label>
          <input
            type="email"
            value={data.parentEmail}
            onChange={(e) => onChange("parentEmail", e.target.value)}
            placeholder="parent@email.com"
            className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 text-textPrimary placeholder:text-textMuted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-textPrimary mb-1.5">Home Address</label>
          <textarea
            rows={3}
            value={data.address}
            onChange={(e) => onChange("address", e.target.value)}
            placeholder="Street, suburb, city"
            className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 text-textPrimary placeholder:text-textMuted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all bg-white resize-none"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <button
          onClick={onBack}
          className="flex-1 py-3.5 border-2 border-gray-300 text-textPrimary rounded-xl font-semibold text-base hover:border-primary transition-all flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={onNext}
          disabled={!data.parentName || !data.parentPhone}
          className="flex-[2] py-3.5 bg-secondary text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
}

// ─── STEP 3: Review & Submit ───
function Step3({
  data,
  onBack,
  onSubmit,
  isSubmitting,
}: {
  data: FormData;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}) {
  const rows = [
    { label: "Child's Name", value: data.fullName },
    { label: "Date of Birth", value: data.dateOfBirth || "Not specified" },
    { label: "Gender", value: data.gender || "Not specified" },
    { label: "Grade", value: data.grade },
    { label: "Parent/Guardian", value: data.parentName },
    { label: "Phone", value: data.parentPhone },
    { label: "Email", value: data.parentEmail || "Not provided" },
    { label: "Address", value: data.address || "Not provided" },
  ];

  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-primary text-center mb-1">
        Step 3 of 3: Review & Submit
      </h2>
      <ProgressBar step={3} />

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-card">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-start justify-between px-5 py-3.5 ${
              i < rows.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <span className="text-sm text-textMuted font-medium">{row.label}</span>
            <span className="text-sm text-primary font-semibold text-right max-w-[55%]">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-8">
        <button
          onClick={onBack}
          className="flex-1 py-3.5 border-2 border-gray-300 text-textPrimary rounded-xl font-semibold text-base hover:border-primary transition-all flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="flex-[2] py-3.5 bg-secondary text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </motion.div>
  );
}

// ─── CONFIRMATION SCREEN ───
function ConfirmationScreen({ data }: { data: FormData }) {
  const applicationId = `GM-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

  return (
    <motion.div
      key="confirmation"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif italic mb-6">
        Application Received!
      </h2>

      {/* Checkmark circle */}
      <div className="w-28 h-28 rounded-full bg-secondary/10 flex items-center justify-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <CheckCircle2 className="w-14 h-14 text-secondary" strokeWidth={1.5} />
        </motion.div>
      </div>

      <p className="text-textMuted text-sm sm:text-base leading-relaxed max-w-sm mb-8">
        Thank you for choosing Grace Mission. Our admissions team will review your application and get back to you within 3-5 business days.
      </p>

      {/* Application details card */}
      <div className="w-full max-w-xs bg-white rounded-xl border-2 border-primary/15 p-5 mb-8 shadow-card">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-textMuted">Application ID:</span>
          <span className="text-sm font-bold text-primary">{applicationId}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-textMuted">Child&apos;s Name:</span>
          <span className="text-sm font-bold text-primary">{data.fullName || "John Doe"}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="w-full max-w-xs space-y-3">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Home className="w-4 h-4" />
          Return to Home
        </Link>
        <button
          className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-secondary text-secondary rounded-xl font-semibold hover:bg-secondary/5 transition-all"
        >
          <Download className="w-4 h-4" />
          Download Copy
        </button>
      </div>
    </motion.div>
  );
}

// ─── MAIN PAGE ───
export default function AdmissionsPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface overflow-hidden">
      {/* Page Hero */}
      <section className="bg-primary pt-28 pb-16 relative overflow-hidden">
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
              className="font-serif text-4xl md:text-5xl text-white font-bold mb-3 tracking-tight"
            >
              Admission Application Form
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
      </section>

      {/* Form Section */}
      <section className="py-10 md:py-16 bg-surface flex-grow">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <ConfirmationScreen data={formData} />
            ) : step === 1 ? (
              <Step1 data={formData} onChange={handleChange} onNext={() => setStep(2)} />
            ) : step === 2 ? (
              <Step2
                data={formData}
                onChange={handleChange}
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            ) : (
              <Step3
                data={formData}
                onBack={() => setStep(2)}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
