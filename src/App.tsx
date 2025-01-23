import { Hero } from "./sections/Hero"
import { Navbar } from "./sections/Navbar"

export const App = () => {
  return (
    <main className="max-w-8xl mx-auto relative">
      <Navbar />
      <Hero />
    </main>
  )
}

