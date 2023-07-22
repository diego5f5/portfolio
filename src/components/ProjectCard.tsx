import Image from "next/image";

import { IProject } from "@/projects";
import { AnchorButton } from "./AnchorButton";

export const ProjectCard = ({
  title,
  description,
  mainImage,
  mainTechs,
  projectInfo,
  year,
}: IProject) => {
  return (
    <div className="border-primary border-2 rounded-3xl p-4 flex flex-col items-center w-full">
      <p className="mb-5 text-xl font-semibold">{title}</p>

      <div className="flex flex-col md:flex-row border-b border-b-[#EEEEEE] mb-4 pb-4 w-full">
        <Image
          src={mainImage}
          width={362}
          height={204}
          alt=""
          className="md:mr-4 mb-4 md:mb-0 md:w-[362px] w-full md:h-[204px] h-auto"
        />
        <div className="flex flex-col justify-between items-start">
          <p>{description}</p>
          <div className="flex justify-center md:justify-normal w-full mt-4 md:mt-0">
            <AnchorButton label="More details" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <p className="mb-1 font-semibold">Main Technologies</p>
        <p className="text-center">{mainTechs?.join(" • ")}</p>
      </div>
    </div>
  );
};
