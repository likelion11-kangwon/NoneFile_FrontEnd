import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainView from './pages/viewpage/MainView';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Main />} /> */}
                <Route path="/test" element={<MainView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
