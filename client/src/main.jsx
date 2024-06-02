import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistor, store } from './app/store'
import App from './App'
import './index.css'
import '@fontsource-variable/inter'
import { PersistGate } from 'redux-persist/integration/react'

document.body.className = 'overflow-y-scroll'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
