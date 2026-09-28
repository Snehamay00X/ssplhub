"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Palette, ShieldCheck, Compass } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenTradeModal: () => void;
}

export default function Hero({ onScrollToSection, onOpenTradeModal }: HeroProps) {
  return (
    <section className="w-full pt-28 pb-16 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-[#ffffff] via-[#f9f9f9] to-[#ffffff] border-b border-neutral-200/60 relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">
        {/* Architectural Heritage Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white border border-neutral-300 shadow-sm mb-6 sharp-0 cursor-pointer hover:border-black transition-all group"
          onClick={() => onScrollToSection("showrooms-section")}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
          </span>
          <span className="font-inter text-[11px] uppercase tracking-[0.12em] text-neutral-800 font-semibold group-hover:text-black">
            SSPL Architectural Destination • ssplhub.com
          </span>
        </motion.div>

        {/* Editorial Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-jakarta text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-black max-w-5xl leading-[1.1] mb-6"
        >
          One Heritage Group.{" "}
          <span className="font-editorial italic font-normal text-neutral-800">
            Two Distinct
          </span>{" "}
          Material Experiences.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-inter text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed mb-10 font-normal"
        >
          Select your destination showroom to explore curated architectural woods, structural ply, or avant-garde decorative designer surfaces across Kolkata.
        </motion.p>

        {/* Quick Navigation Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 p-2 bg-neutral-100 border border-neutral-300 shadow-sm"
        >
          <button
            onClick={() => onScrollToSection("shree-shyam-section")}
            className="w-full sm:w-auto px-6 py-3 bg-white text-black font-inter text-xs uppercase tracking-[0.1em] font-semibold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 border border-neutral-300 sharp-0 cursor-pointer shadow-sm active:scale-95 group"
          >
            <Building2 className="w-4 h-4 text-neutral-700 group-hover:text-white" />
            Shree Shyam Ply & Laminates
          </button>

          <span className="hidden sm:inline text-neutral-400 font-light">|</span>

          <button
            onClick={() => onScrollToSection("surface-studio-section")}
            className="w-full sm:w-auto px-6 py-3 bg-white text-black font-inter text-xs uppercase tracking-[0.1em] font-semibold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 border border-neutral-300 sharp-0 cursor-pointer shadow-sm active:scale-95 group"
          >
            <Palette className="w-4 h-4 text-neutral-700 group-hover:text-white" />
            Surface Studio (Oct 2026)
          </button>
        </motion.div>

        {/* Quick Trade Partner Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 flex items-center gap-2 text-xs font-inter text-neutral-500 uppercase tracking-wider"
        >
          <span>Architect, Interior Designer or Developer?</span>
          <button
            onClick={onOpenTradeModal}
            className="text-black font-semibold underline underline-offset-4 hover:text-neutral-700 cursor-pointer"
          >
            Request Swatch Box & Spec Sheet →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
