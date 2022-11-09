import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../Components/Book';
import Form from '../Components/Form';

const Books = () => {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <section>
      <ul>
        {bookList.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} id={book.id} />
            <button type="button">Remove</button>
          </li>
        ))}
      </ul>
      <Form />
    </section>
  );
};

export default Books;
