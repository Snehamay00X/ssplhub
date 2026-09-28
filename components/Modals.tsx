"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ShieldCheck, MapPin, Phone, Mail, Building, Calendar, Layers, Box, Sparkles, Download, CheckCircle2 } from "lucide-react";
import { Specimen } from "./MaterialExplorer";

interface ModalsProps {
  inquiryOpen: boolean;
  onCloseInquiry: () => void;
  inquiryDefaultTopic?: string;

  showroomModalOpen: boolean;
  showroomModalType: "shree-shyam" | "surface-studio" | null;
  onCloseShowroomModal: () => void;

  specimenModalOpen: boolean;
  selectedSpecimen: Specimen | null;
  onCloseSpecimenModal: () => void;

  bookingModalOpen: boolean;
  bookingShowroom: string;
  onCloseBookingModal: () => void;

  tradeModalOpen: boolean;
  onCloseTradeModal: () => void;

  enterpriseModalOpen: boolean;
  enterpriseMetricTopic?: string;
  onCloseEnterpriseModal: () => void;

  onShowToast: (msg: string) => void;
}

export default function Modals({
  inquiryOpen,
  onCloseInquiry,
  inquiryDefaultTopic = "",
  showroomModalOpen,
  showroomModalType,
  onCloseShowroomModal,
  specimenModalOpen,
  selectedSpecimen,
  onCloseSpecimenModal,
  bookingModalOpen,
  bookingShowroom,
  onCloseBookingModal,
  tradeModalOpen,
  onCloseTradeModal,
  enterpriseModalOpen,
  enterpriseMetricTopic,
  onCloseEnterpriseModal,
  onShowToast,
}: ModalsProps) {
  // Inquiry Form State
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryRole, setInquiryRole] = useState("Architect / Interior Designer");
  const [inquiryTopic, setInquiryTopic] = useState(inquiryDefaultTopic || "General Material Consultation");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Booking Form State
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("11:00 AM");
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Trade Form State
  const [tradeFirm, setTradeFirm] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [tradePhone, setTradePhone] = useState("");
  const [tradeCity, setTradeCity] = useState("Kolkata");
  const [tradeSubmitted, setTradeSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    onShowToast(`Inquiry submitted for ${inquiryName || "Concierge"}. We will call +91 ${inquiryPhone || "8282038080"} shortly.`);
    setTimeout(() => {
      setInquirySubmitted(false);
      onCloseInquiry();
    }, 2500);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    onShowToast(`Showroom visit confirmed for ${bookingDate || "Tomorrow"} at ${bookingTime}.`);
    setTimeout(() => {
      setBookingSubmitted(false);
      onCloseBookingModal();
    }, 2500);
  };

  const handleTradeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTradeSubmitted(true);
    onShowToast(`Architect Swatch Box requested for ${tradeFirm || tradeName}. Dispatching to ${tradeCity}.`);
    setTimeout(() => {
      setTradeSubmitted(false);
      onCloseTradeModal();
    }, 2500);
  };

  return (
    <>
      {/* 1. CONCIERGE INQUIRY MODAL */}
      <AnimatePresence>
        {inquiryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-white border border-black p-8 relative sharp-0 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={onCloseInquiry}
                className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors sharp-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!inquirySubmitted ? (
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-inter uppercase font-bold tracking-widest mb-3 sharp-0">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    SSPL Concierge Service
                  </div>
                  <h3 className="font-jakarta text-2xl font-bold text-black mb-1">
                    Architectural Consultation & Quote Request
                  </h3>
                  <p className="font-inter text-xs text-neutral-600 mb-6">
                    Direct access to SSPL structural wood specialists and Surface Studio design consultants.
                  </p>

                  <form onSubmit={handleInquirySubmit} className="space-y-4 font-inter text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                          Your Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Ar. Vikram Malhotra"
                          value={inquiryName}
                          onChange={(e) => setInquiryName(e.target.value)}
                          className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0"
                        />
                      </div>
                      <div>
                        <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                          Phone Number *
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 98300 00000"
                          value={inquiryPhone}
                          onChange={(e) => setInquiryPhone(e.target.value)}
                          className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="studio@architects.com"
                          value={inquiryEmail}
                          onChange={(e) => setInquiryEmail(e.target.value)}
                          className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0"
                        />
                      </div>
                      <div>
                        <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                          Professional Role
                        </label>
                        <select
                          value={inquiryRole}
                          onChange={(e) => setInquiryRole(e.target.value)}
                          className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0 cursor-pointer"
                        >
                          <option>Architect / Principal Designer</option>
                          <option>Interior Director</option>
                          <option>Real Estate Developer</option>
                          <option>General Contractor</option>
                          <option>Private Residence Client</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                        Subject / Material Focus
                      </label>
                      <input
                        type="text"
                        value={inquiryTopic || inquiryDefaultTopic}
                        onChange={(e) => setInquiryTopic(e.target.value)}
                        placeholder="e.g. 19mm IS 710 Plywood Bulk Supply or Fluted Louvers"
                        className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0"
                      />
                    </div>

                    <div>
                      <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                        Project Specifications / Notes
                      </label>
                      <textarea
                        rows={3}
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        placeholder="Mention square footage, preferred timber species, or delivery timelines..."
                        className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0 resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={onCloseInquiry}
                        className="px-5 py-3 border border-neutral-300 text-neutral-700 uppercase font-semibold sharp-0 cursor-pointer hover:bg-neutral-100"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-black text-white uppercase font-bold tracking-wider sharp-0 cursor-pointer hover:bg-neutral-800 transition-colors"
                      >
                        Submit Inquiry
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-none mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="font-jakarta text-2xl font-bold text-black mb-2">
                    Inquiry Received
                  </h3>
                  <p className="font-inter text-xs text-neutral-600 max-w-md mb-6">
                    Our senior material consultant will reach out directly to discuss your project requirements and dispatch spec sheets.
                  </p>
                  <span className="font-inter text-[11px] text-neutral-400 uppercase tracking-widest font-bold">
                    Closing dialog...
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. SHOWROOM DETAIL DRAWER (Shree Shyam vs Surface Studio) */}
      <AnimatePresence>
        {showroomModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-4xl bg-white border border-black p-8 sm:p-10 relative sharp-0 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={onCloseShowroomModal}
                className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-black hover:bg-neutral-100 sharp-0 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {showroomModalType === "shree-shyam" ? (
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-200">
                    <span className="px-3 py-1 bg-black text-white font-inter text-[10px] uppercase tracking-widest font-bold sharp-0">
                      ESTABLISHED 2010 • FLAGSHIP DEPOT
                    </span>
                    <span className="font-inter text-xs text-emerald-700 font-semibold uppercase flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> 100% ISI CERTIFIED
                    </span>
                  </div>

                  <h2 className="font-jakarta text-3xl font-bold text-black mb-2 tracking-tight">
                    Shree Shyam Ply & Laminates
                  </h2>
                  <p className="font-inter text-sm text-neutral-600 mb-6 leading-relaxed">
                    Kolkata's trusted wholesale distribution center for structural timber, calibrated plywood, block boards, and flush doors.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 border border-neutral-300">
                      <img
                        src="https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=80"
                        alt="Shree Shyam Showroom"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                        <span className="font-inter text-xs text-white uppercase tracking-wider font-semibold">
                          Bowbazar Master Wood & Timber Depot
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 font-inter text-xs text-neutral-700 bg-neutral-50 p-6 border border-neutral-200">
                      <h4 className="font-bold uppercase text-black text-xs tracking-wider border-b border-neutral-200 pb-2">
                        Core Material Offerings
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                          <span><strong>IS 710 Marine Plywood:</strong> Calibrated hardwood core, 100% boiling waterproof.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                          <span><strong>Burma & Seasoned Teak Timber:</strong> Grade-A heartwood sawn to custom architectural dimensions.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                          <span><strong>Pine & Hardwood Block Boards:</strong> Termite-proof pine filler with high screw-holding power.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                          <span><strong>Fire-Retardant Flush Doors:</strong> Intumescent seal ready, 120-min fire rated.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 font-inter text-xs text-neutral-600">
                      <MapPin className="w-4 h-4 text-black" />
                      <span>Bowbazar, Gangadhar Babu Ln, Kolkata 700012</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => {
                          onCloseShowroomModal();
                          onCloseInquiry();
                          setTimeout(() => {
                            setInquiryTopic("Shree Shyam Wholesale Timber & Plywood Supply");
                          }, 100);
                        }}
                        className="flex-1 sm:flex-initial px-6 py-3 bg-black text-white font-inter text-xs uppercase font-bold tracking-wider sharp-0 cursor-pointer hover:bg-neutral-800"
                      >
                        Request Wholesale Rates
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-200">
                    <span className="px-3 py-1 bg-amber-500 text-black font-inter text-[10px] uppercase tracking-widest font-bold sharp-0">
                      OPENING OCTOBER 2026 • BOUTIQUE GALLERY
                    </span>
                    <span className="font-inter text-xs text-neutral-600 font-semibold uppercase">
                      HAUTE STREET TOPSIA
                    </span>
                  </div>

                  <h2 className="font-jakarta text-3xl font-bold text-black mb-2 tracking-tight">
                    Surface Studio
                  </h2>
                  <p className="font-inter text-sm text-neutral-600 mb-6 leading-relaxed">
                    Avant-garde luxury surface lounge dedicated to high-end decorative louvers, metallic acrylics, acoustic wall panels, and bespoke wood veneers.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 border border-neutral-300">
                      <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                        alt="Surface Studio"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                        <span className="font-inter text-xs text-white uppercase tracking-wider font-semibold">
                          Haute Street Design Gallery & Swatch Lounge
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 font-inter text-xs text-neutral-700 bg-neutral-50 p-6 border border-neutral-200">
                      <h4 className="font-bold uppercase text-black text-xs tracking-wider border-b border-neutral-200 pb-2">
                        Designer Collections Preview
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>3D Acoustic Flute Louvers:</strong> Interlocking WPC profiles in deep walnut & matte charcoal.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>Italian Metallic Foils:</strong> Fingerprint-resistant brushed brass & champagne gold laminates.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>Exotic Smoked Veneers:</strong> Log-matched fleece-backed flitches for executive millwork.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>Architectural Swatch Lounge:</strong> Dedicated private consultation suites for interior directors.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 font-inter text-xs text-neutral-600">
                      <MapPin className="w-4 h-4 text-black" />
                      <span>Haute Street Corporate Park, Topsia Rd, Kolkata 700046</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => {
                          onCloseShowroomModal();
                          onShowToast("VIP Opening Launch Pass pre-booked for Surface Studio (Oct 2026).");
                        }}
                        className="flex-1 sm:flex-initial px-6 py-3 bg-amber-500 text-black font-inter text-xs uppercase font-bold tracking-wider sharp-0 cursor-pointer hover:bg-amber-400"
                      >
                        Pre-Book Launch Pass
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. SPECIMEN CAD SPEC SHEET MODAL */}
      <AnimatePresence>
        {specimenModalOpen && selectedSpecimen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full max-w-3xl bg-white border border-black p-8 relative sharp-0 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={onCloseSpecimenModal}
                className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-black hover:bg-neutral-100 sharp-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-inter text-[10px] uppercase tracking-widest font-bold mb-3 sharp-0">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                Technical Specification Sheet • {selectedSpecimen.division}
              </div>

              <h3 className="font-jakarta text-2xl font-bold text-black mb-2">
                {selectedSpecimen.name}
              </h3>

              <p className="font-inter text-xs text-neutral-600 mb-6">
                {selectedSpecimen.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative h-56 border border-neutral-300">
                  <img
                    src={selectedSpecimen.image}
                    alt={selectedSpecimen.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 border border-neutral-300 text-[10px] font-inter uppercase font-bold text-black">
                    {selectedSpecimen.grade}
                  </div>
                </div>

                <div className="bg-neutral-50 p-5 border border-neutral-300 font-inter text-xs space-y-3">
                  <h4 className="font-bold text-black uppercase tracking-wider text-xs border-b border-neutral-200 pb-2">
                    CAD Physical Coefficients
                  </h4>
                  <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                    <span className="text-neutral-500 uppercase">Available Thickness</span>
                    <span className="font-semibold text-black">{selectedSpecimen.thickness}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                    <span className="text-neutral-500 uppercase">Finish Surface</span>
                    <span className="font-semibold text-black">{selectedSpecimen.finish}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                    <span className="text-neutral-500 uppercase">Tensile Strength</span>
                    <span className="font-semibold text-black">{selectedSpecimen.psi}</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-neutral-500 uppercase">Moisture Content</span>
                    <span className="font-semibold text-black">{selectedSpecimen.moisture}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => onShowToast(`Downloading technical CAD datasheet PDF for ${selectedSpecimen.name}`)}
                  className="w-full sm:w-auto px-5 py-3 border border-neutral-300 text-neutral-800 font-inter text-xs font-semibold uppercase tracking-wider hover:border-black flex items-center justify-center gap-2 sharp-0 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-neutral-600" /> Download CAD Data (PDF)
                </button>

                <button
                  onClick={() => {
                    onCloseSpecimenModal();
                    onCloseInquiry();
                    setTimeout(() => {
                      setInquiryTopic(`Physical Swatch Box Request: ${selectedSpecimen.name}`);
                    }, 100);
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-black text-white font-inter text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 sharp-0 cursor-pointer"
                >
                  Request Swatch Box
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. SHOWROOM TOUR BOOKING MODAL */}
      <AnimatePresence>
        {bookingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-white border border-black p-8 relative sharp-0 shadow-2xl"
            >
              <button
                onClick={onCloseBookingModal}
                className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-black hover:bg-neutral-100 sharp-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!bookingSubmitted ? (
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-inter uppercase font-bold tracking-widest mb-3 sharp-0">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    Kolkata Experience Center Visit
                  </div>

                  <h3 className="font-jakarta text-2xl font-bold text-black mb-1">
                    Schedule In-Person Consultation
                  </h3>
                  <p className="font-inter text-xs text-neutral-600 mb-6">
                    Location: <strong>{bookingShowroom}</strong>
                  </p>

                  <form onSubmit={handleBookingSubmit} className="space-y-4 font-inter text-xs">
                    <div>
                      <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Ananya Roy"
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0"
                      />
                    </div>

                    <div>
                      <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98310 00000"
                        value={bookingPhone}
                        onChange={(e) => setBookingPhone(e.target.value)}
                        className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                          Preferred Date *
                        </label>
                        <input
                          required
                          type="date"
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0 cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                          Time Slot
                        </label>
                        <select
                          value={bookingTime}
                          onChange={(e) => setBookingTime(e.target.value)}
                          className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0 cursor-pointer"
                        >
                          <option>11:00 AM</option>
                          <option>02:00 PM</option>
                          <option>04:30 PM</option>
                          <option>06:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={onCloseBookingModal}
                        className="px-4 py-3 border border-neutral-300 text-neutral-700 uppercase font-semibold sharp-0 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-black text-white uppercase font-bold tracking-wider sharp-0 cursor-pointer hover:bg-neutral-800"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-3" />
                  <h3 className="font-jakarta text-xl font-bold text-black mb-1">
                    Booking Confirmed
                  </h3>
                  <p className="font-inter text-xs text-neutral-600">
                    We look forward to welcoming you at {bookingShowroom}.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. TRADE PARTNER SAMPLE BOX MODAL */}
      <AnimatePresence>
        {tradeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-white border border-black p-8 relative sharp-0 shadow-2xl"
            >
              <button
                onClick={onCloseTradeModal}
                className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-black hover:bg-neutral-100 sharp-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!tradeSubmitted ? (
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-inter uppercase font-bold tracking-widest mb-3 sharp-0">
                    <Box className="w-3.5 h-3.5 text-amber-400" />
                    Architect Swatch Box Delivery
                  </div>

                  <h3 className="font-jakarta text-2xl font-bold text-black mb-1">
                    Request Physical Specimen Box
                  </h3>
                  <p className="font-inter text-xs text-neutral-600 mb-6">
                    Curated physical swatches of 19mm Marine Ply, Burma Teak veneers, and 3D Louvers delivered to your firm.
                  </p>

                  <form onSubmit={handleTradeSubmit} className="space-y-4 font-inter text-xs">
                    <div>
                      <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                        Architectural Firm / Studio Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Studio Design Atelier"
                        value={tradeFirm}
                        onChange={(e) => setTradeFirm(e.target.value)}
                        className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                          Contact Person *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Ar. Devendra Sen"
                          value={tradeName}
                          onChange={(e) => setTradeName(e.target.value)}
                          className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0"
                        />
                      </div>
                      <div>
                        <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                          Phone Number *
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 98300 00000"
                          value={tradePhone}
                          onChange={(e) => setTradePhone(e.target.value)}
                          className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block uppercase font-bold text-neutral-700 mb-1 text-[11px]">
                        Studio Dispatch Address & City
                      </label>
                      <input
                        type="text"
                        placeholder="Park Street, Kolkata 700016"
                        value={tradeCity}
                        onChange={(e) => setTradeCity(e.target.value)}
                        className="w-full p-3 bg-neutral-50 border border-neutral-300 text-black focus:outline-none focus:border-black sharp-0"
                      />
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={onCloseTradeModal}
                        className="px-4 py-3 border border-neutral-300 text-neutral-700 uppercase font-semibold sharp-0 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-black text-white uppercase font-bold tracking-wider sharp-0 cursor-pointer hover:bg-neutral-800"
                      >
                        Dispatch Swatch Box
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-3" />
                  <h3 className="font-jakarta text-xl font-bold text-black mb-1">
                    Dispatch Request Logged
                  </h3>
                  <p className="font-inter text-xs text-neutral-600">
                    Physical sample kit will be dispatched via priority courier.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. ENTERPRISE SPECS PROFILE MODAL */}
      <AnimatePresence>
        {enterpriseModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-white border border-black p-8 relative sharp-0 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={onCloseEnterpriseModal}
                className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-black hover:bg-neutral-100 sharp-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-inter uppercase font-bold tracking-widest mb-3 sharp-0">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                SSPL Group Enterprise Overview
              </div>

              <h3 className="font-jakarta text-2xl font-bold text-black mb-2">
                15+ Years Commercial & Architectural Leadership
              </h3>

              <div className="space-y-4 font-inter text-xs text-neutral-700 my-6">
                <div className="p-4 bg-neutral-50 border border-neutral-200">
                  <h4 className="font-bold text-black uppercase mb-1">50,000+ Sq.Ft Wholesale Warehouses</h4>
                  <p className="text-neutral-600">
                    Master timber depot in Bowbazar housing seasoned Burma Teak, Gurjan wood, and calibrated IS 710 marine plywood stock ready for immediate commercial dispatch across Kolkata & Eastern India.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 border border-neutral-200">
                  <h4 className="font-bold text-black uppercase mb-1">100% BIS & ISI Certification</h4>
                  <p className="text-neutral-600">
                    Every batch undergoes laboratory tensile stress testing, boiling water resistance (72-hr test), and intumescent fire rating verification.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 border border-neutral-200">
                  <h4 className="font-bold text-black uppercase mb-1">Two Specialized Experience Centers</h4>
                  <p className="text-neutral-600">
                    Shree Shyam Ply & Laminates (Bowbazar) handles heavy structural wood supply; Surface Studio (Haute Street Topsia, Oct 2026) caters to luxury interior finishes.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex justify-end">
                <button
                  onClick={onCloseEnterpriseModal}
                  className="px-6 py-2.5 bg-black text-white font-inter text-xs font-bold uppercase tracking-wider sharp-0 cursor-pointer"
                >
                  Close Overview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
