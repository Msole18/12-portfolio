import { About } from "./sections/About"
import { Hero } from "./sections/Hero"
import { Navbar } from "./sections/Navbar"
import { Projects } from "./sections/Projects"

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
      </div>
    </main>
  );
};
