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
import { motion } from "framer-motion";
import { SiAutocad } from "react-icons/si";
import { SiFramer } from "react-icons/si";
function Skills() {
    const icon = (dur) => ({
        inital: { y: -10 },
        animate: {
            y: [2, -2],
            x: [2, -1],
            transition: {
                duration: dur,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }

        }
    })
    return (
        <>
            <div className="h-[60vh] max-w-full flex items-center flex-col gap-y-6">
                <h1 className="text-center text-[30px] font-semibold text-white">Skills</h1>

                <section className="flex justify-center gap-3 flex-wrap ">

                    <motion.div
                        variants={icon(2.9)}
                        initial="inital"
                        animate="animate"
                        className="border w-min p-3 rounded-lg ">
                        <FaHtml5 className="text-orange-400 text-[50px] " />
                    </motion.div>
                    <motion.div
                        variants={icon(1.5)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <IoLogoCss3 className="text-blue-400 text-[50px]" />
                    </motion.div>
                    <motion.div
                        variants={icon(2.9)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <IoLogoJavascript className="text-orange-400 text-[50px]" />
                    </motion.div>
                    <motion.div
                        variants={icon(1.5)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <RiTailwindCssFill className="text-blue-400 text-[50px]" />
                    </motion.div>
                    <motion.div
                        variants={icon(2.9)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <SiDaisyui className="text-neutral-600 text-[50px]" />
                    </motion.div>
                    <motion.div
                        variants={icon(1.5)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <DiNodejs className="text-green-600 text-[50px]" />
                    </motion.div>



                    <motion.div
                        variants={icon(2.9)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <RiReactjsLine className=" text-[50px] text-blue-400" />
                    </motion.div>
                    <motion.div
                        variants={icon(1.5)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <SiExpress className="text-neutral-600 text-[50px]" />
                    </motion.div>
                    <motion.div
                        variants={icon(2.9)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <SiMongodb className=" text-[50px] text-green-500" />
                    </motion.div>
                    <motion.div
                        variants={icon(1.5)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <SiMysql className=" text-[50px] text-blue-800" />
                    </motion.div>
                    <motion.div
                        variants={icon(2.9)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <FaPython className=" text-[50px] text-yellow-400" />
                    </motion.div>
                    <motion.div
                        variants={icon(1.5)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <SiPostman className=" text-[50px] text-orange-400" />
                    </motion.div>
                    <motion.div
                        variants={icon(1.5)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <SiAutocad className=" text-[50px] text-red-400" />
                    </motion.div>
                    <motion.div
                        variants={icon(1.5)}
                        initial="initial"
                        animate="animate"
                        className="border w-min p-3 rounded-lg">
                        <SiFramer className=" text-[50px] text-slate-600" />
                    </motion.div>

                </section>
            </div>


        </>
    )
}

export default Skills
