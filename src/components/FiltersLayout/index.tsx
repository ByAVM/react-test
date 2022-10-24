import { FC, PropsWithChildren } from "react"
import classes from './style.module.scss'

export const FiltersLayout: FC<PropsWithChildren> = ({children}) => {
    return <div className={classes.filtersLayout}>{children}</div>
}