import { FC } from "react";
import {
  hasNextGames,
  increasePage,
  selectFilteredGames,
  useTypedDispatch,
  useTypedSelector,
} from "../../App/store";
import { Button } from "../../components/Button";
import { CardsLayout } from "../../components/CardsLayout";
import { GameCard } from "../../components/GameCard";

export const GameCardsList: FC = () => {
  const dispatch = useTypedDispatch();
  const games = useTypedSelector(selectFilteredGames);
  const hasMoreGames = useTypedSelector(hasNextGames);

  return (
    <div>
      <CardsLayout
        footer={
          hasMoreGames && (
            <Button onClick={() => dispatch(increasePage())}>
              Показать еще
            </Button>
          )
        }
      >
        {games.map(({ id, title }) => (
          <GameCard key={id} id={id} title={title} />
        ))}
      </CardsLayout>
    </div>
  );
};
