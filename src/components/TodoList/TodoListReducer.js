/*
const initTodoListState = []

const todoListReducer = (state = initTodoListState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]
        case 'todoList/checkCompletedTodo': {
            const newState = state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: action.payload.completed
                    }
                }
                else
                    return todo
            })
            return newState
        }
        default:
            return state
    }
}

export default todoListReducer;
*/

import { createSlice } from '@reduxjs/toolkit'
import produce from 'immer'

export const todoListReducer = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            //mutation code || immer
            state.push(action.payload)
        },
        checkCompletedTodo: (state, action) => {
            //mutation code || immer
            state.map((todo) => {
                if (todo.id === action.payload.id) return todo.completed = action.payload.completed
                return todo
            })
        },
        removeCompletedTodo: (state) => {
            //mutation code || immer

           return state.filter((todo, index) => todo.completed === false)

        }
    }
})