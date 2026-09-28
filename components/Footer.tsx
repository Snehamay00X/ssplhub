"use client";

import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

interface FooterProps {
  onOpenInquiry: (topic?: string) => void;
  onOpenShowroomModal: (type: "shree-shyam" | "surface-studio") => void;
  onScrollToSection: (id: string) => void;
  onCopyPhone: () => void;
  onShowToast: (msg: string) => void;
}

export default function Footer({
  onOpenInquiry,
  onOpenShowroomModal,
  onScrollToSection,
  onCopyPhone,
  onShowToast,
}: FooterProps) {
  return (
    <footer className="w-full bg-[#f3f3f4] border-t border-neutral-300 text-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-neutral-300">
          {/* Column 1: Brand & Overview */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1.5">
              <span className="font-jakarta text-2xl font-extrabold tracking-tighter text-black">
                SSPL
              </span>
              <span className="font-jakarta text-2xl font-light tracking-tighter text-neutral-500">
                HUB
              </span>
            </div>
            <p className="font-inter text-xs text-neutral-600 leading-relaxed">
              The unified architectural nexus bridging wholesale structural timber and ply distribution with bespoke interior surface materiality across Eastern India.
            </p>

            <div className="flex flex-col gap-1 pt-2">
              <span className="font-inter text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                Direct Inquiry
              </span>
              <a
                href="mailto:concierge@ssplhub.com"
                className="font-inter text-xs text-black font-semibold hover:underline flex items-center gap-1"
                onClick={() => onShowToast("Opening email client for concierge@ssplhub.com")}
              >
                <Mail className="w-3.5 h-3.5" /> concierge@ssplhub.com
              </a>
              <button
                onClick={onCopyPhone}
                className="text-left font-inter text-xs text-neutral-700 hover:text-black hover:underline flex items-center gap-1 mt-1 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" /> +91 82820 38080
              </button>
            </div>
          </div>

          {/* Column 2: Kolkata Showrooms */}
          <div className="flex flex-col gap-4">
            <h4 className="font-jakarta text-sm font-bold text-black uppercase tracking-wider">
              Kolkata Experience Centers
            </h4>
            <div className="flex flex-col gap-4 font-inter text-xs text-neutral-600">
              <div className="border-l-2 border-black pl-3">
                <span className="font-semibold text-black block mb-0.5">
                  Bowbazar Flagship (SSPL Showroom)
                </span>
                <span>Ground floor, 3B, Gangadhar Babu Ln, Bowbazar, Kolkata 700012</span>
              </div>
              <div className="border-l-2 border-amber-500 pl-3">
                <span className="font-semibold text-black block mb-0.5">
                  Haute Street Design Gallery (Surface Studio)
                </span>
                <span>Haute Street Corporate Park, 86A Topsia Rd, Kolkata 700046</span>
              </div>
            </div>
          </div>

          {/* Column 3: Material Divisions */}
          <div className="flex flex-col gap-3">
            <h4 className="font-jakarta text-sm font-bold text-black uppercase tracking-wider">
              Portals & Divisions
            </h4>
            <div className="flex flex-col gap-2 font-inter text-xs">
              <button
                onClick={() => onOpenShowroomModal("shree-shyam")}
                className="text-left text-neutral-700 hover:text-black hover:underline cursor-pointer flex items-center gap-1"
              >
                Shree Shyam Ply & Laminates <ArrowUpRight className="w-3 h-3 text-neutral-400" />
              </button>
              <button
                onClick={() => onOpenShowroomModal("surface-studio")}
                className="text-left text-neutral-700 hover:text-black hover:underline cursor-pointer flex items-center gap-1"
              >
                Surface Studio Finishes <ArrowUpRight className="w-3 h-3 text-neutral-400" />
              </button>
              <button
                onClick={() => onScrollToSection("materials-explorer-section")}
                className="text-left text-neutral-700 hover:text-black hover:underline cursor-pointer"
              >
                CAD & Technical Specs Index
              </button>
              <button
                onClick={() => onScrollToSection("showrooms-section")}
                className="text-left text-neutral-700 hover:text-black hover:underline cursor-pointer"
              >
                Schedule Kolkata Visit
              </button>
            </div>
          </div>

          {/* Column 4: Compliance & Certifications */}
          <div className="flex flex-col gap-3">
            <h4 className="font-jakarta text-sm font-bold text-black uppercase tracking-wider">
              Certifications & Quality
            </h4>
            <div className="p-4 bg-white border border-neutral-300 font-inter text-xs text-neutral-600 space-y-2 sharp-0">
              <div className="flex items-center gap-2 text-black font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>BIS & ISI 710 / 303 Certified</span>
              </div>
              <p className="text-[11px] text-neutral-500">
                100% Calibrated hardwood timber cores tested for tensile strength, moisture expansion, and fire safety.
              </p>
              <button
                onClick={() => onOpenInquiry("Compliance & BIS Certificates Request")}
                className="text-black font-semibold text-[11px] underline cursor-pointer"
              >
                Request BIS Test Certificate →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-inter text-xs text-neutral-500">
          <p>
            © 2026 SSPL Hub. Shree Shyam Ply & Laminates • Surface Studio Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-medium">
            <button
              onClick={() => onShowToast("Privacy & Compliance Framework: 100% Secure Enterprise Standards.")}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Privacy Framework
            </button>
            <button
              onClick={() => onShowToast("BIS Compliance: IS 710 Marine Grade & IS 2202 Flush Door Specification Passed.")}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Compliance & BIS Spec
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
