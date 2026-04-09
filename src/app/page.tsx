"use client";

import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LatestNewsPreview from "@/components/home/LatestNewsPreview";
import AcademicsPreview from "@/components/home/AcademicsPreview";
import OurValues from "@/components/home/OurValues";
import ParentTestimonials from "@/components/home/ParentTestimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <LatestNewsPreview />
      <AcademicsPreview />
      <OurValues />
      <ParentTestimonials />
      <FinalCTA />
    </>
  );
}
