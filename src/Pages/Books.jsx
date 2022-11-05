import React, { useState } from 'react';
import Book from '../Components/Book';
import Form from '../Components/Form';

const Books = () => {
  const [bookList, setBookList] = useState([
    { title: 'test', author: 'Test author' },
    { title: 'test', author: 'Test author 2' },
  ]);

  const addNewBook = (title, author) => {
    const newBook = {
      title,
      author,
    };

    setBookList([
      ...bookList,
      newBook,
    ]);
  };

  return (
    <section>
      <ul>
        {bookList.map((book) => (
          <li key={book.key}>
            <Book title={book.title} author={book.author} />
            <button type="button">Remove</button>
          </li>
        ))}
      </ul>
      <Form newBookFunc={addNewBook} />
    </section>
  );
};

export default Books;
