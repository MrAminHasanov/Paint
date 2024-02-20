import { canvas } from "../Toll.slice"

export const BrushActions = {
    BrushMouseDownHandler: (state, { payload: { x, y } }) => {
        state.infoState.mouseDown = true;
        state.undoImg.push(canvas.link.toDataURL());

        canvas.ctx.beginPath();
        canvas.ctx.moveTo(x, y);
    },
    BrushMouseMoveHandler: (state, { payload: { x, y } }) => {
        if (state.infoState.mouseDown) {
            canvas.ctx.lineTo(x, y)
            canvas.ctx.stroke()
        }
    },
}
