import React from 'react';
import '../styles/components/serchBar.scss';

function SerchBar() {
    return (
        <div className="SerchBar">
            <div className="SerchBar_rg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                >
                    <circle
                        cx="10"
                        cy="10"
                        r="9"
                        stroke="#804BF1"
                        stroke-width="2"
                    />
                    <path
                        d="M13 14L20 21"
                        stroke="#804BF1"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
            </div>
            <div className="SerchBar-text">
                <input type="TEXT" name="검색어를 입력하세요"></input>
            </div>
        </div>
    );
}

export default SerchBar;
