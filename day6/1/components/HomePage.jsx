// src/components/HomePage.jsx

import React from 'react';
import './home.css'; // Import CSS for styling

const products = [
    { id: 1, name: 'Teddy Bear 1', price: '$28', image: 'https://m.media-amazon.com/images/I/71i2SNyrt6L.jpg' },
    { id: 2, name: 'Teddy Bear 2', price: '$20', image: 'https://previews.123rf.com/images/aeyzrio/aeyzrio1506/aeyzrio150600017/40887840-cute-teddy-bears-with-old-wood-background.jpg' },
    { id: 3, name: 'Teady Bear 3', price: '$36', image: 'https://i.pinimg.com/236x/20/e9/26/20e9261364328df9fee291117234bdc8.jpg' },
];

const HomePage = () => {
    return (
        <div className="homepage">
            <h1 className="homepage-title">New Items</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">{product.price}</p>
                        <a href={`/product/${product.id}`} className="view-details">View Details</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
