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
            I'm a Frontend Developer from Brazil, driven by a passion for
            crafting outstanding web and mobile applications. With a bachelor's
            degree in Information Systems and more than 4 years of experience in
            the IT industry.
            <br />
            <br />
            My journey in the world of development has been an exciting one,
            where I've had the privilege to contribute my creativity and
            problem-solving abilities to projects that have captivated users
            across different platforms. From responsive web designs that engage
            users seamlessly to intuitive mobile apps that enhance their
            everyday experiences, I thrive on the opportunity to transform ideas
            into dynamic digital realities.
            <br />
            <br />
            With an unwavering enthusiasm for continuous growth, I am fueled by
            a desire to stay ahead in this rapidly evolving tech landscape. I
            firmly believe that there's always more to learn, and I eagerly
            embrace new challenges that come my way.
          </p>
        </article>
      </motion.div>
    </section>
  );
};
