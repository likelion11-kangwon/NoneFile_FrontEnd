import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Service_name_1 from './components/service_name';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/service" element={<Service_name_1 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
