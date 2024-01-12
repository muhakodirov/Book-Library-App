import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';



const url = "http://localhost:4000/random-book"
const initialState = {
    books: [],
    status: '',
    error: ''
}



export const fetchBooks = createAsyncThunk(
    'book/fetchBooks',
    async (_, { rejectWithValue }) => {

        try {
            const response = await axios.get(url)
            const { title, author } = response.data
            return { title, author, source: 'API' }

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)



const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: {
            reducer: (state, action) => {
                state.books.push(action.payload);
            },
            prepare: (value) => ({
                payload: {
                    ...value,
                    id: nanoid(),
                    isFavorite: false,
                },
            }),
        },
        deleteAllBooks: () => {
            return initialState
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload);

        },
        toggleFavorite: (state, action) => {
            console.log(action, state.books)
            state.books = state.books.map(book => book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            if (action.payload?.title && action.payload?.author) {
                state.books.push({
                    ...action.payload,
                    id: nanoid(),
                    isFavorite: false,
                })
                state.status = ''
                state.error = ''

            }
        })
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.status = ''
            state.error = action.payload
            const notify = () => toast.error(state.error);
            notify()
        })
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = 'Loading...'


        })
    }
})


export const { addBook, deleteBook, toggleFavorite, deleteAllBooks } = bookSlice.actions
export const selectAllBooks = (state) => state.book.books
export const selectError = (state) => state.book.error
export const selectStatus = (state) => state.book.status
export default bookSlice.reducer