import { createContext, useState, useReducer, useEffect } from "react";

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

    // return back caritems with matching cart item with reduced quantity
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

const CART_ACTION_TYPE = {
    ADD_ITEM_TO_CART: "ADD_PRODUCT_ITEM",
    REMOVE_ITEM_FROM_CART: "REMOVE_PRODUCT_ITEM",
    REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART",
    TOGGLE_IS_CART_OPEN: "TOGGLE_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPE.ADD_ITEM_TO_CART:
            state.cartItems.reduce(
                (totalItems, item) => totalItems + item.quantity,
                0
            );
            break;

        case CART_ACTION_TYPE.REMOVE_ITEM_FROM_CART:
            return console.log("remove item from cart");
        case CART_ACTION_TYPE.REMOVE_PRODUCT_FROM_CART:
            return console.log("remove product from cart");
        case CART_ACTION_TYPE.TOGGLE_IS_CART_OPEN:
            return console.log("toggle cart open");
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

// PROVIDER ---------------------------------------------------------------------
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    // const [{ cartItems }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    useEffect(() => {
        setCartCount(
            cartItems.reduce(
                (totalItems, item) => totalItems + item.quantity,
                0
            )
        );
    }, [cartItems]);

    useEffect(() => {
        setCartTotal(
            cartItems.reduce(
                (totalPrice, item) => totalPrice + item.quantity * item.price,
                0
            )
        );
    }, [cartItems]);

    const addItemToCart = (ProductToAdd) => {
        setCartItems(addCartItem(cartItems, ProductToAdd));
    };
    const removeItemFromCart = (itemToRemove) => {
        setCartItems(removeCartItem(cartItems, itemToRemove));
    };
    const removeProductFromCart = (productToRemove) => {
        setCartItems(removeProductItem(cartItems, productToRemove));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        removeProductFromCart,
        cartItems,
        cartCount,
        setCartCount,
        cartTotal,
        setCartTotal,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
