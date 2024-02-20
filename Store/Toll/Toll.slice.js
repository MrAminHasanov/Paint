import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    canvasLink: null
}

export const TollSlice = createSlice({
    name: "Toll",
    initialState,
    reducers: {
        setCanvasLink(state, { payload: canvasLink }) {
            state.canvasLink = canvasLink;
        }
    }
});

export const { actions, reducer } = TollSlice;