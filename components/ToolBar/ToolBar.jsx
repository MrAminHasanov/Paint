import c from './ToolBar.module.scss';

import brush from "../../asserts/img/brush.png";
import line from "../../asserts/img/line.png";
import rect from "../../asserts/img/rect.png";
import circle from "../../asserts/img/circle.png";
import eraser from "../../asserts/img/eraser.png";

import undo from "../../asserts/img/undo.png";
import redo from "../../asserts/img/redo.png";

import { useActions } from "../../Hooks/UseActions"
import { useSelector } from 'react-redux';
import { TollSelectors } from '../../Store/Toll/TollSelectors';
import { toolName } from '../../constateName/toolName';

function ToolBar() {
    const selectedToll = useSelector(TollSelectors.selectedToll)
    const { setToll, setFillStyle, undoHistory, redoHistory } = useActions();

    const handleBrushClick = () => setToll(toolName.brush);
    const handleRectClick = () => setToll(toolName.rect);
    const handleCircleClick = () => setToll(toolName.circle);
    const handleEraserClick = () => setToll(toolName.eraser);
    const handleLineClick = () => setToll(toolName.line);
    const onInputChange = (e) => setFillStyle(e.target.value);

    return (
        <div className={c.component}>
            <div className={c.leftTolls}>
                <button
                    className={`${c.button} ${selectedToll === toolName.brush ? c.activeButton : null}`}
                    onClick={handleBrushClick}>
                    <img src={brush.src} alt="brush" />
                </button>
                <button
                    className={`${c.button} ${selectedToll === toolName.rect ? c.activeButton : null}`}
                    onClick={handleRectClick}>
                    <img src={rect.src} alt="rect" />
                </button>
                <button
                    className={`${c.button} ${selectedToll === toolName.circle ? c.activeButton : null}`}
                    onClick={handleCircleClick}>
                    <img src={circle.src} alt="circle" />
                </button>
                <button
                    className={`${c.button} ${selectedToll === toolName.eraser ? c.activeButton : null}`}
                    onClick={handleEraserClick}>
                    <img src={eraser.src} alt="eraser" />
                </button>
                <button
                    className={`${c.button} ${selectedToll === toolName.line ? c.activeButton : null}`}
                    onClick={handleLineClick}>
                    <img src={line.src} alt="line" />
                </button>
                <label htmlFor="fillColor">fillColor</label>
                <input className={c.colorInput} onChange={onInputChange} id="fillColor" type="color" />
            </div>

            <div className={c.rightTols}>
                <button className={c.button} onClick={() => undoHistory()}><img src={undo.src} alt="undo" /></button>
                <button className={c.button} onClick={() => redoHistory()}><img src={redo.src} alt="redo" /></button>
            </div>
        </div>
    )
}

export default ToolBar