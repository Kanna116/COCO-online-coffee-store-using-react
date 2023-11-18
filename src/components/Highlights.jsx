import React from 'react';

export default function Highlights() {
    return (
        <div className='highlights-section'>
            <div className="left"><img src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg" alt="" /></div>
            <div className="right">
                <h1>We care about the quality of <br /> our <strong>Products</strong></h1>
                <p>Drinking coffee is one of the most global things you do each day here we can spend a long and comfortable time with this workspace facilities</p>
                <div className="highlight-grid">
                    <div className="highlight">
                    <i className="ri-chat-1-line"></i>
                        <div className="highlight-text">
                            <h3>Active community</h3>
                            <p>You can reach out whenever you want</p>
                        </div>
                    </div>
                    <div className="highlight">
                        <i className="ri-box-1-line"></i>
                        <div className="highlight-text">
                            <h3>Best Product design</h3>
                            <p>We worked a lot to make great user experience</p>
                        </div>
                    </div>
                    <div className="highlight">
                        <i className="ri-star-smile-line"></i>
                        <div className="highlight-text">
                            <h3>Premium Quality</h3>
                            <p>A premium quality coffee that our customers deserve</p>
                        </div>
                    </div>
                    <div className="highlight">
                        <i className="ri-bard-line"></i>
                        <div className="highlight-text">
                            <h3>The best material</h3>
                            <p>Our Product is made from the best premium materials</p>
                        </div>
                    </div>
                </div>
                <button className="highlights-explore-btn">Explore our products <i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    )

};
