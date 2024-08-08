"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void;
}

const Header = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50 bg-wedgewood">
        <div className="flex items-center">
          <Link className="cursor-pointer flex items-center" href="/">
            <Image
              priority
              src="/logo.png"
              alt="Logo"
              width={60} 
              height={90} 
              className="w-16 h-16 md:w-20 md:h-20" 
            />
            <span className="ml-4 text-xl font-semibold text-mischka md:text-2xl">Sole Media</span> 
          </Link>
        </div>
        <div className="flex-grow flex justify-center">
          <div
            className="cursor-pointer hidden 
              md:flex space-x-10 items-center
              text-mischka text-center 
              bg-clip-text text-transparent 
              bg-gradient-to-b from-baliHai
              to-bermudaGray bg-opacity-50"
          >
            <div onClick={scrollToWebsiteDesign} className="hover:text-gray-50">
              Home
            </div>
            <div onClick={scrollToGraphicDesign} className="hover:text-gray-50">
              Our Story
            </div>
            <div onClick={scrollToShopifyStores} className="hover:text-gray-50">
              Services
            </div>
            <div onClick={scrollToBrands} className="hover:text-gray-50">
              Pricing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
