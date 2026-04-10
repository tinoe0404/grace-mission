"use client";

import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  image: string;
  objectPosition?: string;
  overlayIntensity?: "light" | "medium" | "dark";
}

const overlayMap = {
  light:  "from-[#3D1A6E]/60 via-[#3D1A6E]/15 to-transparent",
  medium: "from-[#3D1A6E]/70 via-[#3D1A6E]/25 to-[#3D1A6E]/5",
  dark:   "from-[#3D1A6E]/80 via-[#3D1A6E]/35 to-[#3D1A6E]/10",
};

export default function PageHero({
  title,
  breadcrumb,
  image,
  objectPosition = "center 50%",
  overlayIntensity = "medium",
}: PageHeroProps) {
  return (
    <section className="relative h-[380px] md:h-[440px] flex items-end overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        fill
        alt=""
        className="object-cover"
        style={{ objectPosition }}
        priority
      />

      {/* Overlay — much lighter so photo actually shows through */}
      <div className={`absolute inset-0 bg-gradient-to-t ${overlayMap[overlayIntensity]}`} />

      {/* Content — pinned to bottom-left */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-12">
        <Image
          src="/images/logo.png"
          alt=""
          aria-hidden="true"
          width={40}
          height={40}
          className="object-contain brightness-0 invert opacity-70 mb-3"
        />
        <h1 className="font-serif text-4xl md:text-5xl text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {title}
        </h1>
        <nav className="flex items-center gap-2 mt-2 font-sans text-sm text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">{breadcrumb}</span>
        </nav>
      </div>
    </section>
  );
}
