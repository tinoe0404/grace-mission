"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight, staggerContainer, fadeUp } from "@/lib/motion";
import { BookOpen, Users, Star, Compass } from "lucide-react";

const FEATURES = [
  {
    title: "Christ-Centered Education",
    description: "Every curriculum is rooted in Biblical principles, fostering character development alongside academic excellence.",
    icon: <Compass className="w-6 h-6 text-primary" />,
  },
  {
    title: "Expert Teaching Staff",
    description: "Our passionately dedicated educators are highly qualified and committed to bringing out the best in every child.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Holistic Development",
    description: "We invest in the complete child—providing robust sports, arts, and extracurricular programs.",
    icon: <Star className="w-6 h-6 text-primary" />,
  },
  {
    title: "Modern Facilities",
    description: "Equipped with modern technology and safe learning environments to stimulate 21st-century learning.",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Image Grid */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4 sm:gap-6 relative"
          >
            {/* Center decoration circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary rounded-full z-10 flex items-center justify-center border-4 border-surface">
              <span className="font-serif text-white font-bold text-lg text-center leading-tight">Since<br/>2005</span>
            </div>

            {/* Grid Images */}
            <motion.div whileHover={{ scale: 1.03 }} className="aspect-square bg-white rounded-3xl overflow-hidden shadow-md flex flex-col justify-end p-4 border border-gray-100">
              <div className="w-full h-full bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">Image 1</span>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} className="aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-md translate-y-8 flex flex-col justify-end p-4 border border-gray-100">
              <div className="w-full h-full bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">Image 2</span>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-md -translate-y-8 flex flex-col justify-end p-4 border border-gray-100">
              <div className="w-full h-full bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">Image 3</span>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="aspect-square bg-white rounded-3xl overflow-hidden shadow-md flex flex-col justify-end p-4 border border-gray-100">
              <div className="w-full h-full bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">Image 4</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:pl-8"
          >
            <div className="mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Welcome to Grace Mission</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-textPrimary leading-tight mb-6">
                Why Choose <span className="text-primary block">Grace Mission?</span>
              </h2>
              <p className="text-textMuted text-lg leading-relaxed mb-6">
                We believe that education is a sacred partnership between the school, parents, and the community. Our approach prioritizes strong academic foundations deeply intertwined with unwavering moral values.
              </p>
              <p className="text-textMuted text-lg leading-relaxed">
                By maintaining small class sizes and investing in our educators, we ensure that your child receives the personalized attention required to unlock their unique potential.
              </p>
            </div>

            <motion.div 
              variants={staggerContainer as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-x-8 gap-y-10"
            >
              {FEATURES.map((feature, idx) => (
                <motion.div key={idx} variants={fadeUp as any} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-1">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-textPrimary text-xl">{feature.title}</h3>
                  <p className="text-textMuted text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
