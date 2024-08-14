'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { staggerContainer, textVariant, slideIn } from "@/lib/animations";
import heroImage from "@/public/hero.png";

const ServicesHero = () => {
  return (
    <section
      id="services-hero"
      className="bg-wedgewood flex flex-col lg:flex-row justify-between items-center h-screen p-4 mx-auto relative z-10 w-full pt-10 md:pt-20"
    >
      <Spotlight className="hidden md:flex absolute top-20 left-1/2 transform -translate-x-1/2" fill="#4A7897" />

      {/* Text Section */}
      <motion.div
        className="flex-1 lg:max-w-[50%] text-left p-6 z-10"
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-mischka to-bermudaGray"
          variants={textVariant(0.5)}
        >
          Elevate Your Business
        </motion.h1>
        <motion.p
          className="mt-4 text-lg font-normal text-neutral-300"
          variants={textVariant(1)}
        >
          Explore our comprehensive services designed to help you achieve your business goals. From strategy to execution, we are here to support your journey.
        </motion.p>
        <motion.div
          className="mt-6"
          variants={textVariant(1.5)}
        >
          <Link
            href="#services-list"
            className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 text-white bg-baliHai hover:bg-bermudaGray"
          >
            Discover More
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        initial="hidden"
        animate="show"
        className="relative w-full md:-mt-[20px] -mt-[12px] lg:max-w-[50%] z-10"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <Image
          src={heroImage}
          alt="Services Hero Image"
          layout="responsive"
          width={700}
          height={500}
          objectFit="cover"
          className="rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </section>
  );
};

export default ServicesHero;
