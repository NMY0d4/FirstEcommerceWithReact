import "./checkout-item.styles.scss";

import React from "react";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                {/* <span onClick={() => removeItemFromCart(item)}>&#12296;</span> */}
                {quantity}
                {/* <span onClick={() => addItemToCart(item)}>&#12297;</span> */}
            </span>
            <span className="quantity">${price}</span>
            <div className="remove-buton">&#10005;</div>
        </div>
    );
};

export default CheckoutItem;
