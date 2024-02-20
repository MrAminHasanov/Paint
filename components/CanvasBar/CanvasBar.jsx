import c from './CanvasBar.module.scss'

function CanvasBar() {
    return (
        <div className={c.component}>
            <canvas
                className={c.canvas}
                width={800}
                height={500}
            />
        </div>
    )
}

export default CanvasBar