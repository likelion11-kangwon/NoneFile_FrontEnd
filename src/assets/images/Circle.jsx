import React from 'react';

function Circle({ colorChoice }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
        >
            <circle
                cx="8"
                cy="8"
                r="5.5"
                stroke={colorChoice}
                strokeWidth="4"
            />
        </svg>
    );
}

export default Circle;
