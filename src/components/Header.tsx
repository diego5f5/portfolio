"use client";

import { useState } from "react";

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
    <header className="h-auto w-full md:h-16 border-b-2 border-primary flex flex-row justify-between fixed bg-background z-10">
      <span className="absolute top-3 md:top-5 left-8 md:left-5 z-10">DF</span>

      <div className="w-full h-auto md:h-16 px-4 md:px-16">
        <div className="w-full h-full border-primary border-x-2">
          {/* default navbar */}
          <nav className="hidden md:flex w-full h-full items-center gap-8 pr-8 justify-end text-xl font-medium">
            {navItems.map((item) => (
              <a
                key={`${item.title}-default`}
                href={item.href}
                className="duration-300 transition-colors hover:cursor-pointer hover:text-primary"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* mobile button */}
          <div className="md:hidden flex items-center absolute top-3 md:top-5 right-8 md:right-5 z-10">
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
          </div>

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
    </header>
  );
};
