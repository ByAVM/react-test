import { Game, GamesApiResult } from "./interfaces";

export const transformGamesResponse = (response: GamesApiResult) => {
  return Object.values(response).reduce(
    (acc, game) => {
      const currencies = Object.keys(game.real).filter(
        (currency) =>
          !acc.currencies.some((existsCurrency) => currency === existsCurrency)
      );
      const provider = game.provider;

      if (!acc.providers.includes(provider)) {
        acc.providers.push(provider);
      }

      if (currencies.length > 0) {
        acc.currencies = [...acc.currencies, ...currencies];
      }

      return acc;
    },
    {
      providers: [] as string[],
      currencies: [] as string[],
    }
  );
};

export const sortGamesResponse = (response: GamesApiResult) => {
  return Object.entries(response).map(([id, game]) => ({id, ...game})).sort((aGame: Game, bGame: Game) =>
    aGame.collections.popularity >= bGame.collections.popularity ? 1 : 0
  );
};
