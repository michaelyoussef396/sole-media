"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { navVariants, itemVariants, menuVariants } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";

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
    setIsDropDownVisible((prev) => !prev);
  };

  return (
    <div className="p-6 md:p-10 flex items-center justify-between z-50 bg-wedgewood relative">
      <motion.div
        className="flex items-center justify-between w-full"
        variants={navVariants}
        initial="hidden"
        animate="show"
      >
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
            <span className="ml-4 text-xl font-semibold text-mischka md:text-2xl">
              Sole Media
            </span>
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
              <a href="/">Home</a> {/* Updated href */}
            </div>
            <div onClick={scrollToGraphicDesign} className="hover:text-gray-50">
              <a href="/our-story">Our Story</a>
            </div>
            <div onClick={scrollToShopifyStores} className="hover:text-gray-50">
              <a href="/services">Services</a>
            </div>
            <div onClick={scrollToBrands} className="hover:text-gray-50">
              <a href="/contact-us">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="p-2 text-wedgewood bg-white rounded-full focus:outline-none"
            onClick={toggleDropDown}
          >
            {isDropDownVisible ? <X size={24} /> : <AlignJustify size={24} />}
          </button>
        </div>
      </motion.div>
      <motion.div
        className={`fixed inset-0 bg-wedgewood z-40 ${
          isDropDownVisible ? "block" : "hidden"
        }`}
        initial="hidden"
        animate={isDropDownVisible ? "show" : "hidden"}
        variants={menuVariants}
      >
        {isDropDownVisible && (
          <div className="absolute top-4 left-4 flex items-center space-x-4">
            <img src="/logo.png" alt="SoleMedia Logo" className="w-10 h-10"  />
            <span className="text-lg font-semibold text-white">SoleMedia</span>
          </div>
        )}
        <motion.nav
          className="flex flex-col items-center justify-center h-full text-white"
          initial="hidden"
          animate={isDropDownVisible ? "show" : "hidden"}
          variants={itemVariants}
        >
          {["Home", "Our Story", "Services", "Contact Us"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="mb-4 text-4xl font-bold hover:text-baliHai"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            )
          )}
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default Header;
