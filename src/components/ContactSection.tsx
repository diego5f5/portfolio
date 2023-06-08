import { SectionTitle } from "./SectionTitle";

export const ContactSection = () => {
  return (
    <section id="contact" className="max-w-5xl mx-auto">
      <div className="min-h-screen flex flex-col justify-center">
        <SectionTitle title="CONTACT" />

        <div className="bg-white w-full p-8 rounded-3xl">
          <p className="font-semibold text-xl pb-1">Email:</p>
          <div className="flex">
            <p>diegoferreira777@hotmail.com</p>
            <span>[copy icon]</span>
          </div>

          <p className="mt-8 font-semibold text-xl pb-1">Linkedin:</p>
          <div className="flex">
            <p>diegoferreirati</p>
            <span>[external icon]</span>
          </div>
        </div>
      </div>
    </section>
  );
};
