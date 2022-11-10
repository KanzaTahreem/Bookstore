import { createAsyncThunk } from '@reduxjs/toolkit';
import FETCH_BOOK_URL from '../endpoint';

const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
const LOAD_BOOKS = 'books/LOAD_BOOKS';
const POST_BOOK = 'books/POST_BOOK';
const GET_BOOKS = 'books/GET_BOOK';

const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const loadBooks = (books) => ({
  type: LOAD_BOOKS,
  books,
});

export const postBook = createAsyncThunk(POST_BOOK, async (book, thunkAPI) => {
  const response = await fetch(FETCH_BOOK_URL, {
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

export const getBooks = createAsyncThunk(GET_BOOKS, async (_, thunkAPI) => {
  const response = await fetch(FETCH_BOOK_URL, {
    method: 'GET',
  });
  const responseJSON = await response.json();

  thunkAPI.dispatch(loadBooks(responseJSON));
  return responseJSON;
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
    case LOAD_BOOKS: {
      const bookList = [];
      Object.entries(action.books).forEach(([key, value]) => bookList.push({
        item_id: key,
        title: value[0].title,
        author: value[0].author,
        category: value[0].category,
      }));
      return [...bookList];
    }
    default:
      return state;
  }
};

export default bookReducer;
