"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/lib/animations";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="bg-wedgewood flex flex-col justify-center items-center h-screen p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <Spotlight className="hidden md:flex absolute top-20 left-1/2 transform -translate-x-1/2" fill="#4A7897" />

      {/*<motion.div
        className="flex justify-center items-center w-full h-full"
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        animate="show"
      >
    <Image
          src="/hero.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="w-full sm:h-[500px] h-[280px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>*/}

      <motion.div
        className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-mischka to-bermudaGray bg-opacity-50 z-10"
        variants={textVariant(0.5)}
        initial="hidden"
        animate="show"
      >
        Create, grow, and <br /> scale your business
      </motion.div>
      
      <motion.p
        className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4 z-10"
        variants={textVariant(1)}
        initial="hidden"
        animate="show"
      >
        Custom tailored solutions for your business. We are a team of creatives who are excited to help you grow your business.
      </motion.p>
      
      <motion.div
        className="z-10"
        variants={textVariant(1.5)}
        initial="hidden"
        animate="show"
      >
        <Link
          href="/book"
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white bg-baliHai hover:bg-bermudaGray"
        >
          Book a call
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
