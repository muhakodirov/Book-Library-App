import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    title: '',
    author: ''
}


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload
            // return { ...state, title: action.payload }
        },
        setAuthor: (state, action) => {
            state.author = action.payload
        },
        resetFilters: (state) => {
            // return { ...state, author: '', title: '' }
            return initialState
        }
    }
})



export const { setTitle, setAuthor, resetFilters } = filterSlice.actions
export const selectTitel = (state) => state.filter.title
export const selectAuthor = (state) => state.filter.author
export default filterSlice.reducer