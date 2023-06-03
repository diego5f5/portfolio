/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const HomeSection = () => {
  return (
    <section id="home" className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center h-[calc(100vh-4rem)]">
        <Image
          width={300}
          height={300}
          src="/images/profile.png"
          alt="Diego"
          className="rounded-full drop-shadow-lg"
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

          <div className="flex">{/* Buttons */}</div>
        </div>
      </div>
    </section>
  );
};
