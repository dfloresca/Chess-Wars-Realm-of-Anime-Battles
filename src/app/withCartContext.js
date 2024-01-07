import React, { useContext } from 'react';
import { CartContext } from './store/cartContext';

const withCartContext = (Component) => {
    return function WrappedComponent(props) {
        const cartCtx = useContext(CartContext);
        return <Component {...props} cartCtx={cartCtx} />;
    }
}

export default withCartContext;