
import { HoverEffect } from "../acenComponents/cardhover";

function Projects() {
    const projects = [
        {
            title: "Personal Portfolio",
            description:
                "Created a personal portfolio using React.js, Tailwind CSS, Aceternity UI, and Email.js.This portfolio showcases my abilities, personal initiatives, and studies. It is responsive to both small and large-screen devices. Framer motion is being utilized to create fantastic animations and interactions.",
            link: "https://portfolio-three-steel-40.vercel.app/",
        },
        {
            title: "FREELANCE Project",
            description:
                "Developed portfolio for my client Dr.Shrividya using tech stacks ReactJS,DaisyUI,TailwindCSS.Used custom font styles for Design.",
            
        },
        {
            title: "Kailasa",
            description:
                "The web-based app Kailasa is a one-stop for students seeking accommodations. Utilizing the most recent technology stack, Kailasa was developed with distinct routes for administrators and users, using React, Express, Node, Tailwind CSS, and Daisy UI.",
            link: "https://github.com/SHRIVISHNU-CM/hostel_management",
        },
        {
            title: "Employee Dashboard",
            description:
                "Employee Dashboard developed with React.js and Tailwind CSS.Using API,Obtaining the necessary info from this. There are two buttons in the card: edit and delete.When you click the edit button, you will be sent to a page that displays only the card data you chose.When you click the delete button, it temporarily removes the card from the screen.",
            link:"https://github.com/SHRIVISHNU-CM/Employee_Dashboard_Assignment"
        },
        {
            title: "Blog",
            description:
                "Created a blog web application using React.js, DaisyUI, Node.js, Express.js, and MongoDB. It includes dark mode control options. The user may see and modify their own posts, as well as see all of the other users' posts.",
            link: "https://github.com/SHRIVISHNU-CM/Blog",
        },
        {
            title: "Fresh Morning",
            description:
                "A news webapp called Fresh Morning allows users to search news by Category.Daisy UI, Tailwind CSS, and React.js are used in its development.",
            link: "https://newsreact-shrivishnu-cms-projects.vercel.app/",
        },
    ];
    return (
        <>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>

        </>
    )
}

export default Projects
