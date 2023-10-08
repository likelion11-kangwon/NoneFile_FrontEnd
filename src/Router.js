import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import ServiceName from './components/ServiceName';
import SerchBar from './components/serchBar';
import ProfileIcon from './components/ProfileIcon';
import LeftBar from './components/LeftBar';
import StatusFace from './components/StatusFace';
import Status from './components/Status';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Main />} /> */}
                <Route path="/" element={<Header />} />
                <Route path="/test" element={<Main />} />
                <Route path="/LeftBar" element={<LeftBar />} />
                <Route path="/Status" element={<Status None="No" />} />
                <Route
                    path="/ProfileIcon"
                    element={<ProfileIcon size={120} />}
                />
                <Route path="/SerchBar" element={<SerchBar />} />
                <Route
                    path="/ServiceName"
                    element={<ServiceName color="black" />}
                />
                <Route
                    path="/status_face"
                    element={<StatusFace face="smile" />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
