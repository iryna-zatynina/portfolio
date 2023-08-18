import React, { useState } from 'react';
import './ProjectCard.scss';
import { IItem } from "../../interfaces";
import { motion } from "framer-motion";

interface ProjectCardProps {
    item: IItem
}

const ProjectCard = ({item}: ProjectCardProps) => {
    const [isImageHovered, setIsImageHovered] = useState(false);

    function animateImage(hovered: boolean) {
        setIsImageHovered(hovered);
    };

    return (
        <div className="projectCard">
            <div className="wrapper">
                <motion.div 
                    className="img-block"
                    style={{
                        backgroundImage: `url('${item.picture}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                    }}
                    initial={{ scale: 1 }}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    onHoverStart={() => animateImage(true)}
                    onHoverEnd={() => animateImage(false)}
                >
                    <motion.span
                        initial={{ x: 0, y: 0, scale: 1 }}
                        animate={isImageHovered ? { x: 40, y: 16, scale: 1/1.2 } : { x: 0, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {item.type}
                    </motion.span>
                    <motion.img 
                        src={item.icon} 
                        alt="icon"
                        initial={{ scale: 1 }}
                        animate={isImageHovered ? { scale: 0.7 } : { scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.h4 
                        initial={{ scale: 1, y: 0 }}
                        animate={isImageHovered ? { scale: 0.7, y:  -20 } : { scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {item.title}
                    </motion.h4>
                </motion.div>
            </div>
            <h3>{item.title}</h3>
            <span className="stack">{item.stack.join(' - ')}</span>
        </div>
    );
};

export default ProjectCard;