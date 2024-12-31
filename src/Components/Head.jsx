import Pic from "../public/SHRIVISHNU.jpeg"
import { TypewriterEffectSmooth } from "../acenComponents/typerwriter"
import About from "./About";
import { Highlight } from "../acenComponents/hero-light";
import Skills from "./Skills";
import GitCard from "./GitCard";
import { VITE_RESUME } from "../../config"
import { Link } from "react-router-dom";


function Head() {
    const words = [
        {
            text: "Shri Vishnu C M",
        },

    ]

    return (
        <>
            <main className="w-full flex justify-center flex-col lg:flex-row lg:justify-center  items-center h-screen ">
                <div className="text-left">
                    <img src={Pic}  className="rounded-md lg:w-[300px] w-[200px]" alt="MyImage"/>
                </div>
                <div>
                    <h1 className="text-center text-[16px] lg:text-[20px]">Hi,Welcome Everyone</h1>
                    <div className=" max-w-[400px] flex items-center justify-center flex-col">
                        <p className="text-center text-[20px] lg:text:3xl ">
                            <TypewriterEffectSmooth words={words} />
                        </p>
                        <h2 className=" text-center text-[16px] lg:text-[20px]">
                            A Full-Stack developer passionate about moulding ideas into<br />
                            <Highlight className="text-black dark:text-white">
                                breathtaking digital experiences
                            </Highlight>
                        </h2>
                        <div className="mt-6 flex justify-center gap-3">
                            <Link to={VITE_RESUME} className="border px-10 py-3 rounded-3xl  bg-emerald-500 hover:bg-emerald-300 text-white">
                                Resume
                            </Link>
                            <Link to="/experience" className="border px-10 py-3 rounded-3xl  bg-emerald-500 hover:bg-emerald-300 text-white">
                               My Experience
                            </Link>
                        </div>


                    </div>


                </div>


            </main>
            <section className="mt-10 py-10">
                <h2 className="text-center text-[16px] lg:text-[20px] font-bold">GitHub Contributions</h2>
            </section>
            <GitCard />
            <About />
            <Skills />
        </>
    )
}

export default Head
