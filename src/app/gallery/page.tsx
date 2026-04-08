"use client";

import { useState } from "react";
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

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeTab === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  const openLightbox = (index: number) => {
    // Find the actual index of the clicked item relative to the filtered list
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
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
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-4 tracking-tight">Gallery</h1>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-secondary font-medium">Gallery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Filter Tabs */}
      <section className="pt-16 pb-8 bg-surface sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
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
          </div>
        </div>
      </section>

      {/* 3. Image Grid */}
      <section className="pb-24 bg-surface flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
                  onClick={() => openLightbox(i)}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gray-200 shadow-sm border border-gray-100"
                >
                  <Image src={img.url} alt={img.caption || `Gallery photo ${img.id}`} fill className="object-cover" />
                  
                  {/* Hover Overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/80 backdrop-blur-[2px] transition-all flex flex-col items-center justify-center p-6 text-center z-10"
                  >
                    <ZoomIn className="text-white w-10 h-10 mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                    <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {img.caption}
                    </p>
                    <span className="absolute bottom-4 left-4 bg-secondary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                      {img.category}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-textMuted">
              No images found in this category.
            </div>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
          >
            <div className="absolute top-6 right-6 z-[110]">
              <button 
                onClick={closeLightbox}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-12 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-[110] hidden sm:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.div
              key={currentImageIndex} // Force re-render animation when index changes
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl aspect-[4/3] md:aspect-video mx-4 bg-white/5 rounded-lg overflow-hidden flex flex-col justify-center items-center"
            >
              <Image src={filteredImages[currentImageIndex].url} alt={filteredImages[currentImageIndex].caption} fill className="object-cover" />
              
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
                <p className="text-white text-lg font-medium">{filteredImages[currentImageIndex].caption}</p>
                <p className="text-white/60 text-sm mt-1">Image {currentImageIndex + 1} of {filteredImages.length}</p>
              </div>
            </motion.div>

            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-12 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-[110] hidden sm:block"
              aria-label="Next image"
            >
              <NavRight className="w-8 h-8" />
            </button>
            
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
            
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
