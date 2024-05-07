import React from 'react';
import PropTypes from 'prop-types';

export default function StoryCatagory({ image, icon, title }) {
    return (
        <div className="card">
            <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
                <div className="card-icon" aria-label={title}>
                    <img src={icon} alt={title} />
                    <p className="card-title raleway-bold">{title}</p>
                </div>
            </div>
        </div>
    );
}

StoryCatagory.propTypes = {
    image: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};