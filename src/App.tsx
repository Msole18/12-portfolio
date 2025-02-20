import { About } from "@sections/About"
import { Contact } from "@sections/Contact";
import { Footer } from "@sections/Footer";
import { Hero } from "@sections/Hero"
import { Navbar } from "@sections/Navbar"
import { Projects } from "@sections/Projects"
import { WorkExperience } from "@sections/WorkExperience";

export const App = () => {
  return (
    <main className="max-w-8xl mx-auto relative">
        <Navbar />
        <Hero />
     
      <div className="max-w-7xl mx-auto">
        <About />
        <Projects />
        <WorkExperience />
      </div>
        <Contact />
        <Footer />
    </main>
  );
};
