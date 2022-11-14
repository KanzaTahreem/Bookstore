import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../Components/Book';
import Form from '../Components/Form';
import deleteBook from '../redux/books/thunkAPI/delete_book';
import '../styles/Book.css';

const Books = () => {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const removeBookFromList = (itemId) => {
    dispatch(deleteBook(itemId));
  };

  return (
    <>
      <section className="book-container">
        <ul>
          {bookList.map((book) => (
            <li key={book.item_id} className="book-card">
              <div className="left-col">
                <Book title={book.title} author={book.author} category={book.category} />
                <div className="actions-btn">
                  <button className="comment-btn btn" type="button">Comments</button>
                  <div className="divider" />
                  <button className="remove-btn btn" type="button" onClick={() => removeBookFromList(book.item_id)}>Remove</button>
                  <div className="divider" />
                  <button className="edit-btn btn" type="button">Edit</button>
                </div>
              </div>

              <div className="center-col">
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <div>
                  <div className="percentage">
                    {Math.floor(Math.random() * 101)}
                    %
                  </div>
                  <div className="percent-completed">Completed</div>
                </div>
              </div>

              <div className="column-divider" />

              <div className="right-col">
                <div>
                  <div className="chapters">CURRENT CHAPTER</div>
                  <div className="completed-chapter">
                    chapter
                    {' '}
                    {Math.floor(Math.random() * 101)}
                  </div>
                </div>
                <button type="button" className="progress-btn">UPDATE PROGRESS</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <Form />

    </>

  );
};

export default Books;
