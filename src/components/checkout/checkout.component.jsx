import React from "react";
import { useSelector } from "react-redux";
import {
    selectCartItems,
    selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { CheckoutContainer } from "./checkout.styles";

const Checkout = () => {
    // const { cartItems, cartTotal } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((item) => {
                return <CheckoutItem key={item.id} cartItem={item} />;
            })}
            <span className="total">Total: ${cartTotal}</span>
        </CheckoutContainer>
    );
};

export default Checkout;
