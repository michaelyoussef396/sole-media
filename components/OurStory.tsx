'use client';

import { motion } from 'framer-motion';
import { TypingText } from '@/components/CustomTexts';
import { fadeIn, staggerContainer } from '@/lib/animations';

const sections = [
  {
    title: "The Beginning",
    content:
      "Like many great stories, ours began with a common goal to transform the marketing industry. A single goal inspired the founding of Sole Media in 2024 by three friends: to help businesses of all sizes stand out in an ever-evolving digital landscape.",
  },
  {
    title: "The Vision",
    content:
      "Our goal has been clear from the beginning: to provide creative, goal-oriented marketing solutions that enable brands and their audiences to engage in meaningful ways. We believe every brand has a unique story to tell, and our goal is to leverage creative thinking and strategic insight to bring those stories to life.",
  },
  {
    title: "Our Expertise",
    content:
      "Our experience at Sole Media encompasses a wide range of crucial marketing services. Our skills lie in creating captivating content, creating visually striking designs, and creating captivating websites that entice visitors to take action. We can effectively manage and market your brand on social media to make sure it is present and interesting on all of the platforms. Whether it's through clever web advertising or imaginative design, we use our wide range of abilities to help our clients succeed.",
  },
  {
    title: "The Team",
    content:
      "The key to our success is our team. We are a team of imaginative thinkers, accomplished designers, and astute strategists that individually bring a special viewpoint to every project. Every campaign gains from a variety of skills thanks to our collaborative approach, which produces creative and successful marketing solutions.",
  },
  {
    title: "The Impact",
    content:
      "The outcomes we attain serve as our yardstick for success. Our goal is always to produce quantifiable results, whether that means increasing brand awareness, generating revenue, or building enduring connections with clients. Our greatest satisfaction comes from seeing our clients succeed; we rejoice with them at each new turn.",
  },
  {
    title: "The Future",
    content:
      "To keep ahead of market trends, we're still dedicated to pushing the envelope and utilizing cutting-edge technologies. Our mission is to keep providing outstanding customer service and developing powerful marketing plans that empower our clients to confidently and creatively traverse the digital world.",
  },
  {
    title: "Join Us",
    content:
      "We would like to include you in our narrative. Let Sole Media assist you in achieving your marketing objectives and telling your story, whether you are a startup or an established business. Reach out to us.",
  },
];

const OurStory = () => (
  <section className="relative z-10 w-full" id="our-story">
    <div className="absolute inset-0 w-full h-full gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      className="flex flex-col items-center justify-center mx-auto px-4 py-8 bg-bermudaGray w-full"
    >
      <TypingText title="Our Story" textStyles="text-center" />

      {sections.map((section, index) => (
        <div key={index} className="w-full text-center my-8">
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            whileInView="show"
            initial="hidden"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-[8px] font-normal sm:text-[24px] text-[16px] text-secondary-white max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {section.title}
            </h2>
            <p className="mb-6">{section.content}</p>
          </motion.div>

          {index < sections.length - 1 && (
            <motion.img
              variants={fadeIn('up', 'tween', 0.3, 1)}
              whileInView="show"
              initial="hidden"
              viewport={{ once: true, amount: 0.25 }}
              src="/arrow-down.svg"
              alt="arrow down"
              className="w-[18px] h-[28px] object-contain mt-[28px] mx-auto"
            />
          )}
        </div>
      ))}
    </motion.div>
  </section>
);

export default OurStory;
