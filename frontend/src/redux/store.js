import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './slices/bookSlice.js';
import filterReducer from './slices/filterSlice.js'

export const store = configureStore({
    reducer: {
        book: bookReducer,
        filter: filterReducer
    },
});


