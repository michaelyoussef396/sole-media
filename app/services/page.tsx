"use client";

import Header from "@/components/Header";
import { useState, useRef } from "react";
import ServicesHero from "@/components/ServicesHero";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <main className="w-full md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Header
        scrollToWebsiteDesign={() => scrollToSection(websiteDesignRef)}
        scrollToGraphicDesign={() => scrollToSection(graphicDesignRef)}
        scrollToShopifyStores={() => scrollToSection(shopifyStoresRef)}
        scrollToBrands={() => scrollToSection(brandsRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
      />
      <ServicesHero />
    </main>
  );
}
