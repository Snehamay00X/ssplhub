"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Box, Download, FileText, ArrowRight, Shield } from "lucide-react";

interface TradeBannerProps {
  onOpenTradeModal: () => void;
  onDownloadCatalog: () => void;
}

export default function TradeBanner({
  onOpenTradeModal,
  onDownloadCatalog,
}: TradeBannerProps) {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 py-16 bg-neutral-900 text-white relative overflow-hidden border-b border-neutral-800">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-black border border-neutral-800 p-8 sm:p-12 sharp-0">
          {/* Left Text */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800 text-amber-400 font-inter text-[10px] uppercase font-bold tracking-widest mb-4 sharp-0 border border-neutral-700">
              <Compass className="w-3.5 h-3.5" />
              Architect & Trade Partner Concierge
            </div>
            <h3 className="font-jakarta text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Designing a Commercial or Luxury Residential Project?
            </h3>
            <p className="font-inter text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Receive complimentary physical sample kits, CAD coefficient matrices, certified fire-test reports, and wholesale tier pricing directly to your studio desk.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
            <button
              onClick={onOpenTradeModal}
              className="w-full py-4 px-6 bg-white text-black font-inter text-xs font-bold uppercase tracking-[0.12em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 sharp-0 cursor-pointer shadow-md group"
            >
              <Box className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
              Request Architect Swatch Box
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onDownloadCatalog}
              className="w-full py-4 px-6 bg-transparent text-white border border-neutral-700 hover:border-white font-inter text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 sharp-0 cursor-pointer transition-colors"
            >
              <Download className="w-4 h-4 text-neutral-400" />
              Download Architectural Catalog (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
