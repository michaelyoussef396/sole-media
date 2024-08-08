import React from 'react';
import { motion } from 'framer-motion';
import { ServicesBento } from "@/components/ServicesBento";
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';

const Services = () => {
  return (
    <div className="bg-gradient-to-br from-mischka via-baliHai to-bermudaGray min-h-screen flex flex-col items-center justify-center">
      <motion.div
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        animate="show"
        className="w-full flex flex-col items-center"
      >
        <motion.h1
          variants={textVariant(0.5)}
          className="text-4xl md:text-6xl font-bold text-center text-white mb-8"
        >
          Transforming Your Vision into Reality
        </motion.h1>
        <motion.p
          variants={textVariant(1)}
          className="text-lg md:text-2xl text-center text-white mb-12 px-4 max-w-3xl"
        >
          At Sole Media, we offer a suite of services designed to help your business grow and thrive. From innovative web design to powerful SEO optimization, our expert team delivers tailored solutions to elevate your brand.
        </motion.p>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 'spring', 0.2, 1)}
        initial="hidden"
        animate="show"
        className="w-full flex justify-center"
      >
        <ServicesBento />
      </motion.div>
    </div>
  );
}

export default Services;
