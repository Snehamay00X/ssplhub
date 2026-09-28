"use client";

import React, { useState } from "react";
import { Phone, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenInquiry: (defaultShowroom?: string) => void;
  onOpenShowroomModal: (type: "shree-shyam" | "surface-studio") => void;
  onCopyPhone: () => void;
}

export default function Header({
  onOpenInquiry,
  onOpenShowroomModal,
  onCopyPhone,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm transition-all duration-300">
      <div className="max-w-[1600px] mx-auto h-20 px-4 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="flex items-center gap-1.5 group transition-transform active:scale-95"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="font-jakarta text-2xl tracking-tighter text-black font-extrabold group-hover:opacity-80 transition-opacity">
              SSPL
            </span>
            <span className="font-jakarta text-2xl tracking-tighter text-neutral-400 font-light group-hover:text-black transition-colors">
              HUB
            </span>
          </a>

          <div className="hidden xl:flex items-center gap-3 pl-4 border-l border-neutral-200">
            <span className="font-inter text-[11px] uppercase tracking-[0.14em] text-neutral-500 font-medium">
              Architectural Surfaces & Timber • Kolkata
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => {
              const el = document.getElementById("shree-shyam-section");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-3 py-1.5 font-inter text-xs uppercase tracking-wider text-neutral-800 hover:text-black hover:bg-neutral-100 transition-all font-medium sharp-0 cursor-pointer"
          >
            Shree Shyam Ply & Laminates
          </button>
          <span className="text-neutral-300">•</span>
          <button
            onClick={() => {
              const el = document.getElementById("surface-studio-section");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-3 py-1.5 font-inter text-xs uppercase tracking-wider text-neutral-800 hover:text-black hover:bg-neutral-100 transition-all font-medium sharp-0 cursor-pointer"
          >
            Surface Studio
          </button>
          <span className="text-neutral-300">•</span>
          <button
            onClick={() => {
              const el = document.getElementById("materials-explorer-section");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-3 py-1.5 font-inter text-xs uppercase tracking-wider text-neutral-800 hover:text-black hover:bg-neutral-100 transition-all font-medium sharp-0 cursor-pointer"
          >
            Material Specs
          </button>
          <span className="text-neutral-300">•</span>
          <button
            onClick={() => {
              const el = document.getElementById("showrooms-section");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-3 py-1.5 font-inter text-xs uppercase tracking-wider text-neutral-500 hover:text-black hover:bg-neutral-100 transition-all font-medium sharp-0 cursor-pointer"
          >
            Showrooms
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={onCopyPhone}
            className="hidden sm:flex items-center gap-2 text-neutral-700 hover:text-black transition-colors px-3 py-1.5 rounded-sm hover:bg-neutral-100 border border-transparent hover:border-neutral-200 cursor-pointer"
            title="Click to copy phone number"
          >
            <Phone className="w-3.5 h-3.5 text-black" />
            <span className="font-inter text-xs font-semibold tracking-wide">
              +91 82820 38080
            </span>
          </button>

          <button
            onClick={() => onOpenInquiry()}
            className="px-5 py-2.5 bg-black text-white font-inter text-xs tracking-[0.1em] uppercase hover:bg-neutral-800 active:scale-95 transition-all shadow-sm flex items-center gap-2 sharp-0 cursor-pointer font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            Inquire
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("shree-shyam-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-left py-2 font-inter text-sm uppercase tracking-wider text-black font-semibold border-b border-neutral-100"
            >
              Shree Shyam Ply & Laminates
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("surface-studio-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-left py-2 font-inter text-sm uppercase tracking-wider text-black font-semibold border-b border-neutral-100"
            >
              Surface Studio (Oct 2026)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("materials-explorer-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-left py-2 font-inter text-sm uppercase tracking-wider text-black font-semibold border-b border-neutral-100"
            >
              Material Specimen Explorer
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("showrooms-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-left py-2 font-inter text-sm uppercase tracking-wider text-black font-semibold border-b border-neutral-100"
            >
              Showrooms & Locations
            </button>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCopyPhone();
                }}
                className="w-full py-2.5 border border-neutral-300 text-black font-inter text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call +91 82820 38080
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 bg-black text-white font-inter text-xs uppercase tracking-wider font-bold"
              >
                Consultation Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
