import React from 'react';
import '../styles/components/StatusFace.scss';

function StatusFace({ face }) {
    return (
        <div className="status_face">
            {face === 'smile' ? (
                <div className="status_face_smile">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                    >
                        <circle cx="50" cy="50" r="50" fill="#804BF1" />
                        <circle
                            cx="35"
                            cy="44"
                            r="4.5"
                            fill="#F2F0FF"
                            stroke="#F2F0FF"
                        />
                        <circle
                            cx="67"
                            cy="44"
                            r="4.5"
                            fill="#F2F0FF"
                            stroke="#F2F0FF"
                        />
                        <path
                            d="M22 60C26.1667 63.8333 35.5 71.5 51 71.5C64.2 71.5 74.5 63.8333 78 60"
                            stroke="#F2F0FF"
                            stroke-width="5"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
            ) : (
                <div className="status_face_frown">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                    >
                        <circle cx="50" cy="50" r="50" fill="#804BF1" />
                        <circle
                            cx="35"
                            cy="44"
                            r="4.5"
                            fill="#F2F0FF"
                            stroke="#F2F0FF"
                        />
                        <circle
                            cx="67"
                            cy="44"
                            r="4.5"
                            fill="#F2F0FF"
                            stroke="#F2F0FF"
                        />
                        <path
                            d="M78 71.5C73.8333 67.6667 64.5 60 49 60C35.8 60 25.5 67.6667 22 71.5"
                            stroke="#F2F0FF"
                            stroke-width="5"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
}

export default StatusFace;
