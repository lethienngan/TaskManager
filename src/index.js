import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import store froms './redux/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { saveState } from './redux/localStorage'
import { store } from './redux/store'

// store.subscribe(() => {
//     saveState(store.getState())
// })
let persistor = persistStore(store)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

