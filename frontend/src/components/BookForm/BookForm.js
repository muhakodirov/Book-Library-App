import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addBook } from '../../redux/books/actionCreators'
import './BookForm.css'
import { nanoid } from '@reduxjs/toolkit'


function BookForm() {
    const id = nanoid()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && author) {
            //dispatch action 
            dispatch(addBook({ title, author, id }))
            //reset the value of inputs and states
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
                </form>
            </div>
        </>
    )
}

export default BookForm