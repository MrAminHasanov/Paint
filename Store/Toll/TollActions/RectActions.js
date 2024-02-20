import { canvas } from "../Toll.slice"

export const RectActions = {
    RectMouseDownHandler: (state, { payload: { x, y } }) => {
        state.infoState.mouseDown = true;
        state.infoState.startPos = { startX: x, startY: y };
        state.undoImg.push(canvas.link.toDataURL());
        
        canvas.ctx.beginPath();
        state.infoState.saved = canvas.link.toDataURL();
    },
    RectMouseMoveHandler: (state, { payload: { x: curentX, y: curentY } }) => {
        if (state.infoState.mouseDown) {
            const { startX, startY } = state.infoState.startPos;
            const width = curentX - startX;
            const height = curentY - startY;

            const img = new Image();
            img.src = state.infoState.saved;
            img.onload = () => {
                canvas.ctx.clearRect(0, 0, canvas.link.width, canvas.link.height);
                canvas.ctx.drawImage(img, 0, 0, canvas.link.width, canvas.link.height)
                canvas.ctx.beginPath();
                canvas.ctx.rect(startX, startY, width, height);
                canvas.ctx.fill();
                canvas.ctx.stroke();
            }
        }
    },
}
