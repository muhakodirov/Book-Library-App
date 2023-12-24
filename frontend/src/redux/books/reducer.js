const initialState = []
export function booksReducer(state = initialState, action) {
    console.log(state)
    switch (action.type) {
        case 'add_book':
            return [
                ...state,
                action.payload
            ]
        case 'delete_book':
            return state.filter(book => book.id !== action.payload)

        case 'toggle_favorite':
            return state.map(book => book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book)

        default:
            return state
    }
}
