import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SCHOOL_DETAILS } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: `${SCHOOL_DETAILS.name} | ${SCHOOL_DETAILS.tagline}`,
  description: `Welcome to ${SCHOOL_DETAILS.name}. ${SCHOOL_DETAILS.tagline}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-surface text-textPrimary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
