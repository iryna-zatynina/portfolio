import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { Link } from "react-scroll";
import {categoriesData} from "../../data";

const Navbar = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setIsAtBottom(true);
            } else {
                setIsAtBottom(false);
            }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    
    
    return (
        <nav className="navbar">
            {categoriesData.map((item, index) => (
                <Link 
                    className='link'
                    activeClass={(item === "Reviews" && isAtBottom) || !isAtBottom ? 'active-link' : ''}
                    to={item} 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    offset={item === "Reviews" ? -650 : -120} 
                    key={index}
                >
                    {item}
                </Link>
            ))}
        </nav>
    );
};


export default Navbar;