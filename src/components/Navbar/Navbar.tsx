import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { Link } from 'react-scroll';
import Sidebar from '../Sidebar/Sidebar'
import { categoriesData } from '../../data';
import BurgerIcon from "../../icons/burger";

const Navbar = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                setIsAtBottom(true);
            } else {
                setIsAtBottom(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            {isSmallScreen ? (
                <div className="burger-menu" onClick={toggleMenu}>
                    <BurgerIcon />
            </div>) : (categoriesData.map((item, index) => (
                    <Link
                        key={index}
                        className="link"
                        activeClass={(item === 'Testimonials' && 'active-link') || !isAtBottom ? 'active-link' : ''}
                        to={item}
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        duration={500}
                        offset={-125}
                    >
                        {item}
                    </Link>
                )))}

            {window.innerWidth <= 768 && (
                <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isAtBottom={isAtBottom} />
            )}
        </nav>
    );
};

export default Navbar;