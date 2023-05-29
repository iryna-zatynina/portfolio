import React from 'react';
import './Header.scss';
import Container from "../Container/Container";
import { Link } from "react-scroll"
import Navbar from "../Navbar/Navbar";

const Header = () => {

    return (
        <header className="header">
            <Container className="container">
                <Link
                    href="/"
                    className="text-small font-light text-white xl:text-middle"
                    to="section"
                >
                    Iryna Zatynina
                </Link>
                <Navbar />
            </Container>
        </header>
    );
};

export default Header;