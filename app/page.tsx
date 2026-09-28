"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SplitGateway from "@/components/SplitGateway";
import MetricsStrip from "@/components/MetricsStrip";
import MaterialExplorer, { Specimen } from "@/components/MaterialExplorer";
import ShowroomGrid from "@/components/ShowroomGrid";
import TradeBanner from "@/components/TradeBanner";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";
import Toast from "@/components/Toast";

export default function Home() {
  // Modal States
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState("");

  const [showroomModalOpen, setShowroomModalOpen] = useState(false);
  const [showroomModalType, setShowroomModalType] = useState<"shree-shyam" | "surface-studio" | null>(null);

  const [specimenModalOpen, setSpecimenModalOpen] = useState(false);
  const [selectedSpecimen, setSelectedSpecimen] = useState<Specimen | null>(null);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingShowroom, setBookingShowroom] = useState("Bowbazar Flagship Showroom");

  const [tradeModalOpen, setTradeModalOpen] = useState(false);

  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false);
  const [enterpriseMetricTopic, setEnterpriseMetricTopic] = useState("");

  // Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const handleCopyPhone = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("+918282038080");
    }
    showToast("Phone number +91 82820 38080 copied to clipboard.");
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenInquiry = (topic?: string) => {
    setInquiryTopic(topic || "General Material Consultation");
    setInquiryOpen(true);
  };

  const handleOpenShowroomModal = (type: "shree-shyam" | "surface-studio") => {
    setShowroomModalType(type);
    setShowroomModalOpen(true);
  };

  const handleOpenSpecimenModal = (specimen: Specimen) => {
    setSelectedSpecimen(specimen);
    setSpecimenModalOpen(true);
  };

  const handleOpenBookingModal = (showroomName: string) => {
    setBookingShowroom(showroomName);
    setBookingModalOpen(true);
  };

  const handleOpenEnterpriseModal = (metricTopic?: string) => {
    setEnterpriseMetricTopic(metricTopic || "Enterprise Overview");
    setEnterpriseModalOpen(true);
  };

  const handleDownloadCatalog = () => {
    showToast("Downloading SSPL Hub Architectural Specification Guide (PDF)...");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] antialiased selection:bg-black selection:text-white">
      {/* Header */}
      <Header
        onOpenInquiry={handleOpenInquiry}
        onOpenShowroomModal={handleOpenShowroomModal}
        onCopyPhone={handleCopyPhone}
      />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero
          onScrollToSection={handleScrollToSection}
          onOpenTradeModal={() => setTradeModalOpen(true)}
        />

        {/* Dual Showroom Split Gateway */}
        <SplitGateway
          onOpenShowroomModal={handleOpenShowroomModal}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Enterprise Metrics Strip */}
        <MetricsStrip onOpenEnterpriseModal={handleOpenEnterpriseModal} />

        {/* Material Specimen Explorer */}
        <MaterialExplorer
          onOpenSpecimenModal={handleOpenSpecimenModal}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Kolkata Showrooms Experience Centers */}
        <ShowroomGrid
          onOpenBookingModal={handleOpenBookingModal}
          onCopyPhone={handleCopyPhone}
          onShowToast={showToast}
        />

        {/* Architect & Trade Partner Fast Access Banner */}
        <TradeBanner
          onOpenTradeModal={() => setTradeModalOpen(true)}
          onDownloadCatalog={handleDownloadCatalog}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenInquiry={handleOpenInquiry}
        onOpenShowroomModal={handleOpenShowroomModal}
        onScrollToSection={handleScrollToSection}
        onCopyPhone={handleCopyPhone}
        onShowToast={showToast}
      />

      {/* All Interactive Modals & Drawers */}
      <Modals
        inquiryOpen={inquiryOpen}
        onCloseInquiry={() => setInquiryOpen(false)}
        inquiryDefaultTopic={inquiryTopic}
        showroomModalOpen={showroomModalOpen}
        showroomModalType={showroomModalType}
        onCloseShowroomModal={() => setShowroomModalOpen(false)}
        specimenModalOpen={specimenModalOpen}
        selectedSpecimen={selectedSpecimen}
        onCloseSpecimenModal={() => setSpecimenModalOpen(false)}
        bookingModalOpen={bookingModalOpen}
        bookingShowroom={bookingShowroom}
        onCloseBookingModal={() => setBookingModalOpen(false)}
        tradeModalOpen={tradeModalOpen}
        onCloseTradeModal={() => setTradeModalOpen(false)}
        enterpriseModalOpen={enterpriseModalOpen}
        enterpriseMetricTopic={enterpriseMetricTopic}
        onCloseEnterpriseModal={() => setEnterpriseModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notifications */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
