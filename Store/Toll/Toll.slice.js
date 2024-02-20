import { createSlice } from "@reduxjs/toolkit";
import { toolName } from "../../constateName/toolName"

import { BrushActions } from "./TollActions/BrushActions";
import { RectActions } from "./TollActions/RectActions";
import { CircleActions } from "./TollActions/CircleActions";
import { LineActions } from "./TollActions/LineActions";
import { EraserActions } from "./TollActions/EraserActions";

const initialState = {
    selectedToll: toolName.brush,
    infoState: {},
    undoImg: [],
    redoImgs: []
}

export const TollSlice = createSlice({
    name: "Toll",
    initialState,
    reducers: {
        setCanvasLink: () => {
            canvas.link = document.getElementById("canvas");
            canvas.ctx = canvas.link.getContext("2d")
        },
        setToll: (state, { payload: selectedToll }) => {
            if (state.selectedToll === toolName.eraser)
                canvas.ctx.strokeStyle = state.infoState.saveColor;
            state.selectedToll = selectedToll;
            state.infoState = {};
        },
        setStrokeStyle: (state, { payload: strokeColor }) => {
            canvas.ctx.strokeStyle = strokeColor;
        },
        setFillStyle: (state, { payload: fillColor }) => {
            canvas.ctx.fillStyle = fillColor;
        },
        setLineWidth: (state, { payload: lineWidth }) => {
            canvas.ctx.lineWidth = lineWidth;
        },
        mouseUpHandler: (state) => {
            state.infoState.mouseDown = false;
            state.redoImgs = [];
        },
        undoHistory: (state) => {
            if (state.undoImg.length > 0) {
                const undoImgs = state.undoImg.pop();
                state.redoImgs.push(canvas.link.toDataURL());

                const img = new Image()
                img.src = undoImgs;
                img.onload = () => {
                    canvas.ctx.clearRect(0, 0, canvas.link.width, canvas.link.height)
                    canvas.ctx.drawImage(img, 0, 0, canvas.link.width, canvas.link.height)
                }
            } else {
                state.redoImgs.push(canvas.link.toDataURL());
                canvas.ctx.clearRect(0, 0, canvas.link.width, canvas.link.height)
            }
        },
        redoHistory: (state) => {
            if (state.redoImgs.length > 0) {
                const redoImg = state.redoImgs.pop();
                state.undoImg.push(canvas.link.toDataURL());

                const img = new Image()
                img.src = redoImg;
                img.onload = () => {
                    canvas.ctx.clearRect(0, 0, canvas.link.width, canvas.link.height)
                    canvas.ctx.drawImage(img, 0, 0, canvas.link.width, canvas.link.height)
                }
            }
        },
        ...BrushActions,
        ...RectActions,
        ...CircleActions,
        ...LineActions,
        ...EraserActions
    }
});

export const { actions, reducer } = TollSlice;

export const canvas = {
    link: null,
    ctx: null
}