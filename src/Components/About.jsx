import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { TextGenerateEffect } from "../acenComponents/text-generate";

function About() {
    const [triggerEffect, setTriggerEffect] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Effect triggers only once when in view
        threshold: 0.1,   // Percentage of the component visible to trigger
    });

    if (inView && !triggerEffect) {
        setTriggerEffect(true);
    }

    const generate = `Proficient in React, Material UI, Express.js, Node.js, MongoDB, SQL, JavaScript, Python, Tailwind CSS, DaisyUI, HTML, and CSS with expertise in Git for version control and API development using Postman. I also excel in creating intuitive, cross-platform applications and maintaining clean, reusable code.

My approach to work is driven by continuous learning, collaboration, and a focus on delivering value through technology. Let’s connect to explore opportunities and create impactful digital solutions!`;

    return (
        <>
            <div className="flex justify-center mt-10 mb-10">
                <main className="w-[900px] " ref={ref}>
                    {triggerEffect && 
                    <p className=" font-serif">
                        <TextGenerateEffect words={generate} />
                    </p>}
                </main>
            </div>

        </>
    );
}

export default About;
