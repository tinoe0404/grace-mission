"use client";

import Link from "next/link";
import { SCHOOL_DETAILS } from "@/lib/constants";

export default function Footer() {
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Admissions", href: "/admissions" },
    { label: "Academics", href: "/academics" },
    { label: "Gallery", href: "/gallery" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 mb-16 md:mb-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-b border-white/10 pb-12">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col">
            <Link href="/" className="inline-flex flex-col mb-4">
              <span className="font-bold text-2xl font-serif tracking-tight leading-none text-white">
                Grace Mission
              </span>
              <span className="text-[11px] font-sans uppercase tracking-wide mt-1 text-white/80">
                Primary School
              </span>
            </Link>
            <p className="text-sm font-sans text-white/70 max-w-sm leading-relaxed">
              Every school day begins with devotion, grounding pupils in Christian values and integrity, shaping futures since 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-serif text-lg font-bold mb-4 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {footerLinks.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href} 
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="font-serif text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="flex flex-col gap-3 font-sans text-sm text-white/70">
              <li>123 Grace Mission Road, Marlborough, Harare, Zimbabwe</li>
              <li>
                <a href="tel:+263771234567" className="hover:text-white transition-colors">
                  +263 77 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@gracemission.ac.zw" className="hover:text-white transition-colors">
                  info@gracemission.ac.zw
                </a>
              </li>
            </ul>
            
            {/* Social Icons row */}
            <div className="flex items-center gap-4 mt-6">
              {/* Facebook */}
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href={`https://wa.me/${SCHOOL_DETAILS.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center md:text-left text-[12px] font-sans text-white/40">
          © {new Date().getFullYear()} Grace Mission Primary School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
