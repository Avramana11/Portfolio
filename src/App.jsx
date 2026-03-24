import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Timeline from "./components/Timeline"
import Projects from "./components/Projects"
import AllProjects from "./components/AllProjects"
import Achievements from "./components/Achievements"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SectionDivider from "./components/SectionDivider"
import { ThemeProvider } from "./contexts/ThemeContext"

const Home = () => (
  <>
    <Hero />
    <SectionDivider type="icons" variant="gradient" />
    <About />
    {/* <SectionDivider type="icons" variant="blue" />
    <Education /> */}
    <SectionDivider type="wave" variant="purple" />
    <Skills />
    {/* <SectionDivider type="curve" variant="purple" flip /> */}
    {/* ✨ ADDED: Timeline section with dividers */}
    {/* <Timeline /> */}
    <SectionDivider type="curve" variant="purple" flip />
    <Projects />
    <SectionDivider type="zigzag" variant="green" />
    <Certifications />
    <SectionDivider type="wave" variant="blue" />
    <Achievements />
    <SectionDivider type="curve" variant="blue" />
    <Education />
    <SectionDivider type="curve" variant="purple" />
    <Contact />
    <SectionDivider type="gradient-blob" variant="gradient" />
  </>
)

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
