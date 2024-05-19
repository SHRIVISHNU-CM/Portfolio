import { DiNodejs } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import{motion} from "framer-motion"
function Projects() {
    return (
        <>
            <motion.h1 
            initial={{opacity:0, y:-30}}
            transition={{duration:2}}
            whileInView={{opacity:1,y:0}}
            className="text-white text-[30px] text-center">Personal Projects</motion.h1>
            <section className="flex flex-wrap justify-around items-center gap-4 my-5 ">
                <motion.div
                initial={{opacity:0,x:-10}}
                transition={{duration:1}}
                whileInView={{opacity:1,x:0}}

                 className="card w-96 h-[400px] border">
                    <div className="card-body">
                        <h1 className="card-title text-orange-700">Medicos</h1>
                        <p className="text-white">
                            Medicos is a full-stack project that uses React.js, Tailwind CSS, Express.js, MongoDB, Node.js, and JWT. The client can add new records for patients and execute CRUD tasks. Medicos provides authorization and authentication to users. Clients can give a unique ID for each patient, which can be used to get the patient's data. When the ID is forgotten but the record is established, the client can search the patient's data using their name inside the Search area.
                        </p>
                        <div className="flex justify-center gap-x-2">
                            <RiReactjsLine className=" text-[50px] text-blue-400" />
                            <RiTailwindCssFill className=" text-[50px] text-blue-400" />
                            <DiNodejs className=" text-[50px] text-green-400" />
                            <SiExpress className=" text-[50px] text-neutal-400" />
                            <SiMongodb className=" text-[50px] text-green-400" />
                        </div>
                    </div>

                </motion.div>

                <motion.div 
                initial={{opacity:0,y:-100}}
                transition={{duration:1}}
                whileInView={{opacity:1,y:0}}
                className="card w-96 h-[400px] border">
                    <div className="card-body">
                        <h1 className="card-title text-orange-600">Blog</h1>
                        <p className="text-white">
                            Created a blog web application using React.js, DaisyUI, Node.js, Express.js, and MongoDB. It includes dark mode control options. The user may see and modify their own posts, as well as see all of the other users' posts.
                        </p>
                        <div className="flex justify-center gap-x-2">
                            <RiReactjsLine className=" text-[50px] text-blue-400" />
                            <SiDaisyui className=" text-[50px] text-neutral-400" />
                            <DiNodejs className=" text-[50px] text-green-400" />
                            <SiExpress className=" text-[50px] text-neutal-400" />
                            <SiMongodb className=" text-[50px] text-green-400" />
                        </div>
                    </div>

                </motion.div>

                <motion.div
                initial={{opacity:0,x:-10}}
                transition={{duration:1}}
                whileInView={{opacity:1,x:0}}
                 className="card w-96 h-[400px] border">
                    <div className="card-body">
                        <h1 className="card-title text-orange-600">Employee Dashboard</h1>
                        <p className="text-white">
                            Employee Dashboard developed with React.js and Tailwind CSS.Using API,Obtaining the necessary info from this. There are two buttons in the card: edit and delete.When you click the edit button, you will be sent to a page that displays only the card data you chose.When you click the delete button, it temporarily removes the card from the screen.
                        </p>
                        <div className="flex justify-center gap-x-2">
                            <RiReactjsLine className=" text-[50px] text-blue-400" />
                            <RiTailwindCssFill className=" text-[50px] text-blue-400" />

                        </div>
                    </div>

                </motion.div>

                <motion.div
                initial={{opacity:0,y:-100}}
                transition={{duration:1}}
                whileInView={{opacity:1,y:0}}
                 className="card w-96 h-[400px] border">
                    <div className="card-body">
                        <h1 className="card-title text-orange-600">Netfilx Landing Page</h1>
                        <p className="text-white">
                            Netflix Landing Page is built using HTML and CSS and is completely responsive on big and mobile devices.                </p>
                        <div className="flex justify-center gap-x-2">
                            <RiReactjsLine className=" text-[50px] text-blue-400" />
                            <RiTailwindCssFill className=" text-[50px] text-blue-400" />
                            <DiNodejs className=" text-[50px] text-green-400" />
                            <SiExpress className=" text-[50px] text-neutal-400" />
                            <SiMongodb className=" text-[50px] text-green-400" />
                        </div>
                    </div>

                </motion.div>
            </section>
            <div className="border-b-4 border-b-lime-700"></div>

        </>
    )
}

export default Projects
