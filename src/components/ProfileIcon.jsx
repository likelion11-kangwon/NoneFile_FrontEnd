import React from 'react';
import '../styles/components/ProfileIcon.scss';

function ProfileIcon({ size }) {
    // console.log(size);
    if (size === 50) {
        return (
            <div className="ProfileIcon">
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
    } else if (size === 32) {
        return (
            <div className="ProfileIcon_1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                >
                    <circle cx="16" cy="16" r="16" fill="#804BF1" />
                </svg>
            </div>
        );
    } else if (size === 120) {
        return (
            <div className="ProfileIcon_2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                >
                    <circle cx="60" cy="60" r="60" fill="#804BF1" />
                </svg>
            </div>
        );
    } else if (size === 280) {
        return (
            <div className="ProfileIcon_3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="280"
                    height="280"
                    viewBox="0 0 280 280"
                    fill="none"
                >
                    <circle cx="140" cy="140" r="140" fill="#804BF1" />
                </svg>
            </div>
        );
    }
}

export default ProfileIcon;
