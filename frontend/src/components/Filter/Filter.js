import { useSelector, useDispatch } from 'react-redux'
import { setTitle, setAuthor, selectTitel, selectAuthor, resetFilters, handleFavBooks, selectOnlyFavs } from '../../redux/slices/filterSlice.js'
import './Filter.css'

function Filter() {
    const bookList = useSelector(state => state.books)
    const dispatch = useDispatch()
    const title = useSelector(selectTitel)
    const author = useSelector(selectAuthor)
    const favs = useSelector(selectOnlyFavs)




    return (
        <div className="app-block filter">
            <div className="filter-row">

                <div className='filter-group'>
                    <input value={title} onChange={(e) => dispatch(setTitle(e.target.value))} type='text' placeholder='Filter by title...' />


                </div>
                <div className='filter-group'>
                    <input value={author} onChange={(e) => dispatch(setAuthor(e.target.value))} type='text' placeholder='Filter by author...' />
                </div>
                <div className='filter-group'>

                    <input value={favs} type='checkbox' checked={favs} onChange={(e) => dispatch(handleFavBooks(e.target.checked))} />
                    Only favorites
                    {/* <FaStar onClick={() => dispatch(handleFavBooks(bookList))} className='fav_books' title='Favorites' /> */}
                </div>
                <button onClick={() => dispatch(resetFilters())}> Reset Filters</button>

            </div>
        </div>
    )
}

export default Filter