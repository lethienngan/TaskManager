
export const addTodo_Action = (payload) => {
    return {
        type: 'todoList/addTodo',
        payload,
    }
}
export const checkCompletedTodo_Action = (payload) => {
    return {
        type: 'todoList/checkCompletedTodo',
        payload,
    }
}
export const searchFilter_Action = (text) => {
    return {
        type: 'filter/searchFilterChange',
        payload: text,
    }
}
export const statusFilter_Action = (status) => {
    return {
        type: 'filter/statusFilterChange',
        payload: status,
    }
}
export const priorityFilter_Action = (priorities) => {
    return {
        type: 'filter/priorityFilterChange',
        payload: priorities
    }
}
