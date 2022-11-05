import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
  const { newBookFunc } = props;
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });

    // if (e.target.name === 'title') {
    //   setTitle(e.target.value);
    // } else if (e.target.name === 'author') {
    //   setAuthor(e.target.value);
    // }
  };

  const addBookToList = (e) => {
    e.preventDefault();
    newBookFunc(newBook.title, newBook.author);
    setNewBook({
      title: '',
      author: '',
    });
  };

  return (
    <section>
      <form>
        <div>
          <input type="text" name="title" id="name" value={newBook.title} placeholder="Title" onChange={handleChange} required />
          <input type="text" name="author" id="author" value={newBook.author} placeholder="Author" onChange={handleChange} required />
        </div>
        <button type="submit" onClick={addBookToList}> Add Book </button>
      </form>
    </section>
  );
};

Form.propTypes = {
  newBookFunc: PropTypes.func.isRequired,
};

export default Form;
