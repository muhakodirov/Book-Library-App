const initialState = []
export function booksReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case 'add_book':
            return [
                ...state,
                action.payload
            ]
        case 'delete_book':
            return state.filter(book => book.id !== action.payload)

        default:
            return state
    }
}
