import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

import { addBook, fetchBooks, selectStatus } from '../../redux/slices/bookSlice.js'
import './BookForm.css'
import jsonData from '../../data/books.json'





function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const status = useSelector(selectStatus)
    const dispatch = useDispatch()
    function addRandomBook() {

        const randIndex = Math.floor(Math.random() * jsonData.length)
        const { title, author } = jsonData[randIndex]
        dispatch(addBook({ title, author, source: 'random' }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const notify = () => toast.warn("Fill the inputs, please");

        if (title && author) {
            dispatch(addBook({ title, author, source: 'manual' }))
            setTitle('')
            setAuthor('')
        } else {
            notify()
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

                <form>
                    <button type='' onClick={(e) => addRandomBook(e.preventDefault())}> Add random book </button>
                    <button disabled={status === 'Loading...'} type='' onClick={(e) => dispatch(fetchBooks(e.preventDefault()))}> Add random book via API </button>
                </form>

            </div>
        </>
    )
}

export default BookForm