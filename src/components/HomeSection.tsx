/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { AnchorButton } from "./AnchorButton";

export const HomeSection = () => {
  return (
    <section id="home" className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center min-h-screen flex-wrap md:flex-nowrap">
        <Image
          width={300}
          height={300}
          src="/images/profile.png"
          alt="Diego"
          className="rounded-full drop-shadow-lg"
          priority
        />

        <div className="flex flex-col ml-12 gap-6">
          <h2 className="text-2xl">Hello, I'm</h2>

          <h1 className="text-5xl">
            <span className="text-primary">DIEGO</span> FERREIRA
          </h1>

          <h2 className="text-2xl">
            A <span className="text-primary">Frontend Developer</span> who
            creates web and mobile solutions for real-world challenges.
          </h2>

          <div className="flex flex-row gap-6">
            <AnchorButton label="Projects" href="#projects" />
            <AnchorButton
              label="Resume"
              href="/resume-diego-ferreira.pdf"
              target="_blank"
            />
            <AnchorButton
              iconSrc="/icons/linkedin.svg"
              href="https://www.linkedin.com/in/diegoferreirati/"
              target="_blank"
              title="Linkedin"
            />
            <AnchorButton
              iconSrc="/icons/github.svg"
              href="https://github.com/diego5f5"
              target="_blank"
              title="Github"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
