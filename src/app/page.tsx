/* eslint-disable react/no-unescaped-entities */
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { HomeSection } from "@/components/HomeSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="w-full h-full px-4 md:px-16">
        <div className="w-full h-full border-primary border-x-2">
          <HomeSection />

          <AboutSection />

          <SkillsSection />

          <ProjectsSection />

          <ContactSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
