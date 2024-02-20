import c from './ToolBar.module.scss';
import brush from "../../asserts/img/brush.png"
import line from "../../asserts/img/line.png"
import rect from "../../asserts/img/rect.png"
import circle from "../../asserts/img/circle.png"
import eraser from "../../asserts/img/eraser.png"

import undo from "../../asserts/img/undo.png";
import redo from "../../asserts/img/redo.png";

function ToolBar() {
    return (
        <div className={c.component}>
            <div className={c.leftTols}>
                <button className={c.button}><img src={brush.src} alt="brush" /></button>
                <button className={c.button}><img src={rect.src} alt="rect" /></button>
                <button className={c.button}><img src={circle.src} alt="circle" /></button>
                <button className={c.button}><img src={eraser.src} alt="eraser" /></button>
                <button className={c.button}><img src={line.src} alt="line" /></button>
                <input className={c.colorInput} type="color" />
            </div>

            <div className={c.rightTols}>
                <button className={c.button}><img src={undo.src} alt="undo" /></button>
                <button className={c.button}><img src={redo.src} alt="redo" /></button>
            </div>
        </div>
    )
}

export default ToolBar