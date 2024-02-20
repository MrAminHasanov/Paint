import { Provider } from "react-redux"

import { store } from "../Store/Store"
import App from "./_app"

export default function HomePage() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
