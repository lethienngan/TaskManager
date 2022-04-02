/*
const initFiltersState = {
    search: '',
    status: 'all',
    priority: [],
}

const filtersReducer = (state = initFiltersState, action) => {
    switch (action.type) {
        case 'filter/searchFilterChange':
            return {
                ...state,
                search: action.payload,
            }
        case 'filter/statusFilterChange':
            return {
                ...state,
                status: action.payload,
            }
        case 'filter/priorityFilterChange':
            return {
                ...state,
                priority: action.payload
            }
        default:
            return state
    }
}
export default filtersReducer;
*/
import { createSlice } from '@reduxjs/toolkit'

export const filtersReducer = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'all',
        priority: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            //mutation code || Immer
            state.search = action.payload
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        priorityFilterChange: (state, action) => {
            state.priority = action.payload
        },
    }
})