"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Calendar, ChevronRight, CheckCircle2 } from "lucide-react";

interface ShowroomGridProps {
  onOpenBookingModal: (showroomName: string) => void;
  onCopyPhone: () => void;
  onShowToast: (msg: string) => void;
}

export default function ShowroomGrid({
  onOpenBookingModal,
  onCopyPhone,
  onShowToast,
}: ShowroomGridProps) {
  const showrooms = [
    {
      title: "Bowbazar Flagship Showroom",
      division: "Shree Shyam Ply & Laminates",
      status: "Open Mon-Sat • 10:00 - 19:30",
      statusBadge: "Active Master Depot",
      address:
        "Ground floor, 3B, Gangadhar Babu Ln, Calcutta Medical College, Bowbazar, Kolkata, West Bengal 700012",
      phone: "+91 82820 38080",
      mapUrl: "https://maps.google.com/?q=Bowbazar+Kolkata+West+Bengal+700012",
      image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "50,000+ Sq.Ft Timber Stockyard",
        "Direct Bulk Architectural Dispatch",
        "ISI Certification Testing Bench",
      ],
    },
    {
      title: "Haute Street Design Gallery",
      division: "Surface Studio Finishes",
      status: "Opening Oct 2026",
      statusBadge: "Boutique Swatch Lounge",
      address:
        "Haute Street Corporate Park, 86A, Topsia Rd, Seal Lane, Topsia, Kolkata, West Bengal 700046",
      phone: "+91 82820 38080",
      mapUrl: "https://maps.google.com/?q=Topsia+Road+Kolkata+West+Bengal+700046",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "VIP Architect Consultation Suites",
        "3D Acoustic Flute Mockups",
        "Curated Italian Swatch Library",
      ],
    },
  ];

  return (
    <section
      id="showrooms-section"
      className="w-full px-4 sm:px-8 md:px-16 py-20 bg-white border-b border-neutral-200"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="font-inter text-xs uppercase tracking-[0.16em] text-neutral-500 font-bold block mb-1">
              Kolkata Experience Centers
            </span>
            <h2 className="font-jakarta text-3xl sm:text-4xl font-bold text-black tracking-tight">
              Visit Our Architectural Showrooms
            </h2>
          </div>

          <button
            onClick={() => onOpenBookingModal("General Kolkata Visit")}
            className="px-5 py-3 bg-black text-white font-inter text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors sharp-0 cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" /> Schedule Tour
          </button>
        </div>

        {/* Showrooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {showrooms.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#f9f9f9] border border-neutral-300 p-8 flex flex-col justify-between hover:border-black transition-all group sharp-0 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200">
                  <span className="px-3 py-1 bg-white border border-neutral-300 font-inter text-[10px] font-bold text-black uppercase tracking-wider sharp-0">
                    {s.division}
                  </span>
                  <span className="font-inter text-xs text-neutral-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-700" />
                    {s.status}
                  </span>
                </div>

                <h3 className="font-jakarta text-2xl font-bold text-black mb-3 tracking-tight">
                  {s.title}
                </h3>

                <p className="font-inter text-xs text-neutral-600 mb-6 flex items-start gap-2 leading-relaxed">
                  <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>{s.address}</span>
                </p>

                {/* Showroom Image */}
                <div className="relative h-48 overflow-hidden mb-6 border border-neutral-200">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <span className="font-inter text-xs text-white uppercase font-medium tracking-wider">
                      {s.statusBadge}
                    </span>
                  </div>
                </div>

                {/* Facility Highlights */}
                <div className="space-y-2 mb-6">
                  {s.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-inter text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={onCopyPhone}
                  className="font-inter text-xs font-semibold text-black hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {s.phone}
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={s.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onShowToast(`Opening Google Maps directions for ${s.title}`)}
                    className="px-3 py-2 bg-white text-neutral-800 border border-neutral-300 hover:border-black font-inter text-xs font-semibold uppercase tracking-wider flex items-center gap-1 sharp-0 transition-colors"
                  >
                    <Navigation className="w-3 h-3" />
                    Directions
                  </a>

                  <button
                    onClick={() => onOpenBookingModal(s.title)}
                    className="px-4 py-2 bg-black text-white hover:bg-neutral-800 font-inter text-xs font-semibold uppercase tracking-wider flex items-center gap-1 sharp-0 cursor-pointer transition-colors"
                  >
                    Book Visit
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
