import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addBook } from '../../redux/books/actionCreators'
import './BookForm.css'
import { nanoid } from '@reduxjs/toolkit'
import jsonData from '../../data/books.json'

function BookForm() {
    const id = nanoid()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()

    function addRandomBook() {

        const randIndex = Math.floor(Math.random() * jsonData.length)
        const { title, author } = jsonData[randIndex]
        dispatch(addBook({ title, author, id: nanoid(), isFavorite: false }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && author) {
            dispatch(addBook({ title, author, id: nanoid(), isFavorite: false }))
            setTitle('')
            setAuthor('')
        }
    }
    return (
        <>

            <div className="app-block book-form"> <h2> Add a new book</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='title'> Title </label>
                        <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='author'> Author </label>
                        <input type='text' id='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <button type='submit'> Add Book </button>
                    <button type='' onClick={addRandomBook}> Add random book </button>
                </form>
            </div>
        </>
    )
}

export default BookForm