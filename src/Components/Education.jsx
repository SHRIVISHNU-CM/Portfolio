import { IoSchool } from "react-icons/io5";
import { motion } from "framer-motion";

function Education() {
  return (
    <>
      <main className="h-[80vh] max-w-full flex justify-center flex-col items-center gap-y-6">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          <IoSchool className="text-[60px] text-neutral-500" />
        </motion.h1>
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="flex flex-col justify-center my-2 max-w-full lg:w-96"
          >
            <h1 className="text-white text-center text-xl lg:text-2xl">
              JSS Science and Technology University, <br /> Mysuru
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="flex flex-col justify-center my-2 max-w-full lg:w-96"
          >
            <h1 className="text-white text-center text-xl lg:text-2xl">
              Full-Stack Web Development Sigma 2.0 <br /> PW Skills{" "}
              <a
                href="https://pwskills.com/learn/certificate/27438d39-6c3e-4410-9079-b85bb1ea34a2/"
                className="badge badge-success text-white"
              >
                Certificate
              </a>
            </h1>
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default Education;