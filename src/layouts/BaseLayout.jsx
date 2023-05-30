import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../pages/Home';
import BooksView from './../features/books/BooksView';
import AddBook from './../features/books/AddBook';
import Error from './../pages/Error';

export default function BaseLayout() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/show-books" element={<BooksView />} />
                <Route path="/add-book" element={<AddBook />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}
