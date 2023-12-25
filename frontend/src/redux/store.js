import { configureStore } from '@reduxjs/toolkit'
import { booksReducer } from './books/reducer'
import filterReducer from './slices/filterSlice.js'

export const store = configureStore({
    reducer: {
        books: booksReducer,
        filter: filterReducer
    },
});


