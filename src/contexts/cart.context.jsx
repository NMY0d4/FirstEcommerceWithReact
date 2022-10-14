import { createContext, useState, useEffect } from "react";

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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

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
