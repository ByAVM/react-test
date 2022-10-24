import { FC } from "react";
import { GameCardProps } from "./interfaces";
import { getGameCardPreviewImage } from "./utils";
import { generatePath, Link } from "react-router-dom";
import classes from './style.module.scss'

export const GameCard: FC<GameCardProps> = ({ id, title }) => {
  return (
    <Link to={generatePath("/game/:id", { id })} className={classes.card}>
      <img src={getGameCardPreviewImage(id)} alt={title} className={classes.cardImage} />

      <h3 className={classes.cardTitle}>{title}</h3>
    </Link>
  );
};
