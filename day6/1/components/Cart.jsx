import React from 'react';

const CartPage = () => {
    // Mock cart items; in a real app, this would come from state management.
    const cartItems = [
        { id: 1, name: 'Teddy Bear 1', price: '$10' },
        { id: 2, name: 'Teddy Bear 2', price: '$20' },
    ];

    return (
        <div>
            <h1>Your Cart</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.price}
                    </li>
                ))}
            </ul>
            <button>Checkout</button>
        </div>
    );
};

export default CartPage;
