import { CART_ACTION_TYPE } from "./cart.type";

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    const { type, payload } = action;
    const { isCartOpen } = state;

    switch (type) {
        case CART_ACTION_TYPE.SET_CART_ITEMS:
            console.log(`type action-Cart: ${type}`);
            return {
                ...state,
                cartItems: payload,
            };
        case CART_ACTION_TYPE.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: !isCartOpen,
            };

        default:
            return state;
    }
};
