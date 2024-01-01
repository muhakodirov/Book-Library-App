import { createSlice, nanoid } from '@reduxjs/toolkit'


const initialState = []


const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (value) => ({
                payload: {
                    ...value,
                    id: nanoid(),
                    isFavorite: false,
                },
            }),
        },
        deleteBook: (state, action) => {

            return state.filter(book => book.id !== action.payload)
        },
        toggleFavorite: (state, action) => {
            return state.map(book => book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book)
        }
    }
})


export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions
export const selectAllBooks = (state) => state.book
export default bookSlice.reducer