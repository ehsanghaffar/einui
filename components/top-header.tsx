"use client";

import Link from "next/link";
import { Github, Star } from "lucide-react";
import Image from "next/image";

export function TopHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-white-svg.svg" width="30" height="30" alt="Einui Liquid Glass Components" />
          <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-base font-bold">
            EinUI
          </span>
        </Link>

        {/* Right side - GitHub badge */}
        <div className="flex items-center gap-3">
          {/* GitHub Star Badge */}
          <a
            href="https://github.com/ehsanghaffar/einui"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <Star className="h-3.5 w-3.5 text-yellow-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Star on GitHub</span>
            <span className="sm:hidden">Star</span>
          </a>

          {/* GitHub Icon Button */}
          <a
            href="https://github.com/ehsanghaffar/einui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-9 w-9 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            aria-label="View on GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
