"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Layers, MapPin, ShieldCheck, ChevronRight } from "lucide-react";

interface MetricsStripProps {
  onOpenEnterpriseModal: (metricTitle?: string) => void;
}

export default function MetricsStrip({ onOpenEnterpriseModal }: MetricsStripProps) {
  const metrics = [
    {
      value: "50k+",
      unit: "Sq.Ft Showcase",
      subText: "Expansive Material Warehouses & Swatch Lounges",
      icon: Layers,
    },
    {
      value: "2 Prime",
      unit: "Kolkata Galleries",
      subText: "Bowbazar Depot & Haute Street Topsia",
      icon: MapPin,
    },
    {
      value: "100%",
      unit: "ISI Certified Core",
      subText: "BIS Compliant Structural Plywood & Timber",
      icon: ShieldCheck,
    },
    {
      value: "15+ Yrs",
      unit: "Trade Heritage",
      subText: "Trusted by 2,500+ Architects & Contractors",
      icon: Award,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 py-12 bg-white border-y border-neutral-200">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 bg-neutral-900 text-white border border-neutral-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 sharp-0"
        >
          {/* Header Description */}
          <div className="flex items-center gap-4 max-w-md">
            <div className="w-12 h-12 rounded-none bg-white text-black flex items-center justify-center shrink-0 border border-neutral-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-inter text-[10px] uppercase tracking-[0.16em] text-neutral-400 font-bold block mb-1">
                Since 2010 • Kolkata Heritage Enterprise
              </span>
              <h3 className="font-jakarta text-xl font-bold tracking-tight text-white leading-snug">
                Two Specialized Portals. Singular Enterprise Reliability.
              </h3>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full lg:w-auto divide-y md:divide-y-0 md:divide-x divide-neutral-800 pt-6 md:pt-0 border-t md:border-t-0 border-neutral-800">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <button
                  key={idx}
                  onClick={() => onOpenEnterpriseModal(m.unit)}
                  className="px-4 py-2 text-left group cursor-pointer hover:bg-neutral-800/80 transition-colors rounded-none"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-jakarta text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                      {m.value}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <span className="block font-inter text-xs uppercase tracking-wider font-semibold text-neutral-300">
                    {m.unit}
                  </span>
                  <span className="block font-inter text-[11px] text-neutral-500 mt-1 line-clamp-1">
                    {m.subText}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action Trigger */}
          <button
            onClick={() => onOpenEnterpriseModal("Group Overview")}
            className="w-full lg:w-auto px-5 py-3 bg-white text-black font-inter text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 sharp-0 cursor-pointer shrink-0"
          >
            <span>Enterprise Specs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
