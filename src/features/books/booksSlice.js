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
    reducer: {
        showBooks: (state) => state,
    }
});

export const { showBooks } = booksSlice.actions;

export default booksSlice.reducer;