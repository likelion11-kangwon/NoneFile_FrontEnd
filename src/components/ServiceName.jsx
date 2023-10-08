import React from 'react';
import '../styles/components/ServiceName.scss';

function ServiceName({ color }) {
    const TEXT = 'Service Name';
    return (
        <div className="service-name-frame">
            {color === 'black' ? (
                <div className="service-name-text">{TEXT}</div>
            ) : (
                <div className="service-name-text-white">{TEXT}</div>
            )}
        </div>
    );
}

export default ServiceName;
