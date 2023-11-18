import React from 'react';

export default function Hero() {
    return (
        <div className='hero-section'>
            <div className="hero-left">
                <h1 className="hero-big-logo">COCO</h1>
                <h3 className='hero-caption'>An Online Coffee Store</h3>
                <p className='hero-sub-text'>Straight to your desktop. We don't roast our beans until we have your order. <br /> Every order is roasted an shipped the same day</p>
                <div className="hero-btn-container">
                    <button className="hero-btn explore-btn">Explore our Products <i className="ri-arrow-right-line"></i></button>
                    <button className="hero-btn sign-log-btn">Log in / Sign up</button>
                </div>
                <div className="hero-stat-container">
                    <div className="hero-stat">
                        <p>Our Products</p>
                        <h2>+10000</h2>
                    </div>
                    <div className="hero-stat">
                        <p>Total Sales</p>
                        <h2>+270K</h2>
                    </div>
                    <div className="hero-stat">
                        <p>Happy Customers</p>
                        <h2>+100K</h2>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-image-container">
                    <img src="/images/hero-coffee-can-mockup.png" alt="Coffee can" className='hero-image' draggable="false"/>
                </div>
            </div>
        </div>
    )
};
