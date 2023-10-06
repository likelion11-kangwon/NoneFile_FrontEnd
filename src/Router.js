import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Main />} /> */}
                <Route path="/" element={<Header />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
