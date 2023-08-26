"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { IProject } from "@/projects";

import { Button } from "./Button";
import { Modal } from "./Modal";
import { ImageFullView } from "./ImageFullView";

export const ProjectCard = ({
  title,
  description,
  mainImage,
  mainTechs,
  projectInfo,
}: IProject) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageFullOpen, setIsImageFullOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
      className="border-primary border-2 rounded-3xl p-4 flex flex-col items-center w-full bg-white"
    >
      <p className="mb-5 text-xl font-semibold">{title}</p>

      <div className="flex flex-col lg:flex-row border-b border-b-[#EEEEEE] mb-4 pb-4 w-full">
        <div className="relative flex items-center justify-center lg:mr-4 mb-4 lg:mb-0">
          <Image
            src={mainImage}
            width={0}
            height={0}
            sizes="100vw"
            alt={title}
            className="lg:w-[362px] lg:min-w-[362px] w-auto lg:h-[204px] max-h-[320px] object-contain rounded-lg bg-gray-100"
          />
          <div
            onClick={() => setIsImageFullOpen(true)}
            className="absolute w-full h-full bg-[#00000015] flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-300"
          >
            <Image
              alt="Expand image"
              width={64}
              height={64}
              src="/icons/expand.svg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between items-start">
          <p>{description}</p>
          <div className="flex justify-center lg:justify-normal w-full mt-4 lg:mt-0">
            <Button label="More details" onClick={() => setIsModalOpen(true)} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <p className="mb-1 font-semibold">Main Technologies</p>
        <p className="text-center">{mainTechs?.join(" • ")}</p>
      </div>

      <Modal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        ariaLabel="project-modal"
      >
        {projectInfo}
      </Modal>

      <ImageFullView
        isOpen={isImageFullOpen}
        handleClose={() => setIsImageFullOpen(false)}
        ariaLabel="full-image-view"
        imageSrc={mainImage}
      />
    </motion.div>
  );
};
