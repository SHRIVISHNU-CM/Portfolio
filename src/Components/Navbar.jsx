import React from 'react'
import { FaPhone } from "react-icons/fa6";
function Navbar() {
    return (
        <>
            <nav style={{backgroundColor:"#9599E2"}} className='navbar bg-base-300  rounded-2xl'>
                <div className='navbar-start'>
                    <h1 className='font-semibold'>Shri Vishnu C M</h1>
                </div>
                <div className='navbar-end'>
                    <h1>Personal Portfolio</h1>
                </div>
            </nav>
            <div className='fixed right-3 bottom-2'>
                <FaPhone className=' text-green-700 text-[30px]' title='Contact'/>
            </div>
        </>
    )
}

export default Navbar
