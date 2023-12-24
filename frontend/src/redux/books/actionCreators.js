export function addBook(newBook) {

    return {
        type: 'add_book',
        payload: newBook
    }
}

export function deleteBook(id) {

    return {
        type: 'delete_book',
        payload: id
    }
}

export function toggleFavorite(id) {

    return {
        type: 'toggle_favorite',
        payload: id
    }
}

