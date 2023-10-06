import React from 'react';
import '../styles/components/ProfileIcon.scss';

function ProfileIcon({ size }) {
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
            >
                <circle cx="25" cy="25" r="25" fill="#804BF1" />
            </svg>
        </div>
    );
}

export default ProfileIcon;
