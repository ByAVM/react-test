import { FC } from "react";
import { FiltersContainer } from "../../containers/FiltersContainer";
import { GameCardsList } from "../../containers/GameCardsList";

export const IndexPage: FC = () => {
  return (
    <main>
      <FiltersContainer />

      <GameCardsList />
    </main>
  );
};
