/* eslint-disable react/no-unescaped-entities */
import { SectionTitle } from "./SectionTitle";

export const AboutSection = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto">
      <div className="min-h-screen flex flex-col justify-center">
        <SectionTitle title="ABOUT" />

        <article className="bg-white w-full p-8 rounded-3xl">
          <p className="text-lg">
            [Provisory] With 4 years of experience in the technology market, I
            specialize in creating innovative and scalable web and mobile
            solutions as a frontend developer.
            <br />
            <br />
            Throughout my career, I have worked with major brands and diverse
            clients, developing great web and mobile apps. I am experienced in
            utilizing agile methodologies and collaborating with
            cross-functional teams to deliver projects on time.
            <br />
            <br />I am passionate about technology and the impact it can have on
            people's lives. Creating solutions that make a real difference is
            what drives me forward.
          </p>
        </article>
      </div>
    </section>
  );
};
