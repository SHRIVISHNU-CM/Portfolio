import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

function Navbar() {
    return (
        <>
            <nav style={{ backgroundColor: "#003153" }} className='navbar bg-base-300  rounded-2xl w-full'>
                
                <div className='navbar-start'>
                    <h1 className='font-semibold text-xl lg:text-2xl text-orange-600'>Shri Vishnu C M</h1>
                </div>
                <div className='navbar-center gap-x-8'>
                    <a href="https://github.com/SHRIVISHNU-CM">
                        <BsGithub className="text-[25px] lg:text-[35px] text-white" />

                    </a>
                    <a  href="https://www.linkedin.com/in/shrivishnu-cm-070b78274/">
                        <FaLinkedin className="text-[25px] lg:text-[35px] text-blue-800" />

                    </a>

                </div>
                
            </nav>
        </>
    )
}

export default Navbar
