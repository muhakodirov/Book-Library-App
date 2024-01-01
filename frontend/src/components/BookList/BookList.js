import React, { useState } from 'react'
import './BookList.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite, deleteBook } from '../../redux/slices/bookSlice.js';
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { selectAuthor, selectOnlyFavs, selectTitel } from '../../redux/slices/filterSlice.js'
import { selectAllBooks } from '../../redux/slices/bookSlice.js';


function BookList() {
    const bookList = useSelector(selectAllBooks)
    console.log(bookList)
    const title = useSelector(selectTitel)
    const author = useSelector(selectAuthor)
    const fav_books = useSelector(selectOnlyFavs)
    const dispatch = useDispatch()


    function handleToggleFavorite(id) {
        dispatch(toggleFavorite(id))
    }

    // const filteredBooks = bookList.filter(book => {
    //     const titleMatch = title ? book.title.toLowerCase().includes(title.trim().toLowerCase()) : bookList
    //     const authorMatch = author ? book.author.toLowerCase().includes(author.trim().toLowerCase()) : bookList
    //     return titleMatch && authorMatch;
    // })


    const filteredBooks = bookList.filter(book => {
        const titleMatches = book.title?.toLowerCase().includes(title.trim().toLowerCase())
        const authorMatches = book.author?.toLowerCase().includes(author.trim().toLowerCase())
        const favBooksMatches = fav_books ? book.isFavorite : true
        return titleMatches && authorMatches && favBooksMatches
    })




    function highlightMatch(text, filter) {
        if (!filter) return text

        const regex = new RegExp(`(${filter})`, 'gi')

        return text.split(regex).map((el, i) => {
            if (el.toLowerCase() === filter.toLowerCase()) {
                return <span key={i} className='highlight'>{el}</span>
            }
            return el
        })
    }

    return (
        <div className='app-block book-list'>
            <h2>Book List</h2>

            {filteredBooks.length === 0 ? (
                <p>{((title || author) && bookList.length > 0) ? 'No matching books found' : 'No books available'}</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, index) => (
                        <li key={book.id}>
                            <div className='book-info'>
                                {index + 1}. <strong>{highlightMatch(book.title, title)}</strong> by <strong>{highlightMatch(book.author, author)}</strong>
                            </div>
                            {book.isFavorite ? (
                                <BsBookmarkStarFill onClick={() => handleToggleFavorite(book.id)} className='star-icon' />
                            ) : (
                                <BsBookmarkStar onClick={() => handleToggleFavorite(book.id)} className='star-icon' />
                            )}
                            <div className='book-actions'>
                                <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
                            </div>
                        </li>))}
                </ul>
            )}
        </div>
    );
};


export default BookList