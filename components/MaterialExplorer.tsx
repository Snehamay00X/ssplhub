"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Layers, Download, Eye, Sparkles, ShieldCheck } from "lucide-react";

export interface Specimen {
  id: string;
  name: string;
  category: "plywood" | "timber" | "louvers" | "laminates" | "veneers";
  division: "Shree Shyam Ply & Laminates" | "Surface Studio";
  grade: string;
  thickness: string;
  finish: string;
  image: string;
  psi: string;
  moisture: string;
  description: string;
}

export const MATERIAL_CATALOG: Specimen[] = [
  {
    id: "sp-710",
    name: "Architectural Marine Plywood (IS 710)",
    category: "plywood",
    division: "Shree Shyam Ply & Laminates",
    grade: "BWP 710 Calibrated Core",
    thickness: "19mm, 16mm, 12mm, 9mm",
    finish: "Calibrated Sanded Both Sides",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=600&q=80",
    psi: "4,800 PSI Tensile",
    moisture: "< 8% Kiln Dried",
    description: "High-density hardwood core bonded with un-extended phenolic resin for maximum waterproofing and zero core gaps.",
  },
  {
    id: "bt-001",
    name: "Burma Teak & Gurjan Architectural Timber",
    category: "timber",
    division: "Shree Shyam Ply & Laminates",
    grade: "Grade A Prime Heartwood",
    thickness: "Custom Sawn Slabs & Beams",
    finish: "Raw Kiln Dried / Planed",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
    psi: "5,200 PSI Flexural",
    moisture: "7.5% Moisture Content",
    description: "Directly imported high-density timber seasoned for high-end luxury joinery, doors, and facade cladding.",
  },
  {
    id: "fl-3d",
    name: "3D Acoustic Fluted Louver Panel",
    category: "louvers",
    division: "Surface Studio",
    grade: "Architectural WPC / Charcoal",
    thickness: "12mm, 18mm Deep Groove",
    finish: "Ultra Matte Walnut / Charcoal",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    psi: "Acoustic NRC 0.75",
    moisture: "100% Water & Pest Proof",
    description: "Interlocking fluted wall panels engineered for tactile feature walls, ambient backlighting, and acoustic insulation.",
  },
  {
    id: "lm-met",
    name: "Italian Brushed Metallic Laminate",
    category: "laminates",
    division: "Surface Studio",
    grade: "High Pressure HPL 1.5mm",
    thickness: "1.5mm Designer Foil",
    finish: "Fingerprint Resistant Champagne Brass",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    psi: "Class 1 Fire Rated",
    moisture: "Thermal Resistant 180°C",
    description: "Ultra-contemporary metallic surface foil designed for haute furniture, boutique retail, and hotel interior millwork.",
  },
  {
    id: "vn-exotic",
    name: "Smoked Santos Rosewood Veneer Slab",
    category: "veneers",
    division: "Surface Studio",
    grade: "FSC Certified Natural Log",
    thickness: "0.55mm Natural Fleece Backed",
    finish: "Deep Smoked Open Grain",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    psi: "Premium Log Matched",
    moisture: "Flex-Back Fleece Layer",
    description: "Rare architectural veneer flitches sourced for executive conference tables, feature cabinetry, and luxury suites.",
  },
  {
    id: "fd-fire",
    name: "Fire-Retardant Architectural Flush Door",
    category: "plywood",
    division: "Shree Shyam Ply & Laminates",
    grade: "IS 2202 Part-1 Certified",
    thickness: "35mm, 40mm, 45mm Solid Core",
    finish: "Hardwood Lipping Encapsulated",
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=600&q=80",
    psi: "120 Mins Fire Rating",
    moisture: "Vacuum Pressure Treated",
    description: "Engineered solid timber frame flush doors with intumescent seal compatibility for commercial and high-rise developments.",
  },
];

interface MaterialExplorerProps {
  onOpenSpecimenModal: (specimen: Specimen) => void;
  onOpenInquiry: (materialName?: string) => void;
}

export default function MaterialExplorer({
  onOpenSpecimenModal,
  onOpenInquiry,
}: MaterialExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Specimen" },
    { id: "plywood", label: "Structural Plywood" },
    { id: "timber", label: "Teak & Timber" },
    { id: "louvers", label: "Flute Louvers" },
    { id: "laminates", label: "Designer Laminates" },
    { id: "veneers", label: "Wood Veneers" },
  ];

  const filteredMaterials = MATERIAL_CATALOG.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="materials-explorer-section"
      className="w-full px-4 sm:px-8 md:px-16 py-20 bg-[#f4f4f5] border-b border-neutral-200"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-300 text-[11px] font-inter uppercase font-bold tracking-widest text-black mb-3 sharp-0">
              <Layers className="w-3.5 h-3.5" />
              CAD & Technical Data Index
            </div>
            <h2 className="font-jakarta text-3xl sm:text-5xl font-extrabold text-black tracking-tight">
              Material Specimen Explorer
            </h2>
            <p className="font-inter text-neutral-600 text-sm sm:text-base mt-2 max-w-2xl">
              Inspect physical specifications, tensile ratings, thickness tolerances, and moisture coefficients across SSPL material divisions.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search plywood, teak, louvers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-300 font-inter text-xs text-black placeholder-neutral-400 focus:outline-none focus:border-black sharp-0 shadow-sm transition-colors"
            />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-neutral-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 font-inter text-xs uppercase tracking-wider font-semibold sharp-0 cursor-pointer whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-black text-white shadow-sm"
                  : "bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMaterials.map((material) => (
              <motion.div
                key={material.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-neutral-300 p-6 flex flex-col justify-between hover:border-black transition-all group sharp-0 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
                    <span className="font-inter text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                      {material.division}
                    </span>
                    <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200 font-inter text-[10px] font-semibold text-black uppercase sharp-0">
                      {material.grade}
                    </span>
                  </div>

                  {/* Thumbnail Image */}
                  <div
                    onClick={() => onOpenSpecimenModal(material)}
                    className="relative w-full h-48 overflow-hidden mb-5 border border-neutral-200 cursor-pointer group/img"
                  >
                    <img
                      src={material.image}
                      alt={material.name}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-black font-inter text-xs font-bold uppercase tracking-wider flex items-center gap-2 sharp-0 shadow-lg">
                        <Eye className="w-3.5 h-3.5" /> Inspect Spec Sheet
                      </span>
                    </div>
                  </div>

                  {/* Material Name */}
                  <h3 className="font-jakarta text-lg font-bold text-black mb-2 tracking-tight group-hover:text-neutral-800">
                    {material.name}
                  </h3>

                  <p className="font-inter text-xs text-neutral-600 mb-6 leading-relaxed line-clamp-2">
                    {material.description}
                  </p>

                  {/* Mini Spec Matrix */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-neutral-50 border border-neutral-200 mb-6 text-[11px] font-inter">
                    <div>
                      <span className="text-neutral-400 uppercase font-medium block">
                        Thickness
                      </span>
                      <span className="font-semibold text-black">
                        {material.thickness}
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-400 uppercase font-medium block">
                        Rating / PSI
                      </span>
                      <span className="font-semibold text-black">
                        {material.psi}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-neutral-100">
                  <button
                    onClick={() => onOpenSpecimenModal(material)}
                    className="flex-1 py-2.5 bg-black text-white font-inter text-xs uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-colors sharp-0 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" /> Spec Sheet
                  </button>

                  <button
                    onClick={() => onOpenInquiry(`Sample Request: ${material.name}`)}
                    className="px-4 py-2.5 bg-white text-black border border-neutral-300 hover:border-black font-inter text-xs uppercase tracking-wider font-semibold transition-colors sharp-0 cursor-pointer"
                  >
                    Request Swatch
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
