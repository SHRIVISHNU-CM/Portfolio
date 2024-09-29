import About from "./Components/About"
import Education from "./Components/Education"
import Footer from "./Components/Footer"
import Head from "./Components/Head"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import { motion, useScroll } from "framer-motion"

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div style={{ backgroundColor: "#002147", width:"100%"}} className="overflow-x-hidden">
        <motion.div className="fixed top-0 left-0  h-2  rounded-xl bg-red-500 origin-left" style={{ scaleX: scrollYProgress }} />


        <Navbar />
        <Head />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Footer />

      </div>


    </>
  )
}
import { FaRegMoneyBill1 } from "react-icons/fa6"

export default App
