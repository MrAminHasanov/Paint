import c from './UnderToolBar.module.scss';
import { useActions } from "../../Hooks/UseActions";

function UnderToolBar() {
    const { setStrokeStyle, setLineWidth } = useActions()

    const onThicknessChange = (e) => setLineWidth(e.target.value);
    const onStrokeColorChange = (e) => setStrokeStyle(e.target.value);

    return (
        <div className={c.component}>
            <label htmlFor="thickness">Толщина линии</label>
            <input
                id="thickness"
                type="number"
                min={1}
                max={60}
                onChange={onThicknessChange}
                defaultValue={1} />
            <label htmlFor="lineColor">Цвет линии</label>
            <input
                onChange={onStrokeColorChange}
                id='lineColor'
                type="color" />
        </div>
    )
}

export default UnderToolBar