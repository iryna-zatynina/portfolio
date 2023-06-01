import React from 'react';
import './Projects.scss';
import Hr from "../../components/Hr/Hr";
import {projectsData} from "../../data"
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {

    return (
        <section className="projects">
            <Hr />
            <h2>Projects</h2>
            <div className="categories">
                <span>All</span>
                <span>Test tasks</span>
                <span>Educational</span>
                <span>Pet</span>
            </div>
            <div className="projects-block">
                {projectsData.map((item, index) => <ProjectCard key={index} item={item}/>
                )}
            </div>
        </section>
    );
};

export default Projects;