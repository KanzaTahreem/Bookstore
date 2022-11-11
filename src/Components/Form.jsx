import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import postBook from '../redux/books/thunkAPI/post_book';

const Form = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const addBookToList = (e) => {
    e.preventDefault();
    dispatch(postBook({
      item_id: uuidv4(),
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    }));
    setNewBook({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <section>
      <form>
        <div>
          <input type="text" name="title" id="name" value={newBook.title} placeholder="Title" onChange={handleChange} />
          <input type="text" name="author" id="author" value={newBook.author} placeholder="Author" onChange={handleChange} />
          <select type="text" name="category" id="category" value={newBook.category} placeholder="Category" onChange={handleChange}>
            <option value="" disabled>Categories</option>
            <option value="horror">Horror</option>
            <option value="fantasy">Fantasy</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="thriller">Thriller</option>
            <option value="biography">Biography</option>
            <option value="mystrry">Mystery</option>
            <option value="programming">Programming</option>
          </select>
        </div>
        <button type="submit" onClick={addBookToList}> Add Book </button>
      </form>
    </section>
  );
};

export default Form;
