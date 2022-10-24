import { EntityState } from "@reduxjs/toolkit";

export interface GameCollections {
  novelty: number;
  popularity: number;
  all: number;
  slots?: number;
  _hd?: number;
}

export interface GameRealItem {
  id: number;
}

export interface Game {
  title: string;
  provider: string;
  collections: GameCollections;
  real: Record<string, GameRealItem>;
  demo: string;
  id: string;
}

export interface GamesState {
  providers: string[];
  currencies: string[];
  games: EntityState<Game>;
  page: number;
  currencyFilter?: string;
  providerFilter?: string;
}

export type GamesApiResult = Record<string, Omit<Game, 'id'>>;
