import React from 'react';
import './AboutMe.scss';
import Button from "../../components/Button/Button";

import EmailIcon from "../../icons/email";
import LinkedinIcon from "../../icons/linkedin";
import GitHubIcon from "../../icons/github";
import Hr from "../../components/Hr/Hr";

const AboutMe = () => {
    const data = [
        {
            name: "Send an email",
            url: "mailto:ira.zat1997@gmail.com"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/iryna-zatynina-ba4713175/"
        },
        {
            name: "GitHab",
            url: "https://github.com/iryna-zatynina"
        }
    ]

    const getIcon = (item: string) => {
        switch (item) {
            case "Send an email":
                return <EmailIcon />
            case "LinkedIn":
                return <LinkedinIcon />
            case "GitHab":
                return <GitHubIcon />
        }
    }

    return (
        <section  className="aboutMe">
            <div className="img"></div>
            <Hr/>
            <h2>About Me</h2>
            <p>I specialize in work with React.js and React-based frameworks, I can develop a CSR as well SSR applications. I am able to create a full app using classical backend or CMS.</p>
            <p>Also I gained experience during different internships where I improved my level of JavaScript and TypeScript. I have also completed several projects in web development, which have helped me develop skills in PWA, REST API, GraphQL, IndexedDb and so on.</p>
            <div className="buttons">
                {data.map((item, index) => (
                    <Button href={item.url} key={index}>
                        {getIcon(item.name)}
                        <span>{item.name}</span>
                    </Button>
                ))}
            </div>

        </section>
    );
};

export default AboutMe;