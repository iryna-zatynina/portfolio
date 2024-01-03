import React from 'react';
import './Dropdown.scss';
import cn from 'classnames';

interface DropdownProps {
    categories: string[];
    selectedCategory: string;
    onSelect: (category: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ categories, selectedCategory, onSelect }) => {
    return (
        <div className="dropdown-content">
            {categories.map((item, index) => (
                <span
                    className={cn({ active: item === selectedCategory })}
                    onClick={() => onSelect(item)}
                    key={index}
                >
          {item}
        </span>
            ))}
        </div>
    );
};

export default Dropdown;
