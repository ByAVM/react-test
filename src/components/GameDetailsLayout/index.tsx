import { FC, PropsWithChildren } from "react";
import { GameDetailsLayoutProps } from "./interfaces";

import classes from './style.module.scss'

export const GameDetailsLayout: FC<
  PropsWithChildren<GameDetailsLayoutProps>
> = ({ children, header }) => {
  return (
    <div className={classes.gameDetailsLayout}>
      {header}
      <div className={classes.gameDetails}>
        <h2>{children}</h2>
      </div>
    </div>
  );
};
