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

    return state;
}

export function CartContextProvider({ children }) {
    let [cart, dispatchCartAction] = useReducer(cartReducer, { items: [], totalAmount: 0 });

    const handleAddToCart = useCallback((item) => {
        console.log('Adding item:', item);
        dispatchCartAction({ type: 'ADD_ITEM', item: item });
    }, [])

    const removeItemHandler = useCallback((id) => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
    }, []);

    let contextValue = {
        items: cart.items,
        totalAmount: cart.totalAmount,
        addItem: handleAddToCart,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={contextValue}>
            {console.log('Current context value:', contextValue)}
            {children}
        </CartContext.Provider>
    );
}