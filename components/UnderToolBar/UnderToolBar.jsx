import c from './UnderToolBar.module.scss';

function UnderToolBar() {
    return (
        <div className={c.component}>
            <label htmlFor="thickness">Толщина линии</label>
            <input
                type="number"
                min={1}
                max={60}
                defaultValue={1} />
        </div>
    )
}

export default UnderToolBar