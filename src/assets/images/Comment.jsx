import React from 'react';

import { main_color } from '../../styles/variables/colors';

function Comment() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill={main_color}
        >
            <path
                d="M5 1C2.79086 1 1 3.1225 1 5.74074V10.4815C1 13.0997 2.79086 15.2222 5 15.2222H12.4L14.5 17V14.8776C15.9659 14.1743 17 12.471 17 10.4815V5.74074C17 3.1225 15.2091 1 13 1H5Z"
                stroke={main_color}
            />
        </svg>
    );
}

export default Comment;
