"use client";

import { projects } from "@/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";
import React from "react";
import { motion } from "framer-motion";

const SimpleConection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="w-[2px] h-8 bg-primary"
    />
  );
};

const InitConection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="w-10 h-10 border-2 border-primary bg-white flex justify-center items-center rounded-full z-10"
    >
      <div className="w-6 h-6 bg-primary rounded-full" />
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto pt-20 md:pt-24">
      <div className="flex flex-col justify-center">
        <SectionTitle title="PROJECTS" />

        <div className="bg-white w-full p-8 rounded-3xl flex items-center flex-col">
          <p className="text-lg mb-4 self-start">
            Real projects I have worked on during my career:
          </p>

          <InitConection />

          {projects.map((project, index) => {
            let lastYear = projects[index - 1]?.year;

            return (
              <React.Fragment key={`project-${index}`}>
                {lastYear !== project.year ? (
                  <>
                    <SimpleConection />
                    <motion.p
                      initial={{ opacity: 0, scale: 2 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.6 }}
                      className="text-xl font-semibold text-primary"
                    >
                      {project.year}
                    </motion.p>
                    <SimpleConection />
                  </>
                ) : (
                  <SimpleConection />
                )}

                <ProjectCard {...project} />
              </React.Fragment>
            );
          })}

          <SimpleConection />
          <InitConection />
        </div>
      </div>
    </section>
  );
};
