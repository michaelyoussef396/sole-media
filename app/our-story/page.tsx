"use client";
import Header from "@/components/Header";
import { useState, useRef } from "react";
import Services from "@/components/Services";
import World from "@/components/World";
import Footer from "@/components/Footer";
import OurStory from "@/components/OurStory";

export default function Home() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };
    const closeDropdown = () => {
      setDropdownVisible(false);
    };
  
    const storyRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
  
    const scrollToStory = () => {
      storyRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    };
  
    const scrollToServices = () => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <main className="w-full md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Header
          scrollToWebsiteDesign={scrollToStory}
          scrollToGraphicDesign={scrollToStory}
          scrollToShopifyStores={scrollToStory}
          scrollToBrands={scrollToStory}
          scrollToServices={scrollToServices}
        />
        <div ref={storyRef}>
          <OurStory />
        </div>

      </main>
    );
  }