// import { useSelector, useDispatch } from 'react-redux'
import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    title: '',
    author: '',
    onlyFavs: false
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
            // return { ...state, author: '', title: '', filter: [] }
            return initialState
        },
        handleFavBooks: (state, action) => {
            state.onlyFavs = action.payload
        }
    }
})



export const { setTitle, setAuthor, resetFilters, handleFavBooks } = filterSlice.actions
export const selectTitel = (state) => state.filter.title
export const selectAuthor = (state) => state.filter.author
export const selectOnlyFavs = (state) => state.filter.onlyFavs
export default filterSlice.reducer