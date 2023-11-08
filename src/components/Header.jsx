import React from 'react';
import ServiceName from './ServiceName';
import SerchBar from './serchBar';
import ProfileIcon from './ProfileIcon';

import '../styles/components/Header.scss';

function Header() {
    return (
        <div className="header-frame">
            <div className="header-left-frame">
                <ServiceName color="black" />
                <SerchBar />
            </div>
            <ProfileIcon size={50} />
        </div>
    );
}

export default Header;
