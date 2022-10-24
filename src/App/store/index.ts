import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { gamesReducer } from "./slices/gamesSlice";

export * from './slices/gamesSlice'

export const store = configureStore({
    reducer: {
        games: gamesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useTypedDispatch = () => useDispatch<AppDispatch>()

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector