import { motion } from "framer-motion"
import Pic from "../public/Vishnu.jpeg"
function Head() {
    return (
        <>
            <div className="flex justify-center max-w-full items-center lg:flex-center flex-col lg:flex-row  text-white h-[100vh]">
                <div className="card w-96">
                    <div className="card-body">
                        <motion.h2
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.7, }}
                        >
                            Hi there ,I'm

                        </motion.h2>
                        <motion.h1
                            initial={{ y: -30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.2, }}
                            className="card-title ">
                            <span className="border-b-4 border-b-lime-500 text-[25px]">Shri Vishnu C M</span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.4, }}
                        >A

                            <span className="text-orange-500 font-semibold"> Full-Stack developer</span> passionate about moulding ideas into breathtaking digital experiences

                        </motion.p>
                        <div className="card-actions justify-end">
                            <motion.a
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.9, delay: 0.6 }}
                                href="https://drive.google.com/file/d/1ZajV39uOHf0p3SQXaHdThGBKwZ_-DYMc/view?usp=sharing" className="btn btn-success text-white">Resume</motion.a>
                        </div>


                    </div>

                </div>

                <motion.img
                    initial={{ x: -5, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 1.3 }}

                    src={Pic} className="w-[200px] h-[200px] rounded-full shadow-" />

            </div>
        </>
    )
}

export default Head
