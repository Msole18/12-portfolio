import { About } from "@sections/About"
import { Contact } from "@sections/Contact";
import { Footer } from "@sections/Footer";
import { Hero } from "@sections/Hero"
import { Navbar } from "@sections/Navbar"
import { Projects } from "@sections/Projects"
import { WorkExperience } from "@sections/WorkExperience";

export const App = () => {
  return (
    <main className="relative">
      <div className="max-w-8xl mx-auto">
        <Navbar />
        <Hero />
      </div>
      <div className="max-w-7xl mx-auto">
        <About />
        <Projects />
        <WorkExperience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};
