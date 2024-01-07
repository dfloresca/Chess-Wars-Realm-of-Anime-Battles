import React from 'react';
import { CartContextProvider } from './store/cartContext';
import Cart from './cart/page';

const withCartContext = (Component) => {
    return function WrappedComponent(props) {

        return (
            <CartContextProvider>
                <Component {...props} />
            </CartContextProvider>
        );
    }
}

export default withCartContext;