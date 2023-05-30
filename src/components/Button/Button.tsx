import React, {AnchorHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import './Button.scss';

interface ButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
    children: ReactNode,
    href: string
}

const Button = ({children, href}: ButtonProps) => {
    return (
        <a href={href} className="button" target="_blank">
            {children}
        </a>
    );
};

export default Button;