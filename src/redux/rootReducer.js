import { combineReducers } from "redux";

import filtersReducer from "./FiltersReducer";
import todoListReducer from "./TodoListReducer";


const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
})

export default rootReducer;