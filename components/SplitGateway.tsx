"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Sparkles, MapPin, Calendar, CheckCircle2 } from "lucide-react";

interface SplitGatewayProps {
  onOpenShowroomModal: (type: "shree-shyam" | "surface-studio") => void;
  onOpenInquiry: (showroom?: string) => void;
}

export default function SplitGateway({
  onOpenShowroomModal,
  onOpenInquiry,
}: SplitGatewayProps) {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 py-16 bg-[#f9f9f9]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT SIDE: Shree Shyam Ply & Laminates */}
          <motion.div
            id="shree-shyam-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group flex flex-col justify-between bg-white border border-neutral-300 p-8 sm:p-12 hover:border-black transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-xl sharp-0"
          >
            {/* Top Indicator Hairline */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-black group-hover:h-1.5 transition-all duration-300" />

            <div className="flex flex-col relative z-10">
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-neutral-100">
                <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-neutral-900 font-inter text-[11px] font-bold uppercase tracking-widest sharp-0">
                  ESTABLISHED 2010
                </span>
                <div className="flex items-center gap-1.5 text-neutral-700 font-inter text-[11px] font-semibold tracking-wider uppercase">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>100% ISI CERTIFIED CORE</span>
                </div>
              </div>

              {/* Brand Title & Description */}
              <div className="my-6">
                <h2 className="font-jakarta text-3xl sm:text-4xl text-black font-bold mb-3 tracking-tight">
                  Shree Shyam Ply & Laminates
                </h2>
                <p className="font-inter text-neutral-600 text-sm sm:text-base font-normal leading-relaxed">
                  Structural Strength, Premium Architectural Timber, Marine Grade Plywood, Teak Block Boards & Flush Doors.
                </p>
              </div>

              {/* Interactive Specimen Photo Showcase */}
              <div
                onClick={() => onOpenShowroomModal("shree-shyam")}
                className="relative w-full h-80 overflow-hidden mb-8 border border-neutral-200 cursor-pointer group/img"
              >
                <img
                  alt="Luxurious industrial showroom displaying structural timber, plywood stacks and natural wood veneers"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-inter text-xs text-neutral-300 uppercase tracking-widest font-medium">
                      Flagship Facility
                    </span>
                  </div>
                  <p className="font-inter text-base text-white font-medium">
                    Bowbazar Master Wood & Timber Depot, Kolkata
                  </p>
                  <span className="text-xs text-neutral-300 font-inter mt-1 opacity-0 group-hover/img:opacity-100 transition-opacity">
                    Click to view full specs & timber catalog →
                  </span>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8 text-xs font-inter text-neutral-700 border-t border-neutral-100 pt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>BWP & BWR 710 Grade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Calibrated Core Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Guaranteed Termite Proof</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Wholesale Architectural Supply</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 pt-4 border-t border-neutral-200">
              <button
                onClick={() => onOpenShowroomModal("shree-shyam")}
                className="w-full sm:flex-1 py-4 px-6 bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300 font-inter text-xs font-bold uppercase tracking-[0.12em] flex items-center justify-center gap-2 sharp-0 cursor-pointer shadow-md group/btn"
              >
                <span>Enter Shree Shyam Portal</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => onOpenInquiry("Shree Shyam Ply & Laminates")}
                className="w-full sm:w-auto py-4 px-6 bg-transparent text-black border border-neutral-400 hover:border-black font-inter text-xs font-semibold uppercase tracking-wider sharp-0 cursor-pointer transition-colors"
              >
                Get Quote
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Surface Studio */}
          <motion.div
            id="surface-studio-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group flex flex-col justify-between bg-white border border-neutral-300 p-8 sm:p-12 hover:border-black transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-xl sharp-0"
          >
            {/* Top Indicator Hairline */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500 group-hover:h-1.5 transition-all duration-300" />

            <div className="flex flex-col relative z-10">
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-neutral-100">
                <span className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-950 font-inter text-[11px] font-bold uppercase tracking-widest sharp-0 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-700" />
                  OPENING OCTOBER 2026
                </span>
                <span className="font-inter text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                  BOUTIQUE DESIGN GALLERY
                </span>
              </div>

              {/* Brand Title & Description */}
              <div className="my-6">
                <h2 className="font-jakarta text-3xl sm:text-4xl text-black font-bold mb-3 tracking-tight">
                  Surface Studio
                </h2>
                <p className="font-inter text-neutral-600 text-sm sm:text-base font-normal leading-relaxed">
                  Boutique Surface Aesthetics: Avant-Garde Luxury Laminates, Fluted Louver Systems & Decorative Acrylic Wall Panels.
                </p>
              </div>

              {/* Interactive Specimen Photo Showcase */}
              <div
                onClick={() => onOpenShowroomModal("surface-studio")}
                className="relative w-full h-80 overflow-hidden mb-8 border border-neutral-200 cursor-pointer group/img"
              >
                <img
                  alt="Ultra modern boutique showroom featuring designer fluted louvers and decorative laminate moodboards"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-inter text-xs text-neutral-300 uppercase tracking-widest font-medium">
                      Flagship Studio
                    </span>
                  </div>
                  <p className="font-inter text-base text-white font-medium">
                    Haute Street Topsia Design Gallery & Swatch Lounge, Kolkata
                  </p>
                  <span className="text-xs text-neutral-300 font-inter mt-1 opacity-0 group-hover/img:opacity-100 transition-opacity">
                    Click to preview swatch lounge & launch pass →
                  </span>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8 text-xs font-inter text-neutral-700 border-t border-neutral-100 pt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>3D Acoustic Flute Panels</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Italian Metallic Laminates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Charcoal & Louver Profiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Bespoke Swatch Bar</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 pt-4 border-t border-neutral-200">
              <button
                onClick={() => onOpenShowroomModal("surface-studio")}
                className="w-full sm:flex-1 py-4 px-6 bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300 font-inter text-xs font-bold uppercase tracking-[0.12em] flex items-center justify-center gap-2 sharp-0 cursor-pointer shadow-md group/btn"
              >
                <span>Explore Surface Studio</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => onOpenInquiry("Surface Studio (Pre-Booking)")}
                className="w-full sm:w-auto py-4 px-6 bg-amber-50 text-amber-950 border border-amber-300 hover:bg-amber-100 font-inter text-xs font-semibold uppercase tracking-wider sharp-0 cursor-pointer transition-colors"
              >
                Pre-Book Launch Pass
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
