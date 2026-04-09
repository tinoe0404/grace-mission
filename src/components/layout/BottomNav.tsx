"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, UserPlus, Newspaper, MoreHorizontal } from "lucide-react";

const TABS = [
  { name: "Home", href: "/", icon: Home },
  { name: "Academics", href: "/academics", icon: BookOpen },
  { name: "Admissions", href: "/admissions", icon: UserPlus },
  { name: "News", href: "/news", icon: Newspaper },
  { name: "More", href: "/about", icon: MoreHorizontal },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/60 pb-safe">
      <div className="flex items-center justify-around h-16">
        {TABS.map((tab) => {
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);
          const Icon = tab.icon;

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-2 transition-colors ${
                isActive
                  ? "text-secondary"
                  : "text-textMuted hover:text-primary"
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-all ${
                  isActive ? "stroke-[2.5]" : "stroke-[1.8]"
                }`}
              />
              <span
                className={`text-[10px] font-semibold tracking-wide ${
                  isActive ? "text-secondary" : ""
                }`}
              >
                {tab.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
