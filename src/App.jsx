import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Timeline from "./components/Timeline"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SectionDivider from "./components/SectionDivider"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
          <Navbar />
          <Hero />
          <SectionDivider type="wave" variant="gradient" />
          <About />
          <SectionDivider type="icons" variant="blue" />
          <Skills />
          {/* <SectionDivider type="curve" variant="purple" flip />
          ✨ ADDED: Timeline section with dividers
          <Timeline /> */}
          <SectionDivider type="curve" variant="purple" flip />
          <Projects />
          <SectionDivider type="zigzag" variant="green" />
          <Contact />
          <SectionDivider type="gradient-blob" variant="gradient" />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App