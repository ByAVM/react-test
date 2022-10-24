import { FC } from "react";
import { Link } from "react-router-dom";
import { selectGameById, useTypedSelector } from "../../App/store";
import { GameDetailsLayout } from "../../components/GameDetailsLayout";
import { GameDetailsProps } from "./interfaces";

export const GameDetails: FC<GameDetailsProps> = ({ id }) => {
  const gameData = useTypedSelector(selectGameById(id));

  return (
    <GameDetailsLayout
      header={
        <div>
          <Link to="/">На главную</Link>
        </div>
      }
    >
      {gameData?.title}
    </GameDetailsLayout>
  );
};
