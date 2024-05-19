import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion"
function Footer() {
    return (
        <>
            <div className="my-t-5 h-[50vh] flex items-center flex-col justify-center gap-6">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}

                    className="text-center text-[30px] text-white">Connect with Me on</motion.h1>
                <div className="flex justify-center gap-5">
                    <motion.a
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -50 }}
                        transition={{ duration: 1}}
                        href="https://github.com/SHRIVISHNU-CM">
                        <BsGithub className="text-[45px] text-white" />

                    </motion.a>
                    <motion.a
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -50 }}
                        transition={{ duration: 2 }}
                        href="https://www.linkedin.com/in/shrivishnu-cm-070b78274/">
                        <FaLinkedin className="text-[45px] text-blue-800" />

                    </motion.a>
                    <motion.a
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -50 }}
                        transition={{ duration: 3 }}
                        href="https://discord.com/1032526474495926362">
                        <FaDiscord className="text-[45px] text-purple-800" />
                    </motion.a>
                </div>

            </div>

        </>
    )
}

export default Footer
