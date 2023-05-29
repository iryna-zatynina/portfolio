import "./Container.scss";
import {ReactNode} from "react";
import cn from "classnames";

interface ContainerProps {
    children: ReactNode,
    className?: string,
}

const Container = ({ children, className }: ContainerProps) => {
    return <div className={cn(className, "container")}>{children}</div>;
};

export default Container;