import React from 'react';

import ProfileIcon from './ProfileIcon';
import AddComment from './AddComment';
import Like from '../assets/images/Like';
import Comment from '../assets/images/Comment';

import '../styles/components/Post.scss';

export default function Post() {
    let userName = 'UserName';
    let time = '10월 2일';
    let isWriteUser = true;
    let textTitle = 'textTitle';
    let textInfo = 'textinfotextinfo';
    return (
        <div className="post-frame">
            <div className="post-header">
                <div className="post-header-head">
                    <ProfileIcon size={50} />
                    <div className="post-header-head-userinfo">
                        <span className="post-header-head-userinfo-username">
                            {userName}
                        </span>
                        <span className="post-header-head-userinfo-time">
                            {time}
                        </span>
                    </div>
                </div>
                {isWriteUser ? (
                    <div className="post-header-option">
                        <div className="post-header-option-box">수정</div>
                        <div className="post-header-option-box">삭제</div>
                    </div>
                ) : (
                    <div />
                )}
            </div>
            <div className="post-info">
                <span className="post-info-title">{textTitle}</span>
                <span className="post-info-info">{textInfo}</span>
            </div>
            <div className="post-under">
                <div className="post-under-like">
                    <Like />
                    <span>좋아요</span>
                </div>
                <div className="post-under-comment">
                    <Comment />
                    <span>댓글</span>
                </div>
            </div>
            <AddComment />
        </div>
    );
}
