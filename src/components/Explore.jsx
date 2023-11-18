import React from 'react';

export default function Explore() {
    return (
        <div className='explore-product-section'>
            <div className="explore-left">
                <h1>Check out our <br /> best coffee beans</h1>
                <button>Explore our products <i className="ri-arrow-right-line"></i></button>
            </div>
            <div className="explore-right">
                <img src="/images/beans-on-glass.jpg" alt="" draggable="false" />
            </div>
        </div>
    )

};
