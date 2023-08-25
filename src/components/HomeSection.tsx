/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { AnchorButton } from "./AnchorButton";

export const HomeSection = () => {
  return (
    <section id="home" className="max-w-5xl mx-auto">
      <div className="flex md:justify-between flex-col md:flex-row items-center min-h-screen flex-wrap md:flex-nowrap pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[200px] md:w-[300px] h-[200px] md:h-[300px]"
        >
          <Image
            width={300}
            height={300}
            src="/images/profile.png"
            alt="Diego"
            className="rounded-full drop-shadow-lg min-w-[200px] md:min-w-[300px] h-[200px] md:h-[300px]"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:ml-12 gap-4 md:gap-6 text-center md:text-start mt-4 md:mt-0"
        >
          <h2 className="text-2xl">Hello, I'm</h2>

          <h1 className="text-5xl">
            <span className="text-primary">DIEGO</span> FERREIRA
          </h1>

          <h2 className="text-2xl px-2 md:px-0">
            A <span className="text-primary">Frontend Developer</span> who
            creates web and mobile solutions for real-world challenges.
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-normal gap-4 md:gap-6 flex-wrap px-6 md:px-0">
            <AnchorButton label="Projects" href="#projects" />
            <AnchorButton
              label="Resume"
              href="/resume-diego-ferreira.pdf"
              target="_blank"
            />
            <AnchorButton
              iconSrc="/icons/linkedin.svg"
              href="https://www.linkedin.com/in/diegoferreirati/"
              target="_blank"
              title="Linkedin"
            />
            <AnchorButton
              iconSrc="/icons/github.svg"
              href="https://github.com/diego5f5"
              target="_blank"
              title="Github"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
