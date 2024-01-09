'use client';
import { useReducer, useState, useEffect } from 'react';
import { useCallback } from 'react';
import { createContext } from 'react';

export const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
});

function cartReducer(state, action) {
    console.log('Current state:', state);
    console.log('Current action:', action);
    let updatedItems = [...state.items];
    let existingCartItemIndex;
    let existingItem;
    let updatedItem;

    if (action.type === 'ADD_ITEM') {
        existingCartItemIndex = state.items.findIndex(item => item._id === action.item._id);
        existingItem = state.items[existingCartItemIndex];
        const quantityToAdd = Number(action.item.quantity) || 1;
        if (existingItem) {
            updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + quantityToAdd
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat({ ...action.item, quantity: quantityToAdd });
        }
        const newTotalAmount = (state.totalAmount + action.item.price * quantityToAdd).toFixed(2);
        return {
            items: updatedItems,
            totalAmount: parseFloat(newTotalAmount)
        };
    }

    if (action.type === 'INCREASE_QUANTITY') {
        existingCartItemIndex = state.items.findIndex(item => item._id === action.id);
        existingItem = state.items[existingCartItemIndex];
        updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1
        };
        updatedItems[existingCartItemIndex] = updatedItem;
        const newTotalAmount = (state.totalAmount + existingItem.price).toFixed(2);
        return {
            items: updatedItems,
            totalAmount: parseFloat(newTotalAmount)
        };
    }

    if (action.type === 'DECREASE_QUANTITY') {
        existingCartItemIndex = state.items.findIndex(item => item._id === action.id);
        existingItem = state.items[existingCartItemIndex];
        if (existingItem.quantity > 1) {
            updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
            const newTotalAmount = (state.totalAmount - existingItem.price).toFixed(2);
            return {
                items: updatedItems,
                totalAmount: parseFloat(newTotalAmount)
            };
        } else {
            updatedItems = state.items.filter(item => item._id !== action.id);
            const newTotalAmount = (state.totalAmount - existingItem.price).toFixed(2);
            return {
                items: updatedItems,
                totalAmount: parseFloat(newTotalAmount)
            };
        }
    }

    return state;
}

export function CartContextProvider({ children }) {
    let [cart, dispatchCartAction] = useReducer(cartReducer, { items: [], totalAmount: 0 });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCart = JSON.parse(localStorage.getItem('cart'));
            if (savedCart) {
                dispatchCartAction({ type: 'INITIALIZE', payload: savedCart });
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);


    const handleAddToCart = useCallback((item) => {
        console.log('Adding item:', item);
        dispatchCartAction({ type: 'ADD_ITEM', item: item });
    }, [])

    const removeItemHandler = useCallback((id) => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
    }, []);

    const increaseQuantity = useCallback((id) => {
        dispatchCartAction({ type: 'INCREASE_QUANTITY', id: id });
    }, []);

    const decreaseQuantity = useCallback((id) => {
        dispatchCartAction({ type: 'DECREASE_QUANTITY', id: id });
    }, []);

    let contextValue = {
        items: cart.items,
        totalAmount: cart.totalAmount,
        addItem: handleAddToCart,
        removeItem: removeItemHandler,
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity
    };

    return (
        <CartContext.Provider value={contextValue}>
            {console.log('Current context value:', contextValue)}
            {children}
        </CartContext.Provider>
    );
}