import React from 'react';
import './Header.scss';
import Container from "../../components/Container/Container";
import { Link } from "react-scroll"
import Navbar from "../../components/Navbar/Navbar";

const Header = () => {

    return (
        <header className="header">
            <Container className="container">
                <Link className='logo' to="title" spy={true} smooth={true} duration={500} offset={-67}>
                    Iryna Zatynina
                </Link>
                <Navbar />
            </Container>
        </header>
    );
};

export default Header;