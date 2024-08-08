// components/ContactHero.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactHero: React.FC = () => {
  return (
    <section className="relative bg-wedgewood text-white py-20">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-8">We'd love to hear from you. Get in touch with us today.</p>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactHero;
