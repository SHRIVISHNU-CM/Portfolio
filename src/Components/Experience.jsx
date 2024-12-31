import React from 'react'
import { Timeline } from "../acenComponents/timeline";
function Experience() {
  const data = [
    {
      title: "Nov/2024 - Present",
      content: (
        <div className='lg:w-[600px]'>
          <h1 className='font-bold text text-[16px] lg:text-[20px]'>SHEINODE INFOTECH - Web Development Internship</h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-[16px] lg:text-[20px] font-normal mb-8">
            Collaborated closely with the founder to design and develop a responsive, visually appealing website aligned with the company's business objectives.

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

          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
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
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
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
