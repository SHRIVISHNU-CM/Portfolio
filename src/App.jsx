import About from "./Components/About"
import Education from "./Components/Education"
import Footer from "./Components/Footer"
import Head from "./Components/Head"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"

function App() {

  return (
    <>
      <div className=" " style={{backgroundColor:"#002147"}}>
        <Navbar />
        <Head />
        <About />
        <Skills />
        <Projects />
        <Education/>
        <Footer/>

      </div>
    </>
  )
}

export default App
