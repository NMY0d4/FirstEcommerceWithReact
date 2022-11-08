import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useNavigate } from "react-router-dom";
import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
} from "./cart-dropdown.styles.jsx";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCartItems,
    selectIsCartOpen,
} from "../../store/cart/cart.selector";

const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const isCartOpen = useSelector(selectIsCartOpen);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate("/checkout");
        isCartOpen && dispatch(setIsCartOpen());
    };
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
