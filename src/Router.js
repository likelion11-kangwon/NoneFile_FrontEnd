import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './components/Post';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Main />} /> */}
                <Route path="/" element={<Post />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
