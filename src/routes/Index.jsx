import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavbarTop from '../layouts/NavbarTop'
import BaseLayout from './../layouts/BaseLayout';

export default function Index() {
    return (
        <BrowserRouter>
            <NavbarTop />
            <BaseLayout />
        </BrowserRouter>
    )
}
