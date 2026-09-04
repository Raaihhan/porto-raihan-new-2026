import {
  AboutAndSkills,
  ContactCta,
  EducationAndCertification,
  Experience,
  Footer,
  Hero,
  Projects,
} from "@/components/portfolio-sections";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutAndSkills />
        <Experience />
        <EducationAndCertification />
        <Projects />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
