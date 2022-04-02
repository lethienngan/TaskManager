import { createSelector } from "@reduxjs/toolkit"

export const searchTextSelector = (state) => state.filters.search
export const statusFilterSelector = (state) => state.filters.status
export const priorityFilterSelector = (state) => state.filters.priority
export const todoListSelector = (state) => state.todoList

export const todoListAfterSearchText = createSelector(
    // (state) => state.todoList,
    // (state) => state.filters.search,
    todoListSelector,
    searchTextSelector,
    statusFilterSelector,
    priorityFilterSelector,
    (todoList, searchText, statusFilter, priorityFilter) => {
        const result = todoList.filter(todo => {
            if (statusFilter === 'all') {
                return (
                    priorityFilter.length ?
                        todo.name.includes(searchText) && priorityFilter.includes(todo.priority) :
                        todo.name.includes(searchText)
                )
            }
            if (statusFilter === 'completed') {
                return (
                    priorityFilter.length ?
                        todo.name.includes(searchText) && todo.completed && priorityFilter.includes(todo.priority) :
                        todo.name.includes(searchText) && todo.completed
                )
            }
            if (statusFilter === 'todo') {
                return (
                    priorityFilter.length ?
                        todo.name.includes(searchText) && !todo.completed && priorityFilter.includes(todo.priority) :
                        todo.name.includes(searchText) && !todo.completed
                )
            }
        })
        return result
    }
)