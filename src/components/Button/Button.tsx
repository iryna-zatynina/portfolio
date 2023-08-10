import React, {AnchorHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import './Button.scss';
import cn from "classnames";

interface ButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
    children: ReactNode,
    href?: string,
    size?: string,
    active?: boolean,
    className?: string,
    btnShow?: boolean
}

const Button = ({children, href, size, active, onClick, className, btnShow}: ButtonProps) => {
    return (
        <a onClick={onClick} href={href} rel="noreferrer" className={cn("button", className, {
            'large' : size === 'large',
            'active' : active === true,
            'block' : btnShow === false
        })} target={size ? "_self" : "_blank"}>
            {children}
        </a>
    );
};

export default Button;