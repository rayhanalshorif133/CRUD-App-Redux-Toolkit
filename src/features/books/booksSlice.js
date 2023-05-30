import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        {
            id: 1,
            title: 'The Hunger Games',
            author: 'Suzanne Collins'
        },
        {
            id: 2,
            title: 'Harry Potter and the Order of the Phoenix',
            author: 'J.K. Rowling'
        },
    ]
}

export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(({ id }) => id !== action.payload);
        }
    }
});

export const { showBooks, addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;