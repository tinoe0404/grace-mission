import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurValues from "@/components/home/OurValues";
import AcademicsPreview from "@/components/home/AcademicsPreview";
import ParentTestimonials from "@/components/home/ParentTestimonials";
import LatestNewsPreview from "@/components/home/LatestNewsPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <OurValues />
      <AcademicsPreview />
      <ParentTestimonials />
      <LatestNewsPreview />
      <FinalCTA />
    </>
  );
}
