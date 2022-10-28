import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemtoCart: () => {},
    removeItemFromCart: () => {},
    removeProductFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

const CART_ACTION_TYPE = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
    const { type, payload } = action;
    const { isCartOpen, cartItems } = state;
    console.log(cartItems);

    switch (type) {
        case CART_ACTION_TYPE.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        case CART_ACTION_TYPE.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: !isCartOpen,
            };

        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};

const addCartItem = (cartItems, ProductToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === ProductToAdd.id
    );
    // If found, increment quantity
    if (existingCartItem)
        return cartItems.map((cartItem) =>
            cartItem.id === ProductToAdd.id
                ? {
                      ...cartItem,
                      quantity: cartItem.quantity + 1,
                  }
                : cartItem
        );

    //  return new array with modified cartItems/new cart item
    return [...cartItems, { ...ProductToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }

    // return back cartItems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
              }
            : cartItem
    );
};

const removeProductItem = (cartItems, cartProductToRemove) =>
    cartItems.filter((cartItem) => cartItem.id !== cartProductToRemove.id);

// PROVIDER ---------------------------------------------------------------------
export const CartProvider = ({ children }) => {
    /////////////////////////// USEREDUCER
    const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
        useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (totalItems, item) => totalItems + item.quantity,
            0
        );

        const newCartTotal = newCartItems.reduce(
            (totalPrice, item) => totalPrice + item.quantity * item.price,
            0
        );

        dispatch(
            createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
                cartItems: newCartItems,
                cartTotal: newCartTotal,
                cartCount: newCartCount,
            })
        );
    };

    const addItemToCart = (ProductToAdd) => {
        updateCartItemsReducer(addCartItem(cartItems, ProductToAdd));
    };
    const removeItemFromCart = (itemToRemove) => {
        updateCartItemsReducer(removeCartItem(cartItems, itemToRemove));
    };
    const removeProductFromCart = (productToRemove) => {
        updateCartItemsReducer(removeProductItem(cartItems, productToRemove));
    };

    const setIsCartOpen = () =>
        dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN));

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        removeProductFromCart,
        cartItems,
        cartCount,
        cartTotal,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
