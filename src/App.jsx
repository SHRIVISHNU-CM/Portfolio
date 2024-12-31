
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer"
import Head from "./Components/Head"
import NavBar from "./Components/Navbar"
import { motion, useScroll } from "framer-motion"



function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}


export default App
