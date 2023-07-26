"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

import { IProject } from "@/projects";
import { Modal } from "./Modal";
import { Button } from "./Button";

export const ProjectCard = ({
  title,
  description,
  mainImage,
  mainTechs,
  projectInfo,
  year,
}: IProject) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
      className="border-primary border-2 rounded-3xl p-4 flex flex-col items-center w-full bg-white"
    >
      <p className="mb-5 text-xl font-semibold">{title}</p>

      <div className="flex flex-col lg:flex-row border-b border-b-[#EEEEEE] mb-4 pb-4 w-full">
        <Image
          src={mainImage}
          width={362}
          height={204}
          alt=""
          className="lg:mr-4 mb-4 lg:mb-0 lg:w-[362px] w-auto lg:h-[204px] max-h-[320px] object-contain"
        />
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

      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)}>
        {projectInfo}
      </Modal>
    </motion.div>
  );
};
