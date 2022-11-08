import { CheckoutItemContainer } from "./checkout-item.styles";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
    addItemtoCart,
    removeItemFromCart,
    removeProductFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, imageUrl, quantity, price } = cartItem;
    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemtoCart(cartItems, cartItem));
    const removeProductHandler = () =>
        dispatch(removeProductFromCart(cartItems, cartItem));

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
