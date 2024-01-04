import React, {useEffect} from 'react';
import './ProjectInfo.scss';
import {IItem} from "../../interfaces";
import Button from "../Button/Button";
import CloseIcon from "../../icons/close";
import ToggleCommandIcon from "../../icons/toggle-command";
import ToggleOwnIcon from "../../icons/toggle-own";
import GitHubBigIcon from "../../icons/github-big";

interface ProjectInfoProps {
    item: IItem,
    onClose: () => void;
}

const ProjectInfo = ({item, onClose}: ProjectInfoProps) => {
    useEffect(() => {
        document.body.classList.add('body-no-scroll');

        return () => {
            document.body.classList.remove('body-no-scroll');
        };
    }, []);

    return (
        <div className="projectInfo">
            <div className="modal">
                <div className='info-header'>
                    <h3>{item.title}</h3>
                    <button onClick={onClose} className="close"><CloseIcon /></button>
                </div>
                
                <hr/>
                <div className='info-content'>
                    <div
                        className="img-block"
                        style={{
                            backgroundImage: `url('${item.picture}')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center center"
                        }}
                    >
                        <img src={item.icon} alt=""/>
                        <h4>{item.title}</h4>
                    </div>
                    <div className='description-block'>
                        <p>{item.description}</p>
                        <p className='stack'>{item.stack.join(' - ')}</p>
                        <p className='isTeam'>own {item.team ? <ToggleCommandIcon /> : <ToggleOwnIcon />} team</p>
                        <p className='role'>Role: {item.role}</p>
                        <div className='buttons'>
                            <a href={item.productionLink} target='_blank' rel="noreferrer"><Button size='large'>Live page</Button></a>
                            {item.gitHubLink !=="" && (<a href={item.gitHubLink} target='_blank' rel="noreferrer"><GitHubBigIcon /></a>)}
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    );
};

export default ProjectInfo;