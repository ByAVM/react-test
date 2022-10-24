import { FC, PropsWithChildren } from "react";
import { ButtonProps } from "./interfaces";
import classes from './style.module.scss'

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const {children, ...rest} = props
    return <button {...rest} className={classes.button}>{children}</button>
}