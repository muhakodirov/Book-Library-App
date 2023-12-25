import React, { useState } from 'react'
import './BookList.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { selectTitel } from '../../redux/slices/filterSlice.js'


function BookList() {
    const bookList = useSelector(state => state.books)
    const title = useSelector(selectTitel)
    const dispatch = useDispatch()


    function handleToggleFavorite(id) {

        dispatch(toggleFavorite(id))
    }

    const filteredBooks = title ? bookList.filter(book => book.title.includes(title)) : bookList;

    return (
        <div className='app-block book-list'>
            <h2>Book List</h2>
            {filteredBooks.length === 0 ? (
                <p>{title ? 'No matching books by title found' : 'No books available'}</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, index) => (
                        <li key={book.id}>
                            <div className='book-info'>
                                {index + 1}. <strong>{book.title}</strong> by <strong>{book.author}</strong>
                            </div>
                            {book.isFavorite ? (
                                <BsBookmarkStarFill onClick={() => handleToggleFavorite(book.id)} className='star-icon' />
                            ) : (
                                <BsBookmarkStar onClick={() => handleToggleFavorite(book.id)} className='star-icon' />
                            )}
                            <div className='book-actions'>
                                <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default BookList