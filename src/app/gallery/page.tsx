"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ZoomIn, X, ChevronLeft, ChevronRight as NavRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const CATEGORIES = ["All", "School Life", "Sports", "Events", "Achievements"];

const GALLERY_IMAGES = [
  { id: 1, category: "School Life", caption: "Students collaborating in the science lab.", url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop" },
  { id: 2, category: "Sports", caption: "Under-12 Soccer Team winning regionals.", url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80&auto=format&fit=crop" },
  { id: 3, category: "Events", caption: "Annual Prize Giving Speech Day.", url: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=800&q=80&auto=format&fit=crop" },
  { id: 4, category: "Achievements", caption: "National Spelling Bee Champions.", url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format&fit=crop" },
  { id: 5, category: "School Life", caption: "Art and Craft exhibition in the main hall.", url: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&q=80&auto=format&fit=crop" },
  { id: 6, category: "Sports", caption: "Inter-house athletics competition.", url: "https://images.unsplash.com/photo-1546410531-b6a6552a9042?w=800&q=80&auto=format&fit=crop" },
  { id: 7, category: "Events", caption: "Cultural Day celebrations.", url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80&auto=format&fit=crop" },
  { id: 8, category: "School Life", caption: "Grade 1 reading time.", url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80&auto=format&fit=crop" },
  { id: 9, category: "Achievements", caption: "Best Primary School in District Award.", url: "https://images.unsplash.com/photo-1610484826967-09f0296ab42d?w=800&q=80&auto=format&fit=crop" },
  { id: 10, category: "Events", caption: "Christmas Carols by Candlelight.", url: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80&auto=format&fit=crop" },
  { id: 11, category: "School Life", caption: "Early morning assemblies.", url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80&auto=format&fit=crop" },
  { id: 12, category: "Sports", caption: "Netball team practice sessions.", url: "https://images.unsplash.com/photo-1546410531-b6a6552a9042?w=800&q=80&auto=format&fit=crop" },
];

// Staggered grid animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const filteredImages = activeTab === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, filteredImages.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* 1. Page Hero */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeUp as any}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-serif text-5xl md:text-[56px] text-white font-bold mb-4 tracking-tight"
            >
              Gallery
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-sm text-white/60"
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Gallery</span>
            </motion.div>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[80px]">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-surface" />
          </svg>
        </div>
      </section>

      {/* 2. Filter Tabs */}
      <section className="pt-16 pb-8 bg-surface sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat 
                    ? "text-white" 
                    : "bg-white text-textMuted hover:text-primary hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {activeTab === cat && (
                  <motion.div
                    layoutId="galleryTabIndicator"
                    className="absolute inset-0 bg-secondary rounded-full -z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Image Grid */}
      <section className="pb-24 bg-surface flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => openLightbox(i)}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gray-200 shadow-sm border border-gray-100"
                >
                  <Image src={img.url} alt={img.caption || `Gallery photo ${img.id}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  
                  {/* Hover Overlay with staggered content */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent flex flex-col items-center justify-end p-6 text-center z-10"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <ZoomIn className="text-white w-8 h-8 mb-3 mx-auto" />
                    </motion.div>
                    <p className="text-white font-medium text-sm leading-snug">
                      {img.caption}
                    </p>
                    <span className="mt-3 bg-secondary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {img.category}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-textMuted"
            >
              No images found in this category.
            </motion.div>
          )}
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && filteredImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
          >
            {/* Close button */}
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Prev button */}
            <motion.button 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-12 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-[110] hidden sm:flex items-center justify-center hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            {/* Image container with slide animation */}
            <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-video mx-4" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentImageIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 bg-white/5 rounded-2xl overflow-hidden"
                >
                  <Image 
                    src={filteredImages[currentImageIndex].url} 
                    alt={filteredImages[currentImageIndex].caption} 
                    fill 
                    className="object-cover" 
                  />
                  
                  {/* Caption overlay */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 text-center"
                  >
                    <p className="text-white text-xl font-medium mb-2">{filteredImages[currentImageIndex].caption}</p>
                    <p className="text-white/60 text-sm">Image {currentImageIndex + 1} of {filteredImages.length}</p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next button */}
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-12 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-[110] hidden sm:flex items-center justify-center hover:scale-110"
              aria-label="Next image"
            >
              <NavRight className="w-8 h-8" />
            </motion.button>
            
            {/* Mobile Controls */}
            <div className="absolute bottom-6 flex gap-4 sm:hidden z-[110]">
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="p-3 bg-white/20 text-white rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="p-3 bg-white/20 text-white rounded-full"
              >
                <NavRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail strip */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-[110] max-w-[90vw] overflow-x-auto pb-2 px-4"
            >
              {filteredImages.slice(0, 8).map((img, i) => (
                <button
                  key={img.id}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                  className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 transition-all ${
                    i === currentImageIndex ? "ring-2 ring-secondary scale-110" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image src={img.url} alt="" fill className="object-cover" />
                </button>
              ))}
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
