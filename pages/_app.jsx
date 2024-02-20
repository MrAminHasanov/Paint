import CanvasBar from '../components/CanvasBar/CanvasBar'
import ToolBar from '../components/ToolBar/ToolBar'
import UnderToolBar from '../components/UnderToolBar/UnderToolBar'
import "../styles/global.scss";

function App() {
    return (
        <div className={"App"}>
            <ToolBar />
            <UnderToolBar />
            <CanvasBar />
        </div>
    )
}

export default App