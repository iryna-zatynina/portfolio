import React from 'react';
import Title from "../../views/Title/Title";
import './Main.scss';
import Container from "../../components/Container/Container";
import AboutMe from "../../views/AboutMe/AboutMe";
import Experience from "../../views/Experience/Experience";
import Projects from "../../views/Projects/Projects";

const Main = () => {
    return (
        <main className="main">
            <Title />
            <Container>
                <AboutMe/>
                <Experience/>
                <Projects />
            </Container>
        </main>
    );
};

export default Main;