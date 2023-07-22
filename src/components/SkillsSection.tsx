import Image from "next/image";

import { SectionTitle } from "./SectionTitle";

const skills = [
  {
    name: "CSS",
    src: "/icons/css.svg",
  },
  {
    name: "HTML",
    src: "/icons/html.svg",
  },
  {
    name: "Javascript",
    src: "/icons/js.svg",
  },
  {
    name: "Typescript",
    src: "/icons/ts.svg",
  },
  {
    name: "React",
    src: "/icons/react.svg",
  },
  {
    name: "React Native",
    src: "/icons/react-native.svg",
  },
  {
    name: "Next.Js",
    src: "/icons/next.svg",
  },
  {
    name: "Tailwind CSS",
    src: "/icons/tailwind.svg",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto pt-20 md:pt-24">
      <div className="flex flex-col justify-center">
        <SectionTitle title="SKILLS" />

        <div className="bg-white w-full p-8 rounded-3xl">
          <div className="grid grid-cols-skills gap-12">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="drop-shadow bg-white flex items-center justify-center flex-col p-4 rounded-lg"
              >
                <Image
                  width={80}
                  height={80}
                  src={skill.src}
                  alt={skill.name}
                />
                <p className="mt-4 text-base">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
