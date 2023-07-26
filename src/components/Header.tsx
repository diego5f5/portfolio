"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  {
    title: "HOME",
    href: "#home",
  },
  {
    title: "ABOUT",
    href: "#about",
  },
  {
    title: "SKILLS",
    href: "#skills",
  },
  {
    title: "PROJECTS",
    href: "#projects",
  },
  {
    title: "CONTACT",
    href: "#contact",
  },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-auto w-full md:h-16 border-b-2 border-primary flex flex-row justify-between fixed bg-background z-20"
    >
      <motion.span
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-3 md:top-5 left-8 md:left-5 z-10"
      >
        DF
      </motion.span>

      <div className="w-screen h-auto md:h-16 px-4 md:px-16">
        <div className="w-full h-full border-primary border-x-2 z-20">
          {/* default navbar */}
          <motion.nav
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.5,
                  staggerChildren: 0.1,
                },
              },
            }}
            initial={"hidden"}
            animate={"visible"}
            className="hidden md:flex w-full h-full items-center gap-8 pr-8 justify-end text-xl font-medium"
          >
            {navItems.map((item) => (
              <motion.a
                variants={{
                  hidden: { x: 30, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                  },
                }}
                key={`${item.title}-default`}
                href={item.href}
                className="duration-300 transition-colors hover:cursor-pointer hover:text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary"
              >
                {item.title}
              </motion.a>
            ))}
          </motion.nav>

          {/* mobile button */}
          <motion.span
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1 }}
            className="md:hidden flex items-center absolute top-3 md:top-5 right-8 md:right-5 z-10"
          >
            <button onClick={() => setOpen((prev) => !prev)}>
              <svg
                className=" w-6 h-6 hover:text-primary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.span>

          {/* mobile navbar */}
          <nav
            className={`${
              open ? "h-56 opacity-100" : "h-12 opacity-0"
            } flex md:hidden flex-col items-center pt-3 pb-3 gap-3 text-lg transition-all overflow-hidden duration-300`}
          >
            {navItems.map((item) => (
              <a
                key={`${item.title}-mobile`}
                href={item.href}
                className="duration-300 transition-colors hover:cursor-pointer hover:text-primary"
                onClick={() => setOpen((prev) => !prev)}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
