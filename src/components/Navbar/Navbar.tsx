import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    const data = ["About me", "Experience", "Projects", "Reviews"]

    return (
        <nav className="navbar">
            {data.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </nav>
    );
};

export default Navbar;