import React from 'react';

export default function CoffeeProducts(props) {
    return (
        <div className='coffee-product-container'>
            <div className="coffee-product">
                <div className="prod-image">
                    <img src={`/images/product/${props.prodImage}`} alt="product" draggable="false" />
                </div>
                <div className="prod-type">{props.type}</div>
                <div className="prod-name">{props.name}</div>
                <div className="prod-price">${props.price}</div>
                <div className="prod-btn-container">
                    <div className="prod-btn">Add to cart <i className="ri-arrow-right-line"></i></div>
                    <div className="prod-btn"><i className="ri-heart-2-line"></i></div>
                </div>
            </div>
        </div>
    )
    
};


// for like btn outline 
// <i class="ri-heart-2-line"></i>

// for like btn fill
// <i class="ri-heart-2-line"></i>