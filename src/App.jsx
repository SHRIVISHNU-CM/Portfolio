
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer"
import NavBar from "./Components/Navbar"
import { pageview } from "./gtag";
import { useEffect } from "react";



function App() {
  const location = useLocation()

  useEffect(()=>{
    pageview(location.pathname)

  },[location])

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
