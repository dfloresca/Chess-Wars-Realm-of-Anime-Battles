'use client';
import React, { useContext } from 'react';
import { CartContext } from '../store/cartContext';
import withCartContext from '../withCartContext';


function Cart() {
    const cartCtx = useContext(CartContext);
    console.log('Rendering Cart with context:', cartCtx);
    const isCartEmpty = !cartCtx.items || cartCtx.items.length === 0;
    return (
        <div>
            <h2>Your Cart</h2>
            {isCartEmpty && <p>No items in cart.</p>}
            <ul>
                {cartCtx.items && cartCtx.items.map(item => (
                    <li key={item._id}>
                        <p><img src={item.image} width="100" /></p>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default withCartContext(Cart);