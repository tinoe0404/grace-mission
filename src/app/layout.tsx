import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, DM_Mono } from "next/font/google";
import "./globals.css";
import { SCHOOL_DETAILS } from "@/lib/constants";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToTop from "@/components/layout/ScrollToTop";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ['400', '500'], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ['400', '700'], style: ['normal', 'italic'], variable: "--font-playfair" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ['400', '500'], variable: "--font-dm-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: {
    default: 'Grace Missions High School | O-Level & A-Level',
    template: '%s | Grace Missions High School'
  },
  description: 'Grace Missions High School — a Christ-centered secondary school in Zimbabwe offering Form 1 to Form 6, O-Level and A-Level education. ZIMSEC-aligned. Mkhosana, Victoria Falls.',
  keywords: [
    'Grace Missions High School',
    'Zimbabwe high school',
    'O-Level Zimbabwe',
    'A-Level Zimbabwe',
    'ZIMSEC school Victoria Falls',
    'Form 1 to Form 6 Zimbabwe',
    'Christian school Zimbabwe',
    'secondary school Victoria Falls'
  ],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: "website",
    title: `${SCHOOL_DETAILS.name}`,
    description: `${SCHOOL_DETAILS.tagline}`,
    siteName: SCHOOL_DETAILS.name,
    images: [{ url: "/images/hoyo/IMG_6956.JPG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SCHOOL_DETAILS.name}`,
    description: `${SCHOOL_DETAILS.tagline}`,
    images: ["/images/hoyo/IMG_6956.JPG"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body
        className={`${dmSans.variable} ${playfair.variable} ${dmMono.variable} font-sans bg-cream text-charcoal antialiased flex flex-col min-h-screen transition-all duration-200`}
      >
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow pb-16 md:pb-0">
          {children}
        </main>
        <WhatsAppButton />
        <ScrollToTop />
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
