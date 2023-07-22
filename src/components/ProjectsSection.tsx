import { projects } from "@/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";
import React from "react";

const SimpleConection = () => {
  return <div className="w-[2px] h-8 bg-primary" />;
};

const InitConection = () => {
  return (
    <div className="w-10 h-10 border-2 border-primary flex justify-center items-center rounded-full">
      <div className="w-6 h-6 bg-primary rounded-full" />
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto pt-20 md:pt-24">
      <div className="flex flex-col justify-center">
        <SectionTitle title="PROJECTS" />

        <div className="bg-white w-full p-8 rounded-3xl flex items-center flex-col">
          <InitConection />

          {projects.map((project, index) => {
            let lastYear = projects[index - 1]?.year;

            return (
              <React.Fragment key={`project-${index}`}>
                {lastYear !== project.year ? (
                  <>
                    <SimpleConection />
                    <p className="text-xl font-semibold text-primary">
                      {project.year}
                    </p>
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
