import { useEffect, useRef } from 'react';
import c from './CanvasBar.module.scss';
import { useActions } from '../../Hooks/UseActions';
import { useSelector } from 'react-redux';
import { TollSelectors } from '../../Store/Toll/TollSelectors';
import { getCordinats } from '../../functions/getCordinats';

function CanvasBar() {
    const selectedToll = useSelector(TollSelectors.selectedToll);
    const { setCanvasLink, mouseUpHandler } = useActions();
    const mouseDownHandler = useActions()[selectedToll + "MouseDownHandler"];
    const mouseMoveHandler = useActions()[selectedToll + "MouseMoveHandler"];;

    useEffect(() => {
        setCanvasLink();
    }, [])

    return (
        <div className={c.component}>
            <canvas
                id="canvas"
                className={c.canvas}
                width={800}
                height={500}
                onMouseUp={e => mouseUpHandler()}
                onMouseDown={e => mouseDownHandler(getCordinats(e))}
                onMouseMove={e => mouseMoveHandler(getCordinats(e))}
            />
        </div>
    )
}

export default CanvasBar
