"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

export const ContactSection = () => {
  return (
    <section id="contact" className="max-w-5xl mx-auto py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center"
      >
        <SectionTitle title="CONTACT" />

        <div className="bg-white w-full p-8 rounded-3xl">
          <p className="font-semibold text-xl pb-1">Email:</p>
          <div className="flex flex-wrap">
            <p className="break-all">diegoferreira777@hotmail.com</p>
          </div>

          <p className="mt-8 font-semibold text-xl pb-1">Linkedin:</p>
          <div className="flex">
            <a
              className="hover:underline rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary"
              href="https://www.linkedin.com/in/diegoferreirati/"
              target="_blank"
            >
              diegoferreirati
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
