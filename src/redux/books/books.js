import { createAsyncThunk } from '@reduxjs/toolkit';
import POST_BOOK from '../endpoint';

const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const FETCH_BOOKS = 'books/FETCH_BOOKS';
export const postBook = createAsyncThunk(FETCH_BOOKS, async (book, thunkAPI) => {
  const response = await fetch(POST_BOOK, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();

  thunkAPI.dispatch(addBook(book));
  return responseText;
});

export const removeBook = (itemId) => ({
  type: REMOVE_BOOK,
  itemId,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK: {
      const filteredBooks = state.filter((book) => book.item_id !== action.item_id);
      const updatedArray = filteredBooks.map((book, index) => ({ ...book, item_id: index + 1 }));
      return [...updatedArray];
    }
    default:
      return state;
  }
};

export default bookReducer;
