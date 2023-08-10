import React from 'react';
import './ProjectCard.scss';
import {IItem} from "../../interfaces";

interface ProjectCardProps {
    item: IItem
}

const ProjectCard = ({item}: ProjectCardProps) => {
    return (
        <div className="projectCard">
            <div className="wrapper">
                <div
                    className="img-block"
                    style={{
                        backgroundImage: `url('${item.picture}')`,
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
            <span className="stack">{item.stack.join(' - ')}</span>
        </div>
    );
};

export default ProjectCard;