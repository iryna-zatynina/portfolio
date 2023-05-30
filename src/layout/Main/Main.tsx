import React from 'react';
import Title from "../../views/Title/Title";
import Container from "../../components/Container/Container";
import './Main.scss';

const Main = () => {
    return (
        <main className="main">
            <Container>
                <Title />
            </Container>
        </main>
    );
};

export default Main;