"use client";

import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Admissions", href: "/admissions" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-surface pt-12 pb-8 mb-16 md:mb-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/10 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-bold text-2xl text-primary font-serif tracking-tight leading-none">
              Grace Mission
            </span>
            <span className="text-[15px] font-medium text-secondary mt-1">
              Primary School
            </span>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-[#1A2E44] hover:text-secondary transition-colors text-[15px] font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-textMuted">
          © {new Date().getFullYear()} Grace Mission Primary School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
