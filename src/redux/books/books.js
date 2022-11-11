const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
const LOAD_BOOKS = 'books/LOAD_BOOKS';

const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const loadBooks = (books) => ({
  type: LOAD_BOOKS,
  books,
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
      const filteredBooks = state.filter((book) => book.item_id !== action.itemId);
      return filteredBooks;
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
