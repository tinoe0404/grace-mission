import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurValues from "@/components/home/OurValues";
import AcademicsPreview from "@/components/home/AcademicsPreview";
import Testimonials from "@/components/home/Testimonials";
import LatestNews from "@/components/home/LatestNews";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <OurValues />
      <AcademicsPreview />
      <Testimonials />
      <LatestNews />
    </>
  );
}

