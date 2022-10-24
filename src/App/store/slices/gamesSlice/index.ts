import { RootState } from "../..";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { Game, GamesApiResult, GamesState } from "./interfaces";
import { transformGamesResponse } from "./utils";

const gamesEntities = createEntityAdapter<Game>({
  selectId: (game) => game.id,
  sortComparer: (aGame, bGame) => {
    const result = aGame.collections.popularity - bGame.collections.popularity;

    if (result < 0) return -1;
    else if (result > 0) return 1;
    else return 0;
  },
});

const API_ENDPOINT = "/data.json";
const PAGE_LIMIT = 12;

export const fetchGamesData = createAsyncThunk<GamesApiResult>(
  "games/fetchData",
  async () => {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();

    return data;
  }
);

const initialState: GamesState = {
  providers: [],
  currencies: [],
  games: gamesEntities.getInitialState(),
  page: 1,
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setCurrencyFilter: (state, { payload }) => {
      state.currencyFilter = payload;
    },
    setProviderFilter: (state, { payload }) => {
      state.providerFilter = payload;
    },
    increasePage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGamesData.fulfilled, (state, action) => {
      const { providers, currencies } = transformGamesResponse(action.payload);

      state.currencies = currencies;
      state.providers = providers;

      gamesEntities.setAll(
        state.games,
        Object.entries(action.payload).map(([id, game]) => ({id, ...game}))
      );
    });
  },
});

export const gamesReducer = gamesSlice.reducer;

export const { setCurrencyFilter, setProviderFilter, increasePage } =
  gamesSlice.actions;

export const selectCurrencies = (state: RootState) => state.games.currencies;
export const selectProviders = (state: RootState) => state.games.providers;
export const selectPage = (state: RootState) => state.games.page;
export const selectFilters = (state: RootState) => ({
  currency: state.games.currencyFilter,
  provider: state.games.providerFilter,
});

export const { selectAll, selectById } =
  gamesEntities.getSelectors();

const selectGames = (state: RootState) => selectAll(state.games.games)

export const selectGameById = (id: string) => (state: RootState) =>
  selectById(state.games.games, id);

export const selectFilteredGames = createSelector(
  selectPage,
  selectGames,
  selectFilters,
  (page, games, filters) => {
    const { currency, provider } = filters;

    return games
      .filter((game) => {
        const validProvider = provider ? provider === game.provider : true;
        const hasCurrency = currency
          ? Object.keys(game.real).includes(currency)
          : true;

        return validProvider && hasCurrency;
      })
      .slice(0, page * PAGE_LIMIT);
  }
);

export const hasNextGames = createSelector(
  selectPage,
  selectFilteredGames,
  (page, games) => {
    return page < games.length / PAGE_LIMIT + 1;
  }
);
