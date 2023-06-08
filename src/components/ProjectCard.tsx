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

      <div className="flex flex-row border-b border-b-[#EEEEEE] mb-4 pb-4 w-full">
        <Image
          src={mainImage}
          width={362}
          height={204}
          alt=""
          className="mr-4 w-[362px] h-[204px] min-w-min min-h-min"
        />
        <div className="flex flex-col justify-between items-start">
          <p>{description}</p>
          <AnchorButton label="More details" />
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <p className="mb-1 font-semibold">Main Technologies</p>
        <p className="text-center">{mainTechs?.join(" • ")}</p>
      </div>
    </div>
  );
};
