import { HeroSection } from "./components/herosection";
import { Navbar } from "./components/navbar";
import { ProjectsSection } from "./components/projects-section";
import { SkillsSection } from "./components/skills-section";
import { CertificatesSection } from "./components/certificates-section";
import { AchievementsSection } from "./components/achievements-section";
import { ExperienceSection } from "./components/experience-section";
import { BlogsSection } from "./components/blogs-section";
import { ContactSection } from "./components/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <AchievementsSection />
      <ExperienceSection />
      {/* <BlogsSection /> */}
      <ContactSection />
    </>
  );
}
