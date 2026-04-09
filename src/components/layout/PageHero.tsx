"use client";

import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  image: string;
}

export default function PageHero({ title, breadcrumb, image }: PageHeroProps) {
  return (
    <section className="relative h-[280px] md:h-[340px] flex items-end pb-12 overflow-hidden">
      <Image src={image} fill alt="" className="object-cover object-center" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">{title}</h1>
        <nav className="flex items-center gap-2 mt-2 font-sans text-sm text-white/70">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">{breadcrumb}</span>
        </nav>
      </div>
    </section>
  );
}
