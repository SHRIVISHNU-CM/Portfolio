import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <div className=" border-t-2 py-4 mt-3">
                <div className="flex justify-center gap-x-9 mb-3">
                    <Link to="https://github.com/SHRIVISHNU-CM" aria-label="Git Profile">
                        <BsGithub className="text-[24px] lg:text-[20px] text-gray-900" />

                    </Link>
                    <Link to="https://www.linkedin.com/in/shrivishnu-cm-070b78274/" aria-label="LinkedIn Profile">
                        <FaLinkedin className="text-[24px] lg:text-[20px] text-blue-800" />

                    </Link>
                </div>
                <h1 className="text-center text-[14px] lg:text-[16px] font-semibold">
                    Developed By Shri Vishnu C M
                </h1>
            </div>

        </>
    )
}

export default Footer
