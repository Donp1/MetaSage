"use client";
// src/components/MetaSageLanding.tsx
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import OverviewSection from "@/components/OverviewSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import WhitepaperSection from "@/components/WhitepaperSection";
import TokenStatsWidget from "@/components/TokenStatsWidget";
import Footer from "@/components/Footer";

export default function MetaSageLanding() {
  const [activeSection, setActiveSection] = useState<
    "overview" | "tokenomics" | "roadmap" | "whitepaper"
  >("overview");
  const [tokenStats, setTokenStats] = useState({
    price: "$0.042",
    marketCap: "$42M",
    holders: "12,459",
    volume: "$1.2M",
    change: "+2.4%",
  });

  // Simulate live token stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() * 10 - 5).toFixed(2);
      setTokenStats((prev) => ({
        ...prev,
        price: `$${(Math.random() * 0.001 + 0.041).toFixed(3)}`,
        volume: `$${(Math.random() * 0.2 + 1.1).toFixed(1)}M`,
        change: `${parseFloat(change) > 0 ? "+" : ""}${change}%`,
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <TokenStatsWidget stats={tokenStats} />

      <main className="container mx-auto px-4 py-8">
        {activeSection === "overview" && <OverviewSection />}
        {activeSection === "tokenomics" && <TokenomicsSection />}
        {activeSection === "roadmap" && <RoadmapSection />}
        {activeSection === "whitepaper" && <WhitepaperSection />}
      </main>

      <Footer />
    </div>
  );
}
