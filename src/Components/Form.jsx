import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const addBookToList = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title: newBook.title,
      author: newBook.author,
    }));
    setNewBook({
      title: '',
      author: '',
    });
  };

  return (
    <section>
      <form>
        <div>
          <input type="text" name="title" id="name" value={newBook.title} placeholder="Title" onChange={handleChange} />
          <input type="text" name="author" id="author" value={newBook.author} placeholder="Author" onChange={handleChange} />
        </div>
        <button type="submit" onClick={addBookToList}> Add Book </button>
      </form>
    </section>
  );
};

export default Form;
