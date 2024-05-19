import { motion } from "framer-motion"

function About() {
    return (
        <>
            <motion.div
                
                className="flex flex-col justify-around items-center lg:flex lg:flex-row my-5">
                <div >
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-[25px] font-semibold text-white">About Me</motion.h1>
                </div>
                <div >
                    <motion.h1
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-white text-xl w-96 h-min">
                        I am a skilled programmer with HTML, CSS, Tailwind CSS, DaisyUI, Javascript, SQL, MongoDB, Node.js, Express.js,
                        React.js, and Python looking for a fresher role. I possess strong leadership qualities and thrive in collaborative team
                        environments. With a passion for technology and attention to detail, I deliver high-quality results. I am committed to
                        continuous learning and eager to contribute to a dynamic organization.
                    </motion.h1>
                </div>
            </motion.div>

        </>
    )
}

export default About
