"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section className="bg-wedgewood flex flex-col justify-center items-center h-screen p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <Spotlight className="hidden md:flex absolute top-20 left-1/2 transform -translate-x-1/2" fill="#4A7897" />
      
      <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-mischka to-bermudaGray bg-opacity-50">
        Create, grow, and <br /> scale your business
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
        Custom tailored solutions for your business. We are a team of creatives who are excited to help you grow your business.
      </p>
      <Link
        href={"/book"}
        className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white bg-baliHai hover:bg-bermudaGray"
      >
        Book a call
      </Link>
    </section>
  );
};

export default Hero;
