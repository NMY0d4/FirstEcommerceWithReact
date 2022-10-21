import { CheckoutItemContainer } from "./checkout-item.styles";

import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
    const { addItemToCart, removeItemFromCart, removeProductFromCart } =
        useContext(CartContext);
    const { name, imageUrl, quantity, price } = cartItem;

    const removeItemHandler = () => removeItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeProductHandler = () => removeProductFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={removeProductHandler}>
                &#10005;
            </div>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
