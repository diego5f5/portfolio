/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";

import { SectionTitle } from "./SectionTitle";

export const AboutSection = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto pt-20 md:pt-24">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center"
      >
        <SectionTitle title="ABOUT" />

        <article className="bg-white w-full p-8 rounded-3xl">
          <p className="text-lg">
            I am a person passionate about technology, and now, with over 4
            years of experience in the software development field, I
            increasingly realize that I am exactly where I want to be, working
            with something that I love.
            <br />
            <br />
            During my Bachelor's degree in Information Systems, I came across
            various career options within the IT world, but I immediately
            identified with front-end development. Being able to combine
            programming logic and visual structure in their various forms is
            something that captivates me and gives me immense satisfaction.
            <br />
            <br />I am always open to learning new things and I am not afraid of
            challenges. In fact, I prefer working with challenging tasks, and I
            see this as a motivational factor during the execution of my work.
            Over these years as a front-end developer, I have developed a skill
            that I consider very important – effective communication with the
            team. This way, I become a key player that connects design and
            back-end, enabling me to address issues and obstacles before they
            can arise in application development.
          </p>
        </article>
      </motion.div>
    </section>
  );
};
