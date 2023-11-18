import React from 'react';

export default function Offer() {
    return (
        <div className='offer-section'>
            <h1>Join in and get <span>25% OFF!</span></h1>
            <p>Subscribe to our newsletter and get 25% OFF discount code</p>
            <form className="offer-form-container">
                <div className="input-container">
                    <i class="ri-mail-line"></i>
                    <input
                        type="email"
                        placeholder='Email address'
                        className='offer-newsletter'
                    />
                </div>
                <button>Subscribe</button>
            </form>
        </div>
    )

};
