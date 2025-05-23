import React from 'react'
import { Timeline } from "../acenComponents/timeline";
function Experience() {
  const data = [
    {
      title: "Mar/2024 - Present",
      content: (
        <div className='lg:w-[600px]'>
          <h1 className='font-bold text text-[16px] lg:text-[20px]'>Unimad.ai - Full Stack Developer Intern</h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
            Collaborated directly with the CTO at Unimad.ai to revamp the UniBot, improving its performance, UX, and overall functionality.

          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
          Designed and implemented a new application tracker with drag-and-drop functionality and real-time status updates, enhancing user interaction and efficiency.

          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
           Identified and resolved critical bugs in production, significantly improving application stability and user experience.
            
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
            Contributed as part of a collaborative team to expand the resume builder feature, adding multiple modern templates for diverse user preferences.

          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
           Optimized component performance using React hooks like useMemo and useCallback, leading to smoother UI interactions and reduced re-renders.

          </p>
        </div>
      ),
    },
    {
      title: "Nov/2024 - Mar/2025",
      content: (
        <div className='lg:w-[600px]'>
          <h1 className='font-bold text text-[16px] lg:text-[20px]'>SHEINODE INFOTECH - Full Stack Developer Intern</h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
            Collaborated closely with the founder to design and develop a responsive, visually appealing website aligned with the company's business objectives.

          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
          Improved website performance, achieving an 18% increase in overall efficiency using optimization techniques.

          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
            Utilized Aceternity UI alongside modern frameworks like React, Material UI, GSAP, and Framer Motion to deliver a rich, dynamic, and engaging user experience.
            
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
            Designed and developed key sections such as About, Services, and Contact pages, adhering to best practices with clean, reusable, and optimized code.

          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
            Implemented lazy loading techniques to enhance website performance and reduce load times.

          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
            Integrated Email.js to streamline user communication and feedback collection.

          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
            Adopted Agile methodologies to ensure on-time delivery, iterative progress, and continuous improvement throughout the development process.

          </p>
        </div>
      ),
    },
    {
      title: "May/2023 - Jan/2024",
      content: (
        <div className='lg:w-[600px]'>
          <h1 className='font-bold text-[16px] lg:text-[20px]'>PW SKILLS - APPRENTICESHIP</h1>
          <p className="text-neutral-800 dark:text-neutral-200text-[16px] lg:text-[20px] font-normal mb-8">
            During my apprenticeship at PW Skills,I had the opportunity to dive
            deep into the MERN stack(MongoDB,Express.js,React.js,and
            Node.js).
          </p>
          <p className="text-neutral-800 dark:text-neutral-200text-[16px] lg:text-[20px] font-normal mb-8">
            I gained hands-on experience building full-stack web applications,
            focusing on front-end and back-end development.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
            My training involved developing scalable APIs with Node.js and
            Express and creating dynamic user interfaces using React.
          </p>
 
        </div>
      ),
    },

  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default Experience
