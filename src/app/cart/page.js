'use client';
import React, { useContext } from 'react';
import { CartContext } from '../store/cartContext';
import withCartContext from '../withCartContext';


function Cart() {
    const cartCtx = useContext(CartContext);
    console.log('Rendering Cart with context:', cartCtx);
    return (
        <div>
            <h2>Your Cart</h2>
            {cartCtx.items.length === 0 && <p>No items in cart.</p>}
            <ul>
                {cartCtx.items.map(item => (
                    <li key={item._id}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default withCartContext(Cart);