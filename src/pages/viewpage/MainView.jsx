import React from 'react';
import '../../styles/viewpage/LoginView.scss';
import Header from '../../components/Header';
import LeftBar from '../../components/LeftBar';
import Post from '../../components/Post';

function MainView() {
    return (
        <article>
            <div className="view">
                <div className="head">
                    <Header />
                </div>
                <div className="Frame47">
                    <LeftBar />
                    <div className="Frame45">
                        <Post />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default MainView;
