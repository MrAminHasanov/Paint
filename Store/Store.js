import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as TollReducer } from "./Toll/Toll.slice"

const reducers = combineReducers({
    Toll: TollReducer
});

export const store = configureStore({
    reducer: reducers,
});

