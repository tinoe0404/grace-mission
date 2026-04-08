import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SCHOOL_DETAILS } from "@/lib/constants";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToTop from "@/components/layout/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: {
    default: `${SCHOOL_DETAILS.name} | ${SCHOOL_DETAILS.tagline}`,
    template: `%s | ${SCHOOL_DETAILS.name}`
  },
  description: `Welcome to ${SCHOOL_DETAILS.name}. ${SCHOOL_DETAILS.tagline}. High-quality primary education in ${SCHOOL_DETAILS.location}.`,
  openGraph: {
    type: "website",
    title: `${SCHOOL_DETAILS.name}`,
    description: `${SCHOOL_DETAILS.tagline}`,
    siteName: SCHOOL_DETAILS.name,
    images: [{ url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SCHOOL_DETAILS.name}`,
    description: `${SCHOOL_DETAILS.tagline}`,
    images: ["https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-surface text-textPrimary antialiased flex flex-col min-h-screen`}
      >
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppButton />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
