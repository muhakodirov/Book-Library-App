import { useSelector, useDispatch } from 'react-redux'
import { setTitle, setAuthor, selectTitel, selectAuthor } from '../../redux/slices/filterSlice.js'

function Filter() {
    const dispatch = useDispatch()
    const title = useSelector(selectTitel)
    const author = useSelector(selectAuthor)




    return (
        <div className='app-block filter'>
            <div className='filter-group'>
                <input value={title} onChange={(e) => dispatch(setTitle(e.target.value))} type='text' placeholder='Filter by title...' />
                <input value={author} onChange={(e) => dispatch(setAuthor(e.target.value))} type='text' placeholder='Filter by author...' />

            </div>
        </div>
    )
}

export default Filter