import React, { useEffect, useState} from 'react';
import './Projects.scss';
import Hr from "../../components/Hr/Hr";
import {projectsData} from "../../data"
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button"
import {IItem} from "../../interfaces";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import cn from 'classnames';
import { Element } from 'react-scroll';
import Dropdown from '../../components/Dropdown/Dropdown';

const Projects = () => {
    const [projects, setProjects] = useState<IItem[]>([]);
    const [category, setCategory] = useState('All');
    const [btnShow, setBtnShow] = useState(true);
    const [projectsAmount, setProjectsAmount] = useState(6);
    const [projectInfo, setProjectInfo] = useState<null | IItem>(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const onShowMoreClick = () => {
        setProjectsAmount(prev => prev + 6)
        console.log(projectsAmount)
        if (projectsAmount >= projects.length) {
            setBtnShow(false)
        }
    }

    const handleCloseProjectInfoModal = () => {
        setProjectInfo(null);
    }

    useEffect(() => {
        getProjects(category)
    }, [projectsAmount, category])

    const getProjects = (category: string) => {
        const proj: IItem[] = []
        projectsData.forEach((item, index) => {
            if (category === "All") {
                proj.push(item)
            } else if (category === item.category){
                proj.push(item)
            }
        })
        setProjects(proj)
    }


    const getCategories = () => {
        const categories: string[] = ["All"];
        projectsData.forEach((item, index) => {
            if (!categories.includes(item.category)) {
                categories.push(item.category)
            }
        })
        return categories
    }

    const handleDropdownToggle = () => {
        setIsDropdownVisible((prev) => !prev);
    };

    const handleCategoryClick = (clickedCategory: string) => {
        setCategory(clickedCategory);
        setIsDropdownVisible(false);
    };

    return (
        <Element className="projects" name="Projects">
            <Hr />
            <h2>Projects</h2>
            <div className="categories">
                {isSmallScreen ? (
                    <>
            <span className="dropdown-toggle" onClick={handleDropdownToggle}>
              {category} &#9660;
            </span>
                        {isDropdownVisible && (
                            <Dropdown
                                categories={getCategories()}
                                selectedCategory={category}
                                onSelect={handleCategoryClick}
                            />
                        )}
                    </>
                ) : (
                    getCategories().map((item, index) => (
                        <span
                            className={cn({ active: item === category })}
                            onClick={() => handleCategoryClick(item)}
                            key={index}
                        >
              {item}
            </span>
                    ))
                )}
            </div>
            <div className="projects-block">
                {projects.map((item, index) => index < projectsAmount 
                    ? <div onClick={() => setProjectInfo(item)}>
                        <ProjectCard key={index} item={item}/>
                      </div> 
                    : null)}
            </div>
            {projects.length > projectsAmount &&
                <Button
                    size="center"
                    onClick={onShowMoreClick}
                    className="center"
                    btnShow={btnShow}
                >
                    Show more
                </Button>
            }
            {projectInfo && <ProjectInfo item={projectInfo} onClose={handleCloseProjectInfoModal}/>}
        </Element>
    );
};

export default Projects;