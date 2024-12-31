import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "../acenComponents/moving";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

function Navbar() {
    const navCom = [
        {name:"Home",to:'/'},
        {name:"Experience",to:'/experience'},
        {name:"Projects",to:'/projects'},
        {name:"Contact",to:'/contact'},

    ]
    return (
        <>
            <div className=' flex   lg:justify-center items-center lg:rounded-2xl '>
                <nav className=' w-full lg:w-[900px] py-2 bg-slate-50 flex justify-between sm:justify-between md:justify-between lg:justify-around items-center px-1'>

                    <div className=''>
                        <h1 className='text-2xl text-black font-bold'>Shri Vishnu C M</h1>
                    </div>
                    <div className='hidden lg:gap-8 lg:flex'>
                        {
                            navCom.map((ele,i)=>{
                                return(
                                    <Link key={i} to={ele.to}>{ele.name}</Link>
                                )
                            })
                        }
                    </div>
                    <div className='block lg:hidden'>

                        <div className="relative group">
                            
                                <TiThMenuOutline className="cursor-pointer text-2xl" />
                                
                            <div className="absolute right-1 top-6 hidden group-hover:block bg-white shadow-lg rounded-md py-2 z-50">
                            {
                            navCom.map((ele,i)=>{
                                return(
                                    <Link key={i} to={ele.to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{ele.name}</Link>
                                )
                            })
                        }
                              
                            </div>
                        </div>
                    </div>
                    <div className=' gap-8 hidden lg:flex'>
                        <Link to="https://github.com/SHRIVISHNU-CM" aria-label='Git Profile'>
                            <BsGithub className=" lg:text-[20px] text-gray-900" />

                        </Link>
                        <Link to="https://www.linkedin.com/in/shrivishnu-cm-070b78274/" aria-label='LinkedIn Profile'>
                            <FaLinkedin className="lg:text-[20px] text-blue-800" />

                        </Link>
                    </div>


                </nav>
            </div>

        </>
    )
}

export default Navbar
