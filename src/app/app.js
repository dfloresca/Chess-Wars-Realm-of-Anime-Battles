import React from 'react';
import Cart from './Cart';
import { CartContextProvider } from './store/cartContext';

function App() {
    return (
        <CartContextProvider>
            <Cart />
        </CartContextProvider>
    );
}

export default App;