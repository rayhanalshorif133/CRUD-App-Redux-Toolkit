import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';


const initialBooks = {
    books: [
        {
            id: uuidv4(),
            title: 'The Hunger Games',
            author: 'Suzanne Collins'
        },
        {
            id: uuidv4(),
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
        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            const existingBook = state.books.filter((book) => book.id == id);
            if (existingBook) {
                existingBook[0].title = title;
                existingBook[0].author = author;
            }
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(({ id }) => id !== action.payload);
        }
    }
});

export const { showBooks, addBook, updateBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;