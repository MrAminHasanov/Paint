import { canvas } from "../Toll.slice"

export const EraserActions = {
    EraserMouseDownHandler: (state, { payload: { x, y } }) => {
        state.infoState.mouseDown = true;
        state.infoState.saveColor = canvas.ctx.strokeStyle;
        state.undoImg.push(canvas.link.toDataURL());
        
        canvas.ctx.strokeStyle = "white"
        canvas.ctx.beginPath();
        canvas.ctx.moveTo(x, y)
    },
    EraserMouseMoveHandler: (state, { payload: { x, y } }) => {
        if (state.infoState.mouseDown) {
            canvas.ctx.lineTo(x, y)
            canvas.ctx.stroke()
        }
    },
}
