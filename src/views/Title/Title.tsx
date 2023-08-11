import React from 'react';
import './Title.scss';
import Container from "../../components/Container/Container";
import { Element } from 'react-scroll';

const Title = () => {
    return (
        <Element className="title" name="title">
            <Container>
                <h1>Iryna Zatynina</h1>
                <p>Front End Developer</p>
            </Container>
        </Element>
    );
};

export default Title;