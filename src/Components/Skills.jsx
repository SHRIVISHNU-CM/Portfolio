import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
function Skills() {
    return (
        <>
            <div>
                <h1 className="text-center text-[30px] font-semibold">Skills</h1>
            </div>
            <skills className="flex justify-center gap-x-6 flex-wrap">
                
                    <div className="border w-min p-3 rounded-lg">
                        <FaHtml5 className="text-orange-400 text-[50px]" />
                    </div>
                    <div className="border w-min p-3 rounded-lg">
                        <IoLogoCss3 className="text-blue-400 text-[50px]" />
                    </div>
                    <div className="border w-min p-3 rounded-lg">
                        <IoLogoJavascript className="text-orange-400 text-[50px]" />
                    </div>
                    <div className="border w-min p-3 rounded-lg">
                        <RiTailwindCssFill className="text-blue-400 text-[50px]" />
                    </div>
                    <div className="border w-min p-3 rounded-lg">
                        <SiDaisyui className="text-neutral-600 text-[50px]" />
                    </div>
                    <div className="border w-min p-3 rounded-lg">
                        <DiNodejs className="text-green-600 text-[50px]" />
                    </div>
                    
                
                
                <div className="border w-min p-3 rounded-lg">
                        <RiReactjsLine className=" text-[50px] text-blue-400" />
                    </div>
                    <div className="border w-min p-3 rounded-lg">
                        <SiExpress className="text-neutral-600 text-[50px]" />
                    </div>
                    <div className="border w-min p-3 rounded-lg">
                        <SiMongodb className=" text-[50px] text-green-500" />
                    </div>
                    <div className="border w-min p-3 rounded-lg">
                        <SiMysql className=" text-[50px] text-blue-800" />
                    </div>
                    <div className="border w-min p-3 rounded-lg">
                        <FaPython className=" text-[50px] text-yellow-400" />
                    </div>
                    <div className="border w-min p-3 rounded-lg">
                        <SiPostman className=" text-[50px] text-orange-400" />
                    </div>
                
            </skills>



        </>
    )
}

export default Skills
