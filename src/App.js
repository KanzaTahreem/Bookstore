import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Books from './Pages/Books';
import Categories from './Pages/Categories';

function App() {
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
