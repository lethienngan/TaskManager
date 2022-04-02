// import { createStore } from 'redux';
// import rootReducer from './rootReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancer = composeWithDevTools()

// const store = createStore(rootReducer, composeEnhancer)

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import { filtersReducer } from '../components/Filters/FiltersReducer'
import { todoListReducer } from '../components/TodoList/TodoListReducer'

const store = configureStore({
    reducer: {
        filters: filtersReducer.reducer,
        todoList: todoListReducer.reducer,
    },
});

export default store;