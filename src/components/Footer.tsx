"use client";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-auto border-t-2 border-primary"
    >
      <div className="pl-4 md:pl-16 pr-4 md:pr-16">
        <div className="pl-2 pr-2 h-16 flex justify-center items-center w-full border-primary border-l-2 border-r-2">
          <p className="text-center text-xs md:text-sm">
            Designed and developed with ♥ by{" "}
            <a
              target="_blank"
              href="https://github.com/diego5f5"
              className="underline hover:font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary"
            >
              Diego Ferreira
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
