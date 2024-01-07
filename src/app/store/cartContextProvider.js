'use client';
import { useReducer, useState, useEffect } from 'react';
import CartContext from './cartContext';
import { useCallback } from 'react';

function cartReducer(state, action) {
    let updatedItems = [...state.items]; // Declare updatedItems at the top
    let existingCartItemIndex; // Declare existingCartItemIndex at the top
    let existingItem;
    let updatedItem;

    if (action.type === 'ADD_ITEM') {
        existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    
        if (existingCartItemIndex > -1) {
            existingItem = state.items[existingCartItemIndex];
            // Ensure that action.item.quantity is a number
            const quantityToAdd = Number(action.item.quantity) || 1;
            updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + quantityToAdd
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }
        return { ...state, items: updatedItems, totalAmount: state.totalAmount + quantityToAdd };
    }

    if (action.type === 'REMOVE_ITEM') {
        existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        existingItem = state.items[existingCartItemIndex];
        updatedItems = [...state.items];

        if (existingItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { ...state, items: updatedItems, totalAmount: state.totalAmount - 1 };
    }

    return state;
}



export function CartContextProvider({ children }) {
    let [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });
    let [cartContext, setCartContext] = useState({ items: [], addItem: () => { }, removeItem: () => { } });

    const handleAddToCart = useCallback((item) => {
        console.log('Adding item:', item);
        dispatchCartAction({ type: 'ADD_ITEM', item: item });
    }, [])

    const removeItemHandler = useCallback((id) => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
    }, []);

    useEffect(() => {
        if (cart) {
            setCartContext({
                items: cart.items,
                totalAmount: cart.totalAmount,
                addItem: handleAddToCart,
                removeItem: removeItemHandler
            });
        }
    }, [cart, handleAddToCart, removeItemHandler]);
    
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}




export default CartContextProvider;