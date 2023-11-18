import React from 'react';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-link">
                <ul>
                    <li className='footer-link-caption'>Privacy</li>
                    <li>Terms of Use</li>
                    <li>Privacy policy</li>
                    <li>Cookies</li>
                </ul>
                <ul>
                    <li className='footer-link-caption'>Services</li>
                    <li>Shop</li>
                    <li>Orders ahead</li>
                    <li>Menu</li>
                </ul>
                <ul>
                    <li className='footer-link-caption'>About us</li>
                    <li>Find a Location</li>
                    <li>About us</li>
                    <li>Our Story</li>
                </ul>
                <ul>
                    <li className='footer-link-caption'>Information</li>
                    <li>Plans & Pricing</li>
                    <li>Jobs</li>
                    <li>Sell your Product</li>
                </ul>

                <div className="social">
                    <h3>Social Media</h3>
                    <div className="social-link">
                        <i class="ri-instagram-line"></i>
                        <i class="ri-facebook-line"></i>
                        <i class="ri-youtube-line"></i>
                        <i class="ri-linkedin-line"></i>
                        <i class="ri-twitter-x-line"></i>

                    </div>
                </div>
            </div>
            <div className="footer-copy-right">
                <p>Copyright &copy; 2022,  COCO.io</p>
            </div>
        </div>
    )
};
