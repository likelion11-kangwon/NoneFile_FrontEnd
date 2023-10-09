import React from 'react';

import Home from '../assets/images/Home';
import Like from '../assets/images/Like';
import Circle from '../assets/images/Circle';

import '../styles/components/LeftBarButton.scss';

/**
 *
 * @param {{logo?: int | undefined, color?: string | undefined, inputText?: int | undefined}}
 * @param logo home: 1, like: 2
 * @param color red, blue ...
 * @param inputText button text
 * @returns {JSX.Element}
 */
function LeftBarButton({ logo, color = 'red', inputText }) {
    let Logo = Home;
    if (logo === 1) {
        Logo = Home;
    } else if (logo === 2) {
        Logo = Like;
    } else {
        Logo = Circle;
    }

    return (
        <div className="left-bar-button">
            <Logo colorChoice={color} />
            <span className="left-bar-button-text">{inputText}</span>
        </div>
    );
}

export default LeftBarButton;
