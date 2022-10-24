import { FC } from "react";
import { useParams } from "react-router-dom";
import { GameDetails } from "../../containers/GameDetails";

export const GamePage: FC = () => {
    const {provider, game} = useParams<{ provider: string; game: string }>();

  return <main>
    <GameDetails id={`${provider}/${game}`} />
  </main>;
};
