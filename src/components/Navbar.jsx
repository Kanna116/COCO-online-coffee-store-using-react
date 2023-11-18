import React from 'react';

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="/images/top-logo.png" alt="Logo" className="logo-image" draggable="false" />
                </div>
                <ul className="nav-links">
                    <li>Product</li>
                    <li>Special Offers</li>
                    <li>Process</li>
                    <li>Packing</li>
                    <li>About</li>
                </ul>
                <div className="nav-btn-container">
                    <div className="nav-btn"><i className="nav-icon ri-search-line"></i></div>
                    <div className="nav-btn"><i className="nav-icon ri-shopping-cart-2-line"></i></div>
                    <div className="nav-btn">
                        <button>Log in / Sign up</button>
                    </div>
                </div>
            </nav>
        </>
    )
};
