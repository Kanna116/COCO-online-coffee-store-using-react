import React from 'react';
import CoffeeProducts from './CoffeeProducts';
import prodData from "../Data/CoffeeProductData"

export default function CoffeeProductCollection() {

    const allProducts = prodData.map(product => {
        return <CoffeeProducts
            key={product.id}
            {...product}
        />
    })
    return (
        <div className='coffee-product-section'>
            <h1>Explore Our Best Products</h1>
            <p>Our delectable drink options, including classic espresso choices, house specialties, fruit smoothies and frozeen treats.</p>
            <div className='coffee-product-collection'>
                {allProducts}
            </div>
        </div>
    )

};
