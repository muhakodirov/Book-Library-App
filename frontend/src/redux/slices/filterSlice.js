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
            return { ...state, author: action.payload }
        }
    }
})



export const { setTitle, setAuthor } = filterSlice.actions
export const selectTitel = (state) => state.filter.title
export const selectAuthor = (state) => state.filter.author
export default filterSlice.reducer