import React from 'react';
import { Link } from 'react-scroll';
import { categoriesData } from '../../data';
import './Sidebar.scss';
import CloseIcon from "../../icons/close";

interface SidebarInterface {
    isMenuOpen: boolean,
    setIsMenuOpen: any,
    isAtBottom: boolean
}

const Sidebar = ({ isMenuOpen, setIsMenuOpen, isAtBottom }: SidebarInterface) => {
    const handleClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
            <div className="close" onClick={handleClose}>
                <CloseIcon />
            </div>
            <div className="categories">
                {categoriesData.map((item, index) => (
                    <Link
                        key={index}
                        className="link"
                        activeClass={(item === 'Reviews' && isAtBottom) || !isAtBottom ? 'active-link' : ''}
                        to={item}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={item === 'Reviews' ? -650 : -120}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
