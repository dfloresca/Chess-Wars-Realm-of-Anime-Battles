'use client';
import React, { useContext } from 'react';
import { CartContext } from '../store/cartContext';
import withCartContext from '../withCartContext';
import Link from 'next/link';

function CartItem({ item }) {
    const cartCtx = useContext(CartContext);

    const handleIncreaseQuantity = () => {
        cartCtx.increaseQuantity(item._id);
    };

    const handleDecreaseQuantity = () => {
        cartCtx.decreaseQuantity(item._id);
    };

    return (
        <li key={item._id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} width="100" />
                <div style={{ marginLeft: '10px' }}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <p>Quantity: {item.quantity}</p>
                <button onClick={handleIncreaseQuantity}>+</button>
                <button onClick={handleDecreaseQuantity}>-</button>
            </div>
        </li>
    );
}

function Cart() {
    const cartCtx = useContext(CartContext);
    console.log('Rendering Cart with context:', cartCtx);
    const isCartEmpty = !cartCtx.items || cartCtx.items.length === 0;

    const calculateSubtotal = () => {
        let subtotal = 0;
        cartCtx.items.forEach(item => {
            subtotal += item.price * item.quantity;
        });
        return subtotal;
    };

    const handleCheckout = () => {
        // Implement your checkout logic here
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {isCartEmpty && <p>No items in cart.</p>}
            <ul>
                {cartCtx.items &&
                    cartCtx.items.map(item => <CartItem key={item._id} item={item} />)}
            </ul>
            <div>
                <p>Subtotal: ${calculateSubtotal()}</p>
                <p>Shipping Cost: $10</p>
                <Link href="/checkout"><button onClick={handleCheckout}>Checkout</button></Link>
            </div>
        </div>
    );
}

export default withCartContext(Cart);