/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main id="home">
      <Header />

      <div className="w-full h-full px-4 md:px-16">
        <div className="w-full h-full border-primary border-x-2">
          {/* Home */}
          <section className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center h-[calc(100vh-4rem)]">
              <Image
                width={300}
                height={300}
                src="/images/profile.png"
                alt="Diego"
                className="rounded-full drop-shadow-lg"
              />

              <div className="flex flex-col ml-12 gap-6">
                <h2 className="text-2xl">"Hello, I'm"</h2>

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

          {/* About */}
          <section id="about" className="max-w-5xl mx-auto">
            <div className="min-h-screen flex flex-col justify-center">
              <div className="flex items-center mb-8">
                <div className="h-[2px] w-8 bg-primary" />
                <p className="text-4xl">ABOUT</p>
              </div>

              <article className="bg-white w-full p-8 rounded-3xl">
                <p className="text-lg">
                  With 4 years of experience in the technology market, I
                  specialize in creating innovative and scalable web and mobile
                  solutions as a frontend developer. I value being a part of the
                  technical and business decisions, ensuring that each project I
                  work on is of the highest quality through the use of automated
                  tests and best practices.
                  <br />
                  <br />
                  Throughout my career, I have worked with major brands and
                  diverse clients, developing great web and mobile apps. I am
                  experienced in utilizing agile methodologies and collaborating
                  with cross-functional teams to deliver projects on time.
                  <br />
                  <br />I am passionate about technology and the impact it can
                  have on people's lives. Creating solutions that make a real
                  difference is what drives me forward.
                </p>
              </article>
            </div>
          </section>

          {/* Skills */}
          <section></section>

          {/* Projects */}
          <section></section>

          {/* Contact */}
          <section></section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
