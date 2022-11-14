import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './Components/Navbar';
import Books from './Pages/Books';
import Categories from './Pages/Categories';
import getBooks from './redux/books/thunkAPI/get_books';

function App() {
  const dispatch = useDispatch();
  dispatch(getBooks());

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
