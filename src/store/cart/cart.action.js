import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPE } from "./cart.type";
import { addCartItem, removeCartItem, removeProductItem } from "./cart.utils";

export const addItemtoCart = (cartItems, ProductToAdd) => {
    const newCartItems = addCartItem(cartItems, ProductToAdd);
    createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
export const removeProductFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeProductItem(cartItems, productToRemove);
    createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = () =>
    createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN);
