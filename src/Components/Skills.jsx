import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui, SiExpress, SiMongodb, SiMysql, SiPostman, SiFramer } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa"

function Skills() {

    const skills = [
        { name: "HTML5", icon: <FaHtml5 />, color: "orange" },
        { name: "CSS3", icon: <IoLogoCss3 />, color: "oxxfordblue" },
        { name: "JavaScript", icon: <IoLogoJavascript />, color: "yellow" },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill />, color: "teal" },
        { name: "DaisyUI", icon: <SiDaisyui />, color: "purple" },
        { name: "Node.js", icon: <DiNodejs />, color: "green" },
        { name: "React", icon: <RiReactjsLine />, color: "cyan" },
        { name: "Express", icon: <SiExpress />, color: "gray" },
        { name: "MongoDB", icon: <SiMongodb />, color: "green" },
        { name: "MySQL", icon: <SiMysql />, color: "blue" },
        { name: "Python", icon: <FaPython />, color: "blue" },
        { name: "Postman", icon: <SiPostman />, color: "orange" },
        { name: "Framer", icon: <SiFramer />, color: "pink" },
        { name: "Github", icon: <FaGithub />, color: "black" },
        { name: "Docker", icon: <FaDocker />, color: "blue" },
    ];

    return (
        <div>
            <div>
                <h1 className="text-center font-semibold text-[16px] lg:text-[24px]">Skills</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center lg:w-[500px] mx-auto mt-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center text-center p-4 bg-slate-200 rounded-lg hover:scale-105 transition-transform"
                    >
                        <div className={`text-4xl `} style={{color:skill.color}}>{skill.icon}</div>
                        
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
