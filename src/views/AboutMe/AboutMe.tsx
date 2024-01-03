import React from 'react';
import './AboutMe.scss';
import Button from "../../components/Button/Button";
import EmailIcon from "../../icons/email";
import LinkedinIcon from "../../icons/linkedin";
import GitHubIcon from "../../icons/github";
import Hr from "../../components/Hr/Hr";
import { Element } from 'react-scroll';
import {myLinksData} from "../../data";

const AboutMe = () => {

    const getIcon = (item: string) => {
        switch (item) {
            case "Send an email":
                return <EmailIcon />
            case "LinkedIn":
                return <LinkedinIcon />
            case "GitHub":
                return <GitHubIcon />
        }
    }

    return (
        <Element name="About me" className="aboutMe">
            <div className="img"></div>
            <Hr/>
            <h2>About Me</h2>
            <p>I am looking for opportunities where I will be able to utilise my skills and knowledge to make a meaningful contribution to the success of projects. I am a self-motivated and passionate developer who is always eager to learn and grow. I am also a team player who values collaboration and communication, and I am committed to delivering high-quality work in a timely manner.</p>
            <p>My stack: <br/> TypeScript, JavaScript, Angular, React, Redux, NextJS, NodeJS, Express, MongoDB, MySQL, HTML, CSS, SCSS, ES6, AJAX, GIT, REST API, GraphQL, Bootstrap, WebPack, GULP, SCRUM, Material UI</p>
            <div className="buttons">
                {myLinksData.map((item, index) => (
                    <Button href={item.url} key={index}>
                        {getIcon(item.name)}
                        <span>{item.name}</span>
                    </Button>
                ))}
            </div>

        </Element>
    );
};

export default AboutMe;