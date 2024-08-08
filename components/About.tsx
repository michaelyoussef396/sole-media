'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import Image from 'next/image';
import styles from '@/styles';
import { fadeIn, staggerContainer } from '@/lib/animations';

const About = () => (
  <section className={`relative z-10 w-full`}>
    <div className="absolute inset-0 w-full h-full gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col items-center justify-center mx-auto px-4 py-8 bg-bermudaGray w-full h-full"
    >
      <TypingText title="Our Story" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        At <span className="font-extrabold text-white">Sole Media</span>, we are
        passionate about helping businesses achieve their full potential. Our
        team of creative professionals is dedicated to delivering innovative and
        effective marketing solutions tailored to your unique needs. Whether
        it's web design, SEO optimization, online advertising, or content
        creation, we bring a wealth of expertise and a fresh perspective to
        every project. Our mission is to empower brands to{' '}
        <span className="font-extrabold text-white">create</span>,{' '}
        <span className="font-extrabold text-white">grow</span>, and{' '}
        <span className="font-extrabold text-white">scale</span> their
        businesses through strategic marketing initiatives that drive results.
        Join us on this journey and let's{' '}
        <span className="font-extrabold text-white">elevate</span> your brand to
        new heights together.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
