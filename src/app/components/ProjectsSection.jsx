import React from 'react';
import ProjectCard from './ProjectCard';
const ProjectsData = [
    {
        id: 1,
        title: "Rock Paper Scissors Game",
        description: "Fully functional game of rock paper scissors against the computer",
        image: "/images/Rock-Paper-Scissors",
        gitUrl: "https://shaikhj18.github.io/Rock_Paper_Scissors/",
        previewUrl: "https://shaikhj18.github.io/Rock_Paper_Scissors/",
        tag: ["All"]
    },
    {
        id: 2,
        title: "Motivational Quote Generation Application",
        description: "Motivational Quote Generation App using the Quotable API",
        image: "/images/quoteproject.png",
        gitUrl: "https://shaikhj18.github.io/Motivational-Quote-Generator/",
        previewUrl: "https://shaikhj18.github.io/Motivational-Quote-Generator/",
        tag: ["All"]
    },
    {
        id: 3,
        title: "Employee Management System",
        description: "Employee management system created in C using linked lists and dynamic data structures",
        image: "/images/OIP.jpg",
        gitUrl: "/",
        previewUrl: "/",
        tag: ["All"]
    },

]
const ProjectsSection = () => {
    return (
        <><h2 className='text-4xl font-bold text-white mb-4 text-center' id="projects">My Projects</h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {ProjectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgurl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)}
            </div> </>
    )
}

export default ProjectsSection;