import React from 'react';
import './ProjectCard.scss';

interface ProjectCardProps {
    item: {
        title: string,
        description:  string,
        productionLink: string,
        gitHubLink: string,
        category: string,
        icon?: string,
        picture: string,
        role: string,
        stack: string[],
        team: boolean,
        type: string
    }
}

const ProjectCard = ({item}: ProjectCardProps) => {
    return (
        <div className="projectCard">
            <div className="wrapper">
                <div
                    className="img-block"
                    style={{
                        background: `url('${item.picture}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                    }}
                >
                    <span>{item.type}</span>
                    <img src={item.icon} alt=""/>
                    <h4>{item.title}</h4>
                </div>
            </div>
            <h3>{item.title}</h3>
            <span>{item.stack.join(' - ')}</span>
        </div>
    );
};

export default ProjectCard;