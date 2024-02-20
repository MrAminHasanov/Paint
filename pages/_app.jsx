import { Provider } from "react-redux"
import { store } from "../Store/Store"
import CanvasBar from '../components/CanvasBar/CanvasBar'
import ToolBar from '../components/ToolBar/ToolBar'
import UnderToolBar from '../components/UnderToolBar/UnderToolBar'
import "../styles/global.scss";

function App() {
    return (
        <Provider store={store}>
            <div className={"App"}>
                <ToolBar />
                <UnderToolBar />
                <CanvasBar />
            </div>
        </Provider>
    )
}

export default App