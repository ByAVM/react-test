import { FC, PropsWithChildren } from "react";
import { CardsLayoutProps } from "./interfaces";
import classes from "./style.module.scss";

export const CardsLayout: FC<PropsWithChildren<CardsLayoutProps>> = ({
  children,
  footer,
}) => {
  return (
    <div className={classes.cardsLayout}>
      <div className={classes.cardsLayoutContainer}>
        <div className={classes.cardsLayoutList}>{children}</div>
      </div>

      <div className={classes.cardsLayoutFooter}>{footer}</div>
    </div>
  );
};
