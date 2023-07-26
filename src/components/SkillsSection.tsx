"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionTitle } from "./SectionTitle";

const skills = [
  {
    name: "CSS",
    src: "/icons/css.svg",
  },
  {
    name: "HTML",
    src: "/icons/html.svg",
  },
  {
    name: "Javascript",
    src: "/icons/js.svg",
  },
  {
    name: "Typescript",
    src: "/icons/ts.svg",
  },
  {
    name: "React",
    src: "/icons/react.svg",
  },
  {
    name: "React Native",
    src: "/icons/react-native.svg",
  },
  {
    name: "Next.Js",
    src: "/icons/next.svg",
  },
  {
    name: "Tailwind CSS",
    src: "/icons/tailwind.svg",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto pt-20 md:pt-24">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.4,
              staggerChildren: 0.1,
            },
          },
        }}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center"
      >
        <SectionTitle title="SKILLS" />

        <div className="bg-white w-full p-8 rounded-3xl">
          <p className="text-lg mb-4">Main technologies I use:</p>

          <div className="grid grid-cols-skills gap-12">
            {skills.map((skill, index) => (
              <motion.div
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                  },
                }}
                key={skill.name}
                className="drop-shadow bg-white flex items-center justify-center flex-col p-4 rounded-lg"
              >
                <Image
                  width={80}
                  height={80}
                  src={skill.src}
                  alt={skill.name}
                />
                <p className="mt-4 text-base">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
