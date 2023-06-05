import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

const InitConection = () => {
  return (
    <div className="w-10 h-10 border-2 border-primary flex justify-center items-center rounded-full">
      <div className="w-6 h-6 bg-primary rounded-full" />
    </div>
  );
};

const YearConection = ({ year }: { year: string }) => {
  return (
    <>
      <div className="w-[2px] h-8 bg-primary" />
      <p className="text-xl font-semibold text-primary">{year}</p>
      <div className="w-[2px] h-8 bg-primary" />
    </>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto">
      <div className="min-h-screen flex flex-col justify-center">
        <SectionTitle title="PROJECTS" />

        <div className="bg-white w-full p-8 rounded-3xl flex items-center flex-col">
          <InitConection />

          {/* Project Card */}
          <div className="border-primary border-2 rounded-3xl p-4 flex flex-col items-center w-full">
            <p className="mb-5">Project Title</p>

            <div className="flex flex-row border-b border-b-[#EEEEEE] mb-4 pb-4 w-full">
              <Image
                src=""
                width={362}
                height={204}
                alt=""
                className="mr-4 min-w-min min-h-min"
              />
              <div className="flex flex-col justify-between items-start">
                <p>Lorem ipsum dolor</p>
                <button className="font-semibold underline">
                  More details
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center w-full">
              <p className="mb-1 font-semibold">Main Technologies</p>
              <p>React Native • Typescript • Axios • Test • Test • Test</p>
            </div>
          </div>

          <InitConection />
        </div>
      </div>
    </section>
  );
};
