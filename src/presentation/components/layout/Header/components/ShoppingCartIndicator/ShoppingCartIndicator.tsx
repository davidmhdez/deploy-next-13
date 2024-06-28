import React from 'react';
import {
    ShoppingCartIndicatorLabel,
    ShoppingCartIndicatorWrapper, ShoppingCartQuantityIndicator
} from "./styles";

const ShoppingCartIndicator = () => {
    return (
        <ShoppingCartIndicatorWrapper>
            <i className="icon-cart"/>
            <ShoppingCartIndicatorLabel>Carrito</ShoppingCartIndicatorLabel>
            <ShoppingCartQuantityIndicator>
                <span>0</span>
            </ShoppingCartQuantityIndicator>
        </ShoppingCartIndicatorWrapper>
    );
};

export default ShoppingCartIndicator;
