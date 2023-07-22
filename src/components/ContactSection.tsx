import { SectionTitle } from "./SectionTitle";

export const ContactSection = () => {
  return (
    <section id="contact" className="max-w-5xl mx-auto py-20 md:py-24">
      <div className="flex flex-col justify-center">
        <SectionTitle title="CONTACT" />

        <div className="bg-white w-full p-8 rounded-3xl">
          <p className="font-semibold text-xl pb-1">Email:</p>
          <div className="flex flex-wrap">
            <p className="break-all">diegoferreira777@hotmail.com</p>
          </div>

          <p className="mt-8 font-semibold text-xl pb-1">Linkedin:</p>
          <div className="flex">
            <a
              className="hover:underline"
              href="https://www.linkedin.com/in/diegoferreirati/"
              target="_blank"
            >
              diegoferreirati
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
