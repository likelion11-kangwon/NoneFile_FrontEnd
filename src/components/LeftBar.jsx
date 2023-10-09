import React from 'react';

import LeftBarButton from './LeftBarButton';
import '../styles/components/LeftBar.scss';

function LeftBar() {
    let mapColor = {
        lightcoral: '전체',
        coral: '일상',
        sandybrown: '프론트앤드',
        khaki: '백앤드',
        lightgreen: '임베디드',
        skyblue: '교육',
        lightsteelblue: '인공지능',
        thistle: '앱',
        plum: '정보보안',
        violet: '시스템',
        hotpink: '네트워크',
    };

    return (
        <div className="left-bar-frame">
            <div className="left-bar-naviagtion">
                <LeftBarButton logo={1} inputText="Home" />
                <LeftBarButton logo={2} inputText="Hot" />
            </div>

            <div className="left-bar-category">
                <span className="left-bar-category-text">카테고리</span>
                <div className="left-bar-category-list">
                    {Object.keys(mapColor).map((key, index) => {
                        return (
                            <LeftBarButton
                                key={index}
                                color={key}
                                inputText={mapColor[key]}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default LeftBar;
