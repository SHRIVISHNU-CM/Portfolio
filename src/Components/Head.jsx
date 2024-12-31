import Pic from "../public/Vishnu.jpeg"
import { TypewriterEffectSmooth } from "../acenComponents/typerwriter"
import About from "./About";
import { Highlight } from "../acenComponents/hero-light";
import Skills from "./Skills";
import { useEffect,useState } from "react";
import axios from "axios"
import GitCard from "./GitCard";
import {VITE_TOKEN} from "../../config"

function Head() {
    const words = [
        {
            text: "Shri Vishnu C M",
        },

    ]
    const [contributions, setContributions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContributions = async () => {
            const endpoint = "https://api.github.com/graphql";
            const query = `
                query($username: String!) {
                    user(login: $username) {
                        contributionsCollection {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                    contributionDays {
                                        date
                                        contributionCount
                                        color
                                    }
                                }
                            }
                        }
                    }
                }
            `;
            const token = VITE_TOKEN; 
            try {
                const response = await axios.post(
                    endpoint,
                    { query, variables: { username: "SHRIVISHNU-CM" } },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const days =
                    response.data.data.user.contributionsCollection.contributionCalendar.totalContributions
                setContributions(days);
            } catch (e) {
                setError(e.message);
            }
        };

        fetchContributions();
    }, []);
    return (
        <>
            <main className="w-full flex justify-center flex-col lg:flex-row lg:justify-center  items-center h-screen ">
                <div className="text-left">
                    <img src={Pic} width={200} />
                </div>
                <div>
                    <h1 className="text-center text-[16px] lg:text-[20px]">Hi,Welcome Everyone</h1>
                    <div className=" max-w-[400px] flex items-center justify-center flex-col">
                        <p className="text-center text-[20px] lg:text:3xl ">
                            <TypewriterEffectSmooth words={words} />
                        </p>
                        <h2 className=" text-center text-[16px] lg:text-[20px]">
                            A Full-Stack developer passionate about moulding ideas into<br />
                            <Highlight className="text-black dark:text-white">
                                breathtaking digital experiences
                            </Highlight>
                        </h2>
                    </div>

                </div>


            </main>
            <section className="mt-10 py-10">
                <h2 className="text-center text-[16px] lg:text-[20px] font-bold">GitHub Contributions</h2>
            </section>
            <GitCard props={contributions}/>
            <About />
            <Skills />
        </>
    )
}

export default Head
