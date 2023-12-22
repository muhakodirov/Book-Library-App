import React from 'react'
import './BookList.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBook } from '../../redux/books/actionCreators'


function BookList() {
    const bookList = useSelector(state => state.books)
    const dispatch = useDispatch()





    return (
        <div className='app-block book-list'>
            <h2>Book List</h2>


            {bookList.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul>
                    {bookList.map((book, index) => (
                        <li key={book.id}>

                            <div className='book-info'>
                                {index + 1}. <strong>{book.title}</strong> by <strong>{book.author}</strong>
                            </div>

                            <div className='book-actions'>
                                <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
                            </div>

                        </li>
                    ))}
                </ul>
            )}


        </div>
    )
}

export default BookList