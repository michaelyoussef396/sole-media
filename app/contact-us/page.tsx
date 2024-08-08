// pages/contact-us.tsx
"use client";
import Header from "@/components/Header";
import { useState, useRef } from "react";
import ContactHero from "@/components/ContactHero";
import CalendlyWrapper from "@/components/CalendlyWrapper";

export default function ContactUs() {
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

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Header
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />
      <ContactHero />
      <section id="contact-form" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea id="message" className="w-full px-4 py-2 border rounded-lg"></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-wedgewood text-white rounded-lg hover:bg-baliHai transition">
            Send Message
          </button>
        </form>

        <CalendlyWrapper />
      </section>
    </main>
  );
}
