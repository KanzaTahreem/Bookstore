import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../Components/Book';
import Form from '../Components/Form';
import { deleteBook } from '../redux/books/books';

const Books = () => {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const removeBookFromList = (itemId) => {
    dispatch(deleteBook(itemId));
  };

  return (
    <section>
      <ul>
        {bookList.map((book) => (
          <li key={book.item_id}>
            <Book title={book.title} author={book.author} category={book.category} />
            <button type="button" onClick={() => removeBookFromList(book.item_id)}>Remove</button>
          </li>
        ))}
      </ul>
      <Form />
    </section>
  );
};

export default Books;
