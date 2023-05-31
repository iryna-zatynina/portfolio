import React, {AnchorHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import './Button.scss';
import cn from "classnames";

interface ButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
    children: ReactNode,
    href?: string,
    size?: string,
    active?: boolean
}

const Button = ({children, href, size, active, onClick}: ButtonProps) => {
    return (
        <a onClick={onClick} href={href} className={cn("button", {
            ['large'] : size === 'large',
            ['active'] : active === true
        })} target={size ? "_self" : "_blank"}>
            {children}
        </a>
    );
};

export default Button;