
import './App.css';
import { useSelector } from 'react-redux'
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import Filter from './components/Filter/Filter';
import { selectError, selectStatus } from './redux/slices/bookSlice.js';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const error = useSelector(selectError)
  const status = useSelector(selectStatus)

  return (
    <div className="app">
      <header className='app-header'>
        <h1> Book Library App </h1>
        <p className='error'> {status !== '' && status} </p>

      </header>
      <main className='app-main'>
        <div className='app-left-column'>
          <BookForm />
        </div>
        <div className='app-right-column'>
          <Filter />
          <BookList />
        </div>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />




    </div>
  );
}

export default App;
