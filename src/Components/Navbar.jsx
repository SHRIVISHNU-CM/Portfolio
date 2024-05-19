import React from 'react'
import { FaPhone } from "react-icons/fa6";
function Navbar() {
    return (
        <>
            <nav style={{backgroundColor:"#003153"}} className='navbar bg-base-300  rounded-2xl'>
                <div className='navbar-start'>
                    <h1 className='font-semibold text-orange-600'>Shri Vishnu C M</h1>
                </div>
                <div className='navbar-end'>
                    <h1 className='text-white'>Personal Portfolio</h1>
                </div>
            </nav>
        </>
    )
}

export default Navbar
