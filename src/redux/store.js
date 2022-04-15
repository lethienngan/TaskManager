// import { createStore } from 'redux';
// import rootReducer from './rootReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancer = composeWithDevTools()

// const store = createStore(rootReducer, composeEnhancer)

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { filtersReducer } from '../components/Filters/FiltersReducer'
import { todoListReducer } from '../components/TodoList/TodoListReducer'
// import { loadState } from './localStorage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const rootReducer = combineReducers({
    filters: filtersReducer.reducer,
    todoList: todoListReducer.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    // preloadedState: loadState(),
});

// export default store;