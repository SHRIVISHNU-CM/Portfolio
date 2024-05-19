import { IoSchool } from "react-icons/io5";
function Education() {
    return (
        <>
            <main className="flex justify-center flex-col items-center lg:flex lg:justify-around my-5">
                <h1 className="text-[30px] text-neutral-500"><IoSchool className="text-[60px] text-neutral-500"/></h1>
                <div>
                    <div className="w-96 flex justify-between my-2">
                        <h1 className="">
                            JSS Science and Technology University, <br />
                            Mysuru
                        </h1>
                        <h1>2025</h1>

                    </div>
                    <div className="w-96 my-2 flex justify-between">
                        <h1 className="">
                            Full-Stack Web Development Sigma 2.0 <br />
                            PW Skills <a href="https://pwskills.com/learn/certificate/27438d39-6c3e-4410-9079-b85bb1ea34a2/" className="badge badge-success text-white">Certificate</a>
                        </h1>
                        <h1>2024</h1>

                    </div>
                </div>

            </main>

        </>
    )
}

export default Education
